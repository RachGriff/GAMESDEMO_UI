import { API_BASE_URL } from "../../utils/config";

describe("app loading check", () => {
  it("visits the gameslist page", () => {
    cy.visit("/");
  });
});

describe("/", () => {
  it("displays all of the games in the current games list", () => {
    cy.server();
    cy.route({
      method: "GET", // Route all GET requests
      url: API_BASE_URL,
      response: [
        {
          id: "5c6bef50f44c764c10020b8c",
          name: "Test Game One",
          released: "15 February 2018",
          rating: 4
        },
        {
          id: "5c6bef78f44c764c10020b8d",
          name: "Test Game Two",
          released: "05 January 2018",
          rating: 3
        },
        {
          id: "5c6bef92f44c764c10020b8e",
          name: "Test Game Three",
          released: "09 January 2018",
          rating: 4
        }
      ]
    });
    cy.visit("http://localhost:8080");
    cy.get("tr").then(trs => {
      expect(trs.length).to.equal(4);
    });
  });
  it("displays a message when there are no games available", () => {
    const text = `There are no games available yet - why not add one?`;
    cy.server();
    cy.route({
      method: "GET", // Route all GET requests
      url: API_BASE_URL,
      response: []
    });

    cy.visit("http://localhost:8080");
    cy.get("tr").then(trs => {
      expect(trs.length).to.equal(2);
    });
    cy.get("td").then(td => {
      expect(td[0].innerText).to.equal(text);
    });
  });
});
