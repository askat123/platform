import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MySchool from './components/Myschool';
import AboutUs from './components/Aboutus';
import OurCours from './components/Ourcours';
import Frontend from './components/Frontend';
import Article from './page/Article';
import WePrep from './page/WePrep';
import Package from './page/Package';
import AfterSub from './page/AfterSub';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/myschool' element={ <MySchool/>}/>
        <Route path='/ourcours' element={ <OurCours/>}/>
        <Route path='/aboutus' element={ <AboutUs/>}/>
        <Route path='/front' element={<Frontend/>}/>
        <Route path='/article' element={ <Article/>}/>
        <Route path='/article/weprep' element={ <WePrep/>}/>
        <Route path='/comment' element={ <AfterSub/>}/>
        <Route path='/package' element={ <Package/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
