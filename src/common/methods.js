const logger = require('../common/logger');

const methods  = {

     slowFunction: function (number) {
         let begin = Date.now();
         let result = 0;
         for (let i = Math.pow(number, 7); i >= 0; i--) {
             result += Math.atan(i) * Math.tan(i);
         }
         let end = Date.now();
         let took = (end - begin) / 1000 + "s";
         logger.info('Request %d took: %s', number, took);
    },

    delayResponse: async function (delay, id) {
        logger.info(delay, id)
        await new Promise(resolve => setTimeout(resolve, delay));
        logger.info(delay)
        return delay
    }

}

module.exports = methods;
