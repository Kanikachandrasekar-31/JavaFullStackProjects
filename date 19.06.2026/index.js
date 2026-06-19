import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { App } from './App'
//import App1 from './App1';
import {Compute} from './Compute';
import ButtonEvent from './ButtonEvent';
import  { Ap } from './Ap'
import Store from './Store';
import Clock from './Clock';
import ClockCounter from './CounterClock';
import CounterClock1 from './CounterClock1';
import UseEffect from './UseEffect';
import {Usehook2} from './useEffect1';
import {Effecthook} from './userEffectt';
import Effecthookeg from './useEffect5';
import reportWebVitals from './reportWebVitals';
import DependancyArray from './DependancyArray';
import LoginValidation from './LoginValidation';
import {Loginhook} from './Loginhook';

import {Onchangevent} from './Onchangevent'
import Signinhook from './Signinhook';
import Apps from './myrouting';
import AppRoutes  from './Routes';
import FrondBackWithReact from './FrondBackWithReact';
import Tables from './Tables'
import {Loginforspringboot} from './LoginhookforSpringBoot'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* { <Compute /> } */}
    {/* <App1 /> */}
    {/* {<ButtonEvent />} */}
    {/* { <Ap /> } */}
    {/* {<Store />} */}
    {/* {<Clock />} */}
    {/* {<ClockCounter />} */}
    {/* {<CounterClock1 />} */}
    {/* {<Usehook2 />} */}
    {/* {<UseEffect />} */}
    {/* {< Effecthook />} */}
    {/* {<Effecthookeg />} */}
    {/* {<DependancyArray />} */}
    {/* {<LoginValidation />} */}
      {/* {<Loginhook />}  */}
    {/* {<Onchangevent />} */}
    {/* {<Signinhook />} */}
    {/* {<Apps />} */}
    {/* {<AppRoutes />}
     */}
     {/* {<FrondBackWithReact />}
      */}
      {/* {<Tables />} */}
      {<Loginforspringboot />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
