const query = `#graphql
  query GetCollectionByHandle($handle: String!, $cursor: String) {
    collectionByHandle(handle: $handle) {
      id
      title
      products(first: 250, reverse: true, after: $cursor) {
        edges {
          node {
            id
            title
            tags
            variants(first: 50) {
              edges {
                node {
                  id
                  sku
                  title
                  price
                  compareAtPrice
                  product {
                    id
                    title
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

export default query;
