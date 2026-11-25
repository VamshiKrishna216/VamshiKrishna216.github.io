const run = document.querySelector("#run");
const result = document.querySelector("#result");
const steps = [...document.querySelectorAll("#steps li")];

run.addEventListener("click", async () => {
  run.disabled = true;
  result.textContent = "Processing sample comment…";
  for (const step of steps) step.removeAttribute("data-done");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (const step of steps) {
    if (!reducedMotion) await new Promise(resolve => window.setTimeout(resolve, 360));
    step.setAttribute("data-done", "");
  }
  result.textContent = "Keyword matched. Sample DM queued.";
  run.textContent = "Run again";
  run.disabled = false;
});
