import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const TemperatureComponent = async ({ lat, lon }) => {
  const temperatureData = await getTemperatureData(lat, lon);

  return (
    <Card>
      <h6 className='feature-name'>Current Temperature</h6>
      <div className='feature-main'>
        <Image
          className='max-w-20'
          src='/icon_tempareture.png'
          alt='rain icon'
          width={80}
          height={80}
        />
        <h3 className='feature-title'>{temperatureData?.temp}°C</h3>

        <span className='feature-name'>
          Feels Like {temperatureData?.feels_like}°C
        </span>
        <span className='feature-name'>
          Min Temp {temperatureData?.temp_min}°C
        </span>
        <span className='feature-name'>
          Max Temp {temperatureData?.temp_max}°C
        </span>
        <span className='feature-name'>
          Humidity {temperatureData?.humidity}°C
        </span>
      </div>
    </Card>
  );
};

export default TemperatureComponent;
