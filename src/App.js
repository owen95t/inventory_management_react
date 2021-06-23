import './App.css';
// import {
//   HashRouter as HRouter,
//   Switch,
//   Route
// } from "react-router-dom";
// import {GuardProvider, GuardedRoute} from "react-router-guards";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./router/AppRouter";
import Navigation from "./pages/Navigation";
import {HashRouter} from "react-router-dom";



function App() {

    return (
        <div className='App'>
            <AppRouter/>
        </div>
    );
}

export default App;
