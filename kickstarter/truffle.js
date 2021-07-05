module.exports = {
  // see <http://truffleframework.com/docs/advanced/confguartion>
  // to customize your truffle configuration!
  // to use Ganache use the following configuration
    networks: {
      development: {
        host: "127.0.0.1",
        port: 9545,
        network_id: "*"
      }
    }
  };

  /**  for the local environemt
   * networks: {
   * "development": {
   *  network_id: 1,
   *  host: "localhost"
   *  port: 9545
   */