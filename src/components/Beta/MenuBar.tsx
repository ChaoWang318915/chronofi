import React from "react"
import styled from "styled-components"
import HeaderPng from "../../assets/images/Home/top_bg_1.png"

const MenuLayer = styled.div`
    position:absolute;    
    z-index:10;
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:center;  
    flex-wrap:wrap;
    @media (max-width: 800px) {
        display:none;
    }
`;
const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height:67px;        
    border-radius: 5px;    
`
const MmenuItem = styled.li`       
    font-style: normal;
    font-weight: bold;
    font-size: 16px;       
    color: #FFFFFF;
    padding:6%;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
    @media (max-width: 1500px) {
        padding:4%;
    }
    @media (max-width: 1088px) {
        padding:3%;
        font-size: 15px;
    }
    @media (max-width: 1024px) {
        padding:1%;
        font-size: 15px;
    }
`
const Divier = styled.div`    
    width: 2px;
    height: 30px;    
    background-color:#fff;
    
    @media (max-width: 1088px) {
      
        height: 25px;
    }
    @media (max-width: 1024px) {
      
        height: 15px;
    }
`;

function MenuBar(){
    return(
        <MenuLayer>
            <MenuContainer>
                <MmenuItem><a href="/">HOME</a></MmenuItem>
                <MmenuItem><Divier></Divier></MmenuItem>
                <MmenuItem><a href="/#features">FEATURES</a></MmenuItem>
                <MmenuItem><Divier></Divier></MmenuItem>
                <MmenuItem><a href="./Whitepaper.pdf">WHITEPAPER</a></MmenuItem>
                <MmenuItem><Divier></Divier></MmenuItem>
                <MmenuItem><a href="/#about">AUDIT</a></MmenuItem>
                <MmenuItem><Divier></Divier></MmenuItem>
                <MmenuItem><a href="/#contact-us">ONEPAGE</a></MmenuItem>
                <MmenuItem> <Divier></Divier></MmenuItem>
                <MmenuItem><a href="#">LAUNCHAPP</a></MmenuItem>
            </MenuContainer>
        </MenuLayer>
    )
}

export default MenuBar;