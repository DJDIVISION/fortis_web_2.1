import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {motion} from "framer-motion";
import TopSphere from "../../images/TopSphere.png";
import FortisLogo from "../../svg/logo.svg";

const Nav = styled.nav`
    width: 80vw;
    height: 55px;
    display: inline-flex;
    align-items: center;
    position: absolute;
    top: 40px;
    left: 10vw;
`;

const NavLogo = styled.div`
    height: 100%;
    width: 35%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Logo = styled.div`
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        display: block;
        object-fit: contain;
    }
`;

const Image = styled.div`
    height: 100%;
    width: 20%;
    img{
        margin-top: -55px;
    }
`;

const Links = styled.div`
    display: inline-flex;
    width: 45%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    a{
        text-decoration: none;
    }
`;

const Button = styled(motion.div)`
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50px;
    font-weight: 500;
    color: white;
    padding: 12px;
    margin: 0 5px;
    text-shadow: black -1px 2px, black -2px 2px;
    
    

`;

const Fortis = styled.h1`
    font-size: 26px;
    font-weight: 400;
    color: white;
    margin: 0 10px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;


const AboutNavBar = () => {
    return(
        <Nav>
            <NavLogo>
            <Logo><img src={FortisLogo} alt="" /></Logo>
            <Fortis>FORTIS</Fortis>
            </NavLogo>
            <Image></Image>
            <Links>
                <LinkR to="/"><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>HOME PAGE</Button></LinkR>
                <LinkR to="/about"><Button style={{border: '1px solid whitesmoke'}}>ABOUT</Button></LinkR>
                <LinkR to="/tokenomics"><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>TOKENOMICS</Button></LinkR>
                <LinkR to="/roadmap"><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ROADMAP</Button></LinkR>
            </Links>
        </Nav>
    )
}

export default AboutNavBar;

