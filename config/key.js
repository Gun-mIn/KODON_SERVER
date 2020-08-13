// deployed environment
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
}

// development environment
else {
  module.exports = require('./dev');
}
