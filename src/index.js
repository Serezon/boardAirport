import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { ConnectedRoot } from './containers/app';

const store = createStore(
  reducer, 
  {
    propReducer: {
      day: 1,
      data: [],
      filteredData: [],
      search: "",
      shift: "departure"
    }
  },
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoot />
  </Provider>,
  document.getElementById("root")
);
    

  




    