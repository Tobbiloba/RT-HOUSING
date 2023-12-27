import React from "react";

const Articles = () => {
  const data = [
    {
      id: 1,
      img: "http://amentotech.com/htmls/tenanto/images/articles/img-01.jpg",
      featured: true,
      owner: "Admin",
      title: "10 Things All Rooms Should Have",
      date: "Jun 27, 2019",
      post: "Consectetur adipisicing elitm sed at esmod tempor incididunt a labore alor...",
    },
    {
      id: 2,
      img: "http://amentotech.com/htmls/tenanto/images/articles/img-02.jpg",
      featured: true,
      owner: "Magarito Beverage",
      title: "Best Days To Book Hotel For Tour",
      date: "Jun 27, 2019",
      post: "Consectetur adipisicing elitm sed at esmod tempor incididunt a labore alor...",
    },
    {
      id: 3,
      img: "http://amentotech.com/htmls/tenanto/images/articles/img-03.jpg",
      featured: false,
      owner: "Marivel Rosenberry",
      title: "Choose Any Place To Travel",
      date: "Jun 27, 2019",
      post: "Consectetur adipisicing elitm sed at esmod tempor incididunt a labore alor...",
    },
  ];
  return (
    <div className="flex items-center exo justify-center">
      <div className="container text-center py-20 px-[1rem] ">
        <h1 className="text-yellow-900 text-4xl">Latest Articles & Tips</h1>
        <p className="text-yellow-500 mt-2">Treat Yourself Like a King</p>

        <p className="mt-12 text-slate-400">
          Consectetur adipisicing elit sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua enim ad minim veniam quis nostrud
          exercitation ullamco laboris nisiut aliquip
        </p>


        <div className="grid grid-cols-1  md:grid-cols-2 gap-x-5 gap-y-12 text-start lg:grid-cols-3 mt-12">
        {data.map((item) => (
          <div className="border max-w-[25rem] mx-auto md:xm-0 cursor-pointer rounded-md overflow-hidden hover:shadow-md">
            <div className="relative w-[100%] h-[15rem] p-3">
              <img src={item.img} className="absolute top-0 left-0 w-[100%] h-[100%]"/>
              {
                item.featured && <p className="relative text-[14px] z-10 px-2 py-1 bg-red-500 w-fit text-white">Featured</p>
              }
            </div>
            <div className="p-3 mt-4">
              <h1 className="text-yellow-900">{item.owner}</h1>
              <p className="text-[18px] ">{item.title}</p>

              <p className="text-[14px] text-slate-400 my-2">{item.date}</p>

              <p className="">{item.post}</p>
              <p className="text-sky-400 my-3">[more]</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* <div className="slider absolute w-[100%] h-[100%] top-0 left-0">
 <div
        className="slider-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide relative">
            <div className="overlay absolute top-0 left-0 w-[100%] h-[100%]"></div>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[100%] h-[100%]"
            />
          </div>
        ))}
      </div>
      <button className="btn prev-btn text-white" onClick={prevSlide}>
        <img src="/left2.png" className="w-4" />
      </button>
      <button className="btn next-btn text-white" onClick={nextSlide}>
        <img src="/right2.png" className="w-4" />
      </button>
    </div> */}
    </div>
  );
};

export default Articles;
