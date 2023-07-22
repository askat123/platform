import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MySchool from './components/Myschool';
import AboutUs from './components/Aboutus';
import OurCours from './components/Ourcours';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/myschool' element={ <MySchool/>}/>
        <Route path='/ourcours' element={ <OurCours/>}/>
        <Route path='/aboutus' element={ <AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
