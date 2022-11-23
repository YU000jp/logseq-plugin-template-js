import '@logseq/libs';
import { getDateForPage } from 'logseq-dateutils';
import { logseq as PL } from "../package.json";


import { settingUI } from './setting';
const pluginId = PL.id;


/* main */
const main = () => {
  settingUI(); /* -setting */
  console.info(`#${pluginId}: MAIN`); /* -plugin-id */
  logseq.UI.showMsg(`add contextmenu item`); /* test message */


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
      console.log("#${pluginId}: ✔️ DONE with completed");
  });

  /* ContextMenuItem reference */
    logseq.Editor.registerBlockContextMenuItem('🔵🟣Link as reference', async ({uuid}) => {
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const today = new Date();
      const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
      console.log(todayDateInUserFormat);
      const insertObj = await logseq.Editor.insertBlock(uuid,`🔵🟣 ((`+uuid+`))`);
      logseq.Editor.upsertBlockProperty(insertObj.uuid, "referenced",todayDateInUserFormat);
      logseq.App.openInRightSidebar(insertObj.uuid);
      logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.");
      console.log("#${pluginId}: Link as reference");
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
      const insertObj = await logseq.Editor.insertBlock(uuid,`LATER 🔵🟣 ((`+uuid+`))`);
      /* logseq.Editor.upsertBlockProperty(uuid, "referenced",todayDateInUserFormat); */
      logseq.App.openInRightSidebar(insertObj.uuid);
      logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.");
      console.log("🔵🟣LATER as reference");
    });

  /* ContextMenuItem Delete */
  logseq.Editor.registerBlockContextMenuItem('❌ Delete this block', async ({ uuid }) => {
    logseq.Editor.removeBlock(uuid);
    logseq.UI.showMsg("delete the block");
    console.log("#${pluginId}: delete the block");
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

  /* toolbarItem */
  logseq.App.registerUIItem("toolbar", {
    key: pluginId,
    template: `
    <div data-on-click="open_dashboard" style="font-size:20px">🔥</div>
    `,
  });
  
  console.info(`#${pluginId}: loaded`);
};


/* dashboard */
const model = {
  async open_dashboard() {
    const queryScript = logseq.settings.advancedQuery;
    console.log(`#${pluginId}: ${queryScript}`);
    const queryObj = await logseq.DB.datascriptQuery(queryScript); /* TODO */

    console.log(`#` + pluginId + `: ` + queryObj);
    logseq.UI.showMsg(`Open dashboard`);
  }
};

logseq.ready(model, main).catch(console.error);