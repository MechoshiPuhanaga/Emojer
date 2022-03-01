describe('Emojer', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Enter text, new line and emojis, then submit.', () => {
    // Clear logic:
    cy.get('[data-test="input"]')
      .focus()
      .type('Hello world!')
      .should('have.html', 'Hello world!')
      .and('have.attr', 'role', 'textbox')
      .and('have.attr', 'aria-label', 'textbox')
      .and('have.attr', 'contenteditable', 'true');

    cy.get('[data-test="clear"]').click();

    cy.get('[data-test="input"]').focus().should('have.html', '');

    // Type and add new line:
    cy.get('[data-test="input"]')
      .focus()
      .type('Hello world!')
      .type('{enter}')
      .type('Hello Emojer!')
      .should('have.html', 'Hello world!<div>Hello Emojer!</div>');

    // Adding emoji:
    cy.get('[data-test="emoji-list"] [data-test^="icon-button"]').should('have.length', 6);

    cy.get('[data-test="emoji-list"]')
      .focus()
      // Check the emoji selector focus management:
      .type('{downArrow}')
      .type('{downArrow}')
      .type('{downArrow}')
      .type('{downArrow}')
      .type('{downArrow}')
      .type('{downArrow}')
      .type('{downArrow}')
      .type('{upArrow}')
      .type('{upArrow}')
      .type('{upArrow}')
      .type('{upArrow}')
      .type('{upArrow}')
      .type('{upArrow}');

    cy.get('[data-test="icon-button-0"]').should('be.focused').click();

    cy.get('[data-test="input"]').should(
      'have.html',
      // eslint-disable-next-line max-len
      'Hello world!<div>Hello Emojer!<img alt="Cool cowboy" src="/public/images/cool_cowboy.png"></div>'
    );

    // Continue typing after the emoji has been added:
    cy.get('[data-test="input"]')
      .should('be.focused')
      .type(':)')
      .should(
        'have.html',
        // eslint-disable-next-line max-len
        'Hello world!<div>Hello Emojer!<img alt="Cool cowboy" src="/public/images/cool_cowboy.png">:)</div>'
      )
      // Move caret:
      .type('{leftArrow}')
      .type('{leftArrow}');

    // Insert emoji in the caret position:
    cy.get('[data-test="emoji-list"]').focus();

    cy.get('[data-test="icon-button-0"]').click();

    // Continue typing at the position after the new emoji:
    cy.get('[data-test="input"]').should('be.focused').type(':O').should(
      'have.html',
      // eslint-disable-next-line max-len
      'Hello world!<div>Hello Emojer!<img alt="Cool cowboy" src="/public/images/cool_cowboy.png"><img alt="Cool cowboy" src="/public/images/cool_cowboy.png">:O:)</div>'
    );

    // Submit:
    cy.get('[data-test="submit"]').click();

    // Check the preview:
    cy.get('[data-test="preview"]').should(
      'have.html',
      // eslint-disable-next-line max-len
      'Hello world!<div>Hello Emojer!<img alt="Cool cowboy" src="/public/images/cool_cowboy.png"><img alt="Cool cowboy" src="/public/images/cool_cowboy.png">:O:)</div>'
    );

    // Check if the input has been cleared after submit:
    cy.get('[data-test="input"]').should('have.html', '');
  });
});
