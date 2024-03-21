import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth, router]);

  return isAuth ? <>{children}</> : null;
};

export default PrivateRoute;
