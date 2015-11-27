'use strict';

// @beerbot !hublin your_conf_name

var DEFAULT_HUBLIN_URL = 'https://hubl.in';
var HUBLIN_URL = process.env.BEERBOT_HUBLIN_URL || DEFAULT_HUBLIN_URL;

module.exports = function(bot) {

  var q = bot.q;
  var logger = bot.logger;

  return {
    mention: function(message) {
      logger.debug('Hublin mention', message.text);
      var roomname = message.text.split(' ')[2];
      roomname = roomname || bot.getChannelName(message);
      return q.when(HUBLIN_URL + '/' + roomname);
    },
    receive: function(message) {
      logger.debug('Hublin receive', message.text);
      return q.when(HUBLIN_URL + '/' + bot.getChannelName(message));
    }
  };
};
