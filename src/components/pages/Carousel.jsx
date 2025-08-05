import { useEffect,  } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  getData } from "../context/DataContext.jsx"; 
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "../Category.jsx";

const Carousel = () => {
  const { data, fetchData } = getData();

  useEffect(() => {
    fetchData();
  }, []);

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
      style={{ ...style, zIndex: 3 }}
    >
      <AiOutlineArrowLeft
        className="arrows"
        style={{
          display: "block",
          borderRadius: "50px",
          background: "#533477", // ঠিক করা background color
          color: "white",
          position: "absolute",
          padding: "6px",
          left: "10px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#533477")}
      />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
      style={{ ...style, zIndex: 3 }}
    >
      <AiOutlineArrowRight
        className="arrows"
        style={{
          display: "block",
          borderRadius: "50px",
          background: "#533477",
          color: "white",
          position: "absolute",
          padding: "6px",
          right: "10px",
          cursor: "pointer",
         
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#533477")}
      />
    </div>
  );
};


 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

  return (
    <div className="w-full">
      <Slider {...settings}>
        {Array.isArray(data) && data.slice(0, 8).map((item) => (
          <div key={item.id} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63]  to-[#24243e] text-white z-10">
            <div className="flex gap-10 justify-center h-[600px] items-center px-4">
              <div className="space-y-6 text-center">
               <h3 className="text-sm font-semibold text-red-500 font-sans">Powering your world with technology</h3>
               <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px]">{item.title}</h1>
               <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">{item.description}</p>
               <button className="bg-gradient-to-r from bg-red-500 to purple-500 text-white px-3 rounded-md cursor-pointer py-2 hover:bg-red-700">Buy Now</button>
              </div>
              <div>
                <img src={item.image} alt={item.title} className="rounded-full w-[450px] hover:scale-110  transition-all shadow-2xl shadow-red-400"/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category/>
    </div>
  );
};

export default Carousel;
