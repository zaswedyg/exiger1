import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from '../../pages/DashboardPage'

const dashboardPage = new DashboardPage();

When('I search for Admin', () => {
  dashboardPage.getSearchField().type('Admin')
});

When('I search for My Info', () => {
    dashboardPage.getSearchField().type('My Info')
  });

Then('I can see Admin in the search result', () => {
    cy.get('.oxd-main-menu-item').should('have.text', 'Admin')
  });

Then('I can see My Info in the search result', () => {
    cy.get('.oxd-main-menu-item').should('have.text', 'My Info')
  });

Then('After I click on links in navbar it redirects me to corresponding page', () => {
    dashboardPage.click_all_navbar_links()
  });

Then('All dashboard tiles are displayed', () => {
    dashboardPage.all_dashboard_tiles_present()
  });
