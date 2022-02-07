import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { expressConstants } from './Config/Constants';
import { restResolvers } from './GraphQl/rest.resolver';
import { schema } from './GraphQl/schema';
import cors from 'cors';
import { options } from './Config/CORS';

const app = express();

app.use(cors(options));

app.use(express.json());

// configuração do grapghQl
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: restResolvers,
    graphiql: true,
}));


app.listen(expressConstants.__PORT, () => console.log(`Servidor rodando na porta ${expressConstants.__PORT}`));
