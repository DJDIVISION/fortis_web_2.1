import styled from "styled-components";
import RoadmapSmartNavBar from "../components/NavBar/RoadmapSmartNavBar";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import Back from "../images/roadmap/roadmapSmartBG.png";

const Section = styled.div`
    width: 100vw;
    height: 8500px;
    display: flex;
    flex-direction: column;
    background: url(${Back}), black;
    background-size: cover;
`;

const RoadmapSmart = () => {
    return(
        <Section>
            <RoadmapSmartNavBar />
        </Section>
    )
}

export default RoadmapSmart;