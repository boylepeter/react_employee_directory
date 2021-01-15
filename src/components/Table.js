import React from "react";
import "./Table.css"

function Table(props) {
  return (
    <table>
    <thead><tr>
      <th>Name</th>
      <th>State</th>
      <th>Country</th>
      <th>Email</th>
    </tr></thead>
    <tbody>
    {props.matchEmp.map((emp, i) => (
    <tr key={i}>
      <td>{emp.name.first + " " + emp.name.last}</td>
      <td>{emp.location.state}</td>
      <td>{emp.location.country}</td>
      <td>{emp.email}</td>
    </tr>
    ))}    
    </tbody>
  </table>
  
  )
}

export default Table;
