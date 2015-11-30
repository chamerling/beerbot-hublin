'use strict';

var DEFAULT_HUBLIN_URL = 'https://hubl.in';
var HUBLIN_URL = process.env.BEERBOT_HUBLIN_URL || DEFAULT_HUBLIN_URL;
var PATTERN = /!hublin (.*)/i;

module.exports = function(bot, options) {

  var q = bot.q;
  var logger = bot.logger;
  var url = options.endpoint || HUBLIN_URL;

  bot.listen(PATTERN, options, function(message) {
    logger.debug('Hublin conference requested on', message.text);
    return q.when(url + '/' + message.match[1] || bot.getChannelName(message));
  });
};
