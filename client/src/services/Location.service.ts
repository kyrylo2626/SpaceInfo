import axios from 'axios'
import { ILocation } from '../interfaces/Location.interface'


class LocationService {

    private URL = import.meta.env.VITE_LOCATION;

    async getLocation() { const res = axios.get<ILocation>(this.URL);
                        res.then(response => console.log(response)).catch(error => console.error(error));
                         axios.get('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response)).catch(error => console.error('Error:', error));
                        return res}

}

export default new LocationService();
