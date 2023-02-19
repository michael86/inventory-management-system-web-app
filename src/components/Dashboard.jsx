import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import { Pie } from "react-chartjs-2";

import { Row, Col } from "react-bootstrap";

import UseageChart from "./Charts/UseageChart";
import { getHalfMonths, getMonth, getYear, makeReadable } from "../utils";
import { createDateObject } from "./Dashboard/Utils";
import { useState } from "react";
import { useagePlugins } from "./Dashboard/Schemas";
import { generateDataset, generateLabels } from "./Charts/Utils";
import DashForm from "./Dashboard/DashForm";
import axios from "../utils/axiosInstance";
import { setStock } from "../reducers/stockSlice";

const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    Tooltip,
    Legend
  );

  const user = useSelector((state) => state.user);
  const [stock, setStock] = useState([]);
  // const stock = useSelector((state) => state.stock.stock);

  const [dateObject, setDateObject] = useState(
    createDateObject(JSON.parse(JSON.stringify(stock)))
  );

  const [useageMonths, setUsageMonths] = useState(getHalfMonths());
  const [minMaxValues, setMinMaxValues] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());

  const onSearchfilter = ({ target }) => {
    setDateObject(
      createDateObject(JSON.parse(JSON.stringify(stock)), target.value)
    );
    setSearchFilter(target.value);
  };

  const onYearChange = (newYear) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    let monthCheck = month;

    //If year is set to current year and month is ahead of the present month, set to 0
    if (+currentYear === +newYear && +month > +currentMonth) {
      setMonth(0);
      monthCheck = 0;
    }

    //Same as above, but for past. I.E, 2016 has January, but 2015 doesn't, then set to first available month in 2015
    if (!dateObject[newYear][monthCheck]) {
      monthCheck = Object.keys(dateObject[newYear])[0];
      setMonth(monthCheck);
    }

    setYear(newYear);
    setUsageMonths(getHalfMonths(monthCheck, newYear));
  };

  const onMonthChange = (newMonth) => {
    setMonth(newMonth);
    setUsageMonths(getHalfMonths(newMonth, year));
  };

  const onMinMaxChange = ({ target }) => {
    if (searchFilter) return; //As we're searching by sku at present.
    setMinMaxValues(+target.value);
  };

  useEffect(() => {
    const getStock = async () => {
      const res = await axios.get("stock/get");
      if (res.status && res.data?.stock) {
        setDateObject(createDateObject(res.data.stock));
        setStock(res.data.stock);
      }
    };

    getStock();
  }, []);

  console.log("dateObject", dateObject);
  return (
    <>
      {/* <h1 className="text-center">{user.company}</h1> */}

      <Row className="mx-4">
        <DashForm
          dateObject={dateObject}
          onMinMaxChange={onMinMaxChange}
          minMaxValues={minMaxValues}
          setMinMaxValues={setMinMaxValues}
          searchFilter={searchFilter}
          onSearchfilter={onSearchfilter}
          onYearChange={onYearChange}
          onMonthChange={onMonthChange}
          year={year}
          month={month}
        />

        <Col xs={12} lg={6}>
          <UseageChart
            plugins={useagePlugins}
            labels={generateLabels(
              makeReadable(JSON.parse(JSON.stringify(useageMonths))),
              true
            )}
            datasets={generateDataset(
              dateObject,
              useageMonths,
              minMaxValues,
              searchFilter
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
