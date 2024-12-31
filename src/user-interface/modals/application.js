const { Modal, Blocks, Elements, Option } = require('slack-block-builder');
const {
  APP_ENVIRONMENTS,
  APP_PRODUCT_NAMES,
  APP_TYPE,
  APP_CALLBACK_ID,
  APP_FORM_ID,
} = require('../../constants/application-constants');

const application = () => {
  return Modal({
    title: 'Application request',
    callbackId: APP_CALLBACK_ID,
  })
    .blocks(
      Blocks.Header({
        text: ':warning: Please make sure you are connected to Axis before submitting the form',
      }),
      Blocks.Input({
        label: 'Environment',
      })
        .blockId(APP_FORM_ID.env.blockId)
        .element(
          Elements.StaticSelect()
            .options(APP_ENVIRONMENTS.map((optionData) => Option(optionData)))
            .actionId(APP_FORM_ID.env.actionId),
        ),
      Blocks.Input({
        label: 'Application name',
      })
        .blockId(APP_FORM_ID.app.blockId)
        .element(
          Elements.StaticSelect()
            .options(APP_PRODUCT_NAMES.map((optionData) => Option(optionData)))
            .actionId(APP_FORM_ID.app.actionId),
        ),
      Blocks.Input({
        label: 'Request type',
      })
        .blockId(APP_FORM_ID.type.blockId)
        .element(
          Elements.StaticSelect()
            .options(APP_TYPE.map((optionData) => Option(optionData)))
            .actionId(APP_FORM_ID.type.actionId),
        ),
      Blocks.Input({
        label: 'Description',
        hint: 'Provide detailed explanation of your request',
      })
        .blockId(APP_FORM_ID.description.blockId)
        .element(
          Elements.TextInput({ multiline: true, minLength: 50 }).actionId(
            APP_FORM_ID.description.actionId,
          ),
        ),
      Blocks.Input({
        label: 'Link',
      })
        .blockId(APP_FORM_ID.link.blockId)
        .element(Elements.URLInput().actionId(APP_FORM_ID.link.actionId))
        .optional(true),
      Blocks.Input({
        label: 'Screenshots',
      })
        .blockId(APP_FORM_ID.screenshot.blockId)
        .element(Elements.FileInput().actionId(APP_FORM_ID.screenshot.actionId))
        .optional(true),
    )
    .submit('Submit')
    .buildToJSON();
};

module.exports = application;
