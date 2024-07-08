import React from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store/user";

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth: React.FC = (props: any) => {
    const router = useRouter();
    const { username } = useStore();

    React.useEffect(() => {
      if (!username) {
        console.log(username);
        router.push("/signin");
      }
    }, [username, router]);

    if (!username) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default ProtectedRoute;
