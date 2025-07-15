import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "../widgets/header";
import '../shared/styles/reset.scss'
import '../widgets/header/index.scss'
import { Suspense, useContext } from "react";
import Loader from "../widgets/loader/loader";
import MainPageAsync from "../pages/main-page/MainPage.async";


const App = () => {    

    return(
        <div className="page">
            <Header/>
            <Routes>
              <Route key="route-0" path={'/'} element={(
                <Suspense fallback={<Loader/>}> 
                  <MainPageAsync/>
                </Suspense>
              )}/>
            </Routes>
        </div>
    )
}

export default App;