import { OfficeLayout } from "../../components/officeLayout";
import DataGrid from "react-data-grid";
import { useEffect, useState } from "react";

const columns = [
  { key: "id", name: "ID", resizable: true },
  { key: "status", name: "Status", resizable: true },
  { key: "customerName", name: "Customer Name", resizable: true },
  { key: "email", name: "Email", resizable: true },
  { key: "itemName", name: "Item Name", resizable: true },
  { key: "itemQty", name: "Item Qty(cu ft)", resizable: true },
];

export default function OrderGrid() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <OfficeLayout>
        <DataGrid
          columns={columns}
          rows={orders}
          style={{ resize: "both", width: "100%", height: "45%" }}
          onRowClick={(customer) => {}}
        />
      </OfficeLayout>
    </div>
  );
}
