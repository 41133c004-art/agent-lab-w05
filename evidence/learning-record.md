# Learning record / 學習紀錄

## Route actually used / 實際使用的路線

Work was done with Claude Code (a CLI coding agent) editing files directly in this
repository — there is no chat-window UI, so there are no TM (chat tool) screenshots to
attach. This is noted honestly here and in `submission-template.md` rather than supplying
staged images; per the fallback note in `fallback/review-record.txt`, anything presented as
evidence here is labeled for exactly how it was produced, not claimed as a different route's
output.

這份作業是用 Claude Code（CLI 程式代理）直接編輯這個 repo 完成的，沒有聊天視窗介面，所以沒有
TM（聊天工具）截圖可以附。這裡與 `submission-template.md` 都老實標明這點，不補放不是真的截圖；
依照 `fallback/review-record.txt` 的備援說明，這裡列出的證據都標明實際產生方式，不冒充別的路線。

## Task A — organize club files / 整理社團檔案

- Compared every input file with `diff` before deciding anything.
- Found two byte-identical duplicate pairs: `announcement.txt`/`announcement_copy.txt` and
  `equipment_backup.txt`/`equipment_list.txt`. Neither pair was deleted — task A only sorts
  files into `output/<topic>/`, it does not deduplicate the source.
- Confirmed `proposal_final.txt` and `proposal_final2.txt` are **not** duplicates (different
  activity, different length, no date on either) and kept both rather than guessing which is
  "final".
- Result: `practice/01-club-files/output/` with 8 topic folders and a `manifest.md`
  explaining the mapping and the two decisions above.

## Task B — campus activity picker / 校園活動抽選器

- v1 (`B v1: activity picker`): built `practice/02-campus-picker/output/index.html` —
  filters for location/minutes/energy, a pick button, a history list, and an English/Chinese
  toggle that re-labels every control (not just the page title).
- v2 (`B v2: add manual clear history button`): added a separate "Clear history" /
  "清除歷史" button, so resetting the filters never silently erases pick history (this was a
  deliberate bug in the `bad-plan.txt` simulated report for task D — fixed here before it
  could happen in this build).

## Tests actually performed / 我真的做過的測試

| # | Test | Expected | Observed | Evidence |
|---|---|---|---|---|
| 1 | `diff announcement.txt announcement_copy.txt` and `diff equipment_backup.txt equipment_list.txt` | Confirm which input files are real duplicates before sorting them | Both pairs returned no diff (identical); `proposal_final.txt` vs `proposal_final2.txt` differed in both lines | Terminal `diff` output, this session |
| 2 | Extracted the `ACTIVITIES` array and `matches()` filter logic from `index.html` and ran it in Node with filters `{location: "outdoor", minutes: "15", energy: "medium"}` | No activity should match (only outdoor activity at ≤15 min, A07, is `low` energy, not `medium`) | Result pool was empty (`[]`) | `node test-picker.js`, this session — matches the spec, unlike the bad-plan.txt sim's claim of returning A09 (30 min) for this filter |
| 3 | Simulated two picks, then called `resetFilters()` logic without touching the `history` array, and separately confirmed `clearHistoryBtn` exists as its own element/handler | History length should be unchanged by a filter reset; a separate button should exist to clear it | History stayed at length 2 across the simulated reset; `clearHistoryBtn` present and wired to its own handler | Same Node script, this session |

## One revision / 一次修改

- Before: `index.html` v1 had no way to clear history except a full page reload.
- Request: add a manual control so a user can clear history on purpose, without that being
  tied to resetting filters (this also avoids the bug named in the task-D sim, where reset
  filters also erased history).
- After and retest: added `clearHistoryBtn` + `clearHistory()` in v2, and re-ran test 3
  above to confirm `resetFilters()` still does not touch `history`.
- New requirement or defect? Pre-existing defect pattern named in the lab's own
  `bad-plan.txt`/`fallback/review-record.txt` materials — the fix was anticipated while
  building v1, split into its own v2 commit as the task table requires.

## One rejection / 一次退回

See `practice/04-review/my-rejection.md` — rejects `bad-plan.txt`'s plan to delete files by
guessing which is "final", fill missing inventory numbers with guesses, and auto-publish
without review.

## Still unverified / 還沒驗證

- The picker's UI was exercised through the extracted logic in Node, not by opening
  `index.html` in an actual browser in this session — visual rendering, click handling, and
  the language-toggle relabeling of every control have not been manually clicked through.
- No second person reviewed `manifest.md` or `my-rejection.md`; the "acceptable alternative"
  in the rejection has not been executed, only proposed.
