
import { LinearGradient } from 'react-text-gradients'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import ButtonFilled from '../../../Components/Button/ButtonFilled';

const Banner = () => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-11 p-20 gap-11 md:gap-0 bg-gradient-to-t from-[#a6bdfe] z-0'>
                <div className='md:col-span-4'>
                    <h1 className='text-[29px] text-center md:text-start md:text-[20px] lg:text-[50px] font-bold dark:text-white'>
                        Show The Skills To Drive <LinearGradient className='md:text-[29px] lg:text-[50px] font-extrabold  ' gradient={['to right', '#3158ef ,#b765e7']}>To win</LinearGradient>
                    </h1>
                    <p className='text-[#6b7389] dark:text-white md:text-base lg:text-lg md:mt-3 lg:mt-7 mb2
                     lg:mb-5'>Search for your contest and participate now to win fantastic prizes. Don&apos;t miss your chance to become a winner!</p>
                    <div className='text-center'>
                        <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                            <label htmlFor="Search" className="hidden">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 hover:w-[24px] duration-200">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100 text-gray-800 ml-10 md:ml-1 lg:ml-24 hover:text-blue-700 duration-200">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black placeholder:text-black dark:placeholder:text-white  bg-gray-200 dark:bg-gray-800 dark:text-white" autoComplete="off" />
                            </div>
                        </fieldset>
                    </div>
                    <div className='flex justify-center mt-3 lg:mt-8'>
                        <ButtonFilled text='Explore Contests'></ButtonFilled>
                    </div>
                </div>
                <div className='md:col-span-4 mt-12 hidden md:block'>
                    <img src="https://i.ibb.co/7S8L1Vy/banner-01.webp" alt="" />
                </div>
                <div className='md:col-span-3'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        pagination={{ clickable: true }}
                        loop={true}
                        className=""
                    >
                        <SwiperSlide>
                            <img src="https://i.pinimg.com/564x/6e/ed/df/6eeddf4ab0a6b3e03e6268f4bd822d44.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.pinimg.com/564x/bd/7a/28/bd7a281a9e4757f7301f03c613c8e9c4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.pinimg.com/564x/70/3b/56/703b563b694faa5f73ecef7816513cf2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.pinimg.com/564x/9e/b2/73/9eb27375866cc06e814675089b190eb4.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='md:-mt-[80px] hidden md:block lg:-mt-[100px] w-full h-40 bg-white dark:bg-[#2a303c] rounded-t-[100%] z-10 relative'>

            </div>
        </div>
    );
};

export default Banner;