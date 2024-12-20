import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import User from "../Components/User/User.jsx";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
// import FoodList from '../Components/FoodList';
// import FoodDetail from '../Components/FoodDetail';
import ItemDetail from '../Components/ItemDetail';
import UserDetails from "../Components/User/UserDetails/UserDetails.jsx";
//Lazy loading
const FoodListWise= lazy(()=>import('../Components/FoodList'))
const FoodDetailWise= lazy(()=>import('../Components/FoodDetail'))
const Routing = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<h1 className="color">Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/details/:uid" element={<UserDetails />} />
        <Route path="/foodlist" element={<FoodListWise />} />
        <Route path="/cuisine/:id" element={<FoodDetailWise />} />
        <Route path="/cuisine/:cuisineId/item/:itemId" element={<ItemDetail />} />
      </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
};

export default Routing;
