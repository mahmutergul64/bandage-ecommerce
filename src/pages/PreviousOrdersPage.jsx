import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Package, ChevronDown, ChevronUp, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import BrandLogos from '../components/shop/BrandLogos';
import { API } from '../api/axiosInstance';

export default function PreviousOrdersPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.client);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const currentToken = localStorage.getItem('token') || user?.token;

  useEffect(() => {
    if (!currentToken) {
      navigate('/login');
    }
  }, [currentToken, navigate]);

  useEffect(() => {
    if (currentToken) {
      const formattedToken = currentToken.startsWith('Bearer ') ? currentToken : `Bearer ${currentToken}`;
      
      API.get('/user/order', {
        headers: { Authorization: formattedToken }
      })
      .then(res => {
        const rawData = Array.isArray(res.data) ? res.data : [];
        setOrders(rawData.sort((a, b) => b.id - a.id));
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }, [currentToken]);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  if (!currentToken) return null;

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] font-sans flex flex-col">
      <div className="bg-[#FAFAFA] py-6 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1050px] flex items-center gap-3 font-bold text-sm">
          <span className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">My Orders</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1050px] py-12 flex-1">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
          <Package size={32} className="text-[#23A6F0]" />
          <h2 className="text-3xl font-bold text-[#252B42]">My Orders</h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#23A6F0]"></div>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
            <Package size={64} className="text-[#BDBDBD] mb-4" />
            <h3 className="text-xl font-bold text-[#737373] mb-4">You have no previous orders.</h3>
            <button onClick={() => navigate('/shop')} className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all shadow-md">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                
                <div 
                  onClick={() => toggleOrderDetails(order.id)}
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-[#252B42] text-lg">Order #BNDG-{order.id}</span>
                    <div className="flex items-center gap-2 text-sm text-[#737373]">
                      <Calendar size={16} />
                      <span>{formatDate(order.orderDate)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex flex-col md:items-end gap-1">
                      <span className="text-sm text-[#737373]">Total Amount</span>
                      <span className="font-bold text-[#23A6F0] text-xl">${order.totalPrice?.toFixed(2)}</span>
                    </div>
                    <div className="text-[#252B42]">
                      {expandedOrderId === order.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                </div>

                {expandedOrderId === order.id && (
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <h4 className="font-bold text-[#252B42] mb-4">Order Details</h4>
                    
                    <div className="mb-6 flex items-center gap-2 text-sm text-[#737373]">
                      <CreditCard size={16} />
                      <span>Paid with card ending in **** {String(order.card_no).slice(-4)}</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-300 text-[#737373] text-sm">
                            <th className="pb-3 font-bold">Product Info</th>
                            <th className="pb-3 font-bold">Detail</th>
                            <th className="pb-3 font-bold text-center">Quantity</th>
                            <th className="pb-3 font-bold text-right">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items && order.items.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-0 items-center">
                              <td className="py-4 flex items-center gap-3">
                                <img 
                                  src={item.product?.image || "https://picsum.photos/100/100"} 
                                  className="w-12 h-16 object-cover rounded border bg-white" 
                                  alt="product" 
                                />
                                <span className="text-[#252B42] font-semibold text-sm line-clamp-1">{item.product?.name || "Product"}</span>
                              </td>
                              <td className="py-4 text-[#737373] text-sm">{item.detail}</td>
                              <td className="py-4 text-[#252B42] font-bold text-center text-sm">{item.quantity}</td>
                              <td className="py-4 text-[#252B42] font-bold text-right text-sm">${item.price?.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <BrandLogos />
    </div>
  );
}