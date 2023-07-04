import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Login from "../pages/loginPage/Login";
import Home from "../pages/homePage/Home";
import Main from "../pages/mainPage/Main";
import Search from "../pages/searchPage/Search";
import Choice from "../pages/choicePage/Choice";
import Step from "../pages/stepPage/Step";
import Step1 from "../pages/step1Page/Step1";
import Step2 from "../pages/step2Page/Step2";
import Step3 from "../pages/step3Page/Step3";
import Step4 from "../pages/step4Page/Step4";
import Drawer from "../pages/drawerPage/Drawer";
import MadeRoom from "../pages/madeRoomPage/MadeRoom";
import Setting from "../pages/settingPage/Setting";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Layout />}>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login type="login"/>} />
                
                <Route path="/main" element={<Main type="main"/>} />
                <Route path="/search" element={<Search type="search"/>} />
                <Route path="/choice" element={<Choice type="choice"/>} />
                <Route path="/step" element={<Step type="step"/>} />
                <Route path="/step1" element={<Step1 type="step1"/>} />
                <Route path="/step2" element={<Step2 type="step2"/>} />
                <Route path="/step3" element={<Step3 type="step3"/>} />
                <Route path="/step4" element={<Step4 type="step4"/>} />
                <Route path="/drawer" element={<Drawer type="drawer"/>} />
                <Route path="/maderoom" element={<MadeRoom type="maderoom"/>} />
                <Route path="/setting" element={<Setting type="setting"/>} />
                
        </Route>
        <Route path="/" element={<Layout />}>
        
        </Route>
        
            </Routes>
        
        </BrowserRouter>
        )
}