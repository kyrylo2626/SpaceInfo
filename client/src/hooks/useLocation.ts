import { useQuery } from '@tanstack/react-query'
import LocationService from '../services/Location.service'


export const useLocation = () => {

    const getLocation = useQuery({
        queryKey: ['location'],
        queryFn: () => LocationService.getLocation(),
        select: ({ data }) => data
    })

    return { getLocation }

}
