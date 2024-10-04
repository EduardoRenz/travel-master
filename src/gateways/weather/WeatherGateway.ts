import type { Weather } from "../../domain/Weather"
import { MockWeatherGateway } from "./MockWeatherGateway"

export interface WeatherGateway {
  get(city: string, date?: Date): Promise<Weather | null>
}

export class WeatherGatewayFactory {
  private static instance: WeatherGateway

  public static getInstance(): WeatherGateway {
    if (!this.instance) {
      this.instance = new MockWeatherGateway()
    }
    return this.instance
  }
}
