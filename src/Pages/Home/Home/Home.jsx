import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularContestCards from "../PopularContestCards/PopularContestCards";

const Home = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>VictoryVault || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularContestCards></PopularContestCards>
        </div>
    );
};

export default Home;