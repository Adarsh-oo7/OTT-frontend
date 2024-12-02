import React from 'react';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Firstpage from './componets/firstpage';
import Login from './componets/login';
import Signup from './componets/signup';
import { Sidebar,dummyData,DynamicItem } from './componets';
import Homes from './componets/contents/home';
import Myplans from './componets/contents/Myplans';
import Subscription from './componets/contents/Subscription';
import WatchList from './componets/contents/watchList';
import History from './componets/contents/history';
import ChangePassword from './componets/contents/changePassword';
import SelectMovie from './componets/contents/selectMovie';
import ForgotPassword from './componets/ForgotPassword';

const MainRouter = () => {
  const location = useLocation(); 

  const hideSidebarRoutes = ["/login", "/signup","/","/forgotpassword"];

  return (
    <>
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homes />} />
        <Route path='/Myplan' element={<Myplans></Myplans>}></Route>
        <Route path='/subscrition' element={<Subscription></Subscription>} />
        <Route path='/watchlater' element={<WatchList/>} />
        <Route path='/history' element={<History />} />
        <Route path='/changePassword' element={<ChangePassword/>} />
        <Route path='/watch/:id' element={<SelectMovie></SelectMovie>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword></ForgotPassword>}></Route>


        {dummyData &&
          dummyData.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<DynamicItem page={item.name} />}
            />
          ))}
      </Routes>
    </>
  );
};

export default MainRouter;
