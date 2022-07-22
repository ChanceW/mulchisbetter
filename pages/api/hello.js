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

  console.log(response.result);
};

export default function handler(req, res) {
  getOrders();
  res.status(200).json({ name: "John Doe" });
}
