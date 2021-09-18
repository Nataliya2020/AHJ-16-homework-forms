import Button from './Button';
import Popover from './Popover';

const popover = new Popover('Popover title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed mi ac metus tincidunt vulputate.');
const button = new Button(popover);

button.bindToDom(document.querySelector('.container'));

button.init();
