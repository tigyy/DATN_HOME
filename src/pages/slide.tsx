import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

function Slider() {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    //setInterval được sử dụng để thiết lập một chu kỳ thực thi định kỳ của hàm trong một khoảng thời gian.
    const xx = setInterval(() => {
      switch (cont) {
        case 0:
          setCont(1);
          break;
        case 1:
          setCont(0);
          break;
        default:
          break;
      }
    }, 1500); // Thay đổi thời gian chạy ví dụ  8000 miligiây (8 giây) xuống 3000 miligiây (3 giây)

    return () => {
      clearInterval(xx);//được sử dụng để dừng chu kỳ thực thi khi component bị hủy bỏ.
    };
  }, [cont]);

  const sliderButton1 = () => {
    // Điều chỉnh tương ứng với code jQuery
    setCont(0);
  };

  const sliderButton2 = () => {
    // Điều chỉnh tương ứng với code jQuery
    setCont(1);
  };

  return (
    <div className="sliderAx h-auto ">
      {/* Điều chỉnh tương ứng với code jQuery */}
      <div  id="slider-1" className={`container mx-auto  ${ cont === 0 ? "block" : "hidden"  } transition duration-400`} >
        {/* Điều chỉnh tương ứng với code jQuery */}
        <div  className="bg-cover bg-center w-full h-[400px] text-white py-24 px-10 object-fill" style={{ backgroundImage:
              "url(https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/tennis-SS23-cybersonic-launch-PLP-masthead-small-dual-d_tcm337-974155.jpg)",
              
          }}>
          <div className="md:w-1/2 p-10">
            <p className="text-3xl font-bold">Hello Nike App</p>
            <p className="text-2xl mb-10 mt-4 leading-none">
              New Styles on Sale: Up to 40% Off Shop All Our New
              Markdowns
            </p>
            <a
              href="#"
              className="bg-white py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Mua ngay
            </a>
          </div>
        </div>
        <br />
      </div>

      {/* Điều chỉnh tương ứng với code jQuery */}
      <div
        id="slider-2"
        className={`container mx-auto ${
          cont === 1 ? "block" : "hidden"
        } transition duration-400`}
      >
        {/* Điều chỉnh tương ứng với code jQuery */}
        <div  className="bg-cover bg-top w-full h-[400px] text-white py-24 px-10 object-fill" 
         style={{ backgroundImage: "url(https://unicosmoderna.com/cdn/shop/collections/b9565ff11a831f4ed8b34cb31649518b_8a5f4559-268f-4746-9306-51c7e0e093b0.jpg?v=1668238983&width=3334)",
            }}>
          <div className="md:w-1/2 p-10">
            <p className="text-3xl font-bold ">NATIONAL DAY SALE</p>
            <p className="text-2xl mb-10 mt-4 leading-none">
            Giá hiển thị trên trang web là giá bán cuối cùng
            </p>
            <button className="bg-white py-4 px-8 text-black  font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800 flex">
              <span className="mr-2 ">Mua ngay</span>
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Slider;
