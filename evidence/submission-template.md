# My lab evidence / 我的實作紀錄

Use a group code, not real names or student IDs in shared files. / 共用檔只寫組別代碼，不寫姓名或學號。

- Group code / 組別：（個人練習，無組別代碼）
- Tool / 工具：Claude Code (CLI coding agent), no chat-window UI
- Route / 路線：individual 個人, agent-assisted via CLI (not the paired or TM-screenshot route)
- Tasks completed / 完成題目：A, B (v1 + v2), D
- Material / 素材：NDHU classroom tasks 東華課堂版
- For original-pack work: task number, author/source link and version / 原版實作：題號、作者來源連結與版本：N/A — classroom-version tasks only
- My role and what I checked / 我的角色與實際檢查：Directed the agent task by task, reviewed
  every input file with `diff` before organizing (task A), extracted and ran the picker's
  filter logic in Node to check it against the task-D sim's claimed bugs (task B), and wrote
  the rejection in task D against the plan text, not from memory.

## Scope and plan / 範圍與計畫

Allowed input and output folders / 可讀取與輸出的資料夾：
`practice/01-club-files/input/` (read) → `practice/01-club-files/output/` (write);
`practice/02-campus-picker/activities.json` (read) → `practice/02-campus-picker/output/` (write);
`practice/04-review/bad-plan.txt` (read) → `practice/04-review/my-rejection.md` (write).

What I asked for / 原始需求：Complete tasks A, B, and D from the lab website's task cards —
organize the club files, build an activity picker with filters and history, and write a
rejection of the flawed plan in task D.

What I checked before execution / 動手前我檢查了什麼：Diffed every `01-club-files/input/`
file against the others before sorting any of them, and read `bad-plan.txt` in full before
writing a rejection, instead of assuming what it says.

## Tests actually performed / 我真的做過的測試

See the test table in `evidence/learning-record.md` for the three tests run (duplicate
detection via `diff`, picker filter logic via Node, and history/reset independence) with
their expected vs. observed results.

## One revision / 一次修改

Before / 原來的情況：`index.html` v1 had no way to clear pick history except reloading the page.

Request / 我提出的修改：Add a manual "Clear history" button, kept separate from "Reset
filters", so resetting filters never silently erases history (the bug named in the task-D
simulated report).

After and retest / 修改後與重測結果：Added `clearHistoryBtn` in v2 and re-ran the Node test
confirming `resetFilters()` still never touches `history`. Committed separately as
`B v2: add manual clear history button`.

New requirement or defect? / 新需求還是原規格未做到？A defect pattern already named in the
lab's own `fallback/review-record.txt` — addressed proactively, not discovered by a user report.

## One rejection / 一次退回

Which action I reject and why / 退回哪個動作、為什麼：See `practice/04-review/my-rejection.md`.
In short: `bad-plan.txt` proposes deleting `proposal_final.txt` by assuming `proposal_final2.txt`
is "the latest" from filename alone (they are different proposals, not versions of one),
filling missing/invalid equipment quantities with guesses, and auto-publishing without review.

An acceptable alternative / 可以怎麼改：Keep both proposal files and ask a person which is
current instead of inferring it; leave missing/invalid quantities as-is with a manual-recount
note instead of guessing; keep output local for review before anything is shared.

## Still unverified / 還沒驗證

What I cannot claim is complete / 哪些事不能說已完成：`index.html` was checked by running its
extracted filter logic in Node, not by clicking through it in a real browser in this session —
visual rendering and the language toggle's relabeling have not been manually exercised. No
second person has reviewed `manifest.md` or `my-rejection.md`, and the rejection's proposed
alternative has not actually been executed, only proposed.

For the fallback route, mark all prepared evidence as supplied simulation. / 備援路線請標明所有預生成證據來源，不能填成自己的Agent實跑。
