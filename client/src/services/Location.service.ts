import axios from 'axios'
import { ILocation } from '../interfaces/Location.interface'


class LocationService {

    private URL = 'http://api.open-notify.org/iss-now.json';

    async getLocation() { return axios.get<ILocation>(this.URL) }

}

export default new LocationService();
