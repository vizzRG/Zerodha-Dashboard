import React from "react";
import { ordersData } from "../../utils/data";

const OrdersTab = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="p-6">
        <h2 className="text-xl font-light text-gray-800 mb-6">Orders</h2>

        <div className="border border-gray-200 rounded overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-600">
              <tr>
                <th className="text-left p-3 font-medium">Time</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Instrument</th>
                <th className="text-right p-3 font-medium">Qty</th>
                <th className="text-right p-3 font-medium">Price</th>
                <th className="text-left p-3 font-medium">Product</th>
                <th className="text-left p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {ordersData.map((order, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3 text-gray-600">{order.time}</td>
                  <td
                    className={`p-3 font-medium ${
                      order.type === "BUY" ? "text-blue-600" : "text-red-600"
                    }`}
                  >
                    {order.type}
                  </td>
                  <td className="p-3 text-blue-600 font-medium">
                    {order.instrument}
                  </td>
                  <td className="text-right p-3 text-gray-700">{order.qty}</td>
                  <td className="text-right p-3 text-gray-700">
                    ₹{order.price}
                  </td>
                  <td className="p-3 text-gray-600">{order.product}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${order.statusClass}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTab;
