import type { Travel } from "../domain/Travel"
import type { TravelGateway } from "./TravelGateway"

export class InMemoryTravelGateway implements TravelGateway {
  private travels: Travel[] = [
    { id: 1, title: "Paris", date: "2024-06-15", image: "images/paris.jpg", concluded: true, place: "França" },
    { id: 2, title: "Tóquio", date: "2024-07-20", image: "images/toquio.webp", concluded: false, place: "Japão" },
    { id: 3, title: "Nova York", date: "2024-08-10", image: "images/new-york.jpeg", concluded: false, place: "Estados Unidos" },
  ]

  async getTravels(): Promise<Travel[]> {
    return this.travels
  }

  async getTravel(id: number): Promise<Travel | undefined> {
    return this.travels.find((travel) => travel.id == id)
  }
}
