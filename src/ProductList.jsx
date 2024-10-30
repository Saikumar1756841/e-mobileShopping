import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css'
import { addItem } from './CartSlice'
import CartItem from './CartItem'

function ProductList() {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);
    const [showphones, setShowphones] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});
    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotalQuantity = () => {
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };
    const handleParadiseNurseyClick = () => {
        e.preventDefault();
        setShowphones(false);
        setShowCart(false);
    };

    const reactivateAddButton = (product) => {
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: false, // Set the product name as key and value as false to indicate it's removed from cart
        }));
    }

    const checkDisabled = (name) => {
        if (name in addedToCart) {
            if (addedToCart[name] === true) {
                return true;
            }
        }
        else {
            return false;
        }

    };
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        setTotalQuantity(calculateTotalQuantity());
    }, [cartItems]);

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlephonesClick = (e) => {
        e.preventDefault();
        setShowphones(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
        }));
    };

    const phonesArray = [
        {
            category: "iphone",
            phones: [
                {
                    name: "iphone 14 pro",
                    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/312836839/UK/XE/SQ/4630526/apple-iphone-14-pro-128gb-gold-mobile-phone-500x500.jpg",
                    description: "Apple Iphone 14 Pro 128GB Gold Mobile Phone ",
                    cost: "12300"
                },
                {
                    name: "iphone 14",
                    image: "https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png",
                    description: "Vivid Visuals, Designed with a large 6.1-inch 2532x1170 Super Retina XDR All-Screen OLED screen.",
                    cost: "5199"
                },
                {
                    name: "iphone 15",
                    image: "https://assets.sangeethamobiles.com/product_img/14503/1694714823_KSI.jpg",
                    description: "The Apple iPhone 15 5G comes with a 6.1 inch touchscreen with Crash Detection, features Dynamic Island and a new 48-megapixel main camera with 4x resolution, 20 hours of video playback.",
                    cost: "6099"
                },
                {
                    name: "iphone 16 pro",
                    image: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/a/p/apple_iphone_16_pro_desert_titanium_-2_2.jpg",
                    description: "Apple Iphone 16 Pro 256GB Titanium Mobile Phone.",
                    cost: "12900"
                },
                {
                    name: "iphone 14 plus",
                    image: "https://cdn1.smartprix.com/rx-ibQpWfEfh-w420-h420/apple-iphone-14-plus.jpg",
                    description: "Super Retina XDR Display, HDR Display, True Tone, Wide Color (P3), Haptic Touch, 1200 Nits Max Brightness (HDR).",
                    cost: "$6499"
                },
                {
                    name: "iphone 15 pro max",
                    image: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-IN_817ead95-bff3-4129-866d-3f87976e8be2.jpg?v=1694759321",
                    description: "a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever.",
                    cost: "15400"
                }
            ]
        },
        {
            category: "IQOO",
            phones: [
                {
                    name: "IQOO Z7 pro",
                    image: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1693289447445/8ecbff414abfb4d52e5947e33736baf4.png_w860-h860.webp",
                    description: "Z7 Pro 8GB+128GB Blue Lagoon.",
                    cost: "2099"
                },
                {
                    name: "iQoo neo pro",
                    image: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1710914304146/9ee4b1ba938e86740fd238ae6c827e2c.png_w860-h860.webp",
                    description: "Neo9 Pro 8GB+128GB Fiery Red.",
                    cost: "3399"
                },
                {
                    name: "iQOO Z9 Lite 5G",
                    image: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1721017033174/b1f00b6e9f2f4bdbe8f5393fd8adbd95.png_w860-h860.webp",
                    description: "Z9 Lite 5G 4GB+128GB Aqua Flow.",
                    cost: "1099"
                },
                {
                    name: "iQOO Z9 s",
                    image: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1724143212345/1c4cd1bf5ac2f819332a409620e128bf.png_w860-h860.webp",
                    description: "Z9s 5G 8GB+128GB Titanium Matte.",
                    cost: "1999"
                },
                {
                    name: "iQOO Z6 Lite 5G",
                    image: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1663130037508/b0aa236373a91ad4780710673a6beb18.png_w860-h860.webp",
                    description: "iQOO Z6 Lite 5G Mystic Night 6GB 128GB 5G.",
                    cost: "899"
                },
                {
                    name: "iQOO Z12 5G",
                    image: "https://cdn1.smartprix.com/rx-i2JF4p5ej-w1200-h1200/2JF4p5ej.jpg",
                    description: "iQOO 12 5G (16GB RAM + 512GB).",
                    cost: "5499"
                }
            ]
        },
        {
            category: "Realme",
            phones: [
                {
                    name: "realme c35",
                    image: "https://www.jiomart.com/images/product/original/492849559/realme-c35-64-gb-4-gb-ram-glowing-green-mobile-phone-digital-o492849559-p591223038-0-202204202315.jpeg?im=Resize=(420,420)",
                    description: "Realme C35 64 GB, 4 GB RAM, Glowing Green, Mobile Phone.",
                    cost: "899"
                },
                {
                    name: "realme p1 5G",
                    image: "https://cdn1.smartprix.com/rx-i1wcdnFsO-w420-h420/realme-p1-5g.jpg",
                    description: "50 MP + 2 MP Dual Rear Camera.",
                    cost: "1448"
                },
                {
                    name: "realme 12 pro plus",
                    image: "https://images.jdmagicbox.com/quickquotes/images_main/12-pro-5g-ram-8-gb-128-gb-navigator-beige-58-272750111-1kmke6pu.jpg",
                    description: "Rear Camera : 64MP Periscope Portrait Camera, OmniVision OV64B sensor.",
                    cost: "2999"
                },
                {
                    name: "realme c55",
                    image: "https://www.valueplusretail.com/cdn/shop/files/RealmeC55_Sunshower8GB_128GB_5.jpg?v=1696940925",
                    description: " 17.07 cm (6.72 Inch) FHD+ Display * 64 MP, 2 MP Rear Camera * 8 MP Selfie Camera * 4 GB Memory, 64 GB Storage * 5000 mAh Battery.",
                    cost: "1099"
                },
                {
                    name: "realme c53",
                    image: "https://rukminim1.flixcart.com/image/900/900/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=90",
                    description: "he phone comes with a 90 Hz refresh rate 6.74-inch touchscreen display at a pixel density of 560 pixels per inch (ppi). .",
                    cost: "700"
                },
                {
                    name: "realme 11 5g",
                    image: "https://rukminim2.flixcart.com/image/720/864/xif0q/mobile/g/j/d/-original-imagtqqddnkayg4x.jpeg?q=60&crop=false",
                    description: "8 GB RAM | 256 GB ROM | Expandable Upto 2 TB.",
                    cost: "1399"
                }
            ]
        },
        
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img  class="im" src="https://th.bing.com/th?id=OIP.tOLYVDEfVbhJpvGC235B6gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }} onClick={(e) => handleParadiseNurseyClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Mobiles store</h3>
                                <i style={{ color: 'white' }}>Where Price meets Quality</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlephonesClick(e)} style={styleA}>phones</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg><div className='cart_quantity_count'>{totalQuantity}</div></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {phonesArray.map((category, index) => (
                        <div key={index}>
                            <h1><div>{category.category}</div></h1>
                            <div className="product-list">
                                {category.phones.map((phone, phoneIndex) => (
                                    <div className="product-card" key={phoneIndex}>
                                        <img className="product-image" src={phone.image} alt={phone.name} />
                                        <div className="product-title">{phone.name}</div>
                                        <div className="product-description">{phone.description}</div>
                                        <div className="product-cost">{phone.cost}</div>
                                        {/*Similarly like the above phone.name show other details like description and cost*/}
                                        <button className="product-button" onClick={() => handleAddToCart(phone)} disabled={checkDisabled(phone.name)}>{checkDisabled(phone.name)?"Added":"Add"} to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}


                </div>
            ) : (
                <CartItem addedToCart={addedToCart} reactivateAddButton={reactivateAddButton} onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;