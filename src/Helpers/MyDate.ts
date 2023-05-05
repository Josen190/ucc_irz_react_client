class MyDate extends Date {
  public static months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  public static nameDayWeekFull = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятьница",
    "Субота",
    "Воскресенье",
  ];
  public static nameDayWeekShort = [
    "Пн.",
    "Вт.",
    "Ср.",
    "Чт.",
    "Пт.",
    "Сб.",
    "Вс.",
  ];

  public DatetoStr(type: "yyyy-mm-dd" | "dd-months-yyyy" | "dd-months-yyyy hh:mm" | "hh:mm"): string {
    const day = String(this.getDate()).padStart(2, "0");
    const month = String(this.getMonth() + 1).padStart(2, "0");
    const year = String(this.getFullYear()).padStart(4, "0");
    const hours = String(this.getHours()).padStart(2, "0");
    const minutes = String(this.getMinutes()).padStart(2, "0");
    switch (type) {
      case "yyyy-mm-dd":
        return `${year}-${month}-${day}`;
      case "dd-months-yyyy":
        return `${day} ${MyDate.months[this.getMonth()]} ${year}`;
      case "dd-months-yyyy hh:mm":
        return `${day} ${MyDate.months[this.getMonth()]} ${year} ${hours}:${minutes}`;
      case "hh:mm":
        return `${hours}:${minutes}`;
    }
  }
  
  public setNewDate(date: MyDate): MyDate {
    this.setFullYear(date.getFullYear());
    this.setMonth(date.getMonth());
    this.setDate(date.getDate());
    return this;
  }

  public setNewTime(time: string): MyDate {
    const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;

    if (!timeRegex.test(time)) {
      return this;
    }

    const [hours, minutes] = time.split(":").map(Number);
    this.setHours(hours, minutes, 0, 0);
    return this;
  }

  public equate(date: MyDate): boolean {
    return (
      this.getDate() === date.getDate() &&
      this.getMonth() === date.getMonth() &&
      this.getFullYear() === date.getFullYear()
    );
  }
}

export default MyDate;
