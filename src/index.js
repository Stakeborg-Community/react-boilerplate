import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Route1 from './routes/route1';
import Route2 from './routes/route2';
import BasicLayout from './layout';

const rootElement = document.getElementById("root");

ReactDOM.render(
<React.StrictMode>
  <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="route1" element={<Route1 />} />
        <Route path="route2" element={<Route2 />} />
        <Route
        path="*"
        element={
          <BasicLayout breadcrumb="disabled">
            <div style={{textAlign: 'center'}}>
              <h1>404 Not found</h1>
              <h4>There's nothing here!</h4>
            </div>
          </BasicLayout>
        }
      />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
