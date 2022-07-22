// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client, Environment, ApiError } from "square";

const getOrders = async () => {
  const client = new Client({
    accessToken: process.env.square_access_token,
    environment: Environment.Production,
  });
  const response = await client.ordersApi.searchOrders({
    locationIds: [process.env.square_location_id],
    query: {
      filter: {
        stateFilter: {
          states: ["OPEN"],
        },
      },
    },
  });

  return response.result.orders[0];
};

export default async function handler(req, res) {
  const o = await getOrders();
  res.status(200).json({ id: o.customerId });
}
