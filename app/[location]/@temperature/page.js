import NoLocationFound from "@/components/NoLocationFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolveLatLon } from "@/lib/location-info";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default TemperaturePage;
