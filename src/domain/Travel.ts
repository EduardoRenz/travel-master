export interface Travel {
  id: number
  title: string
  date: Date
  image: string
  concluded: boolean
  place: string
  itinerary: Activity[]
}

export interface Activity {
  day: number
  date: Date
  address: string
  description: string
  weather: {
    icon: string
    temperature: number
  }
}
