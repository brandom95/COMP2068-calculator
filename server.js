// modules here
const connect = require('connect');
const url = require('url');

// connect app
const app = connect();

app.use((req, res) => {
  // Combining the url
  const parsedUrl = url.parse(req.url, true);

  // extract 
  const { method, x, y } = parsedUrl.query;

  // Convert x and y to numbers
  const numX = parseFloat(x);
  const numY = parseFloat(y);

  // checking for valid numbers
  if (isNaN(numX) || isNaN(numY)) {
    res.end('Invalid parameters');
    return;
  }

  // performing the calculation
  let result;
  switch (method) {
    case 'add':
      result = numX + numY;
      break;
    case 'subtract':
      result = numX - numY;
      break;
    case 'multiply':
      result = numX * numY;
      break;
    case 'divide':
      result = numX / numY;
      break;
    default:
      res.end('Invalid method');
      return;
  }

  // showing the resoults on the client
  res.end(`${numX} ${method} ${numY} = ${result}`);
});

// server 
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
