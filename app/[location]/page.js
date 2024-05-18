import LocationInfo from "@/components/LocationInfo";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolveLatLon } from "@/lib/location-info";

const page = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default page;
