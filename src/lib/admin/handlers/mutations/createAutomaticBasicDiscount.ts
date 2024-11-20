const mutation = `#graphql
  mutation CreateAutomaticBasicDiscount($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            startsAt
            endsAt
            title
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
`;

export default mutation;
