import type { Weather } from "../../domain/Weather"
import type { WeatherGateway } from "./WeatherGateway"

export class MockWeatherGateway implements WeatherGateway {
  async get(city: string, date?: Date): Promise<Weather> {
    // Gera uma temperatura aleatória entre 15 e 30 graus Celsius
    const temperature = Math.floor(Math.random() * (30 - 15 + 1)) + 15

    // Array de possíveis ícones
    const icons = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d"]
    const icon = icons[Math.floor(Math.random() * icons.length)]

    return {
      temperature,
      icon,
    }
  }
}
