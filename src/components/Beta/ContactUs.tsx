import React from "react"
import styled  from "styled-components"
import BgPng from "../../assets/images/bg_2.png"
import LogoPng from "../../assets/images/logo2.png"
import MediumPng from "../../assets/images/Home/logo_medium.png"
import TwitterPng from "../../assets/images/Home/logo_twitter.png"
import YoutubPng from "../../assets/images/Home/logo_youtube.png"
import TelegramPng from "../../assets/images/Home/logo_tele.png"
 
const BgContainer = styled.div`
    width:100%;         
    display:flex;
    flex-direction:column;
    align-items:center;    
`
 const ContentLayer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;
 
const InboxLayer = styled.div`    
    width: 100%;
    height: 249px;
    background: #19408D;
    border: 1px solid #5E93FD;
    diplay:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;    
    align-content:center;
    padding-top:2%;
    padding-bottom:2%;
    @media (max-width: 800px) {
        height: 250px;
        padding-top:5%;
        padding-bottom:5%;
    }
    
`;

const InboxText = styled.div`
    padding-top:3%;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;    
`;

const SubscribeLayer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:100px;    
    justify-content:center;
    align-item:center;
`;
const SubscribeLayer_1 = styled.div`   
    display:flex;
    flex-direction:row;
    width:30%;
    height:100px;    
    text-align:center;
    flex-wrap:wrap;
    justify-content:center;
    @media (max-width: 800px) {
        width:100%;
    }
`;

const InputLayer = styled.div`
    margin-top:2%;
    width: 70%;
    height: 62px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    @media (max-width: 800px) {
        width:90%;
        margin-top:4%;
    }
`;

const InputText = styled.input`
    width:100%;
    height:62px;
    border:0;
    padding-left:5%;
`;

const SubscribeButton = styled.div`
    margin-top:2%;
    width: 30%;
    height: 62px;    
    background: #FF8800;
    border: 2px solid #373028;
    box-sizing: border-box;
    align-items:center;
    text-align: center;    
    cursor:pointer;
    @media (max-width: 800px) {
        width:90%;
        margin-top:4%;
    }
    
`;

const ButtonTitle = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;  
    color: #000000;    
`;

const CommitLayer = styled.div`   
    width: 100%;
    height: 254px;     
    background: #000000;
    display:flex;
    flex-direction:row;    
    flex-wrap:wrap;
    justify-content:center;
    @media (max-width: 800px) {
        height: 450px;
    }
    
`;

const CommitLayer_1 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:25%;
    @media (max-width: 800px) {
        width:100%;
    }
`;

const LogoImage = styled.img`
    width: 245px;
    height: 70px;
    @media (max-width: 800px) {
        width: 255px;
        height: 73px;
    }
`;
const LogoTitle = styled.div`
    width: 249px;
    height: 51px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: #FFFFFF;
`;

const CommitLayer_2 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:25%;
    @media (max-width: 800px) {
        width:100%;
    }
`;
const JoinTitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;    
    color: #FFFFFF;
`;

const IconLayer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-top:2%;
`;

const IconImage = styled.img`
    width: 40px;
    height: 40px;    
`;
const IconLink = styled.a`
    cursor:pointer;
    padding:4%;
`
const CommitLayer_3 = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    width:25%;
    @media (max-width: 800px) {
        width:100%;
       
    }
`;

const AboutLayer = styled.div`
    display:flex;
    flex-direction:column;
     
`;
const FAQLayer  = styled.div`
    display:flex;
    flex-direction:column;
     
`;

const Title = styled.div`   
    height: 17px;   
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  
    color: #FFFFFF;
`;

const SubTitle = styled.div`       
    margin-top:10%;    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;         
    color: #FFFFFF;
`;

const CopyRightLayer = styled.div`
    padding:1%;
    display:flex;
    flex-direction:row;
    background: #19226F;
    justify-content:center;
    width:100%;
    flex-wrap:wrap;
`;

const CopyLightTxt = styled.div`
   
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    
    color: #FFFFFF;
`;
function ContactUs(){
    return(
        <BgContainer id="contact-us">         
            <ContentLayer>
                <InboxLayer>
                    <InboxText>Get the Latest in Your Inbox</InboxText>
                    <SubscribeLayer>      
                        <SubscribeLayer_1>
                            <InputLayer>
                                <InputText placeholder="Enter your email"></InputText>
                            </InputLayer> 
                            <SubscribeButton><ButtonTitle>Subscribe</ButtonTitle></SubscribeButton>        
                        </SubscribeLayer_1>                                            
                    </SubscribeLayer>
                </InboxLayer>
                <CommitLayer>
                    <CommitLayer_1>
                        <LogoImage src={LogoPng}></LogoImage>
                        <LogoTitle>
                            We are here to merge the gaming industry and player's economy into one.
                        </LogoTitle>
                    </CommitLayer_1>
                    <CommitLayer_2>
                        <JoinTitle>JOIN OUR COMMUNITIES</JoinTitle>
                        <IconLayer>                          
                            <IconLink href="https://t.me/chronofi"><IconImage src={TelegramPng}></IconImage></IconLink> 
                            <IconLink href="https://twitter.com/chronofi_"><IconImage src={TwitterPng}></IconImage></IconLink> 
                            <IconLink href="https://t.me/chronofi"><IconImage src={MediumPng}></IconImage></IconLink> 
                            <IconLink href="https://www.youtube.com/watch?v=Z7D4mRC84HQ"><IconImage src={YoutubPng}></IconImage></IconLink> 
                        </IconLayer>
                    </CommitLayer_2>
                    <CommitLayer_3>
                        <AboutLayer>
                            <Title>ABOUT</Title>
                            <SubTitle>Features</SubTitle>
                            <SubTitle>Roadmap</SubTitle>
                            <SubTitle>Characters</SubTitle>
                            <SubTitle>Check Vesting</SubTitle>
                        </AboutLayer>
                        <FAQLayer>
                            <Title>FAQ</Title>
                            <SubTitle>Terms and Conditions</SubTitle>
                            <SubTitle>Whitepaper</SubTitle>
                            <SubTitle>Contact us</SubTitle>     
                            <SubTitle></SubTitle>                      
                        </FAQLayer>
                    </CommitLayer_3>
                </CommitLayer>
                <CopyRightLayer>
                    <CommitLayer_1>
                        <CopyLightTxt>© 2021 CHRONOFI. All RIGHTS RESERVED</CopyLightTxt>
                    </CommitLayer_1>  
                    <CommitLayer_1></CommitLayer_1>
                    <CommitLayer_1></CommitLayer_1>
                </CopyRightLayer>
            </ContentLayer>
        </BgContainer>
    )
}

export default ContactUs