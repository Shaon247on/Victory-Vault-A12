import { Helmet } from "react-helmet-async";
import useContest from "../../Hooks/useContest";
import Title from "../../Components/Title/Title";
import ContestCard from "../Home/PopularContestCards/ContestCard";
import { Link } from "react-router-dom";
import ButtonOutline from "../../Components/Button/ButtonOutline";

const AllCourses = () => {
    const [contests] = useContest()
    console.log(contests);
    return (
        <div className="mt-8">
            <Helmet>
                <title>VictoryVault || All Courses</title>
            </Helmet>            
            <Title
                subTitle='Winning Zone Rewards Await!'
                mainTitle='Join the Thrill, Test Your Skills, and Win Big in Our Exciting Array of Contests!'
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    contests.map((contest, idx) => <ContestCard key={idx} contest={contest}></ContestCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <Link to='/allCourses'><ButtonOutline text='View More'></ButtonOutline></Link>
            </div>
        </div>
    );
};

export default AllCourses;