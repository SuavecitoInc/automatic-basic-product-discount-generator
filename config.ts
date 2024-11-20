type Config = {
  collectionHandle: string;
  timezone: string;
  discount: {
    title: string;
    customerGets: {
      percentage?: number;
    };
    startsAt: string;
  };
  excludedBySku: string[];
  excludedByTags: string[];
  excludedByOptions: string[];
  excludedByMetafield: {
    namespace: string;
    key: string;
    type: string;
    value: string;
  } | null;
  metafields:
    | {
        namespace: string;
        key: string;
        type: string;
        value: string;
      }[]
    | null;
};

// example product percentage discount
const config: Config = {
  collectionHandle: 'all-except-rx-lens-collaboration-collabs',
  timezone: 'America/Los_Angeles',
  discount: {
    title: 'TEST AUTOMATIC DISCOUNT 2024',
    customerGets: {
      percentage: 0.15,
    },
    startsAt: '2024-12-31',
  },
  excludedBySku: [
    'TN-WC-011',
    'TN-WC-011P',
    'TN-WC-012',
    'TN-WC-012P',
    'TN-WC-013',
    'TN-WC-013P',
    'TN-WC-016',
    'TN-WC-016P',
    'TN-WC-017',
    'TN-WC-017P',
    'TN-WC-018',
    'TN-WC-018P',
    'TN-WC-ME-002',
    'TN-WC-ME-002P',
    'TN-FO-013',
    'TN-FO-013P',
    'TN-FO-014',
    'TN-FO-014P',
    'TN-FO-018',
    'TN-FO-018P',
    'TN-FO-019',
    'TN-FO-019P',
    'TN-FO-020',
    'TN-FO-020P',
    'TN-FO-ME-002',
    'TN-FO-ME-002P',
    'TN-UP-005',
    'TN-UP-005P',
    'TN-UP-008',
    'TN-UP-008P',
    'TN-BI2-005',
    'TN-BI2-005P',
    'TN-UL-009',
    'TN-UL-009P',
    'TN-UL-021',
    'TN-UL-021P',
    'TN-UL-022',
    'TN-UL-022P',
    'TN-UL-023',
    'TN-UL-023P',
    'TN-CL-005',
    'TN-CL-005P',
    'TN-CL-006',
    'TN-CL-006P',
  ],
  excludedByTags: ['exclude_from_discounts'],
  excludedByOptions: [],
  excludedByMetafield: null,
  metafields: [],
};

export default config;
