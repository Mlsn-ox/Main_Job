const button = document.querySelector("button");
let final = document.getElementById("concat");
const input = document.getElementById("question");

function magicBall() {
  const input = document.getElementById("question");
  let question = input.value;
  console.log(input);
  console.log(question);
  let randomNumber = Math.floor(Math.random() * 10);
  let eightBall = "";
  switch (randomNumber) {
    case 0:
      eightBall = "Peut-être que oui, peut-être que non.";
      break;
    case 1:
      eightBall = "C'est un grand oui !";
      break;
    case 2:
      eightBall = "Question pourrie, réponse de merde.";
      break;
    case 3:
      eightBall = "Tu peux te la mettre, désolé...";
      break;
    case 4:
      eightBall = "Ne compte pas dessus.";
      break;
    case 5:
      eightBall = "On dirait bien que oui.";
      break;
    case 6:
      eightBall = "Oui.";
      break;
    case 7:
      eightBall = "Non.";
      break;
    case 8:
      eightBall = "Oui mais non.";
      break;
    case 9:
      eightBall = "Tu peux toujours espérer.";
      break;
  }
  final.innerHTML = eightBall;
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    magicBall();
    event.preventDefault();
  }
});
