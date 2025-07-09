
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EducationPage from './components/EducationPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import ExperiencePage from './components/ExperiencePage';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavigationMenuDemo } from './components/navbar';
import Home from './components/home';
import Skills from './components/Skills';
import AdditionalInfo from './components/AdditionalInfo';

function App() {
 

  return (
    <div >

   <NavigationMenuDemo/>
   <Home/>
    
       <EducationPage/>
       <Skills/>
    <ProjectDetailsPage/>
    <ExperiencePage/>
    <Certificates/>
    <AdditionalInfo/>
    <Contact/>
    <Footer/>
   
    </div>
  )
}

export default App
