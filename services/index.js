import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            titulo
            excerpt
            imagen {
              url
            }
            categorias {
              name
              slug
            }
            autor {
              bio
              name
              id
              foto {
                url
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postConnecton.edges;
};
