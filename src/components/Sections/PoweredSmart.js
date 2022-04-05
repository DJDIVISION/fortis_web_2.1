import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";


const Section = styled.div`
    max-width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 70px;
    height: 20%;
    h1{
        color: white;
        font-size: 52px;
        font-weight: 400;
    }
`;

const Desc = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 24px;
        line-height: 35px;
        font-weight: 400;
    }
`;

const Buttons = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;


const PoweredSmart = () => {
    return(
        <Section>
            <Title><h1>Powered by Fort</h1></Title>
            <Desc><h1>Fortis is on a mission ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</h1></Desc>
            <Buttons>
                <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
                <BottomButtonSmart>LEARN MORE</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}

export default PoweredSmart;