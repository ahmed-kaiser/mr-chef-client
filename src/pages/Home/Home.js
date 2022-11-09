import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";
import Slider from "./Slider";
import TopServices from "./TopServices";

const Home = () => {
    useSetTitle("Home");
    useScrollTop();
    
    return (
        <>
            <Slider/>
            <TopServices />
        </>
    );
};

export default Home;