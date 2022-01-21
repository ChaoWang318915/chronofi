import React,{useState} from 'react'
import styled  from "styled-components"
import BgPng from "../../assets/images/bg_3.png"
import TitlePng from "../../assets/images/our_team.png"
import alfanAvatar from "../../assets/images/OurTeam/alfan.png"
import andrewAvatar from "../../assets/images/OurTeam/andrew.png"
import axtonAvatar from "../../assets/images/OurTeam/axton.png"
import combyAvatar from "../../assets/images/OurTeam/comby.png"
import fikriAvatar from "../../assets/images/OurTeam/fikri.png"
import jamesAvatar from "../../assets/images/OurTeam/james.png"
import jodhiAvatar from "../../assets/images/OurTeam/jodhi.png"
import lieAvatar from "../../assets/images/OurTeam/lie.png"
import maxAvatar from "../../assets/images/OurTeam/max.png"
import taufikAvatar from "../../assets/images/OurTeam/taufik.png"
import Modal from "react-modal"
import ModalBackImg from "../../assets/images/OurTeam/lightbox.png"
import LBtnImg  from "../../assets/images/OurTeam/lArrow.png"
import RBtnImg  from "../../assets/images/OurTeam/rArrow.png"
import XBtnImg  from "../../assets/images/OurTeam/close.png"
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
const TeamLayer = styled.div`    
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center;    
`; 


const MemberName = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;    
`;

const MemberRole = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;   
    color: #00AFEF;
   
`;

const MemberAvatar = styled.img`
    width: 180px;
    height: 180px;    
`;

const TeamCard = styled.div`
    display:flex;
    width:20%;
    padding:2%;
    flex-direction:column;    
    align-items:center;          
    @media (max-width: 800px) {
        width:100%;
    }    
`;


const CardOverLayer = styled.div`
    display:flex;
    flex-direction:column;        
`;
const OverLayer = styled.div`
    display:flex;
    flex-direction:column;  
    padding-top:10%;
    padding-left:7%; 
`;

const OverlayName = styled.div`
    width: 141px;
    height: 22px;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    font-weight: bold;   
`;

const OverlayRole = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: #00AFEF;
     
    margin-top:5%;
`;

const OverlayDesc = styled.div` 
    width: 182px;
    height: 51px;    
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin-top:5%;
`;

const ViewDetailBtn = styled.div`     
    width: 64px;
    height: 15px;    
    font-size: 12.5px;
    line-height: 15px;
    color: #009CFF;
    font-weight: bold;
    margin-top:10%;
    cursor:pointer;
`;
const ModalWrapper = styled.div`    
    box-shadow:0 5px 16px rgba(0,0,0,0.2);    
    color:#fff;
    display:flex;
    flex-direction:column;      
    width: 1078px;
    height: 571px;
    background:url(${ModalBackImg});   
    background-repeat: no-repeat;
    background-position: center right;    
    @media (max-width: 800px) {
        width: 360px;
        height: 417px;
    }      
`;

const ModalContent = styled.div`    
    display:flex;
    flex-direction:column;  
    width:100%;  
`;

const ModalHeaderLayer = styled.div`
    width:100%;      
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    padding-right:2%;
    padding-top:2%;
`;

const ModalContentLayer = styled.div`
    width:100%;    
    height:480px;  
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    align-content:center;  
    @media (max-width: 800px) {
        display:none;
    } 
`;

const MobileModalContentLayer = styled.div`
    display:none;
    @media (max-width: 800px) {
       
        width:100%;    
        height:350px;  
        display:flex;
        flex-direction:column;
         
    } 
    
`;

const LBtnLayer = styled.div`  
    display:flex;
    flex-direction:column;
    cursor:pointer;
`;

const RBtnLayer = styled.div`    
    display:flex;
    flex-direction:column;
    cursor:pointer;
`;

const MobleButtonLayer = styled.div` 
    padding-top:5%;   
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const ImgButton = styled.img`
    width: 64px;
    height: 78px
    cursor:pointer;
    @media (max-width: 800px) {
        width: 35px;
        height: 43px;
    }
    
`;

const CloseButton = styled.img`
    cursor:pointer;
    width: 32px;
    height: 32px;
`;
const MLayer = styled.div`   
    display:flex;
    flex-direction:row;
    justify-content:space-between;    
`;

const MobileMLayer = styled.div`
    display:none;
    @media (max-width: 800px) {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
`;

