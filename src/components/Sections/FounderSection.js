import styled from "styled-components";
import {motion} from "framer-motion";

import Founder from "../../svg/founder.svg";
import FounderImg from "../../images/about/founderImg.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 80%;
    float: left;
    
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 100%;
    float: left;    
`;

const ColumnTitle = styled.div`
    width: 100%;
    height: 10%;
    img{
        transform: scale(1.2) translate(15%, 0);

    }
`;

const Title = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    
    h1{
        font-size: 68px;
        color: white;
        line-height: 75px;
    }
`;

const Description = styled.div`
    width: 80%;
    height: 25%;
    display: flex;
    align-items: center;
    transform: translate(5%, 0);
    h1{
        font-size: 20px;
        color: white;
        font-style: normal;
        font-weight: 400;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    height: 15%;
    transform: translate(0%, 15%);
`;

const TopButton = styled(motion.div)`
    width: 250px;
    height: 60px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
    
`;

const ImageHolder = styled.div`
    width: 250px;
    height: 250px;
    background: black;
    border-radius: 50%;
    margin-top: 140px;
    margin-left: 10px;
    background-image: url(${FounderImg});
    background-size: cover;
`;


const FounderSection = () => {
    return(
        <Section>
            <ColumnLeft>
                <ColumnTitle><img src={Founder} alt="title" /></ColumnTitle>
                <Title><h1>About Jesus Sobredo</h1></Title>
                <Description><h1>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h1></Description>
                <Description><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></Description>
                <ButtonWrapper>
                    <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton>
                </ButtonWrapper>
            </ColumnLeft>
            <ColumnRight>
                <ImageHolder></ImageHolder>
            </ColumnRight>
        </Section>
    )
}

export default FounderSection;