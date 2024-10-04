import { Activity } from "../../domain/Activity"
import type { Travel } from "../../domain/Travel"
import type { TravelGateway } from "./TravelGateway"

export class InMemoryTravelGateway implements TravelGateway {
  private travels: Travel[] = [
    {
      id: 1,
      title: "Euro Trip",
      date: new Date("2024-06-15"),
      image: "images/paris.jpg",
      concluded: true,
      place: "Europe",
      itinerary: [
        new Activity({
          date: new Date("2024-06-15"),
          address: "Lisbon, Portugal, Aeroporto de Lisboa",
          description: "Chegada em Lisboa",
        }),
        new Activity({
          date: new Date("2024-06-16"),
          address: "Lisbon, Portugal",
          description: "Visita aos monumentos de Lisboa",
        }),
        new Activity({
          date: new Date("2024-06-17"),
          address: "Lisbon, Portugal",
          description: "Visita ao palacio da Pena",
        }),
        new Activity({
          date: new Date("2024-06-18"),
          address: "Lisbon, Portugal",
          description: "Voo para Barcelona",
        }),
        new Activity({
          date: new Date("2024-06-19"),
          address: "Barcelona, Spain",
          description: "Chegada em Barcelona, Check-in no hotel",
        }),
        new Activity({
          date: new Date("2024-06-20"),
          address: "Barcelona, Spain, praia de Barceloneta",
          description: "Visita à praia de Barceloneta",
        }),
        new Activity({
          date: new Date("2024-06-21"),
          address: "Barcelona, Spain",
          description: "Visita ao centro histórico de Barcelona",
        }),
        new Activity({
          date: new Date("2024-06-22"),
          address: "Sagrada Família, Barcelona, Spain",
          description: "Visita a Sagrada Família",
        }),
        new Activity({
          date: new Date("2024-06-23"),
          address: "Paris, France",
          description: "Voo para Paris",
        }),
        new Activity({
          date: new Date("2024-06-24"),
          address: "Boulevard Haussmann, 75009 Paris, França",
          description: "Dia livre para compras e despedida",
        }),
      ],
    },
    { id: 2, title: "Tóquio", date: new Date("2024-07-20"), image: "images/toquio.webp", concluded: false, place: "Japão", itinerary: [] },
    {
      id: 3,
      title: "Nova York",
      date: new Date("2024-08-10"),
      image: "images/new-york.jpeg",
      concluded: false,
      place: "Estados Unidos",
      itinerary: [],
    },
  ]

  async getTravels(): Promise<Travel[]> {
    return this.travels
  }

  async getTravel(id: number): Promise<Travel | undefined> {
    return this.travels.find((travel) => travel.id == id)
  }
}
