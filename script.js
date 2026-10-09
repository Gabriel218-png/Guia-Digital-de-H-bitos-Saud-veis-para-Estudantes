const habitForm = document.querySelector("#habit-form");
const formResult = document.querySelector("#form-result");

habitForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const answers = new FormData(habitForm);
	const positiveAnswers = [...answers.values()].filter((answer) => answer === "yes").length;

	if (positiveAnswers === 4) {
		formResult.textContent = "Parabens! Voce esta cuidando muito bem da sua rotina. Continue assim!";
	} else if (positiveAnswers >= 2) {
		formResult.textContent = "Voce ja tem bons habitos. Escolha mais um para cuidar esta semana.";
	} else {
		formResult.textContent = "Tudo bem comecar aos poucos. Escolha uma dica acima para experimentar.";
	}
});
