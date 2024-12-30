const {Modal, Blocks, Elements} = require("slack-block-builder");

const mainModal = () => {
  return Modal({ title: 'Hello there!' , callbackId: 'view_1'})
    .blocks(
      Blocks.Section({text: 'Welcome to a modal with _blocks_'})
        .accessory(
          Elements.Button({text: 'Click me!', actionId: 'button_abc'})
        ),
      Blocks.Input({ blockId: 'input_c', label: 'What are your hopes and dreams?'})
        .element(
          Elements.TextInput({multiline: true})
            .actionId('dreamy_input')
        )
    )
    .submit('Submit')
    .buildToJSON();
}

module.exports = mainModal