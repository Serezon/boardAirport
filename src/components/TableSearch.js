import React from "react";

export default ({ value, onChange, onSearch }) => {
  return (
    <div className="tableSearch">
        <input type="text" className="searchInput" onChange={onChange} value={value} placeholder="Search by flight"/>
        <button className="buttonSearch" onClick={() => onSearch(value)}>Search</button>
    </div>
  );
};
