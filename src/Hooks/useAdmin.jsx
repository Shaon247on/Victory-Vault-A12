import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const {user} = useAuth()
    const axios = useAxiosPublic()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email,'isAdmin'],
        queryFn:async()=>{
            const res = await axios.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;