
import Products from "../components/Products";
import { Routes, Route } from "react-router-dom";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";
import ProductDetails from "../components/productDetails";

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='*' element={<div>Not Found</div>} />
            </Routes>
        </>
    )
}
export default MainRoutes;