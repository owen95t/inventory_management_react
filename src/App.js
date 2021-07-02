import './App.css';
// import {GuardProvider, GuardedRoute} from "react-router-guards";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./router/AppRouter";
// import Navigation from "./pages/Navigation";



function App() {

    return (
        <div className='App'>
            <AppRouter/>
        </div>
    );
}

export default App;
