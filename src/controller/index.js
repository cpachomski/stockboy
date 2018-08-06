const triggers = require("./stock");

module.exports = stockboy => {
  Object.entries(triggers).forEach(t => {
    const { trigger, handler } = t[1](stockboy);

    stockboy.hears(trigger, handler);
  });
};
