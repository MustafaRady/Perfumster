
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer_2 from './Components/Footer_2/footer_2';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/home';
import ForHer from './Pages/ForHer/forHer';
import ForHim from './Pages/ForHim/forHim';
import New from './Pages/New/new';
import Subscription from './Pages/Subscription/subscription';
import AddToCart from './Pages/AddToCart/addToCart';
import MyCart from './Pages/MyCart/myCart';
import Profile from './Pages/Profile/profile';
import Auth from './Pages/Auth/auth';
import AboutUs from './Pages/AboutUs/aboutUs';
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import AllProducts from './Pages/AllProducts/allProducts';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/for-her" element={<ForHer />} />
        <Route path="/for-him" element={<ForHim />} /> 
        <Route path="/subscription" element={<Subscription />} /> 
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/products" element={<AllProducts />} /> 
        <Route path="/*" element={<PageNotFound />} /> 
      </Routes>
      <Footer_2/>
    </div>
  );
}

export default App;
