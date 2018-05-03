import gql from "graphql-tag";

const query = gql`
    query homePage {
        heros {
            name
            dob
            website
        }
    }
`;

export default query;