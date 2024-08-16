import axios from 'axios'
import { ILocation } from '../interfaces/Location.interface'


class LocationService {

    private URL = import.meta.env.VITE_LOCATION;

    async getLocation() { return axios.get<ILocation>(this.URL).then(response => console.log(response)).catch(error => console.error(error)) }

}

export default new LocationService();
