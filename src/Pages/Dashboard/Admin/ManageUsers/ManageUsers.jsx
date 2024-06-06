import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
import { RiCheckDoubleLine } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import Title from "../../../../Components/Title/Title";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const ManageUsers = () => {
    const axios = useAxiosSecure()
    const [toggle, setToggle] = useState(true)
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
    const handleBlockUser = (user) => {
        console.log(user);

        Swal.fire({
            title: "Are you sure?",
            text: "You want to change user status!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                setToggle(!toggle)
                console.log('toggle', toggle);
                const { data } = await axios.patch(`/user/block/${user._id}`, { toggle })
                console.log(data)
                handleMakeUser(user)
                refetch()
                if(!toggle){
                    Swal.fire({
                        title: "Done!",
                        text: 'User has been blocked',
                        icon: "success"
                    });
                }                
                else{
                    Swal.fire({
                        title: "Done!",
                        text: 'User unblocked',
                        icon: "success"
                    });
                }
            }
        });

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
                                <th>Status</th>
                                <th>Admin</th>
                                <th>Creator</th>
                                <th>User</th>
                                <th>Action</th>
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
                                        <td>{user.Status ? 'Unblocked' : 'Blocked'}</td>
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
                                            <button onClick={() => handleBlockUser(user)} className="btn">{!user.Status? <CgUnblock className="text-red-600 text-2xl"></CgUnblock>: <MdBlock className="text-red-600 text-2xl"></MdBlock>}</button>
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