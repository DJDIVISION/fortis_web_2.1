import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";


import Usage from "../../svg/usage.svg";

const Section = styled.div`
    width: 100%;
    height: 145vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
        margin-top: auto;
    }
`;

const Title = styled.div`
    width: 90%;
    height: 40vh;
    display: flex;
    align-items: center;
    h1{
        font-size: 34px;
        color: white;
        font-weight: 400;
    }
`;

const FirstRow = styled.div`
    width: 60%;
    height: 10vh;
    transform: translate(30%, 0%);
    h1{
        font-size: 20px;
        color: white;
        font-weight: 400; 
    }

`;

const SecondRow = styled.div`
    width: 60%;
    height: 20vh;
    transform: translate(30%, -10%);
    h1{
        font-size: 16px;
        color: white;
        font-weight: 200; 
    }

`;

const Empty = styled.div`
    width: 100%;
    height: 35vh;
`;

const Buttons = styled.div`
    width: 80%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;




const SmartGraph = () => {
    return(
        <Section>
            <Logo><img src={Usage} alt="" /></Logo>
            <Title><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></Title>
            <FirstRow><h1>Marketing & Community Growth</h1></FirstRow>
            <SecondRow><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</h1></SecondRow>
            <Empty />
            <Buttons>
                <TopButtonSmart style={{margin: '12px 0'}}>BURN MECHANISM</TopButtonSmart>
                <BottomButtonSmart style={{margin: '12px 0'}}>STAKING REWARDS</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}


export default SmartGraph;