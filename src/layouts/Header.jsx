import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronDown, User, Search, ShoppingCart, Heart, Phone, Mail, Package, LogOut, Menu, X } from 'lucide-react'; 
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa'; 
import { fetchCategories } from '../store/actions/productActions';

const enDictionary = {
  'Tişört': 'T-Shirt',
  'Ayakkabı': 'Shoes',
  'Ceket': 'Jacket',
  'Elbise': 'Dress',
  'Etek': 'Skirt',
  'Gömlek': 'Shirt',
  'Kazak': 'Sweater',
  'Pantalon': 'Pants',
  'Pantolon': 'Pants'
};

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.client);
  const { categories } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.shoppingCart?.cart || []);
  const wishlist = useSelector((state) => state.wishlist?.wishlistItems || []);
  
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const womanCats = categories.filter(cat => cat.gender === 'k' || cat.gender === 'f' || cat.gender === 'u');
  const manCats = categories.filter(cat => cat.gender === 'e' || cat.gender === 'm' || cat.gender === 'u');

  const translate = (title) => enDictionary[title] || title;

  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);
  const totalWishlistCount = wishlist.length;

  const handleGoToCart = () => {
    navigate('/cart');
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const token = localStorage.getItem('token') || user?.token;
  const userName = user?.name || "My Account";

  return (
    <header className="w-full bg-white relative z-[1000]">
      <div className="hidden lg:flex bg-[#252B42] text-white py-3">
        <div className="container mx-auto px-4 max-w-[1050px] flex justify-between items-center text-xs font-bold">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[#23A6F0] cursor-pointer">
              <Mail size={14} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div>Follow Us and get a chance to win 80% off</div>
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <div className="flex gap-3 items-center">
              <FaInstagram size={14} className="cursor-pointer hover:text-[#23A6F0]" />
              <FaYoutube size={14} className="cursor-pointer hover:text-[#23A6F0]" />
              <FaFacebook size={14} className="cursor-pointer hover:text-[#23A6F0]" />
              <FaTwitter size={14} className="cursor-pointer hover:text-[#23A6F0]" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1050px] py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-[#737373] hover:text-[#252B42] focus:outline-none transition-colors">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#737373]">
          <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
          
          <div className="relative flex items-center gap-1 py-2">
            <div 
              className="flex items-center gap-1 cursor-pointer hover:text-[#23A6F0] select-none"
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              <span>Shop</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`absolute ${isShopOpen ? 'flex' : 'hidden'} flex-row bg-white shadow-xl border border-gray-100 rounded-md p-6 top-full left-0 min-w-[300px] gap-10 z-[1001]`}>
              <div className="flex flex-col gap-4 w-1/2">
                <h3 className="font-bold text-[#252B42] text-base">Women</h3>
                <div className="flex flex-col gap-3">
                  {womanCats.map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/shop/kadin/${cat.code.split(':')[1]}/${cat.id}`} 
                      className="text-[#737373] hover:text-[#23A6F0] transition-colors whitespace-nowrap font-normal"
                      onClick={() => setIsShopOpen(false)} 
                    >
                      {translate(cat.title)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 w-1/2">
                <h3 className="font-bold text-[#252B42] text-base">Men</h3>
                <div className="flex flex-col gap-3">
                  {manCats.map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`} 
                      className="text-[#737373] hover:text-[#23A6F0] transition-colors whitespace-nowrap font-normal"
                      onClick={() => setIsShopOpen(false)} 
                    >
                      {translate(cat.title)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/team" className="text-[#737373] font-bold hover:text-[#23A6F0]">Team</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 text-[#23A6F0] font-bold text-sm">
          {token ? (
            <div className="relative">
              <div 
                className="flex items-center gap-2 bg-[#F6F6F6] px-3 py-1.5 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                <img src={user?.gravatar || `https://ui-avatars.com/api/?name=${userName}&background=23A6F0&color=fff`} className="w-6 h-6 rounded-full" alt="avatar" />
                <span className="text-[#252B42]">{userName}</span>
                <ChevronDown size={14} className={`text-[#737373] transition-transform duration-300 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 shadow-xl rounded-md flex flex-col z-[1003] overflow-hidden">
                  <div 
                    onClick={() => { setIsUserDropdownOpen(false); navigate('/my-orders'); }}
                    className="flex items-center gap-3 px-4 py-3 text-[#252B42] hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <Package size={16} className="text-[#23A6F0]"/>
                    <span>My Orders</span>
                  </div>
                  <div className="border-t border-gray-100"></div>
                  <div 
                    onClick={() => { setIsUserDropdownOpen(false); handleLogout(); }}
                    className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 cursor-pointer transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <User size={18} />
              <Link to="/login" className="hover:opacity-80">Login</Link>
              <span>/</span>
              <Link to="/signup" className="hover:opacity-80">Register</Link>
            </div>
          )}
          
          <Search size={18} className="cursor-pointer ml-2" />
          
          <div className="relative">
            <div 
              className="flex items-center gap-1 cursor-pointer hover:opacity-80"
              onClick={() => { setIsCartOpen(!isCartOpen); setIsWishlistOpen(false); }}
            >
              <ShoppingCart size={18} />
              <span>{totalItemCount}</span>
            </div>

            {isCartOpen && (
              <div className="absolute top-full right-[-50px] md:right-0 mt-4 w-[320px] bg-white border border-gray-200 shadow-2xl rounded-lg z-[1002] flex flex-col cursor-default overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-[#FAFAFA]">
                  <h3 className="text-[#252B42] font-bold text-lg">My Cart ({totalItemCount} Items)</h3>
                </div>
                
                <div className="max-h-[300px] overflow-y-auto p-4 flex flex-col gap-4">
                  {cart.length === 0 ? (
                    <p className="text-[#737373] text-center font-normal py-6">Your cart is empty.</p>
                  ) : (
                    cart.map((item, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <img 
                          src={item.product.images?.[0]?.url} 
                          alt="product" 
                          className="w-16 h-20 object-cover border border-gray-100 rounded-md bg-[#f3f3f3]" 
                        />
                        <div className="flex flex-col flex-1">
                          <span className="text-[#252B42] font-bold text-sm line-clamp-2 leading-tight">
                            {item.product.name}
                          </span>
                          <span className="text-[#737373] text-xs font-normal mt-1">
                            Qty: {item.count}
                          </span>
                          <span className="text-[#23A6F0] font-bold text-sm mt-1">
                            ${(item.product.price * item.count).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="p-4 border-t border-gray-100 flex gap-2 bg-[#FAFAFA]">
                    <button 
                      onClick={handleGoToCart}
                      className="flex-1 border border-[#23A6F0] text-[#23A6F0] rounded-md py-2.5 font-bold hover:bg-blue-50 transition-colors text-sm"
                    >
                      Go to Cart
                    </button>
                    <button 
                      onClick={handleGoToCart}
                      className="flex-1 bg-[#23A6F0] text-white rounded-md py-2.5 font-bold hover:bg-blue-600 transition-colors shadow-md text-sm"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <div 
              className="flex items-center gap-1 cursor-pointer hover:opacity-80"
              onClick={() => { setIsWishlistOpen(!isWishlistOpen); setIsCartOpen(false); }}
            >
              <Heart size={18} />
              <span>{totalWishlistCount}</span>
            </div>

            {isWishlistOpen && (
              <div className="absolute top-full right-[-10px] md:right-0 mt-4 w-[320px] bg-white border border-gray-200 shadow-2xl rounded-lg z-[1002] flex flex-col cursor-default overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-[#FAFAFA]">
                  <h3 className="text-[#252B42] font-bold text-lg">My Wishlist ({totalWishlistCount} Items)</h3>
                </div>
                
                <div className="max-h-[300px] overflow-y-auto p-4 flex flex-col gap-4">
                  {wishlist.length === 0 ? (
                    <p className="text-[#737373] text-center font-normal py-6">Your wishlist is empty.</p>
                  ) : (
                    wishlist.map((item, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <img 
                          src={item.images?.[0]?.url} 
                          alt="product" 
                          className="w-16 h-20 object-cover border border-gray-100 rounded-md bg-[#f3f3f3]" 
                        />
                        <div className="flex flex-col flex-1">
                          <span className="text-[#252B42] font-bold text-sm line-clamp-2 leading-tight">
                            {item.name}
                          </span>
                          <span className="text-[#23A6F0] font-bold text-sm mt-1">
                            ${item.price}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>

      <div 
        className={`md:hidden absolute w-full left-0 top-full bg-white transition-all duration-300 ease-in-out shadow-lg z-[1001] ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100 py-8 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <Link to="/" onClick={toggleMobileMenu} className="text-[24px] text-[#737373] hover:text-[#23A6F0]">Home</Link>
          <Link to="/shop" onClick={toggleMobileMenu} className="text-[24px] text-[#737373] hover:text-[#23A6F0]">Shop</Link>
          <Link to="/about" onClick={toggleMobileMenu} className="text-[24px] text-[#737373] hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" onClick={toggleMobileMenu} className="text-[24px] text-[#737373] hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="text-[24px] text-[#737373] hover:text-[#23A6F0]">Contact</Link>
          <Link to="/pages" onClick={toggleMobileMenu} className="text-[24px] text-[#737373] hover:text-[#23A6F0]">Pages</Link>

          <div className="flex flex-col items-center space-y-4 text-[#23A6F0] pt-4 w-full px-6">
            
            {token ? (
              <div className="flex flex-col items-center gap-4 w-full border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 text-[20px] font-bold text-[#252B42]">
                  <img src={user?.gravatar || `https://ui-avatars.com/api/?name=${userName}&background=23A6F0&color=fff`} className="w-10 h-10 rounded-full" alt="avatar" />
                  <span>{userName}</span>
                </div>
                <Link to="/my-orders" onClick={toggleMobileMenu} className="flex items-center gap-2 text-[20px] text-[#737373]">
                  <Package size={24} className="text-[#23A6F0]" /> My Orders
                </Link>
                <button onClick={() => { toggleMobileMenu(); handleLogout(); }} className="flex items-center gap-2 text-[20px] text-red-500">
                  <LogOut size={24} /> Logout
                </button>
              </div>
            ) : (
              <Link to="/login" onClick={toggleMobileMenu} className="flex items-center gap-2 text-[24px] font-bold">
                <User size={28} /> Login / Register
              </Link>
            )}

            <button className="flex items-center gap-2 text-[20px] text-[#737373] pt-2"><Search size={24} className="text-[#23A6F0]" /> Search</button>
            
            <Link to="/cart" onClick={toggleMobileMenu} className="flex items-center gap-2 text-[20px] text-[#737373]">
              <ShoppingCart size={24} className="text-[#23A6F0]" /> Cart ({totalItemCount})
            </Link>
            
            <Link to="/wishlist" onClick={toggleMobileMenu} className="flex items-center gap-2 text-[20px] text-[#737373]">
              <Heart size={24} className="text-[#23A6F0]" /> Wishlist ({totalWishlistCount})
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}