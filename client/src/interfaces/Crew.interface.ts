export interface ICrew {
    message: string,
    number: number,
    people: [ { name: string, craft: string } ]
}

export interface IISSCrew extends Pick<ICrew, 'number' | 'people'> {}