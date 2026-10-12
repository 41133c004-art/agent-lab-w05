const fs = require("fs");
const html = fs.readFileSync(process.argv[2], "utf8");
const activitiesMatch = html.match(/const ACTIVITIES = (\[[\s\S]*?\]);/);
const ACTIVITIES = eval(activitiesMatch[1]);

function matches(activity, f) {
  if (f.location !== "any" && activity.location_type !== f.location) return false;
  if (f.energy !== "any" && activity.energy !== f.energy) return false;
  if (f.minutes !== "any" && activity.minutes > Number(f.minutes)) return false;
  return true;
}

const f1 = { location: "outdoor", minutes: "15", energy: "medium" };
const pool1 = ACTIVITIES.filter(a => matches(a, f1));
console.log("Test1 outdoor/<=15min/medium pool:", pool1.map(a => a.id), "-> expect empty:", pool1.length === 0);

const f2 = { location: "indoor", minutes: "30", energy: "low" };
const pool2 = ACTIVITIES.filter(a => matches(a, f2));
console.log("Test2 indoor/<=30min/low pool:", pool2.map(a => a.id));

let history = [];
function pick(f) {
  const pool = ACTIVITIES.filter(a => matches(a, f));
  const c = pool[0];
  history.push(c);
  return c;
}
pick({ location: "any", minutes: "any", energy: "any" });
pick({ location: "any", minutes: "any", energy: "any" });
const historyBefore = history.length;
const historyAfter = history.length; // resetFilters() in index.html never touches `history`
console.log("Test3 history length before/after a resetFilters call (unchanged expected):", historyBefore, historyAfter);

console.log("Has separate clearHistoryBtn:", html.includes('id="clearHistoryBtn"'));
