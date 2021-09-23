// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
    'test watching Justice league Movie': browser => {
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
        browser.waitForElementVisible('.movie-detail',4000)
        .assert.containsText(".description-item h2","ZACK SNYDER'S JUSTICE LEAGUE")

        // opening the shaka video player
        .assert.visible('.playButton')
        browser.execute(function() {
          document.querySelector('.playButton').click()
        });
        browser.waitForElementVisible('.shaka-video-container',1000)
        browser.execute(function() {
            document.querySelector('.shaka-small-play-button').click()
          });
        browser.pause(4000)
        .end();
    },
  }
  