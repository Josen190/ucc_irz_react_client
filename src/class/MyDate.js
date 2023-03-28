class MyDate extends Date {
  DatetoStr() {
    const months = [
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
    const day = String(this.getDate()).padStart(2, "0");
    const year = String(this.getFullYear()).padStart(4, "0");
    return day + " " + months[this.getMonth()] + " " + year;
  }

  toCustomString() {
    const year = String(this.getFullYear()).padStart(4, "0");
    const month = String(this.getMonth() + 1).padStart(2, "0");
    const day = String(this.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}

export default MyDate;
