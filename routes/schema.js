const fetch = require('node-fetch');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} = require('graphql')

const GovedaDemo = `http://212.200.54.246:5001/api/Slaughter/GetSlaughtersByPage?CompanyId=1`;

const KlanjeGovedaType = new GraphQLObjectType({
    name: 'Klanje',
    description: '...',
    fields: () => ({
        id: { type: GraphQLString }
    })
})


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        description: '...',
        fields: ()=> ({
            KlanjeGoveda: {
                type: KlanjeGovedaType,
                args: {
                    SupplierId: { type: GraphQLInt }
                }
            }
        })
    })
})