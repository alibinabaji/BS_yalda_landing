// SingleProduct.js
import React from 'react';
import product from "../component/productsGrid/product.json"
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();
    const foundProduct = product.find((product) => product.id === id);

  return (
    <div>
      <div className="singleProduct m-6  p-4">
        <div className="flex flex-wrap font-sans">
            <div className="basis-full md:basis-1/3">
                <div className="flex flex-wrap">
                    <div className="basis-full">
                        <img src={`https://binasaffron.ir/${foundProduct.img}`} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
                <div className="basis-full md:basis-2/3 p-6 shadow-md border border-inherit">
                    <div className="grid">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900 my-2">
                            {foundProduct.name}
                        </h1>
                        <div className="text-2xl font-semibold text-red-800 my-2">
                            {foundProduct.price} تومان
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <a href="tel:09152163991">
                            <button className="h-10 px-6 font-semibold rounded-md bg-red-800 text-white">
                            خرید
                            </button>
                        </a>
                    </div>
                    </div>
                    <p className="text-sm text-slate-700">
                    برای ثبت سفارش با شماره <a href="tel:09152163991">09152163991</a> در تماس باشید.
                    </p>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    </div>
                    <p classNameName="text-sm text-slate-800" dangerouslySetInnerHTML={{ __html: foundProduct.summarize }} />
                </div>
        </div>
        
    </div>
    </div>
  );
};

export default SingleProduct;
