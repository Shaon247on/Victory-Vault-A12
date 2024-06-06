import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useCreator from "../Hooks/useCreator";

const CreatorRoutes = ({children}) => {
   const {user, loading} = useAuth()
   const [isCreator, isCreatorLoading] = useCreator()
   const location = useLocation()
   if(loading || isCreatorLoading){
      return <progress className="progress-secondary w-56"></progress>
   }
   if(user && isCreator){
      return children
   }
   return <Navigate state={location.pathname} to='/' replace></Navigate>
   
};

export default CreatorRoutes;