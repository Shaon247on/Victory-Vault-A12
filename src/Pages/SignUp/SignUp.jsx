import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import ButtonFilled from '../../Components/Button/ButtonFilled';
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { signUp, updateUserProfile } = useAuth()

    const onSubmit = (data) => {
        console.log(data)
        const { name, email, photo, password } = data

        signUp(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(name, photo)
                    .then(() => {
                        const userInfo = {
                            email: email,
                            name: name
                        }
                        console.log(userInfo)
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the data base');
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Successfully Signed Up",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })


                    })
            })

    }
    return (
        <div>
            <Helmet>
                <title>VictoryVault || Sign Up</title>
            </Helmet>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
                <p className="text-sm text-center dark:text-gray-400 text-gray-600">Already have an Account?
                    <Link to='/login' href="#" rel="noopener noreferrer" className="hover:underline  text-black dark:text-gray-400 hover:text-blue-600 hover:dark:text-blue-600 duration-200">Login here</Link>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Name</label>
                            <input type="text" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">name is required</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input type="email" placeholder="your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <p className="text-red-600">email is required</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Photo</label>
                            <input type="text" placeholder="photoURL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
                                {...register("photo", { required: true, pattern: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif|bmp|webp|svg)$/ })}
                            />
                            {errors.photo?.type === "required" && (
                                <p className="text-red-600">photoURL is required</p>
                            )}
                            {errors.photo?.type === "pattern" && (
                                <p className="text-red-600">Given link is not an photo. </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input name="password" {...register("password", {
                                required: true,
                                maxLength: 20,
                                minLength: 8,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{1,}).+$/
                            })} type="password" placeholder="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 border-gray-300 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800 focus:border-violet-400 focus:dark:border-violet-600" />
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password should be more then 8 letter</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password should be less then 20 letter</p>
                            )}
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">password is required</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">password must have one uppercase, one lowercase, one number and one special character</p>
                            )}
                        </div>
                    </div>
                    <ButtonFilled text="login" style='w-full text-center'></ButtonFilled>
                </form>
            </div>
        </div>
    );
};

export default SignUp;