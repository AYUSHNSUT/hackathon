import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Container } from 'react-bootstrap'
import Homepage from "./pages/Homepage";
import CovidPage from "./pages/CovidPage";
import DashboardDoc from './pages/DashboardDoc'
import DashboardUser from './pages/DashboardUser'
import CovidPrediction from "./pages/CovidPrediction";
import UserLoginPage from "./pages/UserLoginPage";
import DoctorLoginPage from "./pages/DoctorLoginPage";
import UserRegister from "./pages/UserRegister";
import DoctorRegister from "./pages/DoctorRegister";
//import PrivateRoute from "./components/PrivateRoute";
import LoginDoctorUserChoicePage from "./pages/LoginDoctorUserChoicePage";
import RegisterDoctorUserChoicePage from "./pages/RegisterDoctorUserChoicePage";
import HeartPrediction from "./pages/HeartPrediction";
import getMedicine from "./pages/Medicine";
import AboutUs from "./pages/AboutUs";
import AppointmentPage from "./pages/AppointmentPage";
import VaccinationPage from "./pages/VaccinationPage";
import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/userlogin" component={UserLoginPage} />
        <Route exact path="/doctorlogin" component={DoctorLoginPage} />
        <Route exact path="/userregister" component={UserRegister} />
        <Route exact path="/doctorregister" component={DoctorRegister} />
        <Route exact path="/dashboardDoc" component={DashboardDoc} />
        <Route exact path="/dashboardUser" component={DashboardUser} />
        <Route
          exact
          path="/loginchoice"
          component={LoginDoctorUserChoicePage}
        />
        <Route
          exact
          path="/registerchoice"
          component={RegisterDoctorUserChoicePage}
        />
        <Route exact path="/heartprediction" component={HeartPrediction} />
        <Route exact path="/covid" component={CovidPage} />
        <Route exact path="/covidprediction" component={CovidPrediction} />
        <Route exact path="/medicine" component={getMedicine} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/appointment" component={AppointmentPage} />
        <Route exact path="/vaccination" component={VaccinationPage} />
        <Route exact path="/testing" component={TestingPage} />
      </Switch>
    </Router>
  );
}

export default App;
