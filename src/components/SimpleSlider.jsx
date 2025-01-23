import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="w-[998px] h-[344px]  ">
      <div className=" ">
        <h3><img src="https://img.lazcdn.com/us/lazgcp/c4079160-e8c7-4b2f-bb09-04ad7cd9f45d_BD-1188-400.png_1200x1200q80.png_.webp" alt=""  /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/18d7c5fe-7d98-4dd5-a8b4-18261fa07187_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/5739162f-4663-4249-b614-b360a675ee2e_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/5de11c9e-5e89-41c5-b00b-77fe6a82157a_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/5f1ef282-3dc5-4729-8493-6340fcd7d612_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/a400ea9c-75a3-4ead-be55-98ce3f608b1f_NP-1976-688.png_2200x2200q80.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/50b532d0-18b6-4d25-a6a4-9d97fb0b0e89_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/fb22e4c3-c283-4dc3-90b6-25cc2137ead8_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
      <div>
        <h3><img src="https://img.lazcdn.com/us/domino/9ff52f9b574ef5f34975e231516f3cbe.jpg_2200x2200q80.jpg" alt="" /></h3>
      </div>
    </Slider>
  );
}