import { mount } from '@cypress/react';

import Input from '../Input';

describe('Input', () => {
  it('Enter introduces new line', () => {
    mount(<Input />);
    cy.get('[data-test="input"]')
      .focus()
      .type('Hello world!')
      .type('{enter}')
      .type('Hello Emojer!')
      .should('have.html', `Hello world!<div>Hello Emojer!</div>`)
      .and('have.attr', 'role', 'textbox')
      .and('have.attr', 'aria-label', 'textbox')
      .and('have.attr', 'contenteditable', 'true');
  });
});
