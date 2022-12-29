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
  const stockCopy = JSON.parse(JSON.stringify(stock));

  const [dateObject] = useState(createDateObject(stockCopy));
  const [useageMonths, setUsageMonths] = useState(getHalfMonths());
  const [minMaxValues, setMinMaxValues] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());

  const onTimeChange = (year, month) => {
    setYear(year);
    setMonth(month);
    setUsageMonths(getHalfMonths(year, month));
  };

  return (
    <>
      <h1 className="text-center">{user.company}</h1>

      <Row className="mx-4">
        <DashForm
          dateObject={dateObject}
          minMaxValues={minMaxValues}
          setMinMaxValues={setMinMaxValues}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          onTimeChange={onTimeChange}
          year={year}
          month={month}
        />

        <Col xs={12} lg={6}>
          <UseageChart
            plugins={useagePlugins}
            labels={generateLabels(
              makeReadable(JSON.parse(JSON.stringify(useageMonths))) //If try destructuring {...useageMonths}, it updates local state?
            )}
            datasets={[1]}
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
