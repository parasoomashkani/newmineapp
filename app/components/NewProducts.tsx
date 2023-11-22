import React from 'react';
import ProductCard from "./ProductCard";
import Image from 'next/image';
import Icon2 from '../../public/images/icon 2.png'
const productsData = [
    {
      img: "/construction-site-featuring-front-dumper-truck (1).jpg",
      title: "معدن زغال سنگ ",
      desc: "احداث شده در بهار 1397",
      rating: 4,
      price: "450.00",
    },
    {
      img: "/rough-surface-stone.jpg",
      title: "معدن آهن ",
      desc: "دارای وام یکساله ",
      rating: 4,
      price: "100.00",
    },
    {
      img: "/omid-roshan-Btc4MDN0MtU-unsplash.jpg",
      title: "معدن طلا ",
      desc: " 2 کیلومتر رشته طلا ",
      rating: 5,
      price: "5500.00",
    },
    {
      img: "/male-worker-with-bulldozer-sand-quarry.jpg",
      title: "معدن الماس ",
      desc: "در مجاورت مرز پاکستان ",
      rating: 3,
      price: "2500.00",
    },
    {
      img: "/shirt-1.jpg",
      title: "معدن نمک ",
      desc: "سال احداث 1389",
      rating: 4,
      price: "45.00",
    },
    {
      img: "/person-working-building-construction.jpg",
      title: "معدن مس ",
      desc: "احداث شده در سال 1378",
      rating: 3,
      price: "580.00",
    },
    {
      img: "/rough-surface-stone.jpg",
      title: "معدن آهن ",
      desc: "دارای وام یکساله ",
      rating: 4,
      price: "100.00",
    },
    {
      img: "/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      title: "معدن زمرد ",
      desc: "با تاییدیه کارشناس ",
      rating: 4,
      price: "120.00",
    },
  ];
const NewProducts = () => {
  return (
    <div className='bg-emerald-900'> 
  
    <div >
    <div className="container pt-16 ">
       <div className='bg-green-950 grid grid-cols-3 gap-4 '> 
     
        <Image 
      src={Icon2}
      width={100}
      height={100}
      alt='مزایده '
    
      />
      <h2 className="font-bold text-7xl text-center text-slate-200 ">مزایده ها 
      </h2> 
   
</div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 pt-6">
        {productsData.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  </div> </div>
  );
};

export default NewProducts ;