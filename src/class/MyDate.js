var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyDate = /** @class */ (function (_super) {
    __extends(MyDate, _super);
    function MyDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDate.prototype.DatetoStr = function (type) {
        var day = String(this.getDate()).padStart(2, "0");
        var month = String(this.getMonth() + 1).padStart(2, "0");
        var year = String(this.getFullYear()).padStart(4, "0");
        switch (type) {
            case "yyyy-mm-dd":
                return "".concat(year, "-").concat(month, "-").concat(day);
            case "dd-months-yyyy":
                return day + " " + MyDate.months[this.getMonth()] + " " + year;
        }
    };
    MyDate.prototype.parseDate = function (date) {
        this.setFullYear(date.getFullYear());
        this.setMonth(date.getMonth());
        this.setDate(date.getDate());
        return this;
    };
    MyDate.prototype.parseTime = function (time) {
        var timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
        if (!timeRegex.test(time)) {
            return this;
        }
        var _a = time.split(":").map(Number), hours = _a[0], minutes = _a[1];
        this.setHours(hours, minutes, 0, 0);
        return this;
    };
    MyDate.prototype.equate = function (date) {
        return (this.getDate() === date.getDate() &&
            this.getMonth() === date.getMonth() &&
            this.getFullYear() === date.getFullYear());
    };
    MyDate.months = [
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
    MyDate.nameDayWeekFull = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятьница",
        "Субота",
        "Воскресенье",
    ];
    MyDate.nameDayWeekShort = [
        "Пн.",
        "Вт.",
        "Ср.",
        "Чт.",
        "Пт.",
        "Сб.",
        "Вс.",
    ];
    return MyDate;
}(Date));
export default MyDate;