const MAvatar =styled.img`
    width: 180px;
    height: 180px;
    @media (max-width: 800px) {
        width: 123px;
        height: 123.17px;
    }   
`;

const MobileMAvatarLayer = styled.div`
    display:flex;
    flex-direction:row; 
    padding:4%;
`;

const MContentLayer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:4%;
`;



const MName = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 32px;
    @media (max-width: 800px) {
        font-size: 16px;
    } 
    
`;

const MRole = styled.div`
    font-weight: bold;
    font-size: 18px;  
    color: #00AFEF;  
    padding-top:2%;  
    padding-bottom:2%;  
    @media (max-width: 800px) {
        font-size: 14px;
    }
`

const MText = styled.div`
    width: 530px;   
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    @media (max-width: 800px) {
        font-size: 12px;
        width: 328px;
        line-height: 12px;
    }
`;

const MobileMTextLayer = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:4%;
`;

Modal.setAppElement('#root');
function OurTeam(){
    const [showModal, setShowModal] = useState(false);

    const openModal = ()=>{
        setShowModal(prev=>!prev);
    };    

    const [pageNumber, setPageNumber] = useState(1);
    const increaseNumber = ()=>{   
        if(pageNumber < 10) setPageNumber(pageNumber+1);
        else if(pageNumber == 10) setPageNumber(1);
    }

    const decreaseNumber = ()=>{
        if(pageNumber > 1) setPageNumber(pageNumber-1);   
        if(pageNumber == 1) setPageNumber(10);       
    }
    
    const closeModal = () => {
        setShowModal(false);
    }

    function viewDetail(num:any) {
        setPageNumber(num);
        setShowModal(true);
    }
    

    return(
        <BgContainer>        
            <ContentLayer>
                <Content>
                    <TitleLayer>
                        <TitleBg src={TitlePng}></TitleBg>                
                    </TitleLayer>
                    <TeamLayer>
                        <TeamCard className="teamcard">   
                            <MemberAvatar src={axtonAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>AXTON RALLEY</MemberName>
                            <MemberRole>FOUNDER</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>AXTON RALLEY</OverlayName>
                                    <OverlayRole>FOUNDER</OverlayRole>
                                    <OverlayDesc>Axton has over 4 years of experience in the IT industry, 2 years as a manager in...</OverlayDesc>
                                    <ViewDetailBtn  onClick={()=>viewDetail(1)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={andrewAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>ANDREW VAN</MemberName>
                            <MemberRole>FOUNDER</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>ANDREW VAN</OverlayName>
                                    <OverlayRole>FOUNDER</OverlayRole>
                                    <OverlayDesc>Andrew is an experienced developer working in crypto project development, des...</OverlayDesc>
                                    <ViewDetailBtn onClick={()=>viewDetail(2)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={alfanAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>ALFAN F</MemberName>
                            <MemberRole>CO-FOUNDER</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>ALFAN F</OverlayName>
                                    <OverlayRole>CO-FOUNDER</OverlayRole>
                                    <OverlayDesc>Alfan is an experience developer working in project development, 1+ years as...</OverlayDesc>
                                    <ViewDetailBtn onClick={()=>viewDetail(3)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={taufikAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>TAUFIK KURNIA</MemberName>
                            <MemberRole>2D/3D DESIGN</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>TAUFIK KURNIA</OverlayName>
                                    <OverlayRole>2D/3D DESIGN</OverlayRole>
                                    <OverlayDesc>Taufik has studied in Japan for 1 year as a research student and got a JASSO...</OverlayDesc>
                                    <ViewDetailBtn  onClick={()=>viewDetail(4)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={fikriAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>FIKRI ARDIAN</MemberName>
                            <MemberRole>2D/3D DESIGN</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>FIKRI ARDIAN</OverlayName>
                                    <OverlayRole>2D/3D DESIGN</OverlayRole>
                                    <OverlayDesc>Fikri Ardian is a Graphic Designer and Animator from Indonesia, who is quite ex...</OverlayDesc>
                                    <ViewDetailBtn  onClick={()=>viewDetail(5)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={lieAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>ZUMMIA F</MemberName>
                            <MemberRole>MARKETING MANAGER</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>ZUMMIA F</OverlayName>
                                    <OverlayRole>MARKETING MANAGER</OverlayRole>
                                    <OverlayDesc>Zummia has been very passionate about cryptocurrencies and block...</OverlayDesc>
                                    <ViewDetailBtn onClick={()=>viewDetail(6)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={jamesAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>JAMES</MemberName>
                            <MemberRole>COMMUNITY</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>JAMES</OverlayName>
                                    <OverlayRole>COMMUNITY</OverlayRole>
                                    <OverlayDesc>James Have 2 years dive into cryptocurrency universe and get lesson to manage...</OverlayDesc>
                                    <ViewDetailBtn  onClick={()=>viewDetail(7)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={maxAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>MAX</MemberName>
                            <MemberRole>BLOCKCHAIN  DEV</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>MAX</OverlayName>
                                    <OverlayRole>BLOCKCHAIN  DEV</OverlayRole>
                                    <OverlayDesc>Max is a Full-Stack Dev, With 3 years of web development and extensive knowledge...</OverlayDesc>
                                    <ViewDetailBtn onClick={()=>viewDetail(8)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={combyAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>COMBY</MemberName>
                            <MemberRole>UNITY DEV</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>COMBY</OverlayName>
                                    <OverlayRole>UNITY DEV</OverlayRole>
                                    <OverlayDesc>Comby is an Unity Developer with 4 years of experience in the game developing indu...</OverlayDesc>
                                    <ViewDetailBtn onClick={()=>viewDetail(9)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 

                        <TeamCard className="teamcard">   
                            <MemberAvatar src={jodhiAvatar}>                                
                            </MemberAvatar>                                      
                            <MemberName>JODHI FATRIA</MemberName>
                            <MemberRole>UI/UX</MemberRole>
                            <CardOverLayer className="overlay">
                                <OverLayer>
                                    <OverlayName>JODHI FATRIA</OverlayName>
                                    <OverlayRole>UI/UX</OverlayRole>
                                    <OverlayDesc>Jodhi is an expert in UI/UX design with 2 years of experience. He has imp...</OverlayDesc>
                                    <ViewDetailBtn onClick={()=>viewDetail(10)}>DETAIL &gt;&gt;</ViewDetailBtn>
                                </OverLayer>
                            </CardOverLayer>
                        </TeamCard> 
                         
                    </TeamLayer>
                </Content>
            </ContentLayer>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Member Detail"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >                
                <ModalWrapper>
                    <ModalContent>
                        <ModalHeaderLayer>
                            <CloseButton onClick={closeModal} src={XBtnImg}></CloseButton>
                        </ModalHeaderLayer>
                        <ModalContentLayer>
                            <LBtnLayer>
                                <ImgButton  onClick={decreaseNumber}  src={LBtnImg}></ImgButton>  
                            </LBtnLayer>
                            <MLayer>
                                {
                                    pageNumber == 1 ? (
                                    <>
                                        <MAvatar src={axtonAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>AXTON RALLEY</MName>
                                            <MRole>FOUNDER</MRole>
                                            <MText>
                                                Axton has over 4 years of experience in the IT industry, 2 years as a manager in some of the largest IT companies in Indonesian
                                            </MText>
                                        </MContentLayer>
                                    </>
                                    ): pageNumber == 2 ? (<>
                                        <MAvatar src={andrewAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>ANDREW VAN</MName>
                                            <MRole>FOUNDER</MRole>
                                            <MText>
                                                Andrew is an experienced developer working in crypto project development, design and system administration with a passion for automation and efficiency.
                                            </MText>
                                        </MContentLayer>
                                    </>) : pageNumber == 3 ? (<>
                                        <MAvatar src={alfanAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>ALFAN F</MName>
                                            <MRole>CO-FOUNDER</MRole>
                                            <MText>
                                                Alfan is an experience developer working in project development, 1+ years as start-up founder. cryptocurrecy advocate and research professional with keen interest in DeFi and NFT projects.
                                                2+ years in blockchain development and crypto investment
                                            </MText>
                                        </MContentLayer>
                                    </>)  : pageNumber == 4 ? (<>
                                        <MAvatar src={taufikAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>TAUFIK KURNIA</MName>
                                            <MRole>2D/3D DESIGN</MRole>
                                            <MText>
                                                Taufik has studied in Japan for 1 year as a research student and got a JASSO scholarship. 
                                                Now, he studies in Kanazawa university as a master student. In Japan, taufik also studied about design of 2D and 3D. Now, he improves creating the design of 2D and 3D what he learns from Japan.
                                            </MText>
                                        </MContentLayer>
                                    </>)
                                     : pageNumber == 5 ? (<>
                                        <MAvatar src={fikriAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>FIKRI ARDIAN</MName>
                                            <MRole>2D/3D DESIGN</MRole>
                                            <MText>
                                            Fikri Ardian is a Graphic Designer and Animator from Indonesia, who is quite experienced. 
                                            starting from handling Branding, Photo/video Editing, illustration, Visual effects, and Animation. several times involved in a design and animation project
                                            </MText>
                                        </MContentLayer>
                                     </>)   : pageNumber == 6 ? (<>
                                        <MAvatar src={lieAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>ZUMMIA F</MName>
                                            <MRole>MARKETING MANAGER</MRole>
                                            <MText>
                                                Zummia has been very passionate about cryptocurrencies and blockchain technology since June 2015. Additionally, she has been an active trader of cryptocurrencies too since then. Her areas of interest include Decentralized Finance (DeFis), NFTs, and Metaverse. Zummia has a strong passion in coordinating translations, creating contents of writing, and managing social media in such sectors.
                                                Zummia started her job experiences in crypto space by joining 7enius (crypto marketing consultant agency) as a content writer, translator, and crypto digital marketing specialist. Zummia is a journalist and content writer at Crypto News Indonesia
                                            </MText>
                                        </MContentLayer>
                                     </>)  : pageNumber == 7 ? (<>
                                        <MAvatar src={jamesAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>JAMES</MName>
                                            <MRole>COMMUNITY</MRole>
                                            <MText>
                                                James Have 2 years dive into cryptocurrency universe and get lesson to manage community
                                                He has managed several community projects last year, one of which was RFI and have a skill to bring positive impact to community.
                                            </MText>
                                        </MContentLayer>
                                     </>) 
                                     : pageNumber == 8 ? (<>
                                        <MAvatar src={maxAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>Max</MName>
                                            <MRole>BLOCKCHAIN DEV</MRole>
                                            <MText>
                                                Max is a Full-Stack Dev, With 3 years of web development and extensive knowledge about the decentralization protocols, scalability and security, Max is a driven, creative problem solver, and a software engineer. His specialty is smart contracts and web development.
                                            </MText>
                                        </MContentLayer>
                                     </>)  : pageNumber == 9 ? (<>
                                        <MAvatar src={jamesAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>COMBY</MName>
                                            <MRole>UNITY DEV</MRole>
                                            <MText>
                                            Comby is an Unity Developer with 4 years of experience in the game developing industry for both mobile and PC Unity games. With experiences working on some  projects
                                            </MText>
                                        </MContentLayer>
                                     </>)  : (<>
                                        <MAvatar src={jodhiAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>JODHI FATRIA</MName>
                                            <MRole>UI/UX</MRole>
                                            <MText>
                                            Jodhi is an expert in UI/UX design with 2 years of experience. He has implemented many projects in diverse industries such as education, entertainment, advertising.
                                            </MText>
                                        </MContentLayer>
                                     </>) 
                                }
                                
                            </MLayer>                             
                            <RBtnLayer>
                                <ImgButton onClick={increaseNumber}  src={RBtnImg}></ImgButton>  
                            </RBtnLayer>
                        </ModalContentLayer>
                        <MobileModalContentLayer>                            
                            <MobileMLayer>
                                {
                                    pageNumber == 1 ? (
                                    <>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={axtonAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>AXTON RALLEY</MName>
                                                <MRole>FOUNDER</MRole>                                                
                                            </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                        <MText>
                                            Axton has over 4 years of experience in the IT industry, 2 years as a manager in some of the largest IT companies in Indonesian
                                        </MText>
                                        </MobileMTextLayer>
                                    </>
                                    ): pageNumber == 2 ? (<>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={andrewAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>ANDREW VAN</MName>
                                                <MRole>FOUNDER</MRole>                                            
                                            </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Andrew is an experienced developer working in crypto project development, design and system administration with a passion for automation and efficiency.
                                            </MText>
                                        </MobileMTextLayer>
                                    </>) : pageNumber == 3 ? (<>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={alfanAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>ALFAN F</MName>
                                                <MRole>CO-FOUNDER</MRole>                                                
                                            </MContentLayer>                                            
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Alfan is an experience developer working in project development, 1+ years as start-up founder. cryptocurrecy advocate and research professional with keen interest in DeFi and NFT projects.
                                                2+ years in blockchain development and crypto investment
                                            </MText>
                                        </MobileMTextLayer>
                                    </>)  : pageNumber == 4 ? (<>
                                        <MobileMAvatarLayer>
                                        <MAvatar src={taufikAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>TAUFIK KURNIA</MName>
                                            <MRole>2D/3D DESIGN</MRole>                                            
                                        </MContentLayer>                                        
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Taufik has studied in Japan for 1 year as a research student and got a JASSO scholarship. 
                                                Now, he studies in Kanazawa university as a master student. In Japan, taufik also studied about design of 2D and 3D. Now, he improves creating the design of 2D and 3D what he learns from Japan.
                                            </MText>
                                        </MobileMTextLayer>
                                    </>)
                                     : pageNumber == 5 ? (<>
                                        <MobileMAvatarLayer>
                                        <MAvatar src={fikriAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>FIKRI ARDIAN</MName>
                                            <MRole>2D/3D DESIGN</MRole>                                            
                                        </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                            Fikri Ardian is a Graphic Designer and Animator from Indonesia, who is quite experienced. 
                                            starting from handling Branding, Photo/video Editing, illustration, Visual effects, and Animation. several times involved in a design and animation project
                                            </MText>
                                        </MobileMTextLayer>
                                     </>)   : pageNumber == 6 ? (<>
                                        <MobileMAvatarLayer>
                                        <MAvatar src={lieAvatar}></MAvatar>
                                        <MContentLayer>
                                            <MName>ZUMMIA F</MName>
                                            <MRole>MARKETING MANAGER</MRole>                                            
                                        </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Zummia has been very passionate about cryptocurrencies and blockchain technology since June 2015. Additionally, she has been an active trader of cryptocurrencies too since then. Her areas of interest include Decentralized Finance (DeFis), NFTs, and Metaverse. Zummia has a strong passion in coordinating translations, creating contents of writing, and managing social media in such sectors.
                                                Zummia started her job experiences in crypto space by joining 7enius (crypto marketing consultant agency) as a content writer, translator, and crypto digital marketing specialist. Zummia is a journalist and content writer at Crypto News Indonesia
                                            </MText>
                                        </MobileMTextLayer>
                                     </>)  : pageNumber == 7 ? (<>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={jamesAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>JAMES</MName>
                                                <MRole>COMMUNITY</MRole>                                            
                                            </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                James Have 2 years dive into cryptocurrency universe and get lesson to manage community
                                                He has managed several community projects last year, one of which was RFI and have a skill to bring positive impact to community.
                                            </MText>
                                        </MobileMTextLayer>
                                     </>) 
                                     : pageNumber == 8 ? (<>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={maxAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>Max</MName>
                                                <MRole>BLOCKCHAIN DEV</MRole>                                                
                                            </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Max is a Full-Stack Dev, With 3 years of web development and extensive knowledge about the decentralization protocols, scalability and security, Max is a driven, creative problem solver, and a software engineer. His specialty is smart contracts and web development.
                                            </MText>
                                        </MobileMTextLayer>
                                     </>)  : pageNumber == 9 ? (<>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={jamesAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>COMBY</MName>
                                                <MRole>UNITY DEV</MRole>                                                
                                            </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Comby is an Unity Developer with 4 years of experience in the game developing industry for both mobile and PC Unity games. With experiences working on some  projects
                                                </MText>
                                        </MobileMTextLayer>
                                     </>)  : (<>
                                        <MobileMAvatarLayer>
                                            <MAvatar src={jodhiAvatar}></MAvatar>
                                            <MContentLayer>
                                                <MName>JODHI FATRIA</MName>
                                                <MRole>UI/UX</MRole>
                                                
                                            </MContentLayer>
                                        </MobileMAvatarLayer>
                                        <MobileMTextLayer>
                                            <MText>
                                                Jodhi is an expert in UI/UX design with 2 years of experience. He has implemented many projects in diverse industries such as education, entertainment, advertising.
                                            </MText>
                                        </MobileMTextLayer>
                                     </>) 
                                }
                                
                            </MobileMLayer>  
                            <MobleButtonLayer>
                            <LBtnLayer>
                                <ImgButton  onClick={decreaseNumber}  src={LBtnImg}></ImgButton>  
                            </LBtnLayer>                           
                            <RBtnLayer>
                                <ImgButton onClick={increaseNumber}  src={RBtnImg}></ImgButton>  
                            </RBtnLayer>
                            </MobleButtonLayer>
                        </MobileModalContentLayer>
                    </ModalContent>
                </ModalWrapper> 
            </Modal> 
        </BgContainer>
    )
}

export default OurTeam