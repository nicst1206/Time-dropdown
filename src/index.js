function displayTime(event) {
  console.log(event.target.value);
  if (event.target.value.length > 0) {
    let date = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");
    let timeZone = event.target.value;

    alert(`It is ${date} in ${timeZone}`);
  }
}

let select = document.querySelector("#cities");
select.addEventListener("change", displayTime);
