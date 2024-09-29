import type { DateService } from "./DateService"

export class IntlDateService implements DateService {
  formatDateToLongMonth(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" }
    return date.toLocaleDateString("pt-BR", options)
  }

  formatDateToLongDayMonth(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long" }
    return date.toLocaleDateString("pt-BR", options)
  }
}
