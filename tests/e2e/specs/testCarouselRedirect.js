// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
    'test Carousel redirect': browser => {
      browser
        .init()
        // test app run
        .waitForElementVisible('#app')
  
        // test searching by keyword justice
        .assert.elementPresent('.carousel')
        .assert.elementCount('.carousel-slide',4)
        browser.execute(function() {
          document.querySelector('.next').click()
        });
        browser.waitForElementVisible('#slide-1',4000)
        browser.execute(function() {
          document.querySelector('#slide-1 a').click()
        });
        browser.assert.containsText(".description-item h2","TEASER - THE WALKING DEAD S11")
        
    },
  }
  