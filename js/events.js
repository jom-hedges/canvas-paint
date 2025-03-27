export const beginEvent = (startGame) => {
  document.getElementById("runButton").addEventListener("click", function() {
    startGame();
    this.disabled = true;
  })
}
