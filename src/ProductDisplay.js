
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/ProductDisplay.css';

const productData = {
  mobiles: [
    {
      name: 'iPhone 14',
      price: '₹79,900',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model',
      offer: 'Flat ₹5,000 off on HDFC cards',
      description: '6.1-inch display, A15 Bionic chip, dual-camera system',
    },
    {
      name: 'Samsung Galaxy S23',
      price: '₹74,999',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzadeua/gallery/in-galaxy-s23-5g-sm-s911-446609-sm-s911bzadeua-534046849',
      offer: 'Free earbuds worth ₹3,000',
      description: '120Hz AMOLED, Snapdragon 8 Gen 2, 50MP triple camera',
    },
    {
      name: 'OnePlus 11R',
      price: '₹39,999',
      image: 'https://image01.oneplus.net/ebp/202302/01/1-m00-25-cc-rb8bwmr7uwmabwsxaahqnzexrja725_840_840.png',
      offer: '₹2,000 off with ICICI card',
      description: 'Snapdragon 8+ Gen 1, 5000mAh battery, 100W charging',
    },
    {
      name: 'Realme Narzo 60 Pro',
      price: '₹23,999',
      image: 'https://image01.realme.net/general/20230704/1688458826074.png',
      offer: 'Exchange bonus ₹2,000',
      description: 'Dimensity 7050, 100MP camera, 120Hz curved display',
    },
    {
      name: 'Redmi Note 12 Pro',
      price: '₹20,999',
      image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-12-pro-5g/specs01.png',
      offer: 'No-cost EMI available',
      description: '120Hz AMOLED, 5000mAh battery, 67W fast charging',
    },
  ],
  laptops: [
    {
      name: 'MacBook Air M2',
      price: '₹1,14,900',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-m2',
      offer: 'Student discount available',
      description: '13.6-inch Retina display, 8GB RAM, 256GB SSD, M2 chip',
    },
    {
      name: 'Dell XPS 13',
      price: '₹99,990',
      image: 'https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-13-9300-laptop/spi/ng/xps-13-9300-laptop-hero-504x350-ng.psd',
      offer: 'Free backpack with purchase',
      description: '11th Gen i5, 8GB RAM, 512GB SSD, 13.4-inch FHD+',
    },
    {
      name: 'HP Pavilion 15',
      price: '₹62,999',
      image: 'https://www.hp.com/in-en/shop/media/catalog/product/1/5/15-eg2009tu_1.png',
      offer: 'Flat ₹5,000 cashback on SBI cards',
      description: 'Intel i5 12th Gen, 16GB RAM, 512GB SSD, Iris Xe Graphics',
    },
    {
      name: 'Asus ROG Strix G15',
      price: '₹1,04,999',
      image: 'https://dlcdnwebimgs.asus.com/gain/7C34F69C-88F3-4B15-92A4-9039F8D0EF2F/w800',
      offer: 'Free gaming mouse',
      description: 'AMD Ryzen 7, RTX 3060, 16GB RAM, 1TB SSD, 144Hz',
    },
    {
      name: 'Lenovo IdeaPad Slim 5',
      price: '₹58,999',
      image: 'https://p4-ofp.static.pub/ShareResource/na/laptops/ideapad/ideapad-slim-5i-gen-8-14-intel-gallery-1.png',
      offer: 'EMI starting at ₹1,999/month',
      description: 'Intel i5 12th Gen, 8GB RAM, 512GB SSD, FHD display',
    },
  ],
  bags: [
    {
      name: 'Wildcraft Backpack',
      price: '₹1,299',
      image: 'https://www.wildcraft.com/media/catalog/product/cache/3/image/1200x/040ec09b1e35df139433887a97daa66f/1/1/11692_-_wiki_by_wildcraft_slick_backpack_-_black_-_1_1.jpg',
      offer: 'Buy 1 Get 1 10% Off',
      description: '25L, water-resistant, 3 compartments, padded straps',
    },
    {
      name: 'American Tourister Bag',
      price: '₹2,399',
      image: 'https://www.americantourister.in/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/a/t/at_sunside_exp_spinner_68_24_black_front.jpg',
      offer: '₹500 off on first order',
      description: 'Polyester, laptop compatible, durable design',
    },
    {
      name: 'Skybags Campus Backpack',
      price: '₹1,499',
      image: 'https://www.skybags.co.in/media/catalog/product/s/k/sky-quest-black.jpg',
      offer: 'Free keychain with bag',
      description: 'Casual backpack, 2 compartments, padded back',
    },
    {
      name: 'Nike Sports Duffel',
      price: '₹2,799',
      image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/e2e2eb3d-faf0-4e80-9b93-491f034fb260/nike-brasilia-training-duffel-bag-60l-KXG58B.png',
      offer: '10% off with coupon NIKE10',
      description: '60L duffel, ideal for gym and travel, strong straps',
    },
    {
      name: 'F Gear Luxur Brown Bag',
      price: '₹999',
      image: 'https://m.media-amazon.com/images/I/61J9G9VOp0L._SY741_.jpg',
      offer: 'Combo offer available',
      description: 'Leather look, stylish, lightweight and compact',
    },
  ],
  'water bottles': [
    {
      name: 'Milton Thermosteel',
      price: '₹799',
      image: 'https://m.media-amazon.com/images/I/61+hx6r0tbL._SL1500_.jpg',
      offer: '10% off on 2 or more',
      description: 'Stainless steel, 1L capacity, keeps drinks hot/cold',
    },
    {
      name: 'Cello H2O Bottle',
      price: '₹499',
      image: 'https://m.media-amazon.com/images/I/61D0Rby9NPL._SL1500_.jpg',
      offer: 'Flat ₹100 off',
      description: 'Plastic, BPA-free, 1L, assorted colors',
    },
    {
      name: 'Tupperware Aqua Safe',
      price: '₹349',
      image: 'https://m.media-amazon.com/images/I/41eI+7qnh+L._SY355_.jpg',
      offer: 'Buy 2 Get 1 Free',
      description: '500ml, leak-proof, sleek design, reusable',
    },
    {
      name: 'Pigeon Steel Bottle',
      price: '₹599',
      image: 'https://m.media-amazon.com/images/I/51pgp53p9lL._SL1500_.jpg',
      offer: 'Free cleaning brush included',
      description: '750ml, steel body, good insulation',
    },
    {
      name: 'Borosil Hydra Trek',
      price: '₹699',
      image: 'https://m.media-amazon.com/images/I/51KrY6Vi2lL._SL1000_.jpg',
      offer: 'Save ₹200 on combo pack',
      description: 'Hot & cold flask, 700ml, 12hr temperature lock',
    },
  ],
  'chain': [
    {
      name: 'Milton Thermosteel',
      price: '₹799',
      image: 'https://m.media-amazon.com/images/I/61+hx6r0tbL._SL1500_.jpg',
      offer: '10% off on 2 or more',
      description: 'Stainless steel, 1L capacity, keeps drinks hot/cold',
    },
    {
      name: 'Cello H2O Bottle',
      price: '₹499',
      image: 'https://m.media-amazon.com/images/I/61D0Rby9NPL._SL1500_.jpg',
      offer: 'Flat ₹100 off',
      description: 'Plastic, BPA-free, 1L, assorted colors',
    },
    {
      name: 'Tupperware Aqua Safe',
      price: '₹349',
      image: 'https://m.media-amazon.com/images/I/41eI+7qnh+L._SY355_.jpg',
      offer: 'Buy 2 Get 1 Free',
      description: '500ml, leak-proof, sleek design, reusable',
    },
    {
      name: 'Pigeon Steel Bottle',
      price: '₹599',
      image: 'https://m.media-amazon.com/images/I/51pgp53p9lL._SL1500_.jpg',
      offer: 'Free cleaning brush included',
      description: '750ml, steel body, good insulation',
    },
    {
      name: 'Borosil Hydra Trek',
      price: '₹699',
      image: 'https://m.media-amazon.com/images/I/51KrY6Vi2lL._SL1000_.jpg',
      offer: 'Save ₹200 on combo pack',
      description: 'Hot & cold flask, 700ml, 12hr temperature lock',
    },
  ],
  'dress': [
    {
      name: 'Milton Thermosteel',
      price: '₹799',
      image: 'https://m.media-amazon.com/images/I/61+hx6r0tbL._SL1500_.jpg',
      offer: '10% off on 2 or more',
      description: 'Stainless steel, 1L capacity, keeps drinks hot/cold',
    },
    {
      name: 'Cello H2O Bottle',
      price: '₹499',
      image: 'https://m.media-amazon.com/images/I/61D0Rby9NPL._SL1500_.jpg',
      offer: 'Flat ₹100 off',
      description: 'Plastic, BPA-free, 1L, assorted colors',
    },
    {
      name: 'Tupperware Aqua Safe',
      price: '₹349',
      image: 'https://m.media-amazon.com/images/I/41eI+7qnh+L._SY355_.jpg',
      offer: 'Buy 2 Get 1 Free',
      description: '500ml, leak-proof, sleek design, reusable',
    },
    {
      name: 'Pigeon Steel Bottle',
      price: '₹599',
      image: 'https://m.media-amazon.com/images/I/51pgp53p9lL._SL1500_.jpg',
      offer: 'Free cleaning brush included',
      description: '750ml, steel body, good insulation',
    },
    {
      name: 'Borosil Hydra Trek',
      price: '₹699',
      image: 'https://m.media-amazon.com/images/I/51KrY6Vi2lL._SL1000_.jpg',
      offer: 'Save ₹200 on combo pack',
      description: 'Hot & cold flask, 700ml, 12hr temperature lock',
    },
  ],
  'shoe': [
    {
      name: 'Milton Thermosteel',
      price: '₹799',
      image: 'https://m.media-amazon.com/images/I/61+hx6r0tbL._SL1500_.jpg',
      offer: '10% off on 2 or more',
      description: 'Stainless steel, 1L capacity, keeps drinks hot/cold',
    },
    {
      name: 'Cello H2O Bottle',
      price: '₹499',
      image: 'https://m.media-amazon.com/images/I/61D0Rby9NPL._SL1500_.jpg',
      offer: 'Flat ₹100 off',
      description: 'Plastic, BPA-free, 1L, assorted colors',
    },
    {
      name: 'Tupperware Aqua Safe',
      price: '₹349',
      image: 'https://m.media-amazon.com/images/I/41eI+7qnh+L._SY355_.jpg',
      offer: 'Buy 2 Get 1 Free',
      description: '500ml, leak-proof, sleek design, reusable',
    },
    {
      name: 'Pigeon Steel Bottle',
      price: '₹599',
      image: 'https://m.media-amazon.com/images/I/51pgp53p9lL._SL1500_.jpg',
      offer: 'Free cleaning brush included',
      description: '750ml, steel body, good insulation',
    },
    {
      name: 'Borosil Hydra Trek',
      price: '₹699',
      image: 'https://m.media-amazon.com/images/I/51KrY6Vi2lL._SL1000_.jpg',
      offer: 'Save ₹200 on combo pack',
      description: 'Hot & cold flask, 700ml, 12hr temperature lock',
    },
  ],
  'makeup products': [
    {
      name: 'Milton Thermosteel',
      price: '₹799',
      image: 'https://m.media-amazon.com/images/I/61+hx6r0tbL._SL1500_.jpg',
      offer: '10% off on 2 or more',
      description: 'Stainless steel, 1L capacity, keeps drinks hot/cold',
    },
    {
      name: 'Cello H2O Bottle',
      price: '₹499',
      image: 'https://m.media-amazon.com/images/I/61D0Rby9NPL._SL1500_.jpg',
      offer: 'Flat ₹100 off',
      description: 'Plastic, BPA-free, 1L, assorted colors',
    },
    {
      name: 'Tupperware Aqua Safe',
      price: '₹349',
      image: 'https://m.media-amazon.com/images/I/41eI+7qnh+L._SY355_.jpg',
      offer: 'Buy 2 Get 1 Free',
      description: '500ml, leak-proof, sleek design, reusable',
    },
    {
      name: 'Pigeon Steel Bottle',
      price: '₹599',
      image: 'https://m.media-amazon.com/images/I/51pgp53p9lL._SL1500_.jpg',
      offer: 'Free cleaning brush included',
      description: '750ml, steel body, good insulation',
    },
    {
      name: 'Borosil Hydra Trek',
      price: '₹699',
      image: 'https://m.media-amazon.com/images/I/51KrY6Vi2lL._SL1000_.jpg',
      offer: 'Save ₹200 on combo pack',
      description: 'Hot & cold flask, 700ml, 12hr temperature lock',
    },
  ],
};

const ProductDisplay = ({ userEmail, addToCart }) => {
  const { categoryName } = useParams();
  const categoryKey = categoryName.toLowerCase();
  const products = productData[categoryKey] || [];

  const handleAddToCart = (product) => {
    axios.post('http://localhost:5050/cart/add', {
      userEmail,
      name: product.name,
      price: product.price,
      image: product.image,
      offer: product.offer,
      description: product.description,
    }).then(() => addToCart(product));
  };

  return (
    <div className="product-display">
      <h2>{categoryKey.toUpperCase()}</h2>
      <div className="product-list">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p><strong>Offer:</strong> {p.offer}</p>
            <p>{p.description}</p>
            <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
