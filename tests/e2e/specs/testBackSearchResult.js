// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
    'test back to search result with keyword justice in home page': browser => {
      browser
        .init()
        // test app run
        .waitForElementVisible('#app')
  
        // test searching by keyword justice
        .assert.elementPresent('.search-box')
        .setValue('input[type=search]', 'justice')
        .assert.visible('input[type=submit]')
        .click('input[type=submit]')
  
        // test the search is giving 2 results
        .waitForElementVisible('.movies-list',6000)
        .assert.elementCount('.movie',2)
  
        // test click on the first element to redirect to the detail view of the Movie
        .waitForElementVisible('.movie-link:first-child .product-image',4000)
        .assert.visible('.movie-link:first-child .product-image')
        browser.execute(function() {
          document.querySelector('.movie-link:first-child .product-image').click()
        });
        browser.waitForElementVisible('.movie-detail',2000)
        .assert.containsText(".description-item h2","ZACK SNYDER'S JUSTICE LEAGUE")

        // Click back button 
        .assert.visible('.back-link')
        browser.execute(function() {
          document.querySelector('.back-link').click()
        });
        
       // test the search is giving 2 results
        browser.waitForElementVisible('.movies-list',6000)
        .assert.elementCount('.movie',2)
        .pause(4000)
        .end();
    },
  }
  