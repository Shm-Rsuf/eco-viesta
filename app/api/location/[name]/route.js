import { getLocationByName } from "../location-util";

export async function GET(request, { params }) {
  const locationNameData = await getLocationByName(params?.name);

  return Response.json(locationNameData);
}
