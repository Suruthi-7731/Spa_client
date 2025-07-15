import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CategoryList.css';

const categories = [
  { name: 'Mobiles', image: 'https://etimg.etb2bimg.com/photo/98913352.cms' },
  { name: 'Laptops', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHBVIVgrtScP1mUotFDsrQGE1Mdl_Tb4rwg&s' },
  { name: 'Bags', image: 'https://m.media-amazon.com/images/I/61gj9veca2L._UY1100_.jpg' },
  { name: 'Water Bottles', image: 'https://m.media-amazon.com/images/I/4121l07JxoL._UF1000,1000_QL80_.jpg' },
  { name: 'Chain', image : 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/391/1740835299_1feb31c3b8c92f5e8465.jpg'},
  { name: 'Dress' , image : 'https://assets0.mirraw.com/images/11845670/ACW8803_zoom.jpg?1694693060'},
  { name: 'Shoe' , image : 'https://static.vecteezy.com/system/resources/thumbnails/034/334/352/small/closeup-of-runners-shoe-mid-stride-isolated-on-a-gradient-background-photo.jpg'},
  {name : 'Makeup Products ' , image : 'https://www.panchkulahelp.com/wp-content/uploads/2024/04/eye-makeup-678x446-1.jpg'}
];

const CategoryList = () => {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      {categories.map(cat => (
        <div className="category-card" key={cat.name} onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}>
          <img src={cat.image} alt={cat.name} />
          <h3>{cat.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
