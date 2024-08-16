export interface ILocation {
    message: string, 
    timestamp: number, 
    iss_position: {
        latitude: string, 
        longitude: string
    }
}