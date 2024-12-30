const { Modal, Blocks, Elements, Option } = require('slack-block-builder');
const {
  APP_ENVIRONMENTS,
  APP_PRODUCT_NAMES,
  APP_TYPE,
} = require('../../constants/application-constants');

const application = () => {
  return Modal({
    title: 'Application request',
  })
    .blocks(
      Blocks.Header({ text: 'Fill in all the form data' }),
      Blocks.Input({
        label: 'Environment',
      }).element(
        Elements.StaticSelect().options(
          APP_ENVIRONMENTS.map((optionData) => Option(optionData)),
        ),
      ),
      Blocks.Input({
        label: 'Application name',
      }).element(
        Elements.StaticSelect().options(
          APP_PRODUCT_NAMES.map((optionData) => Option(optionData)),
        ),
      ),
      Blocks.Input({
        label: 'Request type',
      }).element(
        Elements.StaticSelect().options(
          APP_TYPE.map((optionData) => Option(optionData)),
        ),
      ),
      Blocks.Input({
        label: 'Description',
        hint: 'Provide detailed explanation of your request',
      }).element(Elements.TextInput({ multiline: true, minLength: 50 })),
      Blocks.Input({
        label: 'Link',
      })
        .element(Elements.URLInput())
        .optional(true),
      Blocks.Input({
        label: 'Screenshots',
      })
        .element(Elements.FileInput())
        .optional(true),
    )
    .submit('Submit')
    .buildToJSON();
};

module.exports = application;
