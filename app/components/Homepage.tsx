import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bg1 from '../../public/images/blue-gravel-stone-texture-background.jpg'
import bg3 from '../../public/images/nick-nice-gPm8h3DS1s4-unsplash.jpg'
import bg4 from '../../public/images/beautiful-old-grunge-texture-concrete-rough-wall-gray-color-background-backdrop-horizontal-blue-colors.jpg'
import bg5 from '../../public/images/avinash-kumar-rEIDzqczN7s-unsplash.jpg'
import bg6 from '../../public/images/avinash-kumar-rEIDzqczN7s-unsplash.jpg'
// import bg7 from './blue-gravel-stone-texture-background.jpg'
import bg8 from '../../public/images/closeup-green-stones.jpg'
import bg9 from '../../public/images/plain-copy-space-sand-background.jpg'
import bg10 from '../../public/images/wrinkled-silver-textured-pattern-background.jpg'
import bg11 from '../../public/images/turquoise-black-gemstone-textured-background.jpg'
import bg12 from '../../public/images/watercolor-splash-background.jpg'
import icon2 from '../../public/images/icon 2.png';
import icon1 from '../../public/images/icon1.png';
import icon3 from '../../public/images/icon 3.png';
import icon4 from '../../public/images/icon 4.png';

const Homepage = () => {
  return (
    <div className='bg-emerald-900 '>
  <div className='container py-8  '>
  <div className="row">
    <div className="grid grid-cols-3 gap-2 bg-emerald-900">
  <div  className="	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  " style={{ backgroundImage: `url(${bg8.src})`, backgroundSize:'cover', }}>
    <div  className=" text-7xl text-center p-8 sm:pb-0 text-slate-200" >
    <Link href="/pages/mozayede" > 
       آموزش 

</Link>
    </div>
    <Image
src={icon3}
width={100}
height={100}
alt='مهندس '
/>
    </div>
  <div  className=" h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " style={{ backgroundImage: `url(${bg1.src})`, backgroundSize:'cover'}}>
    <div  className=" text-7xl text-center p-8 sm:pb-0 text-slate-200	" >
 <Link href="/pages/map.gis">
          Web Gis

</Link>

  </div>
   
  
  </div>
  
  <div className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " style={{ backgroundImage: `url(${bg11.src})`, backgroundSize:'cover'}}>
     <div  className=" text-6xl text-center p-8 sm:pb-0 text-slate-200 	" >
     <a className=' ' >
      <Link href="/pages/mozayede">
            مهندس معدن 
</Link>
</a>

  </div>
  <Image
src={icon1}
width={100}
height={100}
alt='مهندس '
/>
  </div>
  <div className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 col-span-2 " style={{ backgroundImage: `url(${bg3.src})`, backgroundSize:'cover'}}>
     <div  className=" text-7xl text-center p-8 sm:pb-0 text-slate-200	 "  >
    
    مزایده معدن 
            

  </div>
<Image
src={icon2}
width={100}
height={100}
alt='مهندس '
/>
  
  </div>
  <div className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" style={{ backgroundImage: `url(${bg4.src})`, backgroundSize:'cover'}}> 
  <div  className="text-6xl text-center p-8 sm:pb-0 text-slate-200" >
  <a href="/" >     
   دور سنجی 

</a>
  </div></div>
  <div className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" style={{ backgroundImage: `url(${bg12.src})`, backgroundSize:'cover'}}> 
  <div  className=" text-6xl text-center p-8 sm:pb-0 text-slate-200	" >
  <a href="/" 
>پیمانکاران
</a>
       
  </div></div>
  <div  className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 col-span-2" style={{ backgroundImage: `url(${bg6.src})`, backgroundSize:'cover'}}>
     <div  className=" text-6xl text-center p-8 sm:pb-0 text-slate-200" >
     <a href="/" >خدمات فنی مهندسی 

</a>
  </div>
  <Image
src={icon4}
width={100}
height={100}
alt='مهندس '
/>
  </div>
  <div  className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" style={{ backgroundImage: `url(${bg9.src})`, backgroundSize:'cover'}}>
    <div className=" text-6xl text-center p-8 sm:pb-0 text-slate-200" >
    <a href="/">خدمات معدن 

    
</a>

    </div>
    </div>
  <div  className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300col-span-2" style={{ backgroundImage: `url(${bg10.src})`, backgroundSize:'cover'}}>
    <div  className=" text-6xl text-center p-8 sm:pb-0  text-slate-200" >
  <a href="/">
     مقالات </a> 
  </div>
  </div>
  <div  className="bg-rose-300	 h-48  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 	" style={{ backgroundImage: `url(${bg8.src})`, backgroundSize:'cover'}}>
    <div className=" text-7xl text-center p-8 sm:pb-0 t text-slate-200" >
      <a href="/">استخدام
      </a>

      
  </div></div>
  <div  className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 col-span-2" style={{ backgroundImage: `url(${bg11.src})`, backgroundSize:'cover'}}>
    <div  className=" text-6xl text-center p-8 sm:pb-0 text-slate-200 "  >
<a href="/">
  معرفی ابزارالات  حفاری  

</a>
</div></div>
  <div  className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" style={{ backgroundImage: `url(${bg5.src})`, backgroundSize:'cover'}}>
     <div  className=" text-6xl text-center p-8 sm:pb-0 text-slate-200	"  >
     <a href="/">  
       ثبت آگهی 
</a>
   
  </div></div>
  
 
</div>
  </div>
  </div>
  </div>
  );
};

export default Homepage;