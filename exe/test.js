function generateRandomAlphanumericToken(length) {
  let result = "";
  while (result.length < length) {
    result += Math.random().toString(36).substring(2);
  }
  return result.substring(0, length);
}

function createSession(username) {
  let token = generateRandomAlphanumericToken(16)
  return {
    getUsername: () => username,
    getTokenPreview: () => token.slice(0,4)+'************',
    validateToken: (tokenInput) => token === tokenInput,
    regenerateToken: () => token = generateRandomAlphanumericToken(16)
  }
}
let a = createSession("efraim");
let token = a.getTokenPreview();
console.log(token);
console.log(a.validateToken(token));
console.log(a)
console.log();
console.log(a.getTokenPreview())
