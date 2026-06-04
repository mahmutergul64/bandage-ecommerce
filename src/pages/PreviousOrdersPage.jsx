import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight, ShoppingCart, Package, ShoppingBag } from 'lucide-react';
import { removeFromCart, updateCartItemCount, toggleCartItemCheck } from '../store/actions/shoppingCartActions';
import BrandLogos from '../components/shop/BrandLogos';
import { API } from '../api/axiosInstance';

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isOrdersPage = location.pathname.includes('/my-orders');

  const { cart } = useSelector((state) => state.shoppingCart);

  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (isOrdersPage) {
      setLoadingOrders(true);
      API.get('/user/order')
        .then((response) => {
          setOrders(response.data.reverse()); 
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoadingOrders(false);
        });
    }
  }, [isOrdersPage]);

  const productsTotal = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + (item.product.price * item.count), 0);

  const shippingCost = 29.99;
  const isFreeShipping = productsTotal >= 150;
  const shippingDiscount = isFreeShipping && productsTotal > 0 ? 29.99 : 0;
  const grandTotal = productsTotal > 0 ? (productsTotal + shippingCost - shippingDiscount) : 0;

  const handleDecrease = (item) => {
    if (item.count > 1) {
      dispatch(updateCartItemCount(item.product.id, item.count - 1));
    } else {
      dispatch(removeFromCart(item.product.id));
    }
  };

  const handleIncrease = (item) => {
    dispatch(updateCartItemCount(item.product.id, item.count + 1));
  };

  const placeholderImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600",
    "https://images.unsplash.com/photo-1434389670869-c6e460489e9a?q=80&w=600",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600",
    "https://images.unsplash.com/photo-1571513722275-4b41e4aee0ce?q=80&w=600",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600"
  ];
  const FINAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=600&auto=format&fit=crop";

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (isOrdersPage) {
    return (
      <div className="w-full min-h-screen bg-[#FAFAFA] font-sans flex flex-col">
        <div className="container mx-auto px-4 max-w-[1050px] py-8 flex-1">
          <div className="flex items-center gap-3 font-bold text-sm mb-8">
             <span className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" onClick={() => navigate('/')}>Home</span>
             <ChevronRight size={16} className="text-[#BDBDBD]" />
             <span className="text-[#737373]">My Orders</span>
          </div>

          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Package size={28} className="text-[#23A6F0]" />
            <h2 className="text-2xl font-bold text-[#252B42]">My Orders</h2>
          </div>

          {loadingOrders ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white p-16 text-center rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-24 h-24 bg-[#F9F9F9] rounded-full flex items-center justify-center mb-6 text-[#BDBDBD]">
                 <ShoppingBag size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#252B42] mb-4">You haven't placed any orders yet.</h3>
              <p className="text-[#737373] mb-8">Looks like you haven't made your choice yet.</p>
              <button 
                onClick={() => navigate('/shop')} 
                className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all shadow-md"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-[#F9F9F9] px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <p className="text-xs text-[#737373] font-bold mb-1">Order Date</p>
                      <p className="text-sm font-bold text-[#252B42]">{formatDate(order.orderDate)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#737373] font-bold mb-1">Total Price</p>
                      <p className="text-sm font-bold text-[#23A6F0]">${order.totalPrice?.toFixed(2)}</p>
                    </div>
                    <div className="md:ml-auto flex flex-col items-end">
                      <span className="bg-[#EAFBF3] text-[#2EBB77] px-4 py-1.5 rounded-full text-xs font-bold border border-[#B3EFD0]">
                        {order.status || 'PREPARING'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-4">
                    {order.items?.map((item, index) => {
                      const product = item.product;
                      if (!product) return null;

                      let safeIndex = 0;
                      if (typeof product.id === 'number') {
                        safeIndex = product.id % placeholderImages.length;
                      } else if (product.id) {
                        safeIndex = String(product.id).charCodeAt(0) % placeholderImages.length;
                      }
                      const variedPlaceholder = placeholderImages[safeIndex];
                      const originalImg = product.image || (product.images?.length > 0 ? product.images[0].url : null) || variedPlaceholder;

                      return (
                        <div key={index} className="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
                          <img 
                            src={originalImg} 
                            alt={product.name} 
                            className="w-16 h-20 object-cover rounded-md border border-gray-100"
                            onError={(e) => { 
                              if (e.target.src !== variedPlaceholder && e.target.src !== FINAL_FALLBACK_IMAGE) e.target.src = variedPlaceholder; 
                              else e.target.src = FINAL_FALLBACK_IMAGE;
                            }}
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-[#252B42]">{product.name}</h4>
                            <p className="text-xs text-[#737373] mt-1">Quantity: {item.quantity}</p>
                          </div>
                          <div className="font-bold text-sm text-[#252B42]">
                            ${item.price?.toFixed(2)}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <BrandLogos />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] font-sans flex flex-col">
      <div className="container mx-auto px-4 max-w-[1050px] py-8 flex-1">
        
        <div className="flex items-center gap-3 font-bold text-sm mb-8">
           <span className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" onClick={() => navigate('/')}>Home</span>
           <ChevronRight size={16} className="text-[#BDBDBD]" />
           <span className="text-[#737373]">Shopping Cart</span>
        </div>

        <h2 className="text-2xl font-bold text-[#252B42] mb-6">Shopping Cart ({cart.length} Items)</h2>

        {cart.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#BDBDBD]">
               <ShoppingCart size={40} />
            </div>
            <h3 className="text-xl font-bold text-[#737373] mb-4">Your cart is currently empty.</h3>
            <button onClick={() => navigate('/shop')} className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all shadow-md">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              
              {!isFreeShipping && productsTotal > 0 && (
                <div className="bg-[#E8F3FF] text-[#23A6F0] p-4 rounded-md border border-[#BDE0FE] font-bold text-sm flex items-center gap-2">
                  <span className="bg-[#23A6F0] text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">i</span>
                  Add ${(150 - productsTotal).toFixed(2)} more to enjoy Free Shipping!
                </div>
              )}
              {isFreeShipping && productsTotal > 0 && (
                <div className="bg-[#EAFBF3] text-[#2EBB77] p-4 rounded-md border border-[#B3EFD0] font-bold text-sm flex items-center gap-2">
                  <span className="bg-[#2EBB77] text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">✓</span>
                  Your order qualifies for Free Shipping.
                </div>
              )}

              {cart.map((item) => {
                let safeIndex = 0;
                if (typeof item.product.id === 'number') {
                  safeIndex = item.product.id % placeholderImages.length;
                } else if (item.product.id) {
                  safeIndex = String(item.product.id).charCodeAt(0) % placeholderImages.length;
                }
                const variedPlaceholder = placeholderImages[safeIndex];
                const originalImg = item.product.image || (item.product.images?.length > 0 ? item.product.images[0].url : null) || variedPlaceholder;

                return (
                <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative transition-all hover:shadow-md">
                  
                  <input 
                    type="checkbox" 
                    checked={item.checked}
                    onChange={() => dispatch(toggleCartItemCheck(item.product.id))}
                    className="w-5 h-5 accent-[#23A6F0] cursor-pointer mt-2 sm:mt-0"
                  />
                  
                  <div className="w-24 h-24 sm:w-20 sm:h-20 flex-shrink-0 border border-gray-100 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img 
                      src={originalImg} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => { 
                        if (e.target.src !== variedPlaceholder && e.target.src !== FINAL_FALLBACK_IMAGE) {
                          e.target.src = variedPlaceholder; 
                        } else if (e.target.src === variedPlaceholder) {
                          e.target.src = FINAL_FALLBACK_IMAGE;
                        }
                      }}
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-1 w-full">
                    <h3 className="text-[#252B42] font-bold text-sm sm:text-base line-clamp-2 pr-6">{item.product.name}</h3>
                    <p className="text-[#737373] text-xs font-medium">Seller: <span className="text-[#23A6F0] font-bold">Bandage Official</span></p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 mt-4 sm:mt-0">
                    <div className="flex items-center border border-gray-200 rounded-md bg-white">
                      <button onClick={() => handleDecrease(item)} className="p-2 text-[#737373] hover:text-[#252B42] hover:bg-gray-50 transition-colors">
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center text-sm font-bold text-[#252B42] select-none">{item.count}</span>
                      <button onClick={() => handleIncrease(item)} className="p-2 text-[#737373] hover:text-[#252B42] hover:bg-gray-50 transition-colors">
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-lg font-bold text-[#23A6F0] w-24 text-right">
                      ${(item.product.price * item.count).toFixed(2)}
                    </div>

                    <button 
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="text-[#737373] hover:text-red-500 transition-colors sm:absolute sm:top-4 sm:right-4 md:static"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              )})}
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 sticky top-4">
                
                <button 
                  onClick={() => navigate('/create-order')}
                  disabled={productsTotal === 0}
                  className="w-full bg-[#23A6F0] text-white py-3.5 rounded-md font-bold hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm mb-6 flex justify-center items-center gap-2"
                >
                  Create Order <ChevronRight size={18} />
                </button>

                <h3 className="text-xl font-bold text-[#252B42] mb-6">Order Summary</h3>
                
                <div className="flex flex-col gap-4 text-sm text-[#737373] font-bold border-b border-gray-200 pb-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Products Total</span>
                    <span className="text-[#252B42]">${productsTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span className="text-[#252B42]">${shippingCost.toFixed(2)}</span>
                  </div>
                  
                  {isFreeShipping && productsTotal > 0 && (
                    <div className="flex justify-between items-center text-[#2EBB77]">
                      <span>Shipping Promo</span>
                      <span>-${shippingDiscount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-center mb-8 text-[#252B42] text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#23A6F0]">${grandTotal.toFixed(2)}</span>
                </div>

                {!showDiscountInput ? (
                  <div 
                    onClick={() => setShowDiscountInput(true)}
                    className="mb-6 flex items-center justify-center border border-dashed border-gray-300 py-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors text-[#23A6F0] text-sm font-bold gap-2"
                  >
                     <Plus size={16} /> Enter Discount Code
                  </div>
                ) : (
                  <div className="mb-6 flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Code (e.g. BANDAGE20)" 
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                    />
                    <button 
                      onClick={() => {
                        alert(`"${discountCode}" code validation will be activated in the payment step!`);
                        setShowDiscountInput(false);
                        setDiscountCode('');
                      }}
                      disabled={!discountCode}
                      className="bg-[#23A6F0] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-blue-600 transition-colors disabled:bg-gray-300"
                    >
                      Apply
                    </button>
                  </div>
                )}

                <button 
                  onClick={() => navigate('/create-order')}
                  disabled={productsTotal === 0}
                  className="w-full bg-[#23A6F0] text-white py-3.5 rounded-md font-bold hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md flex justify-center items-center gap-2"
                >
                  Create Order <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
      <BrandLogos />
    </div>
  );
}