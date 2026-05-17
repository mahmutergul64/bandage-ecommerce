import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, X, CreditCard } from 'lucide-react';
import BrandLogos from '../components/shop/BrandLogos';
import { clearCart } from '../store/actions/shoppingCartActions';
import { API } from '../api/axiosInstance';

export default function CreateOrderPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.client);
  const { cart } = useSelector((state) => state.shoppingCart);

  const [activeTab, setActiveTab] = useState('address');

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [addressFormData, setAddressFormData] = useState({
    title: '', name: '', surname: '', phone: '', city: '', district: '', neighborhood: ''
  });

  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null);
  const [cardFormData, setCardFormData] = useState({
    card_no: '', expire_month: '', expire_year: '', name_on_card: ''
  });

  const productsTotal = cart.filter(item => item.checked).reduce((total, item) => total + (item.product.price * item.count), 0);
  const shippingCost = 29.99;
  const isFreeShipping = productsTotal >= 150;
  const shippingDiscount = isFreeShipping && productsTotal > 0 ? 29.99 : 0;
  const grandTotal = productsTotal > 0 ? (productsTotal + shippingCost - shippingDiscount) : 0;

  useEffect(() => {
    if (!user.token) {
      navigate('/login');
    }
  }, [user.token, navigate]);

  useEffect(() => {
    if (user.token) {
      fetchAddresses();
    }
  }, [user.token]);

  useEffect(() => {
    if (user.token && activeTab === 'payment') {
      fetchCards();
    }
  }, [user.token, activeTab]);

  const fetchAddresses = () => {
    setIsAddressLoading(true);
    API.get('/user/address', {
      headers: { Authorization: user.token }
    })
    .then(res => {
      setAddresses(res.data);
      if (res.data.length > 0 && !selectedAddressId) setSelectedAddressId(res.data[0].id);
    })
    .catch(err => console.error(err))
    .finally(() => setIsAddressLoading(false));
  };

  const handleAddressInput = (e) => setAddressFormData({ ...addressFormData, [e.target.name]: e.target.value });

  const handleSaveAddress = (e) => {
    e.preventDefault();
    const endpoint = '/user/address';
    const req = editingAddressId 
      ? API.put(endpoint, { id: editingAddressId, ...addressFormData }, { headers: { Authorization: user.token } })
      : API.post(endpoint, addressFormData, { headers: { Authorization: user.token } });

    req.then(() => { setIsAddressModalOpen(false); fetchAddresses(); })
       .catch(err => console.error(err));
  };

  const handleDeleteAddress = (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      API.delete(`/user/address/${id}`, { headers: { Authorization: user.token } })
      .then(() => { if (selectedAddressId === id) setSelectedAddressId(null); fetchAddresses(); })
      .catch(err => console.error(err));
    }
  };

  const fetchCards = () => {
    setIsCardLoading(true);
    API.get('/user/card', { headers: { Authorization: user.token } })
    .then(res => {
      setCards(res.data);
      if (res.data.length > 0 && !selectedCardId) setSelectedCardId(res.data[0].id);
    })
    .catch(err => console.error(err))
    .finally(() => setIsCardLoading(false));
  };

  const handleCardInput = (e) => setCardFormData({ ...cardFormData, [e.target.name]: e.target.value });

  const handleSaveCard = (e) => {
    e.preventDefault();
    const endpoint = '/user/card';
    const payload = {
      ...cardFormData,
      expire_month: parseInt(cardFormData.expire_month),
      expire_year: parseInt(cardFormData.expire_year)
    };

    const req = editingCardId 
      ? API.put(endpoint, { id: editingCardId, ...payload }, { headers: { Authorization: user.token } })
      : API.post(endpoint, payload, { headers: { Authorization: user.token } });

    req.then(() => { setIsCardModalOpen(false); fetchCards(); })
       .catch(err => console.error(err));
  };

  const handleDeleteCard = (id) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      API.delete(`/user/card/${id}`, { headers: { Authorization: user.token } })
      .then(() => { if (selectedCardId === id) setSelectedCardId(null); fetchCards(); })
      .catch(err => console.error(err));
    }
  };

  const handleCompleteOrder = () => {
    const selectedCard = cards.find(c => c.id === selectedCardId);
    if (!selectedAddressId || !selectedCard) return;

    const orderPayload = {
      address_id: selectedAddressId,
      order_date: new Date().toISOString(),
      card_no: Number(selectedCard.card_no),
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: 321,
      price: grandTotal,
      products: cart.filter(item => item.checked).map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: 'Standard'
      }))
    };

    API.post('/order', orderPayload, {
      headers: { Authorization: user.token }
    })
    .then(() => {
      alert('Congratulations! Your order has been successfully placed.');
      dispatch(clearCart());
      navigate('/');
    })
    .catch(err => {
      console.error(err);
      alert('Order creation failed. Please try again.');
    });
  };

  if (!user.token) return null;

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] font-sans flex flex-col relative">
      <div className="container mx-auto px-4 max-w-[1050px] py-8 flex-1">
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div 
            onClick={() => setActiveTab('address')}
            className={`flex-1 p-4 rounded-lg border-2 shadow-sm flex flex-col cursor-pointer transition-colors ${activeTab === 'address' ? 'bg-white border-[#23A6F0]' : 'bg-white border-transparent'}`}
          >
            <h3 className={`font-bold text-lg ${activeTab === 'address' ? 'text-[#23A6F0]' : 'text-[#252B42]'}`}>1. Address Information</h3>
            <p className="text-[#737373] text-sm mt-1">{addresses.find(a => a.id === selectedAddressId)?.title || 'Select or add an address'}</p>
          </div>
          
          <div 
            onClick={() => { if(selectedAddressId) setActiveTab('payment'); }}
            className={`flex-1 p-4 rounded-lg border-2 shadow-sm flex flex-col transition-colors ${!selectedAddressId ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${activeTab === 'payment' ? 'bg-white border-[#23A6F0]' : 'bg-white border-transparent'}`}
          >
            <h3 className={`font-bold text-lg ${activeTab === 'payment' ? 'text-[#23A6F0]' : 'text-[#252B42]'}`}>2. Payment Options</h3>
            <p className="text-[#737373] text-sm mt-1">{activeTab === 'payment' && selectedCardId ? 'Card Selected' : 'Complete your payment'}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-2/3">
            
            {activeTab === 'address' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-[#252B42]">Delivery Address</h2>
                </div>

                {isAddressLoading ? (
                  <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23A6F0]"></div></div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      onClick={() => { setEditingAddressId(null); setAddressFormData({ title: '', name: '', surname: '', phone: '', city: '', district: '', neighborhood: '' }); setIsAddressModalOpen(true); }}
                      className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-[#23A6F0] transition-colors h-[200px]"
                    >
                      <Plus size={32} className="text-[#23A6F0] mb-2" />
                      <span className="text-[#252B42] font-bold">Add New Address</span>
                    </div>

                    {addresses.map((address) => (
                      <div 
                        key={address.id} onClick={() => setSelectedAddressId(address.id)}
                        className={`bg-white rounded-lg p-4 cursor-pointer transition-all flex flex-col justify-between h-[200px] border-2 ${selectedAddressId === address.id ? 'border-[#23A6F0] shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
                      >
                        <div>
                          <div className="flex justify-between items-center border-b pb-2 mb-2">
                            <div className="flex items-center gap-2">
                              <input type="radio" checked={selectedAddressId === address.id} readOnly className="accent-[#23A6F0]" />
                              <span className="font-bold text-[#252B42] text-sm">{address.title}</span>
                            </div>
                            <span className="text-sm font-bold text-[#737373]">{address.phone}</span>
                          </div>
                          <div className="text-[#737373] text-sm flex flex-col gap-1">
                            <span className="font-bold text-[#252B42]">{address.name} {address.surname}</span>
                            <p className="line-clamp-2">{address.neighborhood}</p>
                            <p>{address.district} / {address.city}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <button onClick={(e) => { e.stopPropagation(); handleDeleteAddress(address.id); }} className="text-red-500 hover:text-red-700 font-bold text-xs flex items-center gap-1"><Trash2 size={14} /> Delete</button>
                          <button onClick={(e) => { e.stopPropagation(); setEditingAddressId(address.id); setAddressFormData(address); setIsAddressModalOpen(true); }} className="text-[#23A6F0] hover:text-blue-700 font-bold text-xs flex items-center gap-1"><Edit size={14} /> Edit</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === 'payment' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-[#252B42]">Payment Options</h2>
                </div>

                {isCardLoading ? (
                  <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23A6F0]"></div></div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      onClick={() => { setEditingCardId(null); setCardFormData({ card_no: '', expire_month: '', expire_year: '', name_on_card: '' }); setIsCardModalOpen(true); }}
                      className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-[#23A6F0] transition-colors h-[200px]"
                    >
                      <Plus size={32} className="text-[#23A6F0] mb-2" />
                      <span className="text-[#252B42] font-bold">Add New Card</span>
                    </div>

                    {cards.map((card) => (
                      <div 
                        key={card.id} onClick={() => setSelectedCardId(card.id)}
                        className={`bg-gradient-to-tr from-gray-800 to-gray-600 rounded-lg p-5 cursor-pointer transition-all flex flex-col justify-between h-[200px] border-2 relative overflow-hidden ${selectedCardId === card.id ? 'border-[#23A6F0] shadow-lg transform scale-[1.02]' : 'border-transparent shadow-sm'}`}
                      >
                        {selectedCardId === card.id && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#23A6F0] border-2 border-white"></div>
                        )}
                        <div className="flex justify-between items-center text-white">
                           <CreditCard size={28} />
                           <span className="font-bold text-sm italic">Credit Card</span>
                        </div>
                        <div className="text-white">
                          <p className="text-xl tracking-[0.2em] font-mono mb-2">
                            {card.card_no.replace(/(.{4})/g, '$1 ').trim()}
                          </p>
                          <div className="flex justify-between text-xs font-mono uppercase opacity-80">
                             <span>{card.name_on_card}</span>
                             <span>{String(card.expire_month).padStart(2, '0')}/{String(card.expire_year).slice(-2)}</span>
                          </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-2 border-t border-white/20 pt-2">
                          <button onClick={(e) => { e.stopPropagation(); handleDeleteCard(card.id); }} className="text-red-400 hover:text-red-300 font-bold text-xs flex items-center gap-1 z-10"><Trash2 size={14} /> Delete</button>
                          <button onClick={(e) => { e.stopPropagation(); setEditingCardId(card.id); setCardFormData(card); setIsCardModalOpen(true); }} className="text-white hover:text-blue-200 font-bold text-xs flex items-center gap-1 z-10"><Edit size={14} /> Edit</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 sticky top-4">
              
              {activeTab === 'address' ? (
                <button 
                  onClick={() => setActiveTab('payment')}
                  disabled={productsTotal === 0 || !selectedAddressId}
                  className="w-full bg-[#23A6F0] text-white py-3.5 rounded-md font-bold hover:bg-blue-600 transition-colors shadow-sm mb-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Save and Continue
                </button>
              ) : (
                <button 
                  onClick={handleCompleteOrder}
                  disabled={productsTotal === 0 || !selectedCardId}
                  className="w-full bg-[#2EBB77] text-white py-3.5 rounded-md font-bold hover:bg-green-600 transition-colors shadow-sm mb-6 disabled:bg-gray-300 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  Complete Order
                </button>
              )}

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
            </div>
          </div>

        </div>
      </div>

      {isAddressModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-center items-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#252B42]">{editingAddressId ? 'Edit Address' : 'Add New Address'}</h3>
              <button onClick={() => setIsAddressModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <form onSubmit={handleSaveAddress} className="flex flex-col gap-4">
              <div><label className="text-sm font-bold text-[#252B42] mb-1 block">Address Title</label><input required type="text" name="title" value={addressFormData.title} onChange={handleAddressInput} className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Home, Work" /></div>
              <div className="flex gap-4">
                <div className="w-1/2"><label className="text-sm font-bold text-[#252B42] mb-1 block">Name</label><input required type="text" name="name" value={addressFormData.name} onChange={handleAddressInput} className="w-full border border-gray-300 rounded-md p-2" /></div>
                <div className="w-1/2"><label className="text-sm font-bold text-[#252B42] mb-1 block">Surname</label><input required type="text" name="surname" value={addressFormData.surname} onChange={handleAddressInput} className="w-full border border-gray-300 rounded-md p-2" /></div>
              </div>
              <div><label className="text-sm font-bold text-[#252B42] mb-1 block">Phone</label><input required type="tel" name="phone" value={addressFormData.phone} onChange={handleAddressInput} className="w-full border border-gray-300 rounded-md p-2" placeholder="05XX XXX XX XX" /></div>
              <div className="flex gap-4">
                <div className="w-1/2"><label className="text-sm font-bold text-[#252B42] mb-1 block">City</label><input required type="text" name="city" value={addressFormData.city} onChange={handleAddressInput} className="w-full border border-gray-300 rounded-md p-2" /></div>
                <div className="w-1/2"><label className="text-sm font-bold text-[#252B42] mb-1 block">District</label><input required type="text" name="district" value={addressFormData.district} onChange={handleAddressInput} className="w-full border border-gray-300 rounded-md p-2" /></div>
              </div>
              <div><label className="text-sm font-bold text-[#252B42] mb-1 block">Address Details</label><textarea required name="neighborhood" value={addressFormData.neighborhood} onChange={handleAddressInput} rows="3" className="w-full border border-gray-300 rounded-md p-2 resize-none"></textarea></div>
              <button type="submit" className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold hover:bg-blue-600 transition-colors mt-2">{editingAddressId ? 'Update Address' : 'Save Address'}</button>
            </form>
          </div>
        </div>
      )}

      {isCardModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-center items-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#252B42]">{editingCardId ? 'Edit Card' : 'Add New Card'}</h3>
              <button onClick={() => setIsCardModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <form onSubmit={handleSaveCard} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-bold text-[#252B42] mb-1 block">Name on Card</label>
                <input required type="text" name="name_on_card" value={cardFormData.name_on_card} onChange={handleCardInput} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#23A6F0]" />
              </div>
              <div>
                <label className="text-sm font-bold text-[#252B42] mb-1 block">Card Number</label>
                <input required type="text" maxLength="16" name="card_no" value={cardFormData.card_no} onChange={handleCardInput} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#23A6F0]" placeholder="1234123412341234" />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-sm font-bold text-[#252B42] mb-1 block">Expire Month</label>
                  <select required name="expire_month" value={cardFormData.expire_month} onChange={handleCardInput} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#23A6F0]">
                    <option value="">Month</option>
                    {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{String(i+1).padStart(2, '0')}</option>)}
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="text-sm font-bold text-[#252B42] mb-1 block">Expire Year</label>
                  <select required name="expire_year" value={cardFormData.expire_year} onChange={handleCardInput} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#23A6F0]">
                    <option value="">Year</option>
                    {[...Array(15)].map((_, i) => <option key={i} value={2024+i}>{2024+i}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold hover:bg-blue-600 transition-colors mt-4">
                {editingCardId ? 'Update Card' : 'Save Card'}
              </button>
            </form>
          </div>
        </div>
      )}

      <BrandLogos />
    </div>
  );
}