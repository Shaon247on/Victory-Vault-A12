import axios from "axios";
import { useEffect, useState } from "react";
import ContestCard from "./ContestCard";
import Title from "../../../Components/Title/Title";

const PopularContestCards = () => {
    const [contests, setContests] = useState()
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('contestData.json')
            console.log(data)
            setContests(data)
        }
        getData()
    }, [])
    return (
        <div>
            <Title 
            subTitle='Popular Contests'
            mainTitle='Join the most exciting and rewarding challenges'

            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    contests.map((contest, idx) => <ContestCard key={idx} contest={contest}></ContestCard>)
                }
            </div>
        </div>
    );
};

export default PopularContestCards;