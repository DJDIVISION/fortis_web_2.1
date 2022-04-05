import styled from "styled-components";
import {motion} from "framer-motion";

import MeetTeam from "../../svg/team.svg";
import CEO from "../../svg/CEO.svg";
import CTO from "../../svg/CTO.svg";
import COO from "../../svg/COO.svg";
import FounderImg from "../../images/about/founderImg.png";
import Back from "../../images/about/BGTwo.png";


const Section = styled.div`
    width: 100%;
    height: 3000px;
    display: flex;
    flex-direction: column;
    background: url(${Back}), red;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 70vh;
    border: 1px solid white;
`;

const ImageHolder = styled.div`
    width: 100px;
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    transform: translate(-55%, 0) scaleY(0.95);
    img{
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Title = styled.div`
    width: 80%;
    height: 10vh;
    display: flex;
    align-items: center;
    img{
        transform: translate(10%, 0);
    }
`;


const SmartTeam = () => {
    return(
        <Section>
            <ImageWrapper>
                <ImageHolder><img src={FounderImg} alt="Jesus" /></ImageHolder>
            </ImageWrapper>
            <Title><img src={MeetTeam} alt="title" /></Title>
        </Section>
    )
}

export default SmartTeam;