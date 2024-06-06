import Swal from "sweetalert2";
import Title from "../../../../Components/Title/Title";
import useContest from "../../../../Hooks/useContest";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";
import AdminComment from "./AdminComment";
import moment from "moment";

const ManageContests = () => {
    const [contests, refetch,] = useContest()
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


    const handleApproval = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approved!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteItem = async () => {
                    const { data } = await axios.patch(`/contest/${id}`)
                    console.log(data)
                    refetch()
                }
                deleteItem()
                Swal.fire({
                    title: "Approved!",
                    text: "Contest has been published",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className="pt-7">                   
            <Title subTitle='All Contests List' mainTitle={'Approve or delete the contest you find inappropriate'}></Title>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-700 dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">No.</th>
                                <th className="p-3">Creator Name</th>
                                <th className="p-3">Contest Name</th>
                                <th className="p-3">Short Description</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Action</th>
                                <th className="p-3 text-right">Action</th>
                                <th className="p-3 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contests.map((contest, idx) =>
                                    <tr key={contest._id} className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p>{idx + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.Author.Name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.ContestName}</p>
                                            <p className="text-gray-400 dark:text-gray-600">Fee: ${contest.ContestFee}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{contest.ContestPrize}</p>
                                            <p className="text-gray-400 dark:text-gray-600"><span className="text-gray-400 dark:text-gray-600 font-medium">Deadline:</span> {moment(contest.Deadline).format('MMMM Do YYYY')}</p>
                                        </td>
                                        <td className="p-3">
                                            {
                                                contest.Approval ?
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-[#3158ef] text-gray-900 dark:text-gray-50">
                                                        <span>Approved</span>
                                                    </span> :
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-[#b765e7] d text-gray-900 dark:text-gray-50">
                                                        <span>Pending</span>
                                                    </span>
                                            }
                                        </td>
                                        <td className="p-3 text-right">
                                            {
                                                contest.Approval ?
                                                    <button disabled onClick={() => handleDeleteContest(contest._id)} className="btn"><FcApprove className="text-green-600 text-2xl"></FcApprove></button> :
                                                    <button onClick={() => handleApproval(contest._id)} className="btn"><FcApprove className="text-green-600 text-2xl"></FcApprove></button>
                                            }
                                        </td>
                                        <td className="p-3 text-right">
                                            <a href="#my_modal_8" className="btn">Comment</a>
                                            <AdminComment id={contest._id}></AdminComment> 
                                        </td>
                                        <td className="p-3 text-right">
                                            <button onClick={() => handleDeleteContest(contest._id)} className="btn"><FaTrash className="text-red-600 text-lg"></FaTrash></button>
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

export default ManageContests;