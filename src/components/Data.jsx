import React from "react";
import { Table } from "react-bootstrap";
import LineGraph from "./LineGraph";

const Data = () => {
  return (
    <>
      <div className="tabcontent1">
        <div className="template">LINE GRAPH</div>
        <Table className="table" striped hover></Table>
        <div>
          <LineGraph />
        </div>
      </div>
    </>
  );
};
export default Data;
