# Rejection — bad-plan.txt / 退回：bad-plan.txt

Reviewed file: `practice/04-review/bad-plan.txt` (discussion only, not executed).
審查檔案：`practice/04-review/bad-plan.txt`（僅供討論，未執行）。

## What I reject and why / 退回哪個動作、為什麼

The plan proposes four actions in one step. At least two of them are not safe to run as written:

1. **"Delete duplicates, treat final2 as the latest version."**
   `proposal_final.txt` and `proposal_final2.txt` are not duplicates — they describe two
   different proposals (v1 outdoor/30 min vs v2 indoor/20 min) and neither carries a date
   or an "approved" marker. Deciding `final2` is "the latest" from the filename alone is a
   guess, and deleting the other one on that guess would destroy a proposal that might still
   be the one the club wants. (The only real duplicates in the input, `announcement.txt` /
   `announcement_copy.txt` and `equipment_backup.txt` / `equipment_list.txt`, are
   byte-identical — those are the safe case, and even then task A kept both instead of
   deleting, since deletion wasn't asked for.)

2. **"Fill missing values with reasonable guesses."**
   `equipment.json` has rows with a missing `qty` (empty string), a negative `qty` (`-1`),
   and one empty record. Inventing a number for any of these presents a guess as if it were
   real stock data, which is worse than leaving it blank or flagged — someone could plan an
   event around equipment that doesn't actually exist.

3. **"Publish the result automatically."**
   Auto-publishing removes the one checkpoint where a person could catch exactly the two
   mistakes above before they reach other people.

這個計畫把四個動作放在同一步做完，至少兩個不能照原樣執行：

1. `proposal_final.txt` 和 `proposal_final2.txt` 不是重複檔，是兩個不同的企畫（v1戶外30分
   vs v2室內20分），兩者都沒有日期或「已核定」標記，光憑檔名就判斷 final2 是「最新版」是
   猜測；照猜測刪掉另一份，可能刪掉社團其實想用的那份。（輸入檔裡真正重複的只有
   announcement.txt/announcement_copy.txt 和 equipment_backup.txt/equipment_list.txt，
   這兩組是逐位元組相同；即使如此，A題也是兩個都保留，因為題目沒有要求刪除。）
2. equipment.json 裡有缺值的 qty（空字串）、負值 qty（-1）、還有一筆空記錄；
   幫這些捏造一個數字，等於把猜測當成真實庫存資料，比留白或標記出來更危險。
3. 自動公開結果，等於拿掉了唯一能在結果外流前抓到上面兩個錯誤的檢查點。

## An acceptable alternative / 可以怎麼改

- Keep both `proposal_final.txt` and `proposal_final2.txt`; if a single "current" proposal
  is needed, ask the club (or check a dated source) which one is current instead of
  inferring it from the filename. Only delete a file when a person confirms it is safe to
  delete.
- For missing or invalid quantities in `equipment.json`, leave the field as-is and add a
  separate note listing which rows need a manual recount (empty `qty`, negative `qty`, and
  the empty row at `source_row: 6`), instead of filling in a number.
- Keep the organized output local (as task A's `output/` folder is) and let a person review
  it before anything is shared or published.
- 保留 proposal_final.txt 和 proposal_final2.txt 兩份；若真的需要「目前這版」，去問社團或
  查有日期的來源，不要從檔名推測；只有在有人確認可以刪除時才刪除。
- equipment.json 缺值或異常值（空的 qty、負數 qty、第6筆空記錄）維持原樣，另外列一份
  「需要人工盤點」清單，不要補數字。
- 整理結果先留在本機（像A題的 output/ 一樣），公開或分享前先給人審查。

## Status / 狀態

This is a rejection and a proposed alternative only — **no fix has been run**. Any retest of
the alternative above is still unexecuted.
這份文件只是退回與替代方案，**修正尚未執行**；上面替代方案的重測也還沒做。
