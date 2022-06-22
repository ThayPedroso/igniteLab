import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oo8egh0mw201z4eh9o1tnf/master',
    cache: new InMemoryCache()
})