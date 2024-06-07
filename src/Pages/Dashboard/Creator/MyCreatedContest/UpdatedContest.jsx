import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const UpdatedContest = ({ contest,refetch }) => {
    console.log(contest)
    const [startDate, setStartDate] = useState(new Date())
    const axiosSecure = useAxiosSecure()
    
    const {
        register,
        handleSubmit,       
        formState: { errors },
    } = useForm()

    const onSubmit = async (datas) => {
        const { Name, Description, Price, Prize, Tag, Task } = datas   

            const contestInfo = {
                ContestName: Name,
                tag: Tag,
                ContestFee: Price,
                ContestDescription: Description,
                ContestPrize: Prize,
                Task: Task,
                Deadline: startDate,             
                
            }
            console.log(contest._id);
            const { data } = await axiosSecure.put(`/update/contest/${contest._id}`, contestInfo)
            console.log(data)           
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Contest info updated`,
                    showConfirmButton: false,
                    timer: 2000
                });
                refetch()
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
                <div >

                    <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid text-start grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 bg-gray-50">
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full justify-center mb-4">
                                    <h2 className="text-2xl">Update Contest Info</h2>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Contest Name</label>
                                    <input defaultValue={contest.ContestName} {...register("Name")} type="text" placeholder="contest name" className="w-full rounded-md mt-3 h-7 pl-4 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                    {errors.Name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Contest Price</label>
                                    <input defaultValue={contest.ContestFee} {...register("Price")} type="text" placeholder="contest price" className="w-full rounded-md mt-3 h-7 pl-4 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                    {errors.Price && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Prize</label>
                                    <input defaultValue={contest.ContestPrize} {...register("Prize")} type="text" placeholder="prize" className="w-full rounded-md mt-3 h-7 pl-4 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                    {errors.Prize && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Tag</label>
                                    <select defaultValue={contest.tag} className="w-full rounded-md mt-3 h-7 pl-4 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                                        {...register("Tag")}>
                                        <option value="Image Design">Image Design</option>
                                        <option value="Article Writing">Article Writing</option>
                                        <option value="Marketing Strategy">Marketing Strategy</option>
                                        <option value="Digital Advertisement">Digital Advertisement</option>
                                        <option value="Gaming Review">Gaming Review</option>
                                        <option value="Book Review">Book Review</option>
                                        <option value="Business Idea">Business Idea</option>
                                        <option value="Movie Review">Movie Review</option>
                                    </select>
                                    {errors.gender && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm">Contest Description</label>
                                    <input defaultValue={contest.ContestDescription} {...register("Description")} type="text" placeholder="contest description" className="w-full rounded-md mt-3 h-7 pl-4 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                    {errors.Description && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm">Task Submission</label>
                                    <input defaultValue={contest.Task} {...register("Task")} type="text" placeholder="Task Submission" className="w-full rounded-md mt-3 h-7 pl-4 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                    {errors.Task && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div>
                                </div>
                                <div className="col-span-full flex gap-16 mr-20 items-center">
                                    <label className="form-control max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Pick an image</span>
                                        </div>
                                        <input {...register("Photo")} type="file" className="file-input w-full max-w-xs" />
                                    </label>
                                    <div>
                                        <div className="label">
                                            <span className="label-text">Pick a deadline</span>

                                        </div>
                                        <DatePicker selected={contest.Deadline} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                                <div className="col-span-full flex justify-between">
                                    <input className='px-7 text-white bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md gap-2'
                                        type="submit" value='Update Now' />
                                    <div className="modal-action">
                                        <a href="#" className="btn">Close</a>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

UpdatedContest.propTypes={
    contest: PropTypes.array,
    refetch:PropTypes.func
}

export default UpdatedContest;