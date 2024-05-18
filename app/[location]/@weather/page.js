import NoLocationFound from "@/components/NoLocationFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolveLatLon } from "@/lib/location-info";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default WeatherPage;
