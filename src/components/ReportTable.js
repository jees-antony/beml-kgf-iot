// src/components/ReportTable.js
import React from 'react';
import './ReportTable.css';

const ReportTable = ({ logo }) => {
    const tableData = "jwhfrbjrhgf"
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th colSpan="5">
              <img src={logo} alt="Logo" className="table-logo" />
              <span className="table-title">Advanced Table</span>
            </th>
          </tr>
          <tr>
            <th>Header 1</th>
            <th colSpan="4">Merged Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Col 1</td>
            <td rowSpan="4">{tableData}</td>
            <td rowSpan="4">Row 1, Merged Col 2-5</td>
            <td rowSpan="4">Row 1, Merged Col 2-5</td>
            <td rowSpan="4">Row 1, Merged Col 2-5</td>
          </tr>
          <tr>
            <td>Row 2, Col 1</td>
          </tr>
          <tr>
            <td>Row 3, Col 1</td>
          </tr>
          <tr>
            <td>Row 4, Col 1</td>
          </tr>
          <tr>
            <td>Row 5, Col 1</td>
            <td>Row 5, Col 2</td>
            <td>Row 5, Col 3</td>
            <td>Row 5, Col 4</td>
            <td>Row 5, Col 5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
