function generatePlan() {
  let subjects = document.getElementById("subjects").value.split(",");
  let time = document.getElementById("time").value;

  if (subjects.length === 0 || time === "") {
    document.getElementById("output").innerHTML = "Please enter valid data!";
    return;
  }

  let perSubject = Math.floor(time / subjects.length);

  let result = "<h3>Your Study Plan:</h3>";

  for (let i = 0; i < subjects.length; i++) {
    result += subjects[i].trim() + " - " + perSubject + " mins<br>";
  }

  document.getElementById("output").innerHTML = result;
}
