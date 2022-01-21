import React from "react"
import styled  from "styled-components"
import BgPng from "../../assets/images/bg_3.png"
import TitlePng from "../../assets/images/roadmap.png"
import Step_1Png from "../../assets/images/RoadMap/step_1.png"
import Step_2Png from "../../assets/images/RoadMap/step_2.png"
import Step_3Png from "../../assets/images/RoadMap/step_3.png"
 
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

const StepLayer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    
    padding-bottom:5%;
    flex-wrap:wrap;

`;

const StepContent = styled.div`
    padding:5%;
    display:flex;
    flex-direction:row;
    justify-content:center;   
    width:30%;     
    @media (max-width: 800px) {
        width:100%;
    }
`;

const StepImg = styled.img`    
    width: 100%;    
    @media (max-width: 800px) {
        width: 265px;
        height: 243px;
    }
`;
 

function RoadMap(){
    return(
        <BgContainer>        
            <ContentLayer>
                <Content>
                    <TitleLayer>
                        <TitleBg src={TitlePng}></TitleBg>                   
                    </TitleLayer>
                    <StepLayer>
                        <StepContent>
                            <StepImg src={Step_1Png}></StepImg>
                        </StepContent>
                        <StepContent>
                            <StepImg src={Step_2Png}></StepImg>
                        </StepContent>
                        <StepContent>
                            <StepImg src={Step_3Png}></StepImg>
                        </StepContent>                                                                        
                    </StepLayer>
                </Content>
            </ContentLayer>
        </BgContainer>
    )
}

export default RoadMap