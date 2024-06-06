import useAuth from './useAuth';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCreator = () => {
    const { user} = useAuth()
    const axios = useAxiosSecure()
   
    const { data: isCreator, isPending: isCreatorLoading } = useQuery({
        queryKey: [user?.email, 'isCreator'],
        queryFn: async () => {
            const res = await axios.get(`/users/creator/${user?.email}`)
            console.log(res.data)
            return res.data?.creator
        }
    })
    return [isCreator, isCreatorLoading]
};

export default useCreator;