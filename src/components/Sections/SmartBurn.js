import styled from "styled-components";
import {motion} from "framer-motion";



const Section = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 95%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-size: 48px;
        color: white;
        font-weight: 400;
    }
`;

const Desc = styled.div`
    width: 90%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 22px;
        color: white;
        font-weight: 200;
    }
`;



const SmartBurn = () => {
    return(
        <Section>
            <Title><h1>Burn Mechanism</h1></Title>
            <Desc><h1>Every month we will burn FORT and other cryptocurrencies in the pools, with the FORT ’nomics feature. All transactions will be recorded, and will be able to be seen publicly. This will be reallocated back to the active users in the ecosystem.</h1></Desc>
        </Section>
    )
}


export default SmartBurn;