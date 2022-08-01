// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client, Environment, ApiError } from "square";
import { getSession } from "next-auth/react";

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

  const parsedOrders = response.result.orders.map((o) =>
    convertOrderResponse(o)
  );
  return parsedOrders;
};

export default async function handler(req, res) {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not Authorized" });
  }
  res.status(200).json(await getOrders());
}

const convertOrderResponse = (orderResponse) => {
  return {
    id: orderResponse.id,
    customerId: orderResponse.customerId,
    customerName:
      orderResponse.fulfillments[0].shipmentDetails.recipient.displayName,
    email: orderResponse.fulfillments[0].shipmentDetails.recipient.emailAddress,
    status: orderResponse.state,
    date: orderResponse.createdAt,
    itemName: orderResponse.lineItems[0].name,
    itemQty: orderResponse.lineItems[0].quantity,
    address: orderResponse.fulfillments[0].shipmentDetails.recipient.address,
  };
};
