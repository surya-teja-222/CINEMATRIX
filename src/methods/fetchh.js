async function fetchh(input) {
  var k = process.env.REACT_APP_URL + "?movie=" + input;
  k = await fetch(k);
  k = await k.json();
  return k;
}

export default fetchh;
