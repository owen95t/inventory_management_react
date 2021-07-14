import {
    HashRouter as HRouter,
    Switch,
    Route
} from "react-router-dom";
import {GuardProvider} from "react-router-guards";
import InventoryMenu from "../pages/InventoryMenu";
import TransferMenu from "../pages/TransferMenu";
import OrderMenu from "../pages/OrderMenu";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import CustomerMenu from "../pages/CustomerMenu";

const AppRouter = () => {

    const requireAuth = (to, from, next) => {
        next();
    };

    return (
        <>
            <HRouter>
                <Navigation/>
                <div style={{marginTop: '5rem'}}>
                    <GuardProvider guards={[requireAuth]}>
                        <Switch>
                            <Route path='/' exact component={() => <Home/>}/>
                            <Route path='/inventory' render={(props) => (
                                <InventoryMenu {...props}/>
                            )}/>
                            <Route path='/transfers' render={() => (
                                <TransferMenu/>
                            )}/>``
                            <Route path='/orders' render={() => (
                                <OrderMenu/>
                            )}/>
                            <Route path='/customers' render={() => (
                                <CustomerMenu/>
                            )}/>
                        </Switch>
                    </GuardProvider>
                </div>
            </HRouter>
        </>
    )
}

export default AppRouter