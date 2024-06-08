import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useApplied = () => {
    const axios = useAxiosPublic()
    const {user}= useAuth()
    const { data: contests = [], refetch, isPending: loading } = useQuery({
        queryKey: ['applied'],
        queryFn: async () => {
            const { data } = await axios.get(`/applied/contest/${user.email}`)
            return data
        }
    })
    return [contests, refetch, loading]
};

export default useApplied;