import NoLocationFound from "@/components/NoLocationFound";
import WindComponent from "@/components/WindComponent";
import { getResolveLatLon } from "@/lib/location-info";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default WindPage;
