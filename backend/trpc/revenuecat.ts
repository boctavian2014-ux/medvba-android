import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { createRevenueCatClient } from '../revenuecat-client';
import { createTRPCRouter, publicProcedure } from './create-context';

const customerIdSchema = z.object({
  customerId: z.string().min(1),
});

function getRevenueCatConfig() {
  const apiKey = process.env.REVENUECAT_API_KEY;
  const projectId = process.env.REVENUECAT_PROJECT_ID;

  if (!apiKey || !projectId) {
    throw new TRPCError({
      code: 'FAILED_PRECONDITION',
      message: 'RevenueCat server config missing (REVENUECAT_API_KEY/REVENUECAT_PROJECT_ID).',
    });
  }

  return { apiKey, projectId };
}

export const revenuecatRouter = createTRPCRouter({
  getCustomer: publicProcedure.input(customerIdSchema).query(async ({ input }) => {
    const { apiKey, projectId } = getRevenueCatConfig();
    const client = createRevenueCatClient(apiKey);

    const { data, error } = await client.GET(
      '/projects/{project_id}/customers/{customer_id}',
      {
        params: {
          path: {
            project_id: projectId,
            customer_id: input.customerId,
          },
        },
      },
    );

    if (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'RevenueCat getCustomer failed.',
        cause: error,
      });
    }

    return data;
  }),
  getCustomerSubscriptions: publicProcedure.input(customerIdSchema).query(async ({ input }) => {
    const { apiKey, projectId } = getRevenueCatConfig();
    const client = createRevenueCatClient(apiKey);

    const { data, error } = await client.GET(
      '/projects/{project_id}/customers/{customer_id}/subscriptions',
      {
        params: {
          path: {
            project_id: projectId,
            customer_id: input.customerId,
          },
        },
      },
    );

    if (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'RevenueCat getCustomerSubscriptions failed.',
        cause: error,
      });
    }

    return data;
  }),
});
