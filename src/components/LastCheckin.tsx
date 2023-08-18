import useFetch from "react-fetch-hook";
import { formatDistanceToNow } from "date-fns";

type Checkin = {
  id: string;
  timestamp: number;
  name: string;
  location: Location;
};

type Location = {
  address: string;
  city: string;
  state: string;
  country: string;
  cc: string;
  latitude: number;
  longitude: number;
};

const url = "https://checkins.api.brian.md";

const LastCheckin = () => {
  const { isLoading, data, error } = useFetch<Checkin>(url);
  let time = "SOMETIME";
  let venue = "SOMEWHERE";
  let location = "THE UNIVERSE";

  if (isLoading) return "🔍 LOOKING FOR BRIAN...";
  if (error || !data) return `🪐 LAST SEEN ${time}, ${venue} IN ${location}.`;

  console.log(data);

  time = formatDistanceToNow(new Date(data.timestamp * 1000), {
    addSuffix: true,
  }).toUpperCase();
  venue = data.name.toUpperCase();
  location =
    data.location.cc === "US"
      ? data.location.city.toUpperCase()
      : `${data.location.city.toUpperCase()}, ${data.location.country.toUpperCase()}`;

  return `📍 LAST SEEN ${time}, AT ${venue} IN ${location}.`;
};

export default LastCheckin;
