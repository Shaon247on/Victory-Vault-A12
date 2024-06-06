import { useForm } from "react-hook-form";
import ButtonFilled from "../../../../Components/Button/ButtonFilled";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AdminComment = ({id}) => {
    console.log(id)
    const axios = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async(datas) => {
        const comment = datas.comment
        const {data} = await axios.patch(`/contest/comment/${id}`, {comment})
        Swal.fire({
            title: "Done!",
            text: "You comment posted!",
            icon: "success"
          });
        reset()
        console.log(data);
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="space-y-2 mt-4 flex flex-col items-start">
                                <label className="text-sm dark:text-white">Your Comment</label>
                                <textarea type="text" placeholder="your comment" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
                                    {...register("comment", { required: true })}                                    
                                />
                                {errors.comment?.type === "required" && (
                                    <p className="text-red-600">name is required</p>
                                )}
                            </div>
                            <ButtonFilled  text="Post Comment" style='mt-5 w-[40%] text-center'></ButtonFilled>
                        </div>
                    </form>
                    <div className="modal-action">
                        <a href="#" className="btn">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminComment;