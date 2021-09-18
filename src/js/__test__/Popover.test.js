/**
 * @jest-environment jsdom
 */

import Popover from '../Popover';

test('use jsdom in this test file', () => {
  const container = document.createElement('div');
  container.classList.add('container');
  expect(container).not.toBeNull();
});

window.alert = jest.fn();

test('login api resolves true', () => {
  window.alert.mockClear();
  /* ... */
});

let popover = null;

popover = new Popover('title', 'message text');

document.body.innerHTML = '<div class="container"</div>';

test('Checking the creation of a popover', () => {
  popover.createPopover();
  const popoverContainer = document.querySelector('.popover-container');
  expect(popoverContainer).toBeTruthy();
});
