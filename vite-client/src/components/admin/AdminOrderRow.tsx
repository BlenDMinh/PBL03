import { Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { Order } from "../../models/Order";
import { Status } from "../../models/Status";
import { OrderService } from "../../services/admin/OrderService";
import DeletePopup from "./DeletePopup";

interface OrderProp {
  order: Order;
  onDelete: () => void;
}

function AdminOrderRow(props: OrderProp) {
  const [order, setOrder] = useState<Order>();
  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);
  return (
    <div className="z-10 h-20 items-center justify-between flex">
      <div className="flex flex-row gap-5">
        <span className="text-gray-400 text-sm  w-36">
          {"ID: " + props.order.orderId}
        </span>
        <Archive />
        <span>{props.order.address?.apartmentNumber}</span>
        <span>Status: </span>
        <input
          type="radio"
          name={"status" + order?.orderId}
          id="incomplete"
          checked={order?.status === Status[Status.INCOMPLETE]}
          value="incomplete"
          onChange={(e) => {
            const newOrder = { ...order };
            newOrder.status = "INCOMPLETE";
            setOrder(newOrder);
            const service = OrderService.getInstance();
            service.update(newOrder);
            // console.log(e.target.value);
          }}
        />
        <label htmlFor="incomplete">Đang giao hàng</label>
        <input
          type="radio"
          name={"status" + order?.orderId}
          id="complete"
          value="complete"
          checked={order?.status === Status[Status.COMPLETE]}
          onChange={(e) => {
            const newOrder = { ...order };
            newOrder.status = "COMPLETE";
            setOrder(newOrder);
            const service = OrderService.getInstance();
            service.update(newOrder);
            // console.log(e.target.value);
          }}
        />
        <label htmlFor="complete">Hoàn thành</label>
      </div>
      <div className="flex flex-row w-40 gap-5">
        <DeletePopup
          onYes={() => {
            props.onDelete();
          }}
          onNo={() => {
            return;
          }}
        />
      </div>
    </div>
  );
}

export default AdminOrderRow;
