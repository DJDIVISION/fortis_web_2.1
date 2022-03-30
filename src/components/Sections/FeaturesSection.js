import styled from "styled-components";
import {motion} from "framer-motion";

import Icon1 from "../../images/roadmap/01.png";
import Demo from "../../svg/demo.svg";

const Section = styled.div`
    width: 75vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 38px;
        color: white;
        font-weight: 400;
        width: 35%;
        text-align: center;
        transform: translate(0, -25%);
    }
`;

const Grid = styled.div`
    display: flex;
    height: 75%;
    width: 100%;
    justify-content: space-between;
`;

const Box = styled.div`
    width: 24.5%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const BoxIcon = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    img{
        align-items: center;
    }
`;

const BoxTitle = styled.div`
    width: 80%;
    height: 12.5%;
    display: flex;
    align-items: center;
    h1{
        font-size: 20px;
        color: white;
        font-weight: 400;
    }
`;

const BoxDescription = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    align-items: center;
    h1{
        font-size: 16px;
        color: whitesmoke;
        font-weight: 400;
    }
`;



const FeaturesSection = () => {
    return(
        <Section>
            <Title><h1>Five key elements make up the Fortis App</h1></Title>
            <Grid>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Fiat On-Ramp</h1></BoxTitle>
                    <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                    <BoxTitle><img src={Demo} alt="demo" /></BoxTitle>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Fort'nomics</h1></BoxTitle>
                    <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                    <BoxTitle><img src={Demo} alt="demo" /></BoxTitle>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Debit Cards</h1></BoxTitle>
                    <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                    <BoxTitle><img src={Demo} alt="demo" /></BoxTitle>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Lending Platform</h1></BoxTitle>
                    <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                    <BoxTitle><img src={Demo} alt="demo" /></BoxTitle>
                </Box>
            </Grid>
        </Section>
    )
}

export default FeaturesSection;