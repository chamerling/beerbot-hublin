'use strict';

var DEFAULT_HUBLIN_URL = 'https://hubl.in';
var HUBLIN_URL = process.env.BEERBOT_HUBLIN_URL || DEFAULT_HUBLIN_URL;
var PATTERN = /!hublin (.*)/i;

module.exports = function(bot, options) {

  var q = bot.q;
  var logger = bot.logger;
  var url = options.endpoint || HUBLIN_URL;
  var pattern = options.match || PATTERN;

  bot.listen(PATTERN, options, function(response) {
    logger.debug('Hublin conference requested on', response.message.text);
    response.send(url + '/' + response.match[1] || response.getSourceChannelName());
  });
};
