import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './api/schema';

const PORT = 3001;

const app = express();

app.use(cors());

// bodyParser is needed just for POST.
app.use('/graphql', 
    bodyParser.json(),
    graphqlExpress({ schema })
);

app.use('/graphiql', 
    graphiqlExpress({
        endpointURL: '/graphql',
    })
);

app.listen(PORT);