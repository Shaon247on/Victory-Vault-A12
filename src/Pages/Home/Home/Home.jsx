import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>VictoryVault || Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;