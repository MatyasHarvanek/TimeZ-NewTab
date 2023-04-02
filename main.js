var hoursDiv = document.querySelector("#hours");
var minutesDiv = document.querySelector("#minutes");
var dateDiv = document.querySelector("#date");


setInterval(() => {
    UpdateText();
}, 1000)

UpdateText();

function UpdateText() {
    var currentDate = new Date();

    var date = moment(currentDate);
    dateDiv.innerHTML = date.format("dddd D.M YYYY");


    var hours = FillWithZeros(currentDate.getHours() + "");
    var minutes = FillWithZeros(currentDate.getMinutes() + "");
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;

}

function FillWithZeros(text) {
    if (text.length < 2) {
        return "0" + text;
    }
    return text;
}