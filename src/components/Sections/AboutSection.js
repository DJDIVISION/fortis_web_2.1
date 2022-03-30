import styled from "styled-components";
import {motion} from "framer-motion";

import Icon1 from "../../images/about/icon1.png";
import Icon2 from "../../images/about/icon2.png";
import Icon3 from "../../images/about/icon3.png";
import Eco from "../../svg/ecosystem.svg";


const Section = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    width: 888px;
    height: 977px;
    display: flex;
    flex-direction: column;
`;

const GridTitle = styled.div`
    width: 100%;
    height: 7.5%;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    padding: 20px 0px;
    h1{
        font-size : 18px;
    }
`;

const BigText = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: white;
    }
`;

const Description = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 18px;
        line-height: 30px;
        font-style: normal;
        font-weight: 400;
    }
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        color: white;
        font-size: 38px;
    }
`;

const Row = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Item = styled(motion.div)`
    width: 32%;
    height: 99%;
    float: left;
    margin: 0 1%;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    cursor: pointer;
    transition: filter 300ms;
    &:hover{
        filter: brightness(1.2);
        background: #484a4d;
    }
`;

const Icon = styled.div`
    width: 100%;
    height: 40%;

`;

const EmptyGrid = styled.div`
    width: 100%;
    height: 30%;
`;

const GridText = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    h1{
        font-size: 24px;
        color: white;
    }
`;

const AboutSection = () => {
    return(
        <Section id="movement">
            <Grid>
                <GridTitle><img src={Eco} alt="title" /></GridTitle>
                <BigText><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BigText>
                <Description><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h1></Description>
                <Title><h1>Want to learn more?</h1></Title>
                <Row>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <Icon><img src={Icon1} alt="icon1" /></Icon>
                        <EmptyGrid></EmptyGrid>
                        <GridText><h1>Fortis Roadmap</h1></GridText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <Icon><img src={Icon2} alt="icon2" /></Icon>
                        <EmptyGrid></EmptyGrid>
                        <GridText><h1>Fort'nomics</h1></GridText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <Icon><img src={Icon3} alt="icon3" /></Icon>
                        <EmptyGrid></EmptyGrid>
                        <GridText><h1>Fortis Founder</h1></GridText>
                    </Item>
                </Row>
            </Grid>
        </Section>
    )
}

export default AboutSection;