import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart} from "./Elements";

import Founder from "../../svg/founder.svg";
import FounderImg from "../../images/about/founderImg.png";
import Back from "../../images/about/BlackBG.png";


const Section = styled.div`
    width: 100%;
    height: 180vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${Back}), black;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Empty = styled.div`
    width: 80%;
    height: 20vh;
`;


const First = styled.div`
    width: 90%;
    height: 20vh;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Text = styled.div`
    width: 90%;
    height: 30vh;
    display: flex;
    align-items: center;
    line-height: 70px;
    h1{
        font-size: 58px;
        color: white;
        font-weight: 500;
    }
`;

const Desc = styled.div`
    width: 90%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 24px;
        line-height: 30px;
        font-weight: 300;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 20vh;
`;

const SmartFounder = () => {
    return(
        <Section>
            <Empty></Empty>
            <First><img src={Founder} alt="" /></First>
            <Text><h1>About Jesus Sobredo</h1></Text>
            <Desc><h1>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h1></Desc>
            <Desc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></Desc>
            <Buttons><TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart></Buttons>
        </Section>
    )
}

export default SmartFounder;