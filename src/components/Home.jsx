import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Styles/Home.css";
import BarGraph from "./Bar";
import DoughnutGraph from "./Doughnut";
import PieGraph from "./PieGraph";
import LineGraph from "./LineGraph";
import RadarChart from "./RadarChart";

const Home = () => {
  const [tab, setTab] = useState("Tab1");

  const renderGraph = () => {
    switch (tab) {
      case "Tab1":
        return <LineGraph />;
      case "Tab2":
        return <BarGraph />;
      case "Tab3":
        return <DoughnutGraph />;
      case "Tab4":
        return <PieGraph />;
      case "Tab5":
        return <RadarChart />;
      default:
        return <LineGraph />;
    }
  };
  return (
    <>
      <div className="Main">
        <div className="front">
          <Row>
            <Col md={3}>
              <Col>
                <Row xs={1} md={1}>
                  <Col>
                    <Button
                      type="text"
                      className="data"
                      value=" Line Garph"
                      onClick={() => setTab("Tab1")}
                    >
                      Line Garph
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Button
                  type="text"
                  className="data"
                  value="Bar Graph"
                  onClick={() => setTab("Tab2")}
                >
                  Bar Graph
                </Button>
              </Col>
              <Col>
                <Button
                  type="text"
                  className="data"
                  value="Doughnut Chart"
                  onClick={() => setTab("Tab3")}
                >
                  Doughnut Chart
                </Button>
              </Col>
              <Col>
                <Button
                  type="text"
                  className="data"
                  value="Pie Chart"
                  onClick={() => setTab("Tab4")}
                >
                  Pie Chart
                </Button>
              </Col>
              <Col>
                <Button
                  type="text"
                  className="data"
                  value="Pie Chart"
                  onClick={() => setTab("Tab5")}
                >
                  Radar Chart
                </Button>
              </Col>
            </Col>
            <Col md={8}> {renderGraph()}</Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Home;
