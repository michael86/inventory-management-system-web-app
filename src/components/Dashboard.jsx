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
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const user = useSelector((state) => state.user);

  return (
    <>
      <h1 className="text-center">{user.company}</h1>

      <Row className="mx-4">
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Line
            label="chart 1"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "tab 1",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "tab 2",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Line
            label="chart 2"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "tab 1",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "tab 2",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Line
            label="chart 3"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "tab 1",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "tab 2",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <Line
            label="chart 4"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "tab 1",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "tab 2",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Col>
      </Row>

      {/*  */}
    </>
  );
};

export default Dashboard;
