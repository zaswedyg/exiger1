class DashboardPage {

    navbarLinks = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', "Dashboard", "Directory", 'Maintenance', 'Buzz']
    bodyTiles = ['Time at Work', 'My Actions', 'Quick Launch', 'Buzz Latest Posts', 'Employees on Leave Today',
    'Employee Distribution by Sub Unit', 'Employee Distribution by Location']

    getSearchField() {
      return cy.get('.oxd-input');
    }

    click_all_navbar_links() {
        for (let i = 0; i < this.navbarLinks.length; i++) {
          const linkName = this.navbarLinks[i]
          cy.contains(linkName).click()
          if (linkName == 'My Info') {
            cy.url().should('include', 'PersonalDetails')
          } else {
            cy.url().should('include', `/${linkName.toLowerCase()}`)
          }
          cy.go('back')
    }}

    all_dashboard_tiles_present() {
        for (let i = 0; i < this.bodyTiles.length; i++) {
            cy.contains(this.bodyTiles[i]).should('be.visible')
        }
    }
  }
  
  export default DashboardPage;
  