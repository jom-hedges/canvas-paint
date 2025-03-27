import { render } from "./render.js";
import { initialState } from "./state.js";
import { beginEvent } from "./events.js";

const startGame = () => {
  render(initialState);
};

// Set up button event listeners below
beginEvent(startGame);
