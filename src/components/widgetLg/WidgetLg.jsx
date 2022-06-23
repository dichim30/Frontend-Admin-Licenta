import './widgetLg.css';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Ultima tranzactie</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Client</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Suma</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{order.createdAt}</td>
            <td className="widgetLgAmount">{order.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
