import ContestCard from "./ContestCard";
import Title from "../../../Components/Title/Title";
import ButtonOutline from "../../../Components/Button/ButtonOutline";
import { Link } from "react-router-dom";
import useApprovedContest from "../../../Hooks/useApprovedContest";

const PopularContestCards = () => {
    const [contests,refetch, loading] = useApprovedContest()
    const sortedCards = contests.sort((a, b) => b?.Applied.length - a?.Applied.length)
    console.log(contests)

    return (
        <div>
            <Title
                subTitle='Popular Contests'
                mainTitle='Join the most exciting and rewarding challenges'
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedCards.map((contest, idx) => <ContestCard key={idx} contest={contest}></ContestCard>)
                }
            </div>
            <div className="flex items-center justify-center my-10">
                <Link to='/allCourses'><ButtonOutline text='View More'></ButtonOutline></Link>
            </div>
        </div>
    );
};

export default PopularContestCards;