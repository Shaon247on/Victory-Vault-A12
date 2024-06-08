import { useState } from "react";
import Title from "../../../../Components/Title/Title";
import UserCreatorContest from "../../../../Hooks/UserCreatorContest";
import UserSubmitted from "./UserSubmitted";
import moment from "moment";

const ContestSubmitted = () => {
    const [contests, refetch, loading] = UserCreatorContest()
    const [winnerID, setWinnerID] = useState([])
    
    console.log(contests)
    const handleSubmission = (contest) => {
        console.log(contest);
        setWinnerID(contest)
        document.getElementById('my_modal_4').showModal()
    }
    console.log(winnerID);
    return (
        <div>

            <Title
                subTitle='All Submissions'
                mainTitle='Check & Select The Winner For Your Contest'></Title>
            <div className="space-y-6 mx-10">
                {
                    contests.map(contest =>
                        <div  key={contest._id} className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={contest.Image} alt="Movie" className="h-[300px] w-[300px]" /></figure>

                            <div className="card-body">
                                <div>
                                    <h1 className="-ml-3 -mt-3 text-[#b765e7] font-semibold">{contest.tag}</h1>
                                </div>
                                <h2 className="card-title text-3xl">{contest.ContestName}</h2>
                                <div className="flex items-center justify-between mt-3 mb-4">
                                    <p className="text-lg"><span className="font-bold">Winning Prize: </span>{contest.ContestPrize}</p>
                                    <p><span className="font-bold">Contest Expires:</span> {moment(contest.Deadline).startOf('day').fromNow()}</p>
                                </div>
                                <p className="text-gray-500 dark:text-[#b2ccd6]"><span className="text-black dark:text-[#b2ccd6] font-bold">Description:</span> {contest.ContestDescription}</p>
                                <p><span className="font-bold">Submission:</span> {contest.Task}</p>
                                <div className="mt-6 flex justify-between items-center mr-52">
                                    <div><span className="font-bold"><span className="text-black dark:text-[#b2ccd6] font-bold">Entry Fee:</span> </span><div className="badge badge-primary">${contest.ContestFee}</div></div>
                                    <div><span className="text-black dark:text-[#b2ccd6] font-bold">participated:</span> <div className="badge badge-secondary">{contest.Applied.length}</div></div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="justify-center px-6 py-4 text-white bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md items-center gap-2" onClick={() => handleSubmission(contest)}>Check Submission</button>
                                    <UserSubmitted winnerID={winnerID} refetch={refetch} key={winnerID.id}></UserSubmitted>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ContestSubmitted;