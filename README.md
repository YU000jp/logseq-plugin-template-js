🚩In production

Not published on logseq marketplace. This functionality has been incorporated into [Logseq Column Layout plugin](https://github.com/YU000jp/Logseq-column-Layout).


# Logseq repeat-task reference
## Issues with Logseq defaults
 - Even if "repeat task" is done, no record remains. I want to solve this.
![Animation2](https://user-images.githubusercontent.com/111847207/200153267-5916c7df-e62f-4f11-811f-569ae7758895.gif)

## What this plugin can do
 - Take a reference to a repeat task. It records when you run it.
 - The advantage is that the number of times is displayed on the right side of the recurring task, and when you open it, you can see the execution date.
 - I think you should put repeat tasks in journal to run and log. This is because you can write down the details in the outline.

## How to

   1. Right-click on the bullet for the task and select "Link this reference" from the context menu.

1. The reference, date and current time are provided on the next line.
   1. Appears in the journal Linked Reference.
   1. Mouse drag the block to the journal side.
   1. A reference has been posted in the journal.

   1. Two check buttons are placed. The left side is for this DONE, and the right side is for advancing Scheduled and Deadline. Imagine having a task for execution and one for notification.

## Required plugin
  1. [Logseq Column Layout plugin](https://github.com/YU000jp/Logseq-column-Layout)

## Similar
   1. [Logseq task complete plugin](https://github.com/DimitryDushkin/logseq-plugin-task-check-date)
   - It doesn't work with "repeat-task".
   1. [Logseq move block plugin](https://github.com/vipzhicheng/logseq-plugin-move-block)
   - A plugin that sends references to the journal via the context menu. The difference is that it has a link, LATER tag, date and time.
