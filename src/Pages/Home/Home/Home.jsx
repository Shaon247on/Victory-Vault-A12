import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularContestCards from "../PopularContestCards/PopularContestCards";
import Slider from "../Slider/Slider";
import CreatorSlider from "../CreatorSlider/CreatorSlider";

const Home = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>VictoryVault || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularContestCards></PopularContestCards>
            <Slider></Slider>
            <CreatorSlider></CreatorSlider>
        </div>
    );
};

export default Home;