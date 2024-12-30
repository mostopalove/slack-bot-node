const { Modal, Blocks } = require('slack-block-builder');

const updatedModal = () => {
  return Modal({ title: 'Updated modal', callbackId: 'view_1' })
    .blocks(
      Blocks.Section({ text: 'You updated the modal!' }),
      Blocks.Image({
        imageUrl:
          'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJ4M3R3cnBza3U2bnBtcWVkbXJ0NDF4emJ0enpqMmo3aHE4bnJpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/122ieBYC3AcECI/giphy.gif',
        altText: 'Yay! The modal was updated',
      }),
    )
    .buildToJSON();
};

module.exports = updatedModal;
