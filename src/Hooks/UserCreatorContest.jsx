import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const UserCreatorContest = () => {
    const axios = useAxiosPublic()
    const {user}= useAuth()
    const { data: contests = [], refetch, isPending: loading } = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
            const email = user.email
            console.log(email);
            const { data } = await axios.get(`/creator/contest/${email}`)
            return data
        }
    })
    return [contests, refetch, loading]
};

export default UserCreatorContest;