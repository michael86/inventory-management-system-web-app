import React from "react";
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
import { Pie } from "react-chartjs-2";

import { Row, Col } from "react-bootstrap";

import UseageChart from "./Charts/UseageChart";
import { getHalfMonths, getMonth, getYear, makeReadable } from "../utils";
import { createDateObject } from "./Dashboard/Utils";
import { useState } from "react";
import { useagePlugins } from "./Dashboard/Schemas";
import { generateDataset, generateLabels } from "./Charts/Utils";
import DashForm from "./Dashboard/DashForm";

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
  const stock = useSelector((state) => state.stock.stock);

  const [dateObject] = useState(
    createDateObject(JSON.parse(JSON.stringify(stock)))
  );

  const [useageMonths, setUsageMonths] = useState(getHalfMonths());
  const [minMaxValues, setMinMaxValues] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());

  const onYearChange = (newYear) => {
    console.log("on Year");
    setYear(newYear);
    setUsageMonths(getHalfMonths(month, year));
  };

  const onMonthChange = (newMonth) => {
    console.log("on Month", newMonth);
    setMonth(newMonth);
    setUsageMonths(getHalfMonths(month, year));
  };

  return (
    <>
      <h1 className="text-center">{user.company}</h1>

      <Row className="mx-4">
        {/* Something has broken in the time buttons.... face */}
        <DashForm
          dateObject={dateObject}
          minMaxValues={minMaxValues}
          setMinMaxValues={setMinMaxValues}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
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
        <Col xs={12} lg={6}>
          {/* <Pie data={generateCostDataSet()} /> */}
        </Col>
        {/* <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Bar
            label="chart 2"
            options={options}
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col> */}
      </Row>
      {/* <Row className="mx-4">
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Bar
            label="chart 3"
            options={options}
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Bar
            label="chart 4"
            options={options}
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col>
      </Row> */}

      {/*  */}
    </>
  );
};

export default Dashboard;
