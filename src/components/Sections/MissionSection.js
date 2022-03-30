import styled from "styled-components";
import {motion} from "framer-motion";

import Whatis from "../../svg/whatis.svg";

const Section = styled.div`
    max-width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    float: left;
`;

const ColumnTitle = styled.div`
    width: 100%;
    height: 10%;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Text = styled.div`
    width: 80%;
    height: 50%;
    h1{
        color: white;
        font-size: 38px;
        font-weight: 400;
        transform: translate(0, -10%);
    }
`;

const ButtonHolder = styled.div`
    width: 40%;
    height: 30%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
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
    text-shadow: black -1px 2px, black -2px 2px;
    cursor: pointer;
`;

const BottomButton = styled(motion.div)`
    width: 250px;
    height: 60px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(22px);
    border-radius: 100px;
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px;
    cursor: pointer;
`;



const MissionSecion = () => {
    return(
        <Section>
            <Column></Column>
            <Column>
                <ColumnTitle><img src={Whatis} alt="title" /></ColumnTitle>
                <Text><h1>Fortis is on a mission ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</h1></Text>
                <ButtonHolder>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><TopButton>JOIN THE MOVEMENT</TopButton></motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><BottomButton>LEARN MORE</BottomButton></motion.div>
                </ButtonHolder>
            </Column>
        </Section>
    )
}

export default MissionSecion;