import React from "react";

export default ({ data }) => (
     <div className="tableContainer">
  <table className="table">
    <thead>
      <tr>
        <th>Terminal</th>
        <th>Gate</th>
        <th>Time</th>
        <th>Destination</th>
        <th>Airline</th>
        <th>Flight</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => {
         const dt = new Date(item.actual);
         const mins = dt.getMinutes();
        return (
          <tr key={item.ID}>
            <td>{item.term}</td>
            <td>{item.gateNo}</td>
            <td>{`${dt.getHours()}:${mins < 10 ? '0' : ''}${mins}`}</td>
            <td>
              {item["airportToID.city_en"]
                ? item["airportToID.city_en"]
                : item["airportFromID.city_en"]}
            </td>
            <td>{item.airline.en.name}</td>
            <td>{item["planeTypeID.code"]}</td>
            <td>{item.status}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
);           

 