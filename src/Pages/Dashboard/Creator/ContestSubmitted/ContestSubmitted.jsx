import Title from "../../../../Components/Title/Title";
import UserCreatorContest from "../../../../Hooks/UserCreatorContest";

const ContestSubmitted = () => {
    const [contests, refetch, loading] = UserCreatorContest()
    console.log(contests)
    const { ContestName, ContestPrize, ContestFee, tag, ContestDescription, Author, AttemptedCount, ContestWinner, Deadline, Image, _id } = contests
    
    const handleWinner = ()=>{

    }
    return (
        <div>
            <Title
                subTitle='All Submissions'
                mainTitle='Check & Select The Winner For Your Contest'></Title>
            <div className="space-y-6 mx-10">
                {
                    contests.map(contest =>
                        <div key={contest._id} className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={contest.Image} alt="Movie" className="h-[300px] w-[300px]" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="justify-center px-6 py-4 text-white bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md items-center gap-2" onClick={() => document.getElementById('my_modal_4').showModal()}>Check Submission</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-3xl mb-3">{contest.ContestName}</h3>
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold text-lg">Select winner from bellow</p>
                                                <p>Total Submissions: <div className="badge badge-accent">{contest.Applied.length}</div></p>
                                            </div>
                                            <div className="mx-4 mt-7 space-y-10">
                                                {
                                                    contest.Applied.map((apply, idx) =>
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
                                                                    <button  className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Declare Win</button>
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
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ContestSubmitted;