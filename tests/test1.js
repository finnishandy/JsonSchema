/**
 * Created by sakariruoho on 10/26/15.
 */
// TODO: import global settings here, so we can define a global host for instance.
// or even better.. some kind of nightwatch global thingy



module.exports = {
    'Test': function (client) {
        var google = client.page.google();

        if (client.globals.environment == 'Test') {
            // do something
        } else if (client.globals.environment == 'Prod') {
            // do something else
        }

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@submit')
            .assert.containsText('@searchBar', 'Night Watch');

        client.end();
    }
};

module.exports = {
    'Demo test Google' : function (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .saveScreenshot('screenshot' + '/' + 'foo.png')
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};