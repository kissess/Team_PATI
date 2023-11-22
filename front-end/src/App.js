import { Outlet, Route, Routes } from 'react-router-dom';

// page
import Home from "./pages/Home/Home";
import Signin from "./pages/Sign/in/SignINN";
import Signup from "./pages/Sign/up/SignUPP";
import Exercise from './pages/Exercise/Exercise';
import ExerciseResult from './pages/ExerciseResult/ExerciseResult';
import ExerciseSelect from './pages/ExerciseSelect/ExerciseSelect';
import ExerciseStatistics from './pages/ExerciseStatistics/ExerciseStatistics';
import MyRoutine from './pages/MyRoutine/MyRoutine';

// Details
import BurpeeDes from './pages/Des/BurpeeDes';
import CrunchDes from './pages/Des/CrunchDes';
import LegriseDes from './pages/Des/LegriseDes';
import PlankDes from './pages/Des/PlankDes';
import PushupDes from './pages/Des/PushupDes';
import SquatDes from './pages/Des/SquatDes';

import { authService } from 'firebase-config';
// import AppRouter from 'components/Router';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <div>
      <Home/>
      <Outlet/>

    </div>
  );
}



export default App;
