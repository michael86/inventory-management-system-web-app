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
import { getHalfMonths } from "../utils";

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

  const genRandColor = () => {
    const randNum = () => Math.floor(Math.random() * 255);
    return `rgba(${randNum()}, ${randNum()},${randNum()},0.2)`;
  };

  const generateCostDataSet = () => {
    return {
      labels: stock
        .filter((item) => item.price * item.qty > 0)
        .map((item) => item.sku),

      datasets: [
        {
          label: "Value of components",
          data: stock
            .filter((item) => item.price * item.qty > 0)
            .map((item) => item.qty * item.price > 0 && item.price * item.qty),
          backgroundColor: stock
            .filter((item) => item.price * item.qty > 0)
            .map((_, i) => genRandColor()),
        },
      ],
    };
  };

  const mostStockMonths = getHalfMonths(true).sort((a, b) => (a - b ? 1 : -1));
  const mostStockPlugins = {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stock Usage",
    },
  };

  let mostStockDataHighest = stockCopy.sort((a, b) => +a.qty - +b.qty);

  mostStockDataHighest = mostStockDataHighest.slice(
    //grab last 5
    mostStockDataHighest.length - 6
  );

  const data = mostStockDataHighest.map((item) => {
    let obj = {}; //Object containing the month (int) as key and values that month stock []
    const date = new Date();
    const curMonth = date.getMonth();

    if (item.history) {
      item.history.sort((a, b) => a.date - b.date); //Sort history by date

      item.history.forEach((his) => {
        const date = new Date(his.date); // generate 2d array and push month stock to relevant child []
        const month = date.getMonth();
        obj[month] ? obj[month].push(his.qty) : (obj[month] = [his.qty]);
      });
    }

    obj[curMonth] ? obj[curMonth].push(item.qty) : (obj[curMonth] = [item.qty]); //push the latest stock to last array or create it

    obj = Object.values(obj); //turn obj to array
    obj = obj.slice(obj.length - 6); // slice of the last 6 months

    obj.forEach(
      //sum up each child array
      (item, index) =>
        (obj[index] = item.reduce(
          (accumulator, value) => accumulator + value,
          0
        ))
    );

    return obj;
  });

  const useageData = mostStockDataHighest.map((item, index) => {
    return {
      label: item.sku,
      data: data[index], //Here we will need to sort by date, then map the resval tp data
      backgroundColor: "rgba(255, 99, 132, 0.5)", //Gen rand color
    };
  });

  return (
    <>
      <h1 className="text-center">{user.company}</h1>

      <Row className="mx-4">
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <UseageChart
            plugins={mostStockPlugins}
            labels={mostStockMonths}
            datasets={useageData}
          />
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Pie data={generateCostDataSet()} />
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
