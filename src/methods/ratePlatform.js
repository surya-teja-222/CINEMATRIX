export default async function ratePlatform(rating) {
  // console.log(`Rating platform with ${rating} stars`);
  const url = `${process.env.REACT_APP_FEEDBACKURL}app`;

  // get last character of rating
  const lastChar = rating.slice(-1);
  // convert last character to number
  const ratingNumber = Number(lastChar);

  // get user ip address
  const ip = await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => data.ip);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating: ratingNumber,
      ip: ip,
    }),
  });
}
