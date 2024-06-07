import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";

const AddContest = () => {
    const {
        register,
        handleSubmit,   
        reset,     
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
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
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
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
                                <input {...register("Task", { required: true })} type="text" placeholder="Task Submission" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                                {errors.Task && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Pick a file</span>

                                    </div>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </label>
                            </div>
                        </div>
                        <input className={`justify-center px-6 py-4 text-white bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out"}  rounded-md items-center gap-2`}
                            type="submit" value='Post' />
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddContest;