import { Activity } from "../../domain/Activity"
import type { Travel } from "../../domain/Travel"
import type { TravelGateway } from "./TravelGateway"

export class InMemoryTravelGateway implements TravelGateway {
  private travels: Travel[] = [
    {
      id: 1,
      title: "Paris",
      date: new Date("2024-06-15"),
      image: "images/paris.jpg",
      concluded: true,
      place: "França",
      itinerary: [
        new Activity({
          date: new Date("2024-06-15"),
          address: "Rue de Rivoli, 75001 Paris, França",
          description: "Chegada e check-in no hotel",
          weather: { icon: "☀️", temperature: 22 },
        }),
        new Activity({
          date: new Date("2024-06-16"),
          address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, França",
          description: "Visita à Torre Eiffel e cruzeiro no Rio Sena",
          weather: { icon: "⛅", temperature: 20 },
        }),
        new Activity({
          date: new Date("2024-06-17"),
          address: "Rue de Rivoli, 75001 Paris, França",
          description: "Museu do Louvre e Jardim das Tulherias",
          weather: { icon: "☁️", temperature: 18 },
        }),
        new Activity({
          date: new Date("2024-06-18"),
          address: "Place d'Armes, 78000 Versailles, França",
          description: "Excursão ao Palácio de Versalhes",
          weather: { icon: "🌧️", temperature: 17 },
        }),
        new Activity({
          date: new Date("2024-06-19"),
          address: "35 Rue du Chevalier de la Barre, 75018 Paris, França",
          description: "Montmartre e Sacré-Cœur",
          weather: { icon: "☀️", temperature: 23 },
        }),
        new Activity({
          date: new Date("2024-06-20"),
          address: "Place Charles de Gaulle, 75008 Paris, França",
          description: "Arco do Triunfo e Champs-Élysées",
          weather: { icon: "⛅", temperature: 21 },
        }),
        new Activity({
          date: new Date("2024-06-21"),
          address: "84 Rue Claude Monet, 27620 Giverny, França",
          description: "Visita à casa e jardins de Monet",
          weather: { icon: "☀️", temperature: 24 },
        }),
        new Activity({
          date: new Date("2024-06-22"),
          address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, França",
          description: "Catedral de Notre-Dame e Île de la Cité",
          weather: { icon: "⛅", temperature: 19 },
        }),
        new Activity({
          date: new Date("2024-06-23"),
          address: "Place Georges-Pompidou, 75004 Paris, França",
          description: "Centro Pompidou e Le Marais",
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
