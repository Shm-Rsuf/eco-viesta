import AQIComponent from "@/components/AQIComponent";

const AqiPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AQIComponent lat={latitude} lon={longitude} />;
};

export default AqiPage;
