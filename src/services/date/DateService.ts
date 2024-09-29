import { IntlDateService } from "./IntlDateService"

export interface DateService {
  formatDateToLongMonth(date: Date): string
  formatDateToLongDayMonth(date: Date): string
}

// Factory para criar instâncias de DateService
export class DateServiceFactory {
  private static instance: DateService

  static getInstance(): DateService {
    if (!this.instance) {
      this.instance = new IntlDateService()
    }
    return this.instance
  }
}
