import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'



// page
import Home from "./pages/Home/Home";
import Signin from "./pages/Sign/in/SignINN";
// import Signup from "./pages/Sign/up/SignUPP";
import Exercise from './pages/Exercise/Exercise';
import ExerciseResult from './pages/ExerciseResult/ExerciseResult';
import ExerciseSelect from './pages/ExerciseSelect/ExerciseSelect';
import ExerciseStatistics from './pages/ExerciseStatistics/ExerciseStatistics';
// import MyRoutine from './pages/MyRoutine/MyRoutine';

import MyRoutine from 'components/MyRoutine/MyRoutine';

import store from 'components/store/store';

// Details
import BurpeeDes from './pages/Des/BurpeeDes';
import CrunchDes from './pages/Des/CrunchDes';
import LegriseDes from './pages/Des/LegriseDes';
import PlankDes from './pages/Des/PlankDes';
import PushupDes from './pages/Des/PushupDes';
import SquatDes from './pages/Des/SquatDes';
import { Provider } from 'react-redux';

// import PrivateRoute from 'components/Route/PrivateRoute';
import "assets/Fonts/Font.css"

import ExerciseList from 'components/ExerciseList/ExerciseList';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  
  
  <Router>

    <Provider store={store}>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/Exercise/Selection' element={<ExerciseList />} />
      <Route path='/MyRoutine' element={<MyRoutine />} />
      <Route path='/Exercise' element={<Exercise />} />
      <Route path='/Exercise/Result' element={<ExerciseResult />} />

    </Routes>

    </Provider>

  </Router>
  , root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
