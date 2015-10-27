/**
 * Created by sakariruoho on 10/26/15.
 */
module.exports = {
    url: 'http://google.com',
    elements: {
        searchBar: {
            selector: 'input[type=text]'
        },
        submit: {
            selector: 'input[name="q"]',
            //locateStrategy: 'xpath'
        }
    }
};