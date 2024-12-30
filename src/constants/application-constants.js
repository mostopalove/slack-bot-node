const APP_ENVIRONMENTS = [
  { text: 'Development', value: 'Development' },
  { text: 'Production', value: 'Production' },
];

const APP_PRODUCT_NAMES = [
  { text: 'Edison', value: 'Edison' },
  { text: 'Events Mapper', value: 'Events Mapper' },
  { text: 'Data Bridge', value: 'Data Bridge' },
  { text: 'Simon', value: 'Simon' },
  { text: 'Periscope', value: 'Periscope' },
  { text: 'PromptLab', value: 'PromptLab' },
];

const APP_TYPE = [
  { text: 'Bug', value: 'Bug' },
  { text: 'Support', value: 'Support' },
  { text: 'Feature request', value: 'Feature request' },
];

const APP_CALLBACK_ID = 'app_callback_id';

const APP_FORM_ID = {
  env: {
    blockId: 'env_block_id',
    actionId: 'env_action_id',
  },
  app: {
    blockId: 'app_block_id',
    actionId: 'app_action_id',
  },
  type: {
    blockId: 'type_block_id',
    actionId: 'type_action_id',
  },
  description: {
    blockId: 'desc_block_id',
    actionId: 'desc_action_id',
  },
  link: {
    blockId: 'link_block_id',
    actionId: 'link_action_id',
  },
  screenshot: {
    blockId: 'screen_block_id',
    actionId: 'screen_action_id',
  },
};

module.exports = {
  APP_ENVIRONMENTS,
  APP_PRODUCT_NAMES,
  APP_TYPE,
  APP_CALLBACK_ID,
  APP_FORM_ID,
};
