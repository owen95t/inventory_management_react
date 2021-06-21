import './App.css';
import {
  HashRouter as HRouter,
  Switch,
  Route
} from "react-router-dom";
import {GuardProvider, GuardedRoute} from "react-router-guards";

function App() {


    const requireAuth = (to, from, next) => {
        next();
    }
    return (
        <div className='App'>
            <HRouter>
                <GuardProvider guards={[requireAuth]}>
                    <Switch>

                    </Switch>
                </GuardProvider>
            </HRouter>
        </div>
    )
}

export default App;
