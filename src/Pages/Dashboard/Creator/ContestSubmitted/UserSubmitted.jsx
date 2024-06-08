import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import PropTypes from 'prop-types';

const UserSubmitted = ({ winnerID: contest, refetch }) => {
    const axios = useAxiosSecure()
    console.log(contest?.ContestWinner?.apply?.Email);
    const handleWinner = async (apply) => {

        const { data } = await axios.patch(`/winner/contest/${contest?._id}`, { apply })
        console.log(data);
        if (data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "WINNER",
                text: `${apply.Name} is the winner of this contest`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
            location.reload()
        }
    }

    return (
        <dialog id="my_modal_4" className="modal w-[65%] rounded-2xl">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-3xl mb-3">{contest?.ContestName}</h3>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">Select winner from bellow</p>
                    <div className="flex items-center gap-2">
                        <p>Total Submissions:</p>
                        <div className="badge badge-accent">{contest?.Applied?.length}</div>
                    </div>
                </div>
                <div className="mx-4 mt-7 space-y-10">
                    {
                        contest?.Applied?.map((apply, idx) =>
                            <div key={idx} className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="w-1/3 object-cover object-center">
                                    <img src={apply.Photo} className=" h-[150px]" />
                                </div>

                                <div className="w-2/3 p-4 md:p-4">
                                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{apply.Name}</h1>

                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Email: {apply.Email}</p>

                                    <div>
                                        <a href="" className="hover:text-blue-600 hover:underline duration-300">Click to check the Submission</a>
                                    </div>

                                    <div className="flex justify-between mt-3 item-center">
                                        {
                                            Object.keys(contest.ContestWinner).length === 0 ? <button onClick={() => handleWinner(apply)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Declare Win</button> : <button className={`btn ${apply.Email === contest?.ContestWinner?.apply?.Email ? 'bg-green-600 hover:bg-green-800 hover:text-white font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out' : ''}`}>{apply.Email === contest?.ContestWinner?.apply?.Email ? "Contest Winner" : "Un-success"}</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="px-6 py-4 text-black dark:text-white border-2 border-[#3158ef] hover:border-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md flex items-center gap-2">Close</button>
                    </form>
                </div>
            </div>
        </dialog>


    );
};


UserSubmitted.propTypes = {
    winnerID: PropTypes.object,
    refetch: PropTypes.func
}
export default UserSubmitted;