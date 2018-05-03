
const heros = [
    {
        name: 'Elon Musk',
        dob: 'June 28, 1971',
        website: 'https://twitter.com/elonmusk'
    },
    {
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