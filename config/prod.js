// deploy 이후, production 환경에서
// HEROKU에서 관리 중인 mogodb key
module.exports = {
  mongoURI: process.env.MONGO_URI
}
