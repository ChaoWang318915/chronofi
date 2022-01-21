import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';  
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import { colors } from './styles'
import Home from './components/Beta/Home';
import About from './components/Beta/About';
import RoadMap from './components/Beta/RoadMap';
import Features from './components/Beta/Features';
import OurTeam from './components/Beta/OurTeam';
import ContactUs from './components/Beta/ContactUs';
import TopPng from "./assets/images/Top.png";
import HeaderPng from "./assets/images/Home/top_bg_1.png"
import ScrollPng from "./assets/images/scroll_header.png"
import Web3 from 'web3';
 
function App() {
    const [showButton, setShowButton] = useState(false);
    const [background, setBackground] = useState(`${HeaderPng}`);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
            setBackground(`${ScrollPng}`);
          } else {
            setShowButton(false);
            setBackground(`${HeaderPng}`);
          }
        });
      }, []);
    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
        });
    };
    const TopButton = styled.img`

    `;
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <Home />
                <About />
                <RoadMap />
                <Features />
                <OurTeam />
                <ContactUs />
                {showButton && (
                    <button onClick={scrollToTop} className="back-to-top">
                        <TopButton src={TopPng}></TopButton>
                    </button>
                )}
                
            </Route>                      
          </Switch>
      </BrowserRouter>
      </div>
  )
}

export default App
