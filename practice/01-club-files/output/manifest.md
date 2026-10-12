# Club files — organize manifest / 整理對照清單

All 12 input files were sorted into topic folders below. Nothing in `input/` was
deleted or modified — this folder holds copies only.
12 個輸入檔都依主題分類到下面的資料夾。`input/` 內的檔案沒有被刪除或修改，這裡只放副本。

## Source → destination / 來源 → 目的地

| Input file | Output folder |
|---|---|
| announcement.txt | announcements/ |
| announcement_copy.txt | announcements/ |
| budget_draft.txt | budget/ |
| equipment_list.txt | equipment/ |
| equipment_backup.txt | equipment/ |
| feedback_questions.txt | feedback/ |
| meeting_notes.txt | meetings/ |
| next_steps.txt | meetings/ |
| rain_plan.txt | planning/ |
| poster_text.txt | poster/ |
| proposal_final.txt | proposals/ |
| proposal_final2.txt | proposals/ |

## Duplicate content found / 發現的重複內容

- `announcement.txt` and `announcement_copy.txt` are byte-identical. Both are kept
  (not deleted) since this task only organizes, it does not deduplicate the source.
  兩檔內容完全相同，但本題只整理不刪檔，兩個都保留。
- `equipment_backup.txt` and `equipment_list.txt` are byte-identical. Same treatment
  as above — both kept.
  兩檔內容完全相同，同樣兩個都保留。

## Not treated as duplicates / 未視為重複

- `proposal_final.txt` (v1, outdoor, 30 min) and `proposal_final2.txt` (v2, indoor,
  20 min) describe **different** proposals. Neither carries a date or an "approved"
  marker, so there is no basis for assuming `final2` is the newer or final version.
  Both are kept side by side instead of guessing which one to drop.
  兩份企畫內容不同（戶外30分 vs 室內20分），都沒有日期或核定標記，無法判斷誰是「最終版」，
  所以兩份都保留，不猜測刪除。

## What was not done / 沒有做的事

- No files were deleted from `input/`.
- No missing values were guessed or filled in.
- Nothing was published/shared automatically — this is a local, reviewable output only.
- 沒有刪除 `input/` 任何檔案；沒有猜測或補上缺值；沒有自動對外公開，只是本地可供檢查的整理結果。
