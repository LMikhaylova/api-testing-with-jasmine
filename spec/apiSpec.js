const fetch = require("node-fetch");

it("should fetch a post", async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post1 = await response.json();
  //console.log(post1);
  expect(post1.userId).toEqual(1);
});

it("should create a new resource", async function() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  const newResource = await response.json();

  //console.log(newResource);

  //console.log(response.status);

  const headers = response.headers;

  console.log(headers);

  expect(headers.get('location')).toEqual('http://jsonplaceholder.typicode.com/posts/101');

  expect(response.status).toEqual(201);

});

