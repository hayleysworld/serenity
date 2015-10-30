exports.commands = {
  shrug: function (target) {
    if (!target) return '¯\\_(ツ)_/¯';
    if (target) return '¯\\_(ツ)_/¯ ' + target;
  },
  shrughelp: function () {
    return this.sendReply('/shrug - Makes you send \'¯\_(ツ)_/¯\' to the room.\n /shrug example sends \'¯\_(ツ)_/¯ example\'.');
  },
};
