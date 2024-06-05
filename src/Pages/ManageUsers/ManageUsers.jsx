import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { RiCheckDoubleLine } from "react-icons/ri";
import Title from "../../Components/Title/Title";

const ManageUsers = () => {  
    const axios = useAxiosPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get('/users')
            return data
        }
    })

    const handleDeleteUser = (user) => {
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
                    const { data } = await axios.delete(`/users/${user._id}`)
                    console.log(data)
                    refetch()
                }
                deleteItem()
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const handleMakeAdmin = user => {
        axios.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    const handleMakeCreator = user => {
        axios.patch(`/users/creator/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Contest Creator now.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    const handleMakeUser = user => {
        axios.patch(`/users/user/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an user now.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div className="flex flex-col justify-center gap-4 p-10">
            <Title
                mainTitle={'Mange All Users'}
                subTitle={'Control all users authority'}
            ></Title>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Creator</th>
                                <th>User</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? <RiCheckDoubleLine></RiCheckDoubleLine> : <button onClick={() => handleMakeAdmin(user)} className="btn bg-gradient-to-l from-[#3158ef] to-[#b765e7] text-white group"><IoIosAddCircle className="text-lg text-white group-hover:text-[#553e92] duration-300"></IoIosAddCircle></button>}
                                        </td>
                                        <td>
                                            {user?.role === 'creator' ? <RiCheckDoubleLine></RiCheckDoubleLine> : <button onClick={() => handleMakeCreator(user)} className="btn bg-gradient-to-l from-[#3158ef] to-[#b765e7] text-white group"><IoIosAddCircle className="text-lg text-white group-hover:text-[#553e92] duration-300"></IoIosAddCircle></button>}
                                        </td>
                                        <td>
                                            {user?.role === 'user' ? <RiCheckDoubleLine></RiCheckDoubleLine> : <button onClick={() => handleMakeUser(user)} className="btn bg-gradient-to-l from-[#3158ef] to-[#b765e7] text-white group"><IoIosAddCircle className="text-lg text-white group-hover:text-[#553e92] duration-300"></IoIosAddCircle></button>}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteUser(user)} className="btn"><FaTrash className="text-red-600 text-lg"></FaTrash></button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;