import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title/Title";
import ContestCard from "../Home/PopularContestCards/ContestCard";
import { Link } from "react-router-dom";
import ButtonOutline from "../../Components/Button/ButtonOutline";
import useApprovedContest from "../../Hooks/useApprovedContest";
import { useState } from "react";

const AllCourses = () => {
    const [contests] = useApprovedContest()
    const [count, setCount] = useState(6)
    const [toggle, setToggle] =useState(false)
    console.log(contests);
    const handleViewMore = ()=>{
        setCount(count + 3)
        if(count >= contests.length){
            setToggle(true)
        }
    }
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
                    contests.slice(0,count).map((contest, idx) => <ContestCard key={idx} contest={contest}></ContestCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <Link to='/allCourses'><ButtonOutline onClick={handleViewMore} style={`${toggle? "hidden": ''}`} text='View More'></ButtonOutline></Link>
            </div>
        </div>
    );
};

export default AllCourses;