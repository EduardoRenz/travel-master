type Weather = {
  icon: string
  temperature: number
}

export class Activity {
  public date: Date
  public address: string
  public description: string
  public weather: Weather

  constructor(params: { date: Date; address: string; description: string; weather: Weather }) {
    this.date = params.date
    this.address = params.address
    this.description = params.description
    this.weather = params.weather
  }

  public getDayFromFirstDay(firstDay: Date): number {
    return Math.floor((this.date.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }
}
