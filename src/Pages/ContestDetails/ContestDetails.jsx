import { useLoaderData } from "react-router-dom";
import { FaCalendar, FaHashtag, FaUser } from "react-icons/fa";
import moment from "moment";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";



const ContestDetails = () => {
    const [toggle, setToggle] = useState(false)
    const { user } = useAuth()
    const axios = useAxiosSecure()
    const contest = useLoaderData()
    console.log(contest)
    const { ContestName, ContestPrize, ContestFee, tag, ContestDescription, Author, AttemptedCount, ContestWinner, Deadline, Image, _id, Applied, Task } = contest

    const handleApply = async () => {
        const userInfo = {
            Name: user.displayName,
            Email: user.email,
            Photo: user.photoURL,
            payment: false
        }
        const { data } = await axios.put(`/applied/contest/${_id}`, userInfo)
        console.log(data);
        if (data.modifiedCount) {
            Swal.fire({
                title: "Successfully Added!",
                text: "Check dashboard and make the payment to participate!",
                icon: "success"
            });
            setToggle(true)
        }
    }


    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row bg-gradient-to-t from-[#3158efa1] text-black p-0 md:p-9">
                <div className="m-5 md:m-20 mt-32">
                    <h1 className="text-3xl md:text-5xl text-[#192335] font-bold font-playfair">{ContestName}</h1>
                    <h1 className="text-lg md:text-3xl font-roboto font-bold mt-7 mb-2 "><span className="text-lg md:text-3xl font-normal text-[#192335] ">Winning Prize:</span> {ContestPrize}</h1>
                    <h3 className="w-[300px] md:w-[600px]  lg:text-lg mb-5 text-[#192335] font-extralight">{ContestDescription}</h3>
                    <div className=" flex gap-16 mb-4">
                        <div className="flex items-center gap-2">
                            <FaHashtag className="text-black"></FaHashtag>
                            <div className="badge badge-secondary">{tag}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUser className="text-black"></FaUser>
                            <div className="badge badge-secondary badge-sm">{Applied.length}</div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-lg md:text-4xl font-bold"><span className="text-lg md:text-4xl font-semibold">Entry Fee:</span> ${ContestFee}</h1>
                        <h1 className="text-lg md:text-4xl font-bold"><span className="text-lg md:text-4xl font-semibold">Submission:</span>{Task}</h1>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={Author.Photo} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold font-roboto"><span className="font-normal">by </span>{Author.Name}</h3>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-7">
                        <FaCalendar></FaCalendar>
                        <h2>Deadline: <span className="font-semibold">{moment(Deadline).format('MMMM Do YYYY')}</span></h2>
                    </div>
                </div>
            </div>
            <div className="w-[380px] relative lg:absolute md:bottom-64 lg:bottom-20 md:-right-[370px] lg:right-20">
                <div className="block rounded-xl bg-white shadow-xl dark:bg-neutral-700 text-center">

                    <a href="#!">
                        <img className="rounded-t-xl" src={Image} alt="" />
                    </a>

                    <div className="p-6">

                        <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                            Entry Fee: ${ContestFee}
                        </h5>                        
                        {/* The button to open modal */}
                        {/* <label htmlFor="my_modal_6" className="btn">open modal</label>
                        <Payment contest={contest}></Payment> */}
                            {
                                !toggle?
                                <button onClick={handleApply} className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Add to Dashboard
                            </button>:
                            <button disabled className="btn">Already Applied</button>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContestDetails;