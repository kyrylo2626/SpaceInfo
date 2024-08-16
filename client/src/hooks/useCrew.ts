import { useQuery } from '@tanstack/react-query'
import CrewService from '../services/Crew.service'


export const useCrew = () => {

    const getCrew = useQuery({
        queryKey: ['crew'],
        queryFn: () => CrewService.getCrew(),
        select: ({ data }) => {
            console.log(data)
            const people = [] as { craft: string, name: string }[];
            data.people.forEach(item => { if (item.craft === 'ISS') people.push(item) })
            const crew = { number: people.length, people: people }
            return crew;
        }
    })

    return { getCrew }

}
