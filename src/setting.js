export const settingUI = () => {
/* https://logseq.github.io/plugins/types/SettingSchemaDesc.html */
    const settingsTemplate = [
        {
            key: "advancedQuery",
            type: "string",
            inputAs: 'textarea',
            default: 
`[:find (pull ?e [*]) 
:where
[?e :block/marker ?m]
[(contains? #{"DOING"} ?m)]]`,
            title: "Customize advanced-query",
            description: ``,
        }
    ];
    logseq.useSettingsSchema(settingsTemplate);
};