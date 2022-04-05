import styled from "styled-components";
import TokenomicsSmartNavBar from "../components/NavBar/TokenomicsSmartNavBar";
import {TopButtonSmart, BottomButtonSmart} from "../components/Sections/Elements";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import SmartPowered from "../components/Sections/SmartPowered";
import SmartUtility from "../components/Sections/SmartUtility";
import SmartSupply from "../components/Sections/SmartSupply";
import SmartGraph from "../components/Sections/SmartGraph";
import SmartBurn from "../components/Sections/SmartBurn";
import SmartStaking from "../components/Sections/SmartStaking";
import SmartInvestors from "../components/Sections/SmartInvestors";

import Back from "../images/tokenomics/tokenomicsSmartBG.png";

const Section = styled.div`
    width: 100vw;
    height: 8750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${Back});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
`;

const Text = styled.div`
    width: 90%;
    height: 20vh;
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
    width: 70%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 20px;
        line-height: 30px;
        font-weight: 300;
        transform: translate(5%, 0);
    }
`;

const Buttons = styled.div`
    width: 80%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 15vh;
`;

const ThirdEmpty = styled.div`
    width: 100%;
    height: 5vh;
`;

const FourthEmpty = styled.div`
    width: 100%;
    height: 75vh;
`;



const TokenomicsSmart = () => {
    return(
        <Section>
            <TokenomicsSmartNavBar />
            <Empty />
            <Text><h1>FORT'nomics</h1></Text>
            <Desc><h1>Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque. Dolor sit abetus achtum dolastro umago dobak lumbro sol abestro.</h1></Desc>
            <Buttons>
                <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
                <BottomButtonSmart>ACQUIRE FORT</BottomButtonSmart>
                <BottomButtonSmart>LEARN MORE</BottomButtonSmart>
            </Buttons>
            <SecondEmpty />
            <SmartPowered />
            <SmartUtility />
            <ThirdEmpty />
            <SmartSupply />
            <SmartGraph />
            <Empty />
            <SmartBurn />
            <FourthEmpty />
            <SmartStaking />
            <SecondEmpty />
            <SmartInvestors />
        </Section>
    )
}

export default TokenomicsSmart;