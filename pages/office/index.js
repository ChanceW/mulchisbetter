import OrderGrid from "../../components/Grids/order-grid";
import { getSession } from "next-auth/react";

function Office() {
  return (
    <>
      <OrderGrid />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
      },
    };
  }

  return {
    props: { session },
  };
}

export default Office;
