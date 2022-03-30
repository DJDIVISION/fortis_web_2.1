import styled from "styled-components";
import {motion} from "framer-motion";

import App from "../../svg/app.svg";

const Section = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    float: left;
`;

const Title = styled.div`
    width: 100%;
    height: 15%;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Text = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    h1{
        font-size: 68px;
        color: white;
        font-weight: 400;
        line-height: 70px;
    }
`;

const Description = styled.div`
    width: 60%;
    height: 35%;
    display: flex;
    align-items: center;
    h1{
        font-size: 20px;
        color: white;
        font-weight: 400;
        transform: translate(0, 10%);
    }
`;


const AppSection = () => {
    return(
        <Section>
            <Column></Column>
            <Column>
                <Title><img src={App} alt="title" /></Title>
                <Text><h1>Enabling seamless access to the Fortis ecosystem</h1></Text>
                <Description><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></Description>
            </Column>
        </Section>
    )
}

export default AppSection;