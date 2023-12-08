import React from 'react';
import SocialMediaIcons from '../SocialMedia';

const openEnamad = () => {
  window.open('https://trustseal.enamad.ir/?id=151181&Code=E8NdkFVVMVFU3cirkrut'); 
}
const openSamandehi = () => {
   window.open("https://logo.samandehi.ir/Verify.aspx?id=1047253&p=rfthobpdaodsjyoeuiwkdshwxlao", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")  
}

const Footer = () => {
  return (
    <footer>
        <div className="footer text-sm flex flex-wrap p-8 bg-gray-100">
              <div className="contacUs grid basis-full  md:basis-1/3 p-4">
                  <span>مشهد ، خیابان شیرازی ، بازار بزرگ غدیر ، طبقه +1 ، پلاک 17</span>
                  <a href="tel:09152163991" className="font-bold">09152163991</a>
              </div>
              <div className="importantLink basis-full  md:basis-1/3 p-4">
                  <h4 className="font-bold">زعفران بینا</h4>
                  <div className="mt-4">
                      <SocialMediaIcons />
                  </div>
              </div>
              <div className="trust basis-full md:basis-1/3 p-4 flex">
                  <img src="https://binasaffron.ir/mag/wp-content/uploads/2021/07/binasaffron-e-namad.png" className="cursor-pointer" onClick={openEnamad} alt="" />
                  <img src="https://binasaffron.ir/mag/wp-content/uploads/2021/07/binasaffron-samandehi.png" className="cursor-pointer" onClick={openSamandehi} alt="" />
              </div>
            </div>
            <div className="copyRight text-xs	 py-3 bg-gray-100 text-center border-2 border-t-gray-300">
              <span>© کلیه حقوق این وب سایت متعلق به شرکت فراوران زعفران بینا است.</span>
            </div>
    </footer>
  );
};

export default Footer;
