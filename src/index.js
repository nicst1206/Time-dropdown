function displayTime(event) {
  if (event.target.value.length > 0) {
    let date = "";
    let timeZone = "";
    if (event.target.value === "paris") {
      date = moment.tz("Europe/Paris").format("dddd, MMMM D, YYYY h:mm A");
      timeZone = "Europe/Paris";
    }
    if (event.target.value === "tokyo") {
      date = moment.tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
      timeZone = "Asia/Tokyo";
    }
    if (event.target.value === "sydney") {
      date = moment.tz("Australia/Sydney").format("dddd, MMMM D, YYYY h:mm A");
      timeZone = "Australia/Sydney";
    }
    alert(`It is ${date} in ${timeZone}`);
  }
}

let select = document.querySelector("#cities");
select.addEventListener("change", displayTime);
