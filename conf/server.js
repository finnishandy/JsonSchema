/**
 * Created by sakariruoho on 10/26/15.
 */
var self = module.exports = {
    environment: undefined,
    before: function (done) {
        // parseArgumentsAndGetEnv is function you need to implement on your own to find your env param
        self.environment = 'foo';
        console.log("Run against: " + self.environment);

        done();
    }
};