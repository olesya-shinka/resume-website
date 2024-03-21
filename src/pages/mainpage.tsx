import PrivateRoute from "@/components/PrivateRoute";
import { FeaturedWorks } from "@/components/featuredWorks";
import { Footer } from "@/components/footer";
import { InfoCandidate } from "@/components/infoCandidate";
import { Nav } from "@/components/nav";
import { Posts } from "@/components/posts";

export const MainPage = () => {
  return (
    <>
      <PrivateRoute>
        <Nav />
        <InfoCandidate />
        <Posts />
        <FeaturedWorks />
        <Footer />
      </PrivateRoute>
    </>
  );
};

export default MainPage;
