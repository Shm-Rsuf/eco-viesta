export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );

    if (!response.ok) {
      throw new Error("Faild to fetch data..");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getResolveLatLon = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }
  const locationLatLon = await getLocationLatLong(location);

  if (locationLatLon.latitude && locationLatLon.longitude) {
    let lat = locationLatLon.latitude;
    let lon = locationLatLon.longitude;

    return { lat, lon };
  }
};
