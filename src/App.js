import { useState } from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes } from 'react-router-dom';
import WelcomeScreen from './components/ui/Wellcomepage';
import Animated from './Pages/Animated';
import Header from './components/Home/Header';
import {FloatingDockDemo} from "./components/pagestheme/PagesDPage"
import {FloatingDockDemo2} from "./components/pagestheme/PagesDPage2"
function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
  <>
        <BrowserRouter>
        <AnimatePresence mode="wait">
          {showWelcome && (
            <WelcomeScreen
              onLoadingComplete={() => setShowWelcome(false)}
            />
          )}
        </AnimatePresence>

        {!showWelcome && (
          <>
          <Animated/>
          {/* <AnimatedBackground/>  */}
            <Header />

            <Routes>
              
            </Routes>
              
           <div className="lg:block hidden" ><FloatingDockDemo/></div> 
           <div className="lg:hidden block"><FloatingDockDemo2/></div> 
          </>
        )}
      </BrowserRouter>
  
  </>
  );
}

export default App;
