# Product Discount Generator

> The Product Discount Generator automates the creation of Automatic product discounts in Shopify. The discount will be created based on settings defined in the config.

### Setup

Required Shopify Admin Scopes for Access Token:

- write_product_listings
- write_products
- write_discounts

.env

```bash
SHOPIFY_DOMAIN=
SHOPIFY_ADMIN_API_VERSION=2024-07
SHOPIFY_ADMIN_API_TOKEN=
```

Configuration:

> Please update `.config.ts`, the `metafield` and `excludedByMetafield` properties are optional, we have a theme specific use case for these.

- collectionHandle: the collection to fetch
- discount:
  - title: The discount's Title
  - customerGets:
    - percentage: if `PERCENT` selected you must set a percent (ex: 0.1 - 1)
  - startsAt: date in `YYYY-MM-DD` format
- excludedBySku: Variant SKU(s) to use as filters to exclude variants
- excludedByTags: Product tags to use as filters to exclude variants
- excludedByOptions: Variant options to use as filters to exclude variants from discount eligibility
- excludedByMetafield: A metafield to used as a filter to exclude variants from discount eligibility
- metafields: Set these metafields for all discount eligible variants

> ./config.ts

```typescript
const config: Config = {
  collectionHandle: 'some-collection',
  timezone: 'America/Los_Angeles',
  discount: {
    customerGets: {
      percentage: 1, // 0.1 - 1
    },
    startsAt: '2024-10-31',
  },
  excludedBySku: ['TN-WC-011'],
  excludedByTags: ['exclude_from_discounts'],
  excludedByOptions: ['Limited', 'Special Edition'],
  excludedByMetafield: {
    namespace: 'some_namespace',
    key: 'some_key',
    type: 'boolean', // https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types
    value: 'true',
  },
  metafields: [
    {
      namespace: 'some_namespace',
      key: 'some_key',
      type: 'boolean', // https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types
      value: 'true',
    },
  ],
};
```

Run:

```bash
npm run start
```

---

```bash
Verifying config...
Config is valid, let's proceed
29 products found in collection
Filtering Products with excluded options: Limited, Special Edition
Filtering Products with tags exclude_from_discounts
60 variants are eligible for discount
Updating variants with metafield { namespace: 'example', key: 'is_bogo', type: 'boolean' } and value true
60 variant metafields were updated
Creating discount for variants
Discount created with id gid://shopify/DiscountAutomaticNode/123456
```

Please check that the discount was created correctly.

\*\* The discount will be created without an end date this is by design.
