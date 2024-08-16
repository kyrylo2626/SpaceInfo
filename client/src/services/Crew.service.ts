import axios from 'axios'
import { ICrew } from '../interfaces/Crew.interface'


class CrewService {

    private URL = import.meta.env.VITE_CREW;

    async getCrew() { return axios.get<ICrew>(this.URL) }

}

export default new CrewService();