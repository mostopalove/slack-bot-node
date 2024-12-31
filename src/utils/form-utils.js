const parseFormValues = (formValues) => {
  const blocks = Object.values(formValues);
  const actions = blocks.map((block) => Object.values(block)).flat();
  return actions.map((action) => {
    switch (action.type) {
      case 'static_select':
        return action.selected_option.value;
      case 'plain_text_input':
      case 'url_text_input':
        return action.value;
      case 'file_input':
        return action.files.map((file) => file.url_private);
      default:
        throw new Error('Not implemented input type');
    }
  });
};

module.exports = {
  parseFormValues,
};
