import { RotatingSquare } from "react-loader-spinner";
import useApplied from "../../../../../Hooks/useApplied";
import moment from "moment";
import Title from "../../../../../Components/Title/Title";
import useAuth from "../../../../../Hooks/useAuth";

const ParticipatedContest = () => {
    const [contests, refetch, loading] = useApplied()
    const { user } = useAuth()
    console.log(contests);
    if (loading) {
        return <div className="flex justify-center items-center">
            <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#3158ef"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    return (
        <div>
            
            <Title
                subTitle='Participated Contest'
                mainTitle='Check All The Participated Contest Here'
            ></Title>
            <h1 className=" text-2xl font-bold mx-6"><span>Applied contest: </span><div className="badge badge-accent">{contests.length}</div></h1>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-700 bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">No.</th>
                                <th className="p-3">Creator Name</th>
                                <th className="p-3">Contest Name</th>
                                <th className="p-3">Prize & Deadline</th>
                                <th className="p-3">Payment</th>
                                <th className="p-3">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contests.map((contest, idx) =>
                                    <tr key={contest._id} className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 dark:bg-gray-900 bg-gray-50">
                                        <td className="p-3">
                                            <p>{idx + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.Author.Name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.ContestName}</p>
                                            <p className="dark:text-gray-400 text-gray-600">Fee: ${contest.ContestFee}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.ContestPrize}</p>
                                            <p className="dark:text-gray-400 text-gray-600"><span className="text-gray-400 dark:text-gray-600 font-medium">Deadline:</span> {moment(contest.Deadline).format('MMMM Do YYYY')}</p>
                                        </td>
                                        <td className="p-3">
                                            {
                                                contest.Approval ?
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-[#3158ef] dark:text-gray-900 text-gray-50">
                                                        <span>Approved</span>
                                                    </span> :
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-[#b765e7]  dark:text-gray-900 text-gray-50">
                                                        <span>Pending</span>
                                                    </span>
                                            }
                                        </td>
                                        <td className="p-3">
                                            {/* {
                                                user.email === contest.ContestWinner.apply.Email ?
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-[#3158ef] dark:text-gray-900 text-gray-50">
                                                        <span>Winner</span>
                                                    </span> :
                                                    <div>
                                                        {
                                                        Object.keys(contest.ContestWinner).length === 0 ? <span className="px-3 py-1 font-semibold rounded-md bg-[#3158ef] dark:text-gray-900 text-gray-50">
                                                            <span>Pending</span>
                                                        </span> :
                                                            <span className="px-3 py-1 font-semibold rounded-md bg-[#3158ef] dark:text-gray-900 text-gray-50">
                                                                <span>Un-success</span>
                                                            </span>
                                                    }
                                                    </div>
                                            } */}
                                            {
                                                Object.keys(contest.ContestWinner).length === 0 ? <span className="px-3 py-1 font-semibold rounded-md bg-[#3158ef] dark:text-gray-900 text-gray-50">
                                                    <span>Pending</span>
                                                </span> :
                                                    <>
                                                        {
                                                            user.email === contest.ContestWinner.apply.Email ?
                                                                <span className="px-3 py-1 font-semibold rounded-md bg-green-600 dark:text-gray-900 text-gray-50">
                                                                    <span>Winner</span>
                                                                </span> : <span className="px-3 py-1 font-semibold rounded-md bg-gray-600 dark:text-gray-900 text-gray-50">
                                                                    <span>Un-success</span>
                                                                </span>
                                                        }
                                                    </>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ParticipatedContest;