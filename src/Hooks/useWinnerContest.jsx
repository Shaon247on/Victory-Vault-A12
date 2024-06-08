import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useWinnerContest = () => {
    const {user} = useAuth()
    const axios = useAxiosSecure()    
    const { data: winningContest = [], refetch: reload, isPending: loading } = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
            const { data } = await axios.get(`/winner/contest/${user.email}`)
            return data
        }
    })
    return [winningContest, reload, loading]
};

export default useWinnerContest;