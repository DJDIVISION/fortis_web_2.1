import styled from "styled-components";
import {motion} from "framer-motion";

import Gateway from "../../svg/gateway.svg";

const Section = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled.div`
    width: 40%;
    height: 100%;
`;

const Title = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    img{
        transform: translate(10%, 0) scale(1.2);
    }
`;

const Text = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    h1{
        color: white;
        font-weight: 400;
        font-size: 64px;
        line-height: 60px;

    }
`;

const Description = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    h1{
        font-size: 20px;
        font-weight: 400;
        color: white;
        width: 70%;
    }
`;

const GatewaySection = () => {
    return(
        <Section>
            <Column>
                <Title><img src={Gateway} alt="" /></Title>
                <Text><h1>Accept crypto withnin minutes</h1></Text>
                <Description><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></Description>
            </Column>
            <Column></Column>
        </Section>
    )
}

export default GatewaySection;