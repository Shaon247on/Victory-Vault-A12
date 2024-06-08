import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const imageHostingkey = import.meta.env.VITE_PHOTO_HOSTING_KEY
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingkey}`
const AddContest = () => {
    const [startDate, setStartDate] = useState(new Date())
    const axios = useAxiosPublic()
    const axiosSecure = useAxiosSecure() 
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { Name, Description, Price, Prize, Tag, Task } = data
        const image = { image: data.Photo[0] }
        console.log(data, image, startDate)
        const res = await axios.post(imageHostingApi, image, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        if (res.data.success) {
            const photoUrl = res.data.data.display_url

            const contest = {
                ContestName: Name,
                tag: Tag,
                ContestFee: Price,
                Image: photoUrl,
                AttemptedCount: 0,
                ContestWinner:{},
                ContestDescription: Description,
                ContestPrize: Prize,
                Task: Task,
                Deadline:startDate,
                Author: {
                    Name: user.displayName,
                    Email: user.email,
                    Photo: user.photoURL
                },
                Approval: false
            }
            const {data} = await axiosSecure.post('/contest',contest)
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Contest publish request send successfully`,
                    showConfirmButton: false,
                    timer: 2000
                  });
                  reset()
            }
        }



        reset()
    }
    return (
        <div>
            <Title
                mainTitle='Set the Stage for Exciting Challenges'
                subTitle='Create a New Contest'
            ></Title>
            <section className="p-6 dark:bg-gray-800 bg-gray-100 dark:text-gray-50 text-gray-900">
                <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-semibold">Contest Information</p>
                            <p className="text-xs">Recheck everything before subletting. After &ldquo;<span className="font-bold">Author</span>&apos;s&ldquo; approve your contest will be hosted.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Contest Name</label>
                                <input {...register("Name", { required: true })} type="text" placeholder="contest name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                {errors.Name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Contest Price</label>
                                <input {...register("Price", { required: true })} type="text" placeholder="contest price" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                {errors.Price && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Prize</label>
                                <input {...register("Prize", { required: true })} type="text" placeholder="prize" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                {errors.Prize && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Tag</label>
                                <select className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                                    {...register("Tag", { required: true })}>
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
                                <input {...register("Description", { required: true })} type="text" placeholder="contest description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                {errors.Description && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Task Submission</label>
                                <input defaultValue='Google Driver Link' {...register("Task", { required: true })} type="text" placeholder="Task Submission" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                {errors.Task && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div>
                            </div>
                            <div className="col-span-full flex justify-between mr-20 items-center">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Pick an image</span>
                                    </div>
                                    <input {...register("Photo", { required: true })} type="file" className="file-input w-full max-w-xs" />
                                </label>
                                <div>
                                    <div className="label">
                                        <span className="label-text">Pick a deadline</span>

                                    </div>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                        </div>
                        <input className='justify-center px-6 py-4 text-white bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out"}  rounded-md items-center gap-2'
                            type="submit" value='Send Request' />
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddContest;