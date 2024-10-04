import type { Travel } from "../../domain/Travel"
import { InMemoryTravelGateway } from "./InMemoryTravelGateway"

export interface TravelGateway {
  getTravels(): Promise<Travel[]>
  getTravel(id: number): Promise<Travel | undefined>
}

export class TravelGatewayFactory {
  private static instance: TravelGateway

  public static getInstance(): TravelGateway {
    if (!this.instance) {
      this.instance = new InMemoryTravelGateway()
    }
    return this.instance
  }
}
