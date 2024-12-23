/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as AdminTypes from './admin.types';

export type CreateAutomaticBasicDiscountMutationVariables = AdminTypes.Exact<{
  automaticBasicDiscount: AdminTypes.DiscountAutomaticBasicInput;
}>;


export type CreateAutomaticBasicDiscountMutation = { discountAutomaticBasicCreate?: AdminTypes.Maybe<{ automaticDiscountNode?: AdminTypes.Maybe<(
      Pick<AdminTypes.DiscountAutomaticNode, 'id'>
      & { automaticDiscount: Pick<AdminTypes.DiscountAutomaticBasic, 'startsAt' | 'endsAt' | 'title'> }
    )>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'code' | 'message'>> }> };

export type UpdateVariantMetafieldsMutationVariables = AdminTypes.Exact<{
  metafields: Array<AdminTypes.MetafieldsSetInput> | AdminTypes.MetafieldsSetInput;
}>;


export type UpdateVariantMetafieldsMutation = { metafieldsSet?: AdminTypes.Maybe<{ metafields?: AdminTypes.Maybe<Array<Pick<AdminTypes.Metafield, 'key' | 'namespace' | 'value' | 'createdAt' | 'updatedAt'>>>, userErrors: Array<Pick<AdminTypes.MetafieldsSetUserError, 'field' | 'message' | 'code'>> }> };

export type GetCollectionByHandleQueryVariables = AdminTypes.Exact<{
  handle: AdminTypes.Scalars['String']['input'];
  cursor?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type GetCollectionByHandleQuery = { collectionByHandle?: AdminTypes.Maybe<(
    Pick<AdminTypes.Collection, 'id' | 'title'>
    & { products: { edges: Array<{ node: (
          Pick<AdminTypes.Product, 'id' | 'title' | 'tags'>
          & { variants: { edges: Array<{ node: (
                Pick<AdminTypes.ProductVariant, 'id' | 'sku' | 'title' | 'price' | 'compareAtPrice'>
                & { product: Pick<AdminTypes.Product, 'id' | 'title'>, selectedOptions: Array<Pick<AdminTypes.SelectedOption, 'name' | 'value'>> }
              ) }> } }
        ) }>, pageInfo: Pick<AdminTypes.PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'endCursor' | 'startCursor'> } }
  )> };

export type GetCollectionByHandleWithMetafieldsQueryVariables = AdminTypes.Exact<{
  handle: AdminTypes.Scalars['String']['input'];
  namespace: AdminTypes.Scalars['String']['input'];
  key: AdminTypes.Scalars['String']['input'];
  cursor?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type GetCollectionByHandleWithMetafieldsQuery = { collectionByHandle?: AdminTypes.Maybe<(
    Pick<AdminTypes.Collection, 'id' | 'title'>
    & { products: { edges: Array<{ node: (
          Pick<AdminTypes.Product, 'id' | 'title' | 'tags'>
          & { variants: { edges: Array<{ node: (
                Pick<AdminTypes.ProductVariant, 'id' | 'sku' | 'title' | 'price' | 'compareAtPrice'>
                & { product: Pick<AdminTypes.Product, 'id' | 'title'>, selectedOptions: Array<Pick<AdminTypes.SelectedOption, 'name' | 'value'>>, excludeFromDiscounts?: AdminTypes.Maybe<Pick<AdminTypes.Metafield, 'value'>> }
              ) }> } }
        ) }>, pageInfo: Pick<AdminTypes.PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'endCursor' | 'startCursor'> } }
  )> };

export type GetVariantBySkuQueryVariables = AdminTypes.Exact<{
  sku: AdminTypes.Scalars['String']['input'];
}>;


export type GetVariantBySkuQuery = { productVariants: { edges: Array<{ node: (
        Pick<AdminTypes.ProductVariant, 'id' | 'title' | 'sku'>
        & { product: Pick<AdminTypes.Product, 'handle' | 'title'> }
      ) }> } };

interface GeneratedQueryTypes {
  "#graphql\n  query GetCollectionByHandle($handle: String!, $cursor: String) {\n    collectionByHandle(handle: $handle) {\n      id\n      title\n      products(first: 250, reverse: true, after: $cursor) {\n        edges {\n          node {\n            id\n            title\n            tags\n            variants(first: 50) {\n              edges {\n                node {\n                  id\n                  sku\n                  title\n                  price\n                  compareAtPrice\n                  product {\n                    id\n                    title\n                  }\n                  selectedOptions {\n                    name\n                    value\n                  }\n                }\n              }\n            }\n          }\n        }\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n          endCursor\n          startCursor\n        }\n      }\n    }\n  }\n": {return: GetCollectionByHandleQuery, variables: GetCollectionByHandleQueryVariables},
  "#graphql\n  query GetCollectionByHandleWithMetafields($handle: String!, $namespace: String!, $key: String!, $cursor: String) {\n    collectionByHandle(handle: $handle) {\n      id\n      title\n      products(first: 250, reverse: true, after: $cursor) {\n        edges {\n          node {\n            id\n            title\n            tags\n            variants(first: 50) {\n              edges {\n                node {\n                  id\n                  sku\n                  title\n                  price\n                  compareAtPrice\n                  product {\n                    id\n                    title\n                  }\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  excludeFromDiscounts: metafield(namespace: $namespace, key: $key) {\n                    value\n                  }\n                }\n              }\n            }\n          }\n        }\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n          endCursor\n          startCursor\n        }\n      }\n    }\n  }\n": {return: GetCollectionByHandleWithMetafieldsQuery, variables: GetCollectionByHandleWithMetafieldsQueryVariables},
  "#graphql\n  query GetVariantBySku($sku: String!) {\n    productVariants(first: 1, query: $sku) {\n      edges {\n        node {\n          id\n          title\n          sku\n          product {\n            handle\n            title\n          }\n        }\n      }\n    }\n  }\n": {return: GetVariantBySkuQuery, variables: GetVariantBySkuQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n  mutation CreateAutomaticBasicDiscount($automaticBasicDiscount: DiscountAutomaticBasicInput!) {\n    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {\n      automaticDiscountNode {\n        id\n        automaticDiscount {\n          ... on DiscountAutomaticBasic {\n            startsAt\n            endsAt\n            title\n          }\n        }\n      }\n      userErrors {\n        field\n        code\n        message\n      }\n    }\n  }\n": {return: CreateAutomaticBasicDiscountMutation, variables: CreateAutomaticBasicDiscountMutationVariables},
  "#graphql\n  mutation UpdateVariantMetafields($metafields: [MetafieldsSetInput!]!,) {\n    metafieldsSet(metafields: $metafields) {\n      metafields {\n        key\n        namespace\n        value\n        createdAt\n        updatedAt\n      }\n      userErrors {\n        field\n        message\n        code\n      }\n    }\n\n  }\n": {return: UpdateVariantMetafieldsMutation, variables: UpdateVariantMetafieldsMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
