import React from 'react';
import product from './product.json'
import { Link } from 'react-router-dom';

function ProductsGrid() {
  return (
    <div className="productsList flex flex-wrap">
        {product.map((item, index) => (
            <div className="product p-5 basis  md:basis-1/4 text-center my-7" key={index}>
                <div className='rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-3 h-full'>
                    <Link target="_blank" to={`/product/${item.id}`}>
                        <img className="w-full" src={`https://binasaffron.ir/${item.img}`} alt="" loading="lazy" />
                        <h2 className="productName mx-3">{ item.name }</h2>
                        <div className="flex items-center justify-around m-2">
                            <span className="bg-red-500 border-4 border-solid border-green-500 text-white py-1 px-2 rounded-full mr-2">{item.off}</span>
                            <span className="price text-red-700">
                            <del className="text-gray-800">{item.price} تومان</del>
                            </span>
                        </div>
                        <span className="ml-2 text-red-700 font-semibold">{item.discountedPrice} تومان</span>
                    </Link  >
                </div>
            </div>
        ))}
    </div>
  );
}

export default ProductsGrid;
