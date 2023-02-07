import "./style/app.scss"
import { BrowserRouter,Route,Routes, Router } from "react-router-dom";
import Home from "./components/Home";
import Header  from "./components/Header";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import HomeA from "./components/HomeA";
function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<HomeA/>}/>
      <Route path="/cart" element={<Cart/>}/>
     <Route path="/cnt" element={<Contact/>} />
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
