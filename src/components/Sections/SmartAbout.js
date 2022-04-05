import {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import Icon1 from "../../images/about/icon1.png";
import Icon2 from "../../images/about/icon2.png";
import Icon3 from "../../images/about/icon3.png";
import Eco from "../../svg/ecosystem.svg";



const Section = styled.div`
    width: 100%;
    height: 185vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const First = styled.div`
    width: 80%;
    height: 10vh;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 80%;
    height: 70vh;
    display: flex;
    align-items: center;
    h1{
        font-size: 32px;
        color: white;
        font-weight: 500;
        
    }
`;

const Desc = styled.div`
    width: 80%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
    }
`;

const SliderTitle = styled.div`
    width: 95%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    h1{
        color: white;
        font-size: 36px;
        font-weight: 400;
    }
`;

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 40vh;
    width: 95vw;
    overflow: hidden;
    
    
    
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    height: 40vh;
    width: 95vw;
`;

const Item = styled.div`
    min-width: 300px;
    min-height: 38vh;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    //backdrop-filter: blur(22px);
    border-radius: 3px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IconHolder = styled.div`
    width: 100%;
    height: 70%;
    img{
        transform: scale(1.1) translate(5%, 15%);
    }
`;

const BoxTitle = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    align-items: center;
    h1{
        color: white;
        font-size: 28px;
        font-weight: 400;
    }
`;

const SmartAbout = () => {

    const [width, setWidth] = useState(0);
    const carroussel = useRef();

    useEffect(() => {
        //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])

    return(
        <Section>
            <First><img src={Eco} alt="" /></First>
            <Title><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></Title>
            <Desc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h1></Desc>
            <SliderTitle><h1>Want to learn more?</h1></SliderTitle>
            <Carousel ref={carroussel}>
                <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
                    <Item>
                        <IconHolder><img src={Icon1} alt="icon1" /></IconHolder>
                        <BoxTitle><h1>Fortis Roadmap</h1></BoxTitle>
                    </Item>
                    <Item>
                        <IconHolder><img src={Icon2} alt="icon2" /></IconHolder>
                        <BoxTitle><h1>Fort'nomics</h1></BoxTitle>
                    </Item>
                    <Item>
                        <IconHolder><img src={Icon3} alt="icon3" /></IconHolder>
                        <BoxTitle><h1>Fortis Founder</h1></BoxTitle>
                    </Item>
                </InnerCarousel>
            </Carousel>
        </Section>
    )
}

export default SmartAbout;