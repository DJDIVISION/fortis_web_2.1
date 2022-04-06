import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";


import Usage from "../../svg/usage.svg";

const Section = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
        
    }
`;

const Title = styled.div`
    width: 90%;
    height: 225px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: white;
    font-weight: 400;
`;

const FirstRow = styled.div`
    width: 60%;
    height: 50px;
    transform: translate(30%, 100%);
    font-size: 20px;
    color: white;
    font-weight: 400; 

`;

const SecondRow = styled.div`
    width: 60%;
    height: 100px;
    transform: translate(30%, 55%);
    font-size: 16px;
    color: white;
    font-weight: 200; 

`;

const Empty = styled.div`
    width: 100%;
    height: 375px;
`;

const Buttons = styled.div`
    width: 80%;
    height: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;




const SmartGraph = () => {
    return(
        <Section>
            <Logo><img src={Usage} alt="" /></Logo>
            <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Title>
            <FirstRow>Marketing & Community Growth</FirstRow>
            <SecondRow>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</SecondRow>
            <Empty />
            <Buttons>
                <TopButtonSmart style={{margin: '12px 0'}}>BURN MECHANISM</TopButtonSmart>
                <BottomButtonSmart style={{margin: '12px 0'}}>STAKING REWARDS</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}


export default SmartGraph;