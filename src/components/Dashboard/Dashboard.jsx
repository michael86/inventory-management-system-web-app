import React, { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";

import UseageChart from "../Charts/UseageChart";
import DashForm from "./components/DashForm";

import axios from "../../utils/axios";
import dUtils from "../../utils/dates";
import { createDateObject } from "../../utils/dashboard";
import { generateDataset, generateLabels } from "../../utils/charts";

import { useagePlugins } from "./Schemas";

const Dashboard = () => {
  const [stock, setStock] = useState([]);

  const [dateObject, setDateObject] = useState([]);

  const [useageMonths, setUsageMonths] = useState(dUtils.getHalfMonths());
  const [minMaxValues, setMinMaxValues] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [year, setYear] = useState(dUtils.getYear());
  const [month, setMonth] = useState(dUtils.getMonth());

  const onSearchfilter = ({ target }) => {
    setDateObject(createDateObject(JSON.parse(JSON.stringify(stock)), target.value));
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
    setUsageMonths(dUtils.getHalfMonths(monthCheck, newYear));
  };

  const onMonthChange = (newMonth) => {
    setMonth(newMonth);
    setUsageMonths(dUtils.getHalfMonths(newMonth, year));
  };

  const onMinMaxChange = ({ target }) => {
    if (searchFilter) return;
    setMinMaxValues(+target.value);
  };

  useEffect(() => {
    const getStock = async () => {
      const res = await axios.get("stock/get/?history=true");

      if (res.status && res.data?.stock) {
        setDateObject(createDateObject(res.data.stock));
        setStock(res.data.stock);
      }
    };

    getStock();
  }, []);

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
              dUtils.makeDateReadable(JSON.parse(JSON.stringify(useageMonths))),
              true
            )}
            datasets={generateDataset(dateObject, useageMonths, minMaxValues, searchFilter)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
