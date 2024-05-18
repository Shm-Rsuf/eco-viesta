import AQIComponent from "@/components/AQIComponent";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolveLatLon } from "@/lib/location-info";

const AqiPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default AqiPage;
