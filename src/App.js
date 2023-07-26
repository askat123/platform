import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MySchool from "./components/Myschool";
import AboutUs from "./components/Aboutus";
import OurCours from "./components/Ourcours";
import Frontend from "./components/Frontend";
import Article from "./page/Article";
import WePrep from "./page/WePrep";
import Package from "./page/Package";
import AfterSub from "./page/AfterSub";
import Courses from "./components/courses/Courses";
import Class from "./page/Class";
import Podrobnee from "./page/Podrobnee";
import Register from "./page/Register";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myschool" element={<MySchool />} />
        <Route path="/ourcours" element={<OurCours />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/front" element={<Frontend />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/weprep" element={<WePrep />} />
        <Route path="/comment" element={<AfterSub />} />
        <Route path="/package" element={<Package />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/class" element={<Class />} />
        <Route path="/podrobnee" element={<Podrobnee />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
