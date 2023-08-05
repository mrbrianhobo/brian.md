import useFetch from 'react-fetch-hook';
import { formatDistanceToNow } from 'date-fns'

type Checkin = {
  id: string
  timestamp: number
  name: string
  location: Location
}

type Location = {
  address: string
  city: string
  state: string
  country: string
  cc: string
  latitude: number
  longitude: number
}

const url = 'https://checkins.api.brian.md';
// const data = `{"id":"64b2fe6830ff4a08854d822b","timestamp":1689452136,"name":"Minnesota Street Projects Gallery","location":{"address":"1275 Minnesota St","city":"San Francisco","state":"CA","country":"US","latitude":37.75424739872958,"longitude":-122.38954229812218}}`
// const data = `{
//   "id": "64cb38e11c34e74e5a836425",
//   "timestamp": 1691039969,
//   "name": "Alpine Inn",
//   "location": {
//     "address": "3915 Alpine Rd",
//     "city": "Portola Valley",
//     "state": "CA",
//     "country": "United States",
//     "cc": "US",
//     "latitude": 37.382279388598356,
//     "longitude": -122.19388050808233
//   }
// }`

const LastCheckin = () => {
  const {isLoading, data, error} = useFetch<Checkin>(url);
  let time = "SOMETIME";
  let venue = "SOMEWHERE"
  let location = "THE UNIVERSE";

  if (isLoading) return "🔍 LOOKING FOR BRIAN...";
  if (error || !data ) return `🪐 LAST SEEN ${time}, ${venue} IN ${location}.`;

  console.log(data);

  time = formatDistanceToNow(new Date(data.timestamp * 1000), { addSuffix: true }).toUpperCase();
  venue = data.name.toUpperCase();
  location = data.location.cc === "US" ? data.location.city.toUpperCase() : `${data.location.city.toUpperCase()}, ${data.location.country.toUpperCase()}`;

  return (
    `📍 LAST SEEN ${time}, AT ${venue} IN ${location}.`
  )
}

export default LastCheckin;
