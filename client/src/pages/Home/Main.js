import React from 'react';

function Main() {
  return (
    <div>
      <div className="w-full h-96 bg-[url('./images/pexels-jess-bailey-designs-1764433.jpg')] bg-cover bg-center bg-black bg-opacity-80 bg-blend-darken flex items-center justify-center flex-col  ">
        <h1 className='text-white text-xl sm:text-2xl tracking-wide px-10 text-center '>
          {' '}
          به سامانه پاسخگویی به مشکلات دانشگاه پیام نور استان آذربایجان غربی خوش
          آمدید ...
        </h1>
      </div>
      <div className='p-5 bg-blue-50'>
        <h3>توضیحات : </h3>
        <ul className=' text-xs md:text-sm mt-4 text-gray-500'>
          <p className='text-black'>(کاربران)</p>
          <li className='list-style2 before:bg-black'>
            دانشجو ها برای پاسخ گویی دقیق تر، پشتیبان مربوط به موضوع تیکت خود را
            انتخاب کنند !
          </li>
          <li className='list-style2 before:bg-white'>
            تیکت ها به صورت ناشناس در سیستم ثبت می شود و فقط ادمین اصلی سایت
            دارای اطلاعات کامل است !
          </li>
          <li className='list-style2 before:bg-black'>
            شماره کاربر ثبت شده در تیکت 4 رقم آخر شماره داشنجویی است .
          </li>
          <li className='list-style2 before:bg-white'>
            دانشجو ها مجوز پاسخ به هیچ تیکتی را ندارند !
          </li>
        </ul>
        <ul className='text-xs md:text-sm mt-2.5 text-gray-500'>
          <p className='text-black'>(پشتیبان ها)</p>
          <li className='list-style2 before:bg-black'>
            اطلاعات پشتیبان ها از قبل در سیستم ثبت شده است .
          </li>
          <li className='list-style2 before:bg-white'>
            هر پشتیبان می تواند به تیکت های مربوط به حوزه ی خود پاسخ دهد !
          </li>
          <li className='list-style2 before:bg-black'>
            حوزه های پاسخگویی پشتیبان ها را ادمین اصلی سایت تعیین میکند !
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
