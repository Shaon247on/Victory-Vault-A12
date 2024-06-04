import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useContest = () => {
    const axios = useAxiosPublic()
    const { data: contests = [], refetch, isPending: loading } = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
            const { data } = await axios.get('/contest')
            return data
        }
    })
    return [contests, refetch, loading]
};

export default useContest;