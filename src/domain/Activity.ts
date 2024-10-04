export class Activity {
  public date: Date
  public address: string
  public description: string

  constructor(params: { date: Date; address: string; description: string }) {
    this.date = params.date
    this.address = params.address
    this.description = params.description
  }

  public getDayFromFirstDay(firstDay: Date): number {
    return Math.floor((this.date.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }
}
