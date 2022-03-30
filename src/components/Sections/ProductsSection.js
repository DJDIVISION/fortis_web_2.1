import styled from "styled-components";
import {motion} from "framer-motion";

import Products from "../../svg/products.svg";
import Box1 from "../../images/roadmap/box1.png";
import Box2 from "../../images/roadmap/box2.png";
import Box3 from "../../images/roadmap/box3.png";


const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopGrid = styled.div`
    width: 70%;
    height: 30vh;
`;

const Title = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 85%;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    
    h1{
        color: white;
        font-size: 38px;
        font-weight: 400;
        width: 70%;
    }
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
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
    margin-left: auto;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px;
    cursor: pointer;
`;

const BottomGrid = styled.div`
    width: 70%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Box = styled.div`
    width: 31%;
    height: 100%;
    background: red;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    &::before{
       content: "";
       width: 100%;
       height: 3px;
       background: white;
       transition: width 0.3s ease;
       transform: translate(0, 100%);
    }
`;


const ProductsSection = () => {
    return(
        <Section>
            <TopGrid>
                <Title><img src={Products} alt="title" /></Title>
                <Wrapper>
                    <ColumnLeft>
                    <h1>The Fortis ecosystem is comprised of 3 primary products</h1>
                    </ColumnLeft>
                    <ColumnRight>
                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><BottomButton>2022 ROADMAP</BottomButton></motion.div>
                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><BottomButton>FORT'NOMICS</BottomButton></motion.div>
                    </ColumnRight>
                </Wrapper>
            </TopGrid>
            <BottomGrid>
                <Box style={{backgroundImage: `url(${Box1})`}}></Box>
                <Box style={{backgroundImage: `url(${Box2})`}}></Box>
                <Box style={{backgroundImage: `url(${Box3})`}}></Box>
            </BottomGrid>
        </Section>
    )
}

export default ProductsSection;