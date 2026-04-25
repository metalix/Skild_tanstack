const { queryRef, executeQuery, validateArgsWithOptions, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'skild-3d006-service',
  location: 'europe-central2'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const getSklillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSklills', inputVars);
}
getSklillsRef.operationName = 'GetSklills';
exports.getSklillsRef = getSklillsRef;

exports.getSklills = function getSklills(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(getSklillsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;
