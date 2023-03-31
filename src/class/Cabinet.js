var Cabinet = /** @class */ (function () {
    function Cabinet(arg) {
        if (typeof arg === 'string') {
            this.id = arg;
        }
        else {
            this.id = arg.id;
        }
    }
    return Cabinet;
}());
