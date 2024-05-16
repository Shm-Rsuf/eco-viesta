import { getLocations } from "./location-util";

export async function GET() {
  const location = await getLocations();

  return Response.json(location);
}
