import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
    const { email, token, id } = useSelector((state: RootState) => state.auth);
    return {
        isAuth: !!id,
        email,
        token,
        id,
    };
};

export default useAuth