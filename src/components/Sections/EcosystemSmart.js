import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";



const Section = styled.div`
    max-width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    
`;

const Title = styled.div`
    width: 70%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    color: white;
    font-size: 52px;
    line-height: 55px;

`;

const Desc = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    color: white;
    font-size: 22px;
    line-height: 30px;
    font-weight: 400;
`;
const Buttons = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column;
    
    padding-left: 30px;
`;


const EcosystemSmart = () => {
    return(
        <Section>
            <Title>The Fortis ecosystem</Title>
            <Desc>Fortis is on a mission ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</Desc>
            <Buttons>
            <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
            <BottomButtonSmart>LEARN MORE</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}

export default EcosystemSmart;