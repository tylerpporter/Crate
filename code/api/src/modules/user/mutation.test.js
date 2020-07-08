import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
describe("user mutations", () => {
  let server;
  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });
  it('updates a user', async () => {
    const response = await request(server)
    .post('/')
    .send({ query: 'mutation { userUpdate(id:2, stylePreference: \"casual\") { name id stylePreference } }'})
    .expect(200)
    console.log(response.body.data)
    expect(response.body.data.userUpdate.name).toEqual('The User')
    expect(response.body.data.userUpdate.id).toEqual(2)
    expect(response.body.data.userUpdate.stylePreference).toEqual('casual')
  })
})
