
const heros = [
    {
        _id: 1,
        name: 'Elon Musk',
        dob: 'June 28, 1971',
        website: 'https://twitter.com/elonmusk'
    },
    {
        _id: 2,
        name: 'Elon Musk',
        dob: 'June 28, 1971',
        website: 'https://twitter.com/elonmusk'
    },
];

export const resolvers = {
    Query: {
        heros: () => {
            return heros;
        }
    }
};

export default resolvers;