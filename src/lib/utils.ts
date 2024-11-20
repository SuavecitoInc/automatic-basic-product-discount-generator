import fetch from 'isomorphic-fetch';
import dotenv from 'dotenv';
import moment from 'moment-timezone';
import fs from 'fs/promises';
import path from 'path';

import config from '../../config.js';
import { ADMIN_API_ENDPOINT, SHOPIFY_ADMIN_API_TOKEN } from './const.js';
import type { DiscountTypeItems, DiscountTypeAmount } from './types/input.js';

dotenv.config();

type JsonResponse<T> = {
  data: T;
  error?: any;
};

export async function shopifyAdmin<T>(
  query: string,
  variables?: object,
): Promise<JsonResponse<T>> {
  try {
    const response = await fetch(ADMIN_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ADMIN_API_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    return json as JsonResponse<T>;
  } catch (err: any) {
    console.log('Error fetching data', err);
    throw new Error(err?.message || 'Error fetching data');
  }
}

export function getDate() {
  return moment(config.discount.startsAt).tz(config.timezone).toISOString();
}

export function verifyConfig() {
  const customerGetsPercentage = config.discount.customerGets.percentage;

  const errors: string[] = [];
  if (customerGetsPercentage >= 1) {
    errors.push('Customer gets percentage must be decimal between 0 and 1');
  }

  if (!config.discount.title) {
    errors.push('Discount Title is required');
  }

  if (!config.excludedByOptions) {
    errors.push('Excluded options is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export async function writeToFile(fileName: string, data: string) {
  const file = path.join(__dirname, `../../../export/${fileName}.json`);
  try {
    await fs.writeFile(file, data);
  } catch (err: any) {
    console.log('Error writing to file', err);
  }
}
