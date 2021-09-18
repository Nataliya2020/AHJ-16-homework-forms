export default class Popover {
  constructor(title, message) {
    this.title = title;
    this.message = message;
    this.position = null;
  }

  createPopover() {
    const popoverContainer = document.createElement('div');
    popoverContainer.classList.add('popover-container');

    const popover = document.createElement('div');
    popover.classList.add('popover');

    const popoverContainerTitle = document.createElement('div');
    popoverContainerTitle.classList.add('popover-container-title');

    const popoverTitle = document.createElement('h3');
    popoverTitle.classList.add('popover-title');
    popoverTitle.innerHTML = this.title;

    const popoverParagraph = document.createElement('div');
    popoverParagraph.classList.add('popover-paragraph');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = this.message;

    const popoverTail = document.createElement('div');
    popoverTail.classList.add('popover-tail');

    const paragraphText = document.createElement('div');
    paragraphText.classList.add('visually-hidden');
    paragraphText.innerHTML = 'Хвост tooltip';

    popoverContainer.append(popover);
    popover.append(popoverContainerTitle);
    popoverContainerTitle.append(popoverTitle);
    popoverParagraph.append(paragraph);

    popover.append(popoverParagraph);
    popoverContainer.append(popoverTail);

    document.querySelector('.container').appendChild(popoverContainer);
  }

  showPopover(event) {
    event.preventDefault();

    const popoverContainer = document.querySelector('.popover-container');
    if (popoverContainer) {
      popoverContainer.remove();
    } else {
      this.createPopover(event);
    }
    this.popoverPosition(popoverContainer, event);
  }

  popoverPosition(el, event) {
    this.position = event.target.closest('forms').getBoundingClientRect();
    const elem = el;
    elem.style.left = `${this.position.left + this.position.width / 2 - elem.offsetWidth / 2}px`;
    elem.style.top = `${this.position.top - this.position.height - elem.offsetHeight / 2}px`;
  }
}
