import Carousel from "./carousel/Carousel";
import OngoingLive from "./ongoingLive/OngoingLive";
import SuperGuides from "./superGuides/SuperGuides";
import PriorityVirtualTreks from "./priorityVirtualTreks/PriorityVirtualTreks";
import BestSellingTrek from "./BestSellingTrek/BestSellingTrek";
import VirtualTrekDetail from "./VirtualTrekDetail/VirtualTrekDetail";
import PopularTrek from "./PopularTrek/PopularTrek";
import NormalTrek from "./NormalTrek/NormalTrek";
import Vlog from "./Vlog/Vlog";
import VlogSlider from "./VlogSlider/VlogSlider";
import Footer from "../Footer/Footer";
import ReviewSlider from "./ReviewSlider/ReviewSlider";
import Navbar from "../navbar/Navbar";

import {
  useHomeSlider,
  useGetHomeDetails,
  useTwoBlogs,
} from "../../services/WebsiteApisService";

import LoaderComp from "../LoaderComp/LoaderComp";

export default function Home() {
  const {
    isLoading: isLoadingSlider,
    isError: isErrorSlider,
    data: sliderData,
  } = useHomeSlider();
  const {
    isLoading: isLoadingHomeDetails,
    isError: isErrorHomeDetails,
    data: homeData,
  } = useGetHomeDetails();
  const {
    isLoading: isLoadingTwoBlogs,
    isError: isErrorTwoBlogs,
    data: twoBlogData,
  } = useTwoBlogs();

  if (isLoadingSlider || isLoadingHomeDetails || isLoadingTwoBlogs) {
    return <LoaderComp />;
  }

  return (
    <>
      {/* <Navbar/> */}
      <Carousel slides={sliderData?.data?.docs || []} />
      <OngoingLive />
      {/* <SuperGuides /> */}
      <PriorityVirtualTreks
        latestNormalTrek={homeData?.data?.latestNormalTrek || {}}
      />
      <BestSellingTrek
        popularNormalTrek={homeData?.data?.popularNormalTrek || {}}
      />
      <VirtualTrekDetail />
      <PopularTrek latestVirtualTrek={homeData?.data?.latestVirtualTrek} />
      <NormalTrek popularVirtualTrek={homeData?.data?.popularVirtualTrek} />
      <Vlog blogData={twoBlogData?.data?.docs} />
      <VlogSlider />
      <ReviewSlider />
    </>
  );
}
