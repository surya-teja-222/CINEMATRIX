export default async function rateMovie(movieName, rating) {
  // console.log(`Rating movie ${movieName} with ${rating} stars`);
  const url = `${process.env.REACT_APP_FEEDBACKURL}movie`;

  // get last character of rating
  const lastChar = rating.slice(-1);
  // convert last character to number
  const ratingNumber = Number(lastChar);

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
      name: movieName,
    }),
  });
}
