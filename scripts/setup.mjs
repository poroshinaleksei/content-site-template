#!/usr/bin/env node

import { stdin as input, stdout as output } from "node:process";
import {
  applySetupAnswers,
  collectSetupAnswers,
  createQuestioner,
} from "./setup-core.mjs";

console.log("Initialize this website template for a new client project.");

const questioner = await createQuestioner({ input, output });

try {
  const answers = await collectSetupAnswers(questioner.ask);

  await applySetupAnswers(answers);
} finally {
  questioner.close();
}

console.log(
  "Setup complete. Review AGENTS.md, config/, brief.md, and content/ before launch.",
);
