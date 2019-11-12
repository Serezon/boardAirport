import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import TableData from "../components/TableData";
import TableSearch from "../components/TableSearch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/app.css";

export function searchFilter(search, data) {
  return data.filter(n => n["planeTypeID.code"].toLowerCase().includes(search));
}

const days = ["12-11-2019", "13-11-2019", "14-11-2019"];

class Root extends React.Component {
  componentDidMount() {
    this.props.onFetchData(days[this.props.propReducer.day]);
  }

  render() {
    const { onFilter, onSetSearch, onFetchData } = this.props;
    const { search, shift, data, filteredData } = this.props.propReducer;

    return (
      <div>
        <div className="content">
        
        <Header/>
        <br/>
        <div className="searchTitle">SEARCH FLIGHT</div>
             <br/>
        <TableSearch value={search} onChange={e => onSetSearch(e.target.value)} 
         onSearch={value => onFilter({ search: value })}onSearch={() => onFilter()}/>
             <br/>
             <br/>
        <div className="buttonShift">
          {data && Object.keys(data).map(n => (
            <button data-shift={n} onClick={e => onFilter({ shift: e.target.dataset.shift })} className={n === shift ? "active" : "noActive"}>
                {n}
            </button>
          ))}
        </div>
          
        <div className="row">
        <span className="title">Yesterday: </span><span className="title">Today: </span><span className="title">Tomorrow: </span>
        </div>

        <div className="buttonDays">
          {days && days.map((day, i) => (
            <button  key={day} onClick={() => onFetchData(day)} className="buttonDaysOne">
                {day} 
            </button>
          ))}
        </div>

        {data && <TableData data={filteredData} />}
          </div>
        <Footer/>
      </div>
    );
  }
}

export const ConnectedRoot = connect(
  state => state,
  dispatch => ({
    onFilter: args => dispatch({ type: "RUN_FILTER", ...args }),
    onSetSearch: search => dispatch({ type: "SET_SEARCH", search }),
    onFetchData: day => dispatch(fetchData(day))
  })
)(Root);
