import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 p-4 text-center md:rounded-t-full">
        <p className="my-5 text-lg font-semibold">شماره تماس جهت ثبت سفارش</p>
        <a href="tel:+919152163991" className="text-2xl">
            09152163991
        </a>    
        <div class="my-5 copyRight text-xs py-3 text-center">
            <span>© کلیه حقوق این وب سایت متعلق به شرکت فراوران زعفران بینا است.</span>
        </div>
    </footer>
  );
};

export default Footer;
