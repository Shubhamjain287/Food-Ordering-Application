import Header from "./components/Header";
import Home from "./components/Home"
import "../src/index.css";
import { Outlet } from "react-router-dom";
import useOnline from "./components/useOnline";

const App = () => {

    const isOnline = useOnline();

    if(!isOnline){
        return (
            <> <h1> Check Your Internet Connection </h1> </>
        )
    }
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
} 

export default App;