import type { Travel } from "../domain/Travel"

export interface TravelGateway {
  getTravels(): Promise<Travel[]>
  getTravel(id: number): Promise<Travel | undefined>
}
