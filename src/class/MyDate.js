class MyDate extends Date{
    toCustomString() {
        let year = this.getFullYear();
        let month = ('0' + (this.getMonth() + 1)).slice(-2);
        let day = ('0' + this.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }
}

export default MyDate;