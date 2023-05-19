import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { OrderService } from "../../admin/services/implement/OrderService";
import { Order } from "../../models/Order";
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

interface ChartProp{
    orders: Order[];
}

function AdminChart(props: ChartProp){
    const [orders, setOrder] = useState<Order>();
    useEffect(() => {
      setOrder(props.orders);
    }, [props.orders]);
    return(
        <div>
        <label htmlFor="incomplete">helllllllhhvvhfhghllll{orders[0]?.orderId}</label>
        <input
          type="radio"
          name={"status" + orders?.orderId}
          id="complete"
          value="complete"
        />
        <Chart>
        {/* //   data={props.orders}
        // >
        //   <ValueScale name="sale" />
        //   <ValueScale name="total" />

        //   <ArgumentAxis />
        //   <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
        //   <ValueAxis scaleName="total" position="right" showGrid={false} showLine={true} showTicks={true} />

        //   <BarSeries */}
        {/* //     name="Units Sold"
        //     valueField="sale"
        //     argumentField="month"
        //     scaleName="sale"
        //   />

        //   <LineSeries */}
        {/* //     name="Total Transactions"
        //     valueField="total"
        //     argumentField="month"
        //     scaleName="total"
        //   /> */}
        </Chart>
        </div>
    );
}

export default AdminChart;