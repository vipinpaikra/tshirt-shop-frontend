import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";
import Contact from "./core/Contact";
import About from "./core/About";
import UpadateCategory from "./admin/UpadateCategory";
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/about" component={About} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={UserDashBoard}
                />
                <PrivateRoute path="/cart" exact component={Cart} />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashBoard}
                />
                <AdminRoute
                    path="/admin/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/admin/categories"
                    exact
                    component={ManageCategories}
                />
                <AdminRoute
                    path="/admin/category/update/:categoryId"
                    exact
                    component={UpadateCategory}
                />
                <AdminRoute
                    path="/admin/create/product"
                    exact
                    component={AddProduct}
                />
                <AdminRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                <AdminRoute
                    path="/admin/product/update/:productId"
                    exact
                    component={UpdateProduct}
                />
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
