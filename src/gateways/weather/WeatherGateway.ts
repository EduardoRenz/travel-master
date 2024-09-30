import type { Weather } from "../../domain/Weather"

export interface WeatherGateway {
  get(city: string, date?: Date): Promise<Weather>
}
