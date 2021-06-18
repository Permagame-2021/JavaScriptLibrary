const Library = require("./Library");

async function playTurn() {
  const state = await Library.fetchGameState();
  const garden = state.garden;
  const gardenDimension = garden.length;

  const line = Math.floor(Math.random() * gardenDimension);
  const column = Math.floor(Math.random() * gardenDimension);
  const plantType = "CARROT";

  await Library.plant(line, column, plantType);
  console.log("plant", plantType, "in", column, line);
}

async function cycle(timeout) {
  playTurn()
    .catch((error) => console.error("error", error))
    .finally(() => {
      setTimeout(() => {
        cycle(timeout);
      }, timeout);
    });
}

function start() {
  console.log("STARTING BOT!");
  cycle(1000);
}

start();
