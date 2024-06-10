import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularContestCards from "../PopularContestCards/PopularContestCards";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>VictoryVault || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularContestCards></PopularContestCards>
            <Slider></Slider>
        </div>
    );
};

export default Home;