import '@logseq/libs';
import { getDateForPage } from 'logseq-dateutils';
import { logseq as PL } from "../package.json";


import { settingUI } from './setting';
const pluginId = PL.id;


/* main */
const main = () => {

  settingUI(); /* -setting */
  console.info(`#${pluginId}: MAIN`); /* -plugin-id */
  logseq.UI.showMsg(`add items at toolbar and contextmenu`); /* test message ==remove== */

  /* CSS */
  logseq.provideStyle(String.raw`
    div#test {
      font-size: 20px;
    }
  `);

  /* ContextMenuItem  */
    logseq.Editor.registerBlockContextMenuItem('🟢Open at right sidebar', async ({uuid}) => {
 0
      /* todayDateInUserFormat Sample */
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const today = new Date();
      const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
      console.log(`#${pluginId}: ${todayDateInUserFormat}`);
      /* end_sample */

      logseq.App.openInRightSidebar(uuid);
      logseq.UI.showMsg("🟢Open at right sidebar");
      console.log(`#${pluginId}: 🟢Open at right sidebar`);
    });

  /* toolbarItem */
  logseq.App.registerUIItem("toolbar", {
    key: pluginId,
    template: `
    <div data-on-click="open_dashboard" style="font-size:20px">🔥</div>
    `,
  });/* For open_dashboard */
  
  console.info(`#${pluginId}: loaded`);
};/* end_main */


/* dashboard */
const model = {
  async open_dashboard() {
    console.info(`#${pluginId}: open_dashboard`);
    const queryScript = logseq.settings.advancedQuery;
    console.log(`#${pluginId}: queryScript ${queryScript}`); /* TODO */
    const result = await logseq.DB.datascriptQuery(queryScript);
      console.log(`#${pluginId}: result ${result}`);
    logseq.UI.showMsg(`Open dashboard`);
  }
};

logseq.ready(model, main).catch(console.error);