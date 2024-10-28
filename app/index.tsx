import { Redirect } from "expo-router";
import { AUTH_ROUTES, ROOT_ROUTES } from "@/app/common/routes";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={ROOT_ROUTES.HOME} />;
  }
  return <Redirect href={AUTH_ROUTES.ONBOARDING} />;
};

export default Home;
