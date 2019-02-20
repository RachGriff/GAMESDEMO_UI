import { API_BASE_URL } from "../../utils/config";

describe("app loading check", () => {
  it("visits the gameslist page", () => {
    cy.visit("/");
  });
});

describe("/", () => {
  it("displays all of the games in the current games list", () => {
    beforeEach(() => {
      cy.callAPIRetrievingGames();
    });

    cy.get("tr").then(trs => {
      expect(trs.length).to.equal(5);
    });
  });
  it("displays a message when there are no games available", () => {
    const text = `There are no games available yet - why not add one?`;
    cy.callAPIRetrievingNoGames();

    cy.visit("http://localhost:8080");
    cy.get("tr").then(trs => {
      expect(trs.length).to.equal(2);
    });
    cy.get("td").then(td => {
      expect(td[0].innerText).to.equal(text);
    });
  });
});
