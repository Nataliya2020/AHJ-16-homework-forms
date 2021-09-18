/**
 * @jest-environment jsdom
 */
import Button from '../Button';

test('checking Button', () => {
  function checkingButton() {
    const button = new Button();
    button.bindToDom(null);
  }
  expect(checkingButton).toThrowError(new Error('container is not HTMLElement'));
});
