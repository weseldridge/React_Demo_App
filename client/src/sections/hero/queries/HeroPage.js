import gql from "graphql-tag";

const query = gql`
    query heroPage {
        heros {
            name
            dob
            website
        }
    }
`;

export default query;