export const settingUI = () => {
    const settingsTemplate = [
        {
            key: "advancedQuery",
            type: "string",
            inputAs: 'textarea',
            default: `[:find (pull ?b [*])
                    :where
                    (task ?b #{"DOING"})]`,
            title: "advanced Query",
            description:
                'customize ... [:find (pull ?b [*]) :where(task ?b #{"DOING"})]',
        }
    ];
    logseq.useSettingsSchema(settingsTemplate);
};