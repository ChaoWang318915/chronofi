import React from "react"
import styled  from "styled-components"
import BgPng from "../../assets/images/bg_4.png"
import TitlePng from "../../assets/images/feature.png"
import AdventurePng from "../../assets/images/Features/Adventure.png"
import BattleFieldPng from "../../assets/images/Features/BattleField.png"
import NFTMaketplace from "../../assets/images/Features/NFTMaketplace.png"
import MysteryPng from "../../assets/images/Features/Mystery.png"
import NFTFramePng from "../../assets/images/Features/NFTFrame.png"
 
const BgContainer = styled.div`
    
    width: 100%;     
    background-image: url(${BgPng});
    background-repeat: no-repeat;
    background-size: cover;  
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:5%;
    padding-bottom:5%;

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
const FeaturesLayer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;   
`;
 
const CardSection = styled.div`    
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:30%;
    padding:2%;
    @media (max-width: 800px) {
        width:100%;
    }
`;

const CardImg =styled.img`
    width:100%;
    @media (max-width: 800px) {
        width: 287px;
        height: 234px;
    }
    
`;

function Features(){
    return(
        <BgContainer id="features">        
            <ContentLayer>
                <Content>
                    <TitleLayer>
                        <TitleBg src={TitlePng}></TitleBg>           
                    </TitleLayer>
                    <FeaturesLayer>                   
                        <CardSection>
                            <CardImg src={MysteryPng}></CardImg>
                        </CardSection>   
                        <CardSection>
                            <CardImg src={NFTFramePng}></CardImg>
                        </CardSection>   
                        <CardSection>
                            <CardImg src={NFTMaketplace}></CardImg>
                        </CardSection>   
                        <CardSection>
                            <CardImg src={BattleFieldPng}></CardImg>
                        </CardSection>   
                        <CardSection>
                            <CardImg src={AdventurePng}></CardImg>
                        </CardSection>                        
                        
                    </FeaturesLayer>
                </Content>
            </ContentLayer>
        </BgContainer>
    )
}

export default Features