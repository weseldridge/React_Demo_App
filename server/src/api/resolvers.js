import find from 'lodash/find';

const heros = [
    {
        _id: 1,
        name: 'Elon Musk',
        dob: 'June 28, 1971',
        website: 'https://twitter.com/elonmusk',
        image: '/images/elon-musk.jpg'

    },
    {
        _id: 2,
        name: 'Kermit',
        dob: 'May 9, 1955',
        website: 'https://twitter.com/KermitTheFrog',
        image: '/images/kermit.png'
    },
    {
        _id: 3,
        name: 'Han Solo',
        dob: 'May 25, 1977',
        website: 'https://en.wikipedia.org/wiki/Han_Solo',
        image: '/images/han.png'
    },
];

export const resolvers = {
    Query: {
        heros: () => {
            return heros;
        },
        hero: (_, {id}) => {
            return find(heros, hero => {
                return hero._id == id;
            });
        }
    }
};

export default resolvers;