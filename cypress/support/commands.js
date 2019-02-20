// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { API_BASE_URL } from "../../utils/config";

Cypress.Commands.add("callAPIRetrievingGames", (path = "/") => {
  cy.server();
  cy.route(API_BASE_URL, "fx:games.json");
  cy.visit(path);
});

Cypress.Commands.add("callAPIRetrievingNoGames", (path = "/") => {
  cy.server();
  cy.route(API_BASE_URL, []);
  cy.visit(path);
});
