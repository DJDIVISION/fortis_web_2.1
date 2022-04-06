import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";

const Section = styled.div`
    max-width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Empty = styled.div`
    width: 100%;
    height: 20%;
`;

const TopOne = styled.div`
    width: 100vw;
    height: 12.5%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: white;
    font-size: 58px;
`;

const TopTwo = styled.div`
    width: 100vw;
    height: 12.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    color: white;
    font-size: 58px;
`;

const Desc = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    font-weight: 200;
`;

const Buttons = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const HeroSmart = () => {
    return(
        <Section>
            <Empty></Empty>
            <TopOne>The Coin of</TopOne>
            <TopTwo>the people</TopTwo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</Desc>
            <Buttons>
                <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
                <BottomButtonSmart>LEARN MORE</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}

export default HeroSmart;