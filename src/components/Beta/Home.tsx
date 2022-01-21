import { useState, useEffect } from 'react'
import styled from "styled-components"
import BgPng from "../../assets/images/bg_1.png"
import HeaderPng from "../../assets/images/Home/top_bg_1.png"
import ScrollPng from "../../assets/images/scroll_header.png"
import AvatarPng  from "../../assets/images/Home/avatar.png"
import TitlePng from  "../../assets/images/Home/title.png"
import MediumPng from "../../assets/images/Home/logo_medium.png"
import TwitterPng from "../../assets/images/Home/logo_twitter.png"
import YoutubPng from "../../assets/images/Home/logo_youtube.png"
import TelegramPng from "../../assets/images/Home/logo_tele.png"
import TopLogoPng from "../../assets/images/logo2.png"
import TopMenuPng from "../../assets/images/TopMenu.png"
import "../css/MobileNavbar.css";
import MenuBar from "./MenuBar"
import {SidebarData} from "../../js/SidebarData"

const Container = styled.div`
    width:100%;    
    display:flex;
    flex-direction:column;
`;

const Container_1 = styled.div`
    width: 100%;       
    background-image: url(${BgPng});
    display:flex; 
    flex-direction:column;
    background-repeat: no-repeat;
    background-size: cover;  
`
const HeaderSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;     
    position:fixed;
    top:0; 
    z-index:100;
`;

const HeaderBackPng = styled.img`
    width:100%;
    @media (max-width: 800px) {
        display:none;
    }
`;

const Section_1 = styled.div`
    display:flex;
    flex-direction:row;
    justify-conent:center;
    width:100%; 
    padding-top:20%;
    flex-wrap:wrap;   
`;

const Section1_LeftLayer = styled.div`
    width:65%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (max-width: 800px) {
        width:100%;
    }
`;
const TitleImg = styled.img`
    width:60%;
`;

const IconLink = styled.a`
    cursor:pointer;
    padding:4%;
`

const IconImg = styled.img`
    
`;
 
 
const IconLayer = styled.div`
    display:flex;
    flex-direction:row;
    justify-conent:center;
    padding:2%;
`;

const Section1_RightLayer = styled.div`
    width:35%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media (max-width: 800px) {
        width:100%;
    }
`;

const AvatarImg = styled.img`
    width:100%;     
`;

const MobileHeaderLayer =styled.div`
    display:none;
    width:100%;
    @media (max-width: 800px) {
        display:flex;
        flex-direction:row;  
        justify-content:space-between;     
        align-items:center;
        height: 52px;
        background: #1F2A7C;        
    }
`;

const LogoLayer = styled.div`
    display:none;
    @media (max-width: 800px) {
        display:flex;
        flex-direction:row;                
        justify-content:flex-end;
    }
`;

const TopLogoImg = styled.img`
    width: 181px;
    height: 52px;
    cursor:pointer;
`;

const MenuLayer =styled.div`
    display:none;
    @media (max-width: 800px) {
        display:flex;
        flex-direction:row; 
        margin-right:2%;                
    }
`

const LeftMenuLayer =styled.div`
    display:none;
    @media (max-width: 800px) {
        display:flex;
        width: 25px;
        flex-direction:row; 
        margin-left:2%;                
    }
`

const TopMenuImg = styled.img`     
    width: 25px;
    height: 14px;
    cursor:pointer;
`;
 
const MobileSidebar = styled.div`

`;


function Home(){
    
    const [background, setBackground] = useState(`${HeaderPng}`);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {            
            setBackground(`${ScrollPng}`);
          } else {            
            setBackground(`${HeaderPng}`);
          }
        });
      }, []);  
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }
    return(
        <Container>
            <Container_1>
                <HeaderSection>
                    <HeaderBackPng src={background}></HeaderBackPng>       
                    <MenuBar></MenuBar>    
                    <MobileHeaderLayer>
                        <LeftMenuLayer> </LeftMenuLayer>
                        <LogoLayer>
                            <TopLogoImg src={TopLogoPng}></TopLogoImg>
                        </LogoLayer>
                        <MenuLayer>
                            <TopMenuImg onClick={showSidebar} src={TopMenuPng}></TopMenuImg>
                            <MobileSidebar>
                                <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                                    <ul className='nav-menu-items' onClick={showSidebar}>
                                        {
                                            SidebarData.map((item,index)=>{
                                                return(
                                                    <li key={index} className={item.cName}>
                                                        <a href={item.path}>{item.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav>
                            </MobileSidebar>
                        </MenuLayer>                                       
                    </MobileHeaderLayer>
                </HeaderSection>
                <Section_1>
                    <Section1_LeftLayer>
                        <TitleImg src={TitlePng}></TitleImg>
                        <IconLayer>
                            <IconLink href="https://t.me/chronofi"><IconImg src={TelegramPng}></IconImg></IconLink> 
                            <IconLink href="https://twitter.com/chronofi_"><IconImg src={TwitterPng}></IconImg></IconLink> 
                            <IconLink href="https://t.me/chronofi"><IconImg src={MediumPng}></IconImg></IconLink> 
                            <IconLink href="https://www.youtube.com/watch?v=Z7D4mRC84HQ"><IconImg src={YoutubPng}></IconImg></IconLink> 
                        </IconLayer>
                    </Section1_LeftLayer>
                    <Section1_RightLayer>
                        <AvatarImg src={AvatarPng}></AvatarImg>
                    </Section1_RightLayer>
                </Section_1>
            </Container_1>
          
        </Container>
    )
}

export default Home