import styled from "styled-components";
import {motion} from "framer-motion";

import BG from "../../images/Footer.png";


const Section = styled.div`
    width: 100%;
    height: 1100px;
    background: url(${BG}), black;
    background-size: contain;
    background-repeat: no-repeat;
`;


const Footer = () => {
    return(
        <Section>

        </Section>
    )
}


export default Footer;