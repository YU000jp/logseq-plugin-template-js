import '@logseq/libs';
import { getDateForPage } from 'logseq-dateutils';

const main = () => {
  
  logseq.UI.showMsg(`add contextmenu item`);
  
  /* ContextMenuItem for DONE */
  logseq.Editor.registerBlockContextMenuItem('✔️ DONE with completed', async ({uuid}) => {
    const block = await logseq.Editor.getBlock(uuid);
    if (!block?.marker) return logseq.UI.showMsg('This block is not a task', 'error');
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const today = new Date();
      const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
      console.log(todayDateInUserFormat);
      const newRawContent = block.content.replace(new RegExp(`^${block.marker}`), `DONE`);
      await logseq.Editor.updateBlock(uuid, newRawContent);
      logseq.Editor.upsertBlockProperty(uuid, `completed`,todayDateInUserFormat);
      /* (scheduled deadline remove) -----TODO*/
      logseq.UI.showMsg(`${block.marker} → ✔️ DONE with completed`);
      console.log("✔️ DONE with completed");
  });

  /* ContextMenuItem reference */
    logseq.Editor.registerBlockContextMenuItem('🔵🟣Link as reference', async ({uuid}) => {
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const today = new Date();
      const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
      console.log(todayDateInUserFormat);
      logseq.Editor.insertBlock(uuid,
        `🔵🟣 ((`+uuid+`))` + "\n" + "referenced:: " + todayDateInUserFormat
      );
      logseq.Editor.setBlockCollapsed(uuid, true);
      logseq.UI.showMsg("Link as reference");
      console.log("Link as reference");
    });

    /* ContextMenuItem LATER  */
    logseq.Editor.registerBlockContextMenuItem('🔵🟣LATER as reference', async ({uuid}) => {
      const block = await logseq.Editor.getBlock(uuid);
      if (block?.marker == "LATER") return logseq.UI.showMsg('This block is LATER', 'error');
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const today = new Date();
      const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
      console.log(todayDateInUserFormat);
      logseq.Editor.insertBlock(uuid,`LATER 🔵🟣 ((`+uuid+`))`);
      logseq.Editor.upsertBlockProperty(e.uuid, "referenced",todayDateInUserFormat);
      logseq.UI.showMsg("🔵🟣LATER as reference");
      console.log("🔵🟣LATER as reference");
    });

  /* ContextMenuItem for repeat-task */
  logseq.Editor.registerBlockContextMenuItem('🔵🟣LATER as reference for repeat-task', async ({uuid}) => {
    const block = await logseq.Editor.getBlock(uuid);
    if (!(block?.marker == "TODO")) return logseq.UI.showMsg('This block is not TODO task', 'error');
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const today = new Date();
      const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
      console.log(todayDateInUserFormat);
      const newRawContent = block.content.replace(new RegExp(`^${block.marker}`), `DONE`);
      await logseq.Editor.updateBlock(uuid, newRawContent);
      logseq.UI.showMsg(`${block.marker} → DONE`);
      logseq.Editor.insertBlock(uuid,
        `LATER 🔵🟣 ((`+uuid+`))` + "\n" + "referenced:: " + todayDateInUserFormat
      );
      logseq.Editor.setBlockCollapsed(uuid, true);
      logseq.UI.showMsg("🔵🟣for repeat-task");
      console.log("🔵🟣for repeat-task");
  });

  /* ContextMenuItem Delete */
  logseq.Editor.registerBlockContextMenuItem('❌ Delete this block', async ({ uuid }) => {
    logseq.Editor.removeBlock(uuid);
    logseq.UI.showMsg("delete the block");
    console.log("delete the block");
  });

  /* CSS */
  logseq.provideStyle(String.raw`
    /* Tweak checkbox */
    div#main-content-container input.form-checkbox {
      transform: scale(1.1);
    }
    div#main-content-container input.form-checkbox+div input.form-checkbox {
      transform: scale(0.6);
      pointer-events: none;
    }
    div#main-content-container div:not(.page-blocks-inner) input.form-checkbox+a+div input.form-checkbox {
      transform: scale(0.9);
    }
    div#main-content-container input.form-checkbox+div input.form-checkbox+a,
    div#main-content-container div:not(.page-blocks-inner) input.form-checkbox+a+div input.form-checkbox+a {
      text-decoration: line-through;
      font-size: small;
      pointer-events: none;
    }
  `);

};

logseq.ready(main).catch(console.error);
