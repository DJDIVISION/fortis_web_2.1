import styled from "styled-components";
import NavBar from "../components/NavBar";
import {motion} from "framer-motion";
import MissionSection from "../components/Sections/MissionSection";
import EcosystemSection from "../components/Sections/EcosystemSection";
import PoweredSection from "../components/Sections/PoweredSection";

import BG from "../images/home/HomeBG.png";



const Section = styled.div`
    width: 100%;
    height: 4400px;
    background: url(${BG}), black;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Box = styled.div`
    width: 50%;
    height: 60vh;
    transform: translate(50%, 60%);
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const TopTitle = styled.div`
    width: 100%;
    height: 15%;
    font-size: 72px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-5%, -5%);
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const BottomTitle = styled.div`
    width: 100%;
    height: 15%;
    font-size: 72px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(10%, 0);
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const Description = styled.div`
    width: 50%;
    height: 40%;
    color: #666666;
    font-size: 18px;
    display: flex;
    align-items: center;
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

const Empty = styled.div`
    width: 100%;
    height: 90vh;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 40vh;
`;

const ThirdEmpty = styled.div`
    width: 100%;
    height: 65vh;
`;

const Home = () => {
    return(
        <Section>
            <NavBar />
            <Box>
            <TopTitle>The coin of</TopTitle>
                <BottomTitle>the people</BottomTitle>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</Description>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><TopButton>JOIN THE MOVEMENT</TopButton></motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><BottomButton>LEARN MORE</BottomButton></motion.div>
            </Box>
            <Empty />
            <MissionSection />
            <SecondEmpty />
            <EcosystemSection />
            <ThirdEmpty />
            <PoweredSection />
        </Section>
    )
}

export default Home;