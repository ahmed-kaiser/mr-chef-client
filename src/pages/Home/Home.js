import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";
import About from "./About";
import Contact from "./Contact";
import Slider from "./Slider";
import TopServices from "./TopServices";

const Home = () => {
    useSetTitle("Home");
    useScrollTop();
    
    return (
        <>
            <Slider/>
            <TopServices />
            <About />
            <Contact />
        </>
    );
};

export default Home;