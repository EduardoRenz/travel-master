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
          weather: { icon: "☀️", temperature: 22 },
        }),
        new Activity({
          date: new Date("2024-06-16"),
          address: "Lisbon, Portugal",
          description: "Visita aos monumentos de Lisboa",
          weather: { icon: "⛅", temperature: 20 },
        }),
        new Activity({
          date: new Date("2024-06-17"),
          address: "Lisbon, Portugal",
          description: "Visita ao palacio da Pena",
          weather: { icon: "☁️", temperature: 18 },
        }),
        new Activity({
          date: new Date("2024-06-18"),
          address: "Lisbon, Portugal",
          description: "Voo para Barcelona",
          weather: { icon: "🌧️", temperature: 17 },
        }),
        new Activity({
          date: new Date("2024-06-19"),
          address: "Barcelona, Spain",
          description: "Chegada em Barcelona, Check-in no hotel",
          weather: { icon: "☀️", temperature: 23 },
        }),
        new Activity({
          date: new Date("2024-06-20"),
          address: "Barcelona, Spain, praia de Barceloneta",
          description: "Visita à praia de Barceloneta",
          weather: { icon: "⛅", temperature: 21 },
        }),
        new Activity({
          date: new Date("2024-06-21"),
          address: "Barcelona, Spain",
          description: "Visita ao centro histórico de Barcelona",
          weather: { icon: "☀️", temperature: 24 },
        }),
        new Activity({
          date: new Date("2024-06-22"),
          address: "Sagrada Família, Barcelona, Spain",
          description: "Visita a Sagrada Família",
          weather: { icon: "⛅", temperature: 19 },
        }),
        new Activity({
          date: new Date("2024-06-23"),
          address: "Paris, France",
          description: "Voo para Paris",
          weather: { icon: "☁️", temperature: 20 },
        }),
        new Activity({
          date: new Date("2024-06-24"),
          address: "Boulevard Haussmann, 75009 Paris, França",
          description: "Dia livre para compras e despedida",
          weather: { icon: "☀️", temperature: 25 },
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
