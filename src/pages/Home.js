
import React from 'react';
import Slider from '../component/slider/Slider';
import ProductsGrid from '../component/productsGrid/ProductsGrid';
import Footer from '../component/footer/Footer';

function Home() {
  return (
    <div>
      <Slider/>
        <div className="section_title mt-10 px-5">
            <div className="title flex -mb-0.5 pb-4 w-max font-bold text-right">
                <h1>خرید هدیه شب یلدا</h1>
            </div>
            <span>
            در جشن شب یلدا، جعبه هدیه <span style={{ fontWeight: 'bold' }}>زعفران بینا</span> به عنوان یک گزینه بی‌نظیر برای ارائه هدیه ای متفاوت و لذت‌بخش می باشد.
            </span>

        </div>
      <ProductsGrid/>
      <Footer/>
    </div>
  );
}

export default Home;
