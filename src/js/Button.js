export default class Button {
  constructor(popover) {
    this.button = document.querySelector('.button');
    this.popover = popover;
    this.container = null;
  }

  bindToDom(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  init() {
    this.button.addEventListener('click', (event) => this.popover.showPopover(event));
  }
}
