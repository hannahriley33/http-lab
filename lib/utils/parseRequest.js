module.exports = rawRequest => {
  const pattern = /(?<method>[A-Z]+)\s(?<path>\S+)/;

  const [, body] = rawRequest.split('\r\n\r\n');

  return { ...rawRequest.match(pattern).groups, body };
};
