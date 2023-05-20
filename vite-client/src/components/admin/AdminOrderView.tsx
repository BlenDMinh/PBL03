import { useEffect, useState } from "react";
import { Order } from "../../models/Order";

interface AdminOrderViewProps {
  order: Order | undefined;
  onSubmit: (order: Order | undefined) => void;
}

function AdminOrderView(props: AdminOrderViewProps) {
  const [order, setOrder] = useState<Order | undefined>();
  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);
  if (order == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(order);
        }}
        className="mx-16 my-16 ml-32 bg-white w-auto h-5/6 rounded-xl p-10"
      ></form>
    </div>
  );
}

export default AdminOrderView;
