import type { Weather } from "../../domain/Weather"
import type { WeatherGateway } from "./WeatherGateway"

export class MockWeatherGateway implements WeatherGateway {
  async get(city: string, date?: Date): Promise<Weather | null> {
    // Gera uma temperatura aleatória entre 15 e 30 graus Celsius
    const temperature = Math.floor(Math.random() * (30 - 15 + 1)) + 15

    // Array de possíveis ícones
    const icons = ["☀️", "⛅", "🌧️", "⛈️", "❄️", "☁️", "🌤️"]
    const icon = icons[Math.floor(Math.random() * icons.length)]

    // Simula um atraso na resposta da API
    const delay = Math.random() * (2000 - 50) + 50 // Gera um número aleatório entre 50 e 2000 milissegundos
    await new Promise((resolve) => setTimeout(resolve, delay))

    // Simula uma falha em aproximadamente 10% das chamadas
    if (Math.random() < 0.1) {
      return null
    }

    return {
      temperature,
      icon,
    }
  }
}
