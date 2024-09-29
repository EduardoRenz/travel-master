import type { Activity } from "./Activity"

export interface Travel {
  id: number
  title: string
  date: Date
  image: string
  concluded: boolean
  place: string
  itinerary: Activity[]
}
