import gql from "graphql-tag";

const query = gql`
    query heroPage($id: String) {
        hero(id: $id) {
            _id
            name
            dob
            website
            image
        }
    }
`;

export default query;