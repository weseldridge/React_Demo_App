import gql from "graphql-tag";

const query = gql`
    query herosPage {
        heros {
            _id
            name
            dob
            website
        }
    }
`;

export default query;