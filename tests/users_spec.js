var frisby = require('frisby');

frisby.create('users')
  .get('http://localhost:3000/users')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON([{id:2}])
.toss();

frisby.create('users/{id}')
  .get('http://localhost:3000/users/2')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({id:2})
.toss();
