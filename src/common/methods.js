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
    }

}

module.exports = methods;
