import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const { user } = useAuth()
    const axios = useAxiosPublic()
    const { data: isUser, isPending: isisUserLoading } = useQuery({
        queryKey: [user?.email, 'user'],
        queryFn: async () => {
            const res = await axios.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.user
        }
    })
    return [isUser, isisUserLoading]
};

export default useUser;