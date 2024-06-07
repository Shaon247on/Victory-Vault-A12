import Swal from "sweetalert2";
import Title from "../../../../Components/Title/Title";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import moment from "moment";
import { RotatingSquare } from "react-loader-spinner";
import { Link } from "react-router-dom";
import UserCreatorContest from "../../../../Hooks/UserCreatorContest";
import UpdatedContest from "./UpdatedContest";

const MyCreatedContest = () => {
    const [contests, refetch, loading] = UserCreatorContest()
    console.log(contests);
    const axios = useAxiosSecure()

    const handleDeleteContest = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteItem = async () => {
                    const { data } = await axios.delete(`/contest/${id}`)
                    console.log(data)
                    refetch()
                }
                deleteItem()
                Swal.fire({
                    title: "Deleted!",
                    text: "Contest has been deleted.",
                    icon: "success"
                });
            }
        });
    }
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
        <div className="pt-7">
            <Title subTitle='My Created Contests' mainTitle={'Manage Your Created Contests'}></Title>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-700 bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">No.</th>
                                <th className="p-3">Contest Name</th>
                                <th className="p-3">Prize & Deadline</th>
                                <th className="p-3">Short Description</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Edit</th>
                                <th className="p-3 text-right">Delete</th>
                                <th className="p-3 text-right">Submission</th>
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
                                            <p>{contest.ContestName}</p>
                                            <p className="dark:text-gray-400 text-gray-600">Fee: ${contest.ContestFee}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.ContestPrize}</p>
                                            <p className="dark:text-gray-400 text-gray-600"><span className="text-gray-400 dark:text-gray-600 font-medium">Deadline:</span> {moment(contest.Deadline).format('MMMM Do YYYY')}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.ContestDescription.slice(0, 40)}...</p>
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
                                        <td className="p-3 text-right">
                                            {
                                                !contest.Approval ?
                                                    <>
                                                        <a href="#my_modal_8" className="btn bg-[#3158ef] text-white">Edit</a>
                                                        <UpdatedContest key={contest._id} refetch={refetch} contest={contest}></UpdatedContest>
                                                    </> :
                                                    <button disabled className="btn">Edit</button>
                                            }
                                        </td>
                                        <td className="p-3 text-right">
                                            {
                                                !contest.Approval ? <button onClick={() => handleDeleteContest(contest._id)} className="btn"><FaTrash className="text-red-600 text-lg"></FaTrash></button> :
                                                    <button disabled className="btn"><FaTrash className=" text-lg"></FaTrash></button>
                                            }
                                        </td>
                                        <td className="p-3 text-right">
                                            <Link href="#my_modal_8" className="btn">View</Link>
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

export default MyCreatedContest;