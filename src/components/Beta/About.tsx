import React from "react"
import styled  from "styled-components"
import BgPng from "../../assets/images/bg_2.png"
import TitlePng from "../../assets/images/what.png"
 
import YoutubuPng from "../../assets/images/About/youtube_1.png"
import YoutubuPng2 from "../../assets/images/About/youtube_2.png"
const BgContainer = styled.div`
    width:100%;     
    background-image: url(${BgPng});
    background-repeat: no-repeat;    
    background-size: cover;  
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:5%;
    padding-bottom:2%;
` 
const ContentLayer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const Content = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;    
`;

const TitleLayer = styled.div`   
    display:flex;
    flex-direction:row;  
`;

const TitleBg = styled.img`   
    @media (max-width: 800px) {
        height: 50px;
        
    }   
`

const DescriptionLayer = styled.div` 
    padding-left:5%;  
    display:flex;
    flex-direction:column;  
    flex-wrap:wrap;
    @media (max-width: 800px) {
        padding-left:0%; 
    }    
`;

const Desc_1 = styled.div`   
    width: 530px;
    height: 34px;     
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #0066FF;

    @media (max-width: 1088px) {
        font-size: 13px;
        width: 360px;
        height: 48px;
    }
 
    @media (max-width: 800px) { 
        padding-top:5%;        
        font-size: 13px;
        text-align:center;       
        width: 311px;
        height: 85px;
    }
`;

const Desc_2 = styled.div`  
    margin-top:1%;
    width: 851px;
    height: 85px;     
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

    @media (max-width: 1088px) {
        width: 620px;
        height: 110px;
        font-size: 13px;
    }
 
    @media (max-width: 800px) {
        width: 314px;
        height: 180px;
        font-size: 13px;
        text-align:center;       
    }
`;

const YoutubeLayer = styled.div`        
    display:flex;
    flex-direction:row;
    justify-content:center;  
    @media (max-width: 800px) {
        width: 100%;
    }   
`;

const YoutubeBgLayer = styled.img`   
    margin-top:2%;   
    width: 938px;
    height: 552px; 
    @media (max-width: 1088px) {        
        width: 733px;
        height: 431px;      
    }
    @media (max-width: 800px) {
        margin-top:10%;
        margin-bottom:10%;
        width: 337px;
        height: 198px;       
    }   
`;
 

function About(){
    return(
        <BgContainer id="about">        
            <ContentLayer>
                <Content>
                    <TitleLayer>                        
                        <TitleBg src={TitlePng}></TitleBg>
                    </TitleLayer>
                    <DescriptionLayer>
                        <Desc_1>ChronoFi is a strategic turn-based RPG game where players are open to build their own territory with future technologies</Desc_1>
                        <Desc_2>
                            ChronoFi is a digital gaming platform based on the Binance Smart Chain.
                            Create and build a play to earn ecosystem, Chronofi guides gamers into the blockchain industry by removing barriers to entry and providing a complete infrastructure and truly entertaining games. 
                            Through the first innovative promotion system and cooperation plan, Chronofi is rapidly acquiring traditional gamers and blockchain native users, providing integrated solutions for the blockchain gaming industry.
                        </Desc_2>
                    </DescriptionLayer>
                    <YoutubeLayer>
                        <a href="https://www.youtube.com/watch?v=Z7D4mRC84HQ">                        
                            <YoutubeBgLayer src={YoutubuPng}>                                                                            
                            </YoutubeBgLayer>                                          
                        </a>
                    </YoutubeLayer>
                    
                </Content>
            </ContentLayer>
        </BgContainer>
    )
}

export default About