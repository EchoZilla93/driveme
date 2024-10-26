import { Redirect } from "expo-router";
import { AUTH_ROUTES } from "@/app/common/routes";

const Home = () => {
  return <Redirect href={AUTH_ROUTES.ONBOARDING} />;
};

export default Home;
