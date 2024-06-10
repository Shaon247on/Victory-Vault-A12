import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'animate.css';
import 'swiper/swiper-bundle.css';
import useApprovedContest from '../../../Hooks/useApprovedContest';
import winner from '../../../assets/—Pngtree—gold winner symbol emblem icon_5326436.png'
import { useState } from 'react';
import Title from '../../../Components/Title/Title';



const Slider = () => {
    const [toggle, setToggle] = useState(true)
    const [contests, refatch] = useApprovedContest()
    const winnersContests = contests.filter(contest => Object.keys(contest.ContestWinner).length !== 0)
    console.log(winnersContests)

    return (
        <div className='mt-10 md:mt-32'>
            <Title
            subTitle='Contest Winners'
             mainTitle='Celebrating Our Champions'
            ></Title>
            <div>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, EffectFade]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    loop='true'
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        winnersContests.map(winnerContest =>
                            <SwiperSlide

                                key={winnerContest._id}>
                                <div
                                    onMouseEnter={() => setToggle(false)}
                                    onMouseLeave={() => setToggle(true)}
                                    className='flex flex-col gap-4 group relative text-white rounded-xl px-6 py-8  w-full h-[300px] md:h-[650px]'>
                                    <div className='absolute h-full inset-0 bg-cover bg-center w-[90%] mx-auto rounded-xl' style={{ backgroundImage: `url(${winnerContest.Image})` }} />
                                    <div className='absolute inset-0 bg-gradient-to-r from-black rounded-xl opacity-10 w-[90%] mx-auto group-hover:opacity-70 duration-300' />
                                    <div className='relative flex flex-col gap-3 justify-center'>
                                        <div className='absolute top-6 left-3 md:left-20 w-[300px] md:w-[500px] h-[700px]'>
                                            <div className='flex items-center gap-6'>
                                                <div
                                                    className='group w-24 h-24 bg-cover bg-center transition-all duration-500 rounded-full ease-in-out'
                                                    style={{ backgroundImage: `url(${toggle ? winner : winnerContest.ContestWinner.apply.Photo})` }} />
                                                <div>
                                                    <p className={` group-hover:text-[#f2d53c] duration-500 mt-3 text-lg md:text-3xl font-bold font-playfair text-[#ebf6f5] `}>Winner<span className={`${toggle ? '' : "animate__animated animate__fadeInDown animate__slow"}`}>{toggle ? '' : `: ${winnerContest.ContestWinner.apply.Name}`}</span></p>
                                                    <p className={`group-hover:text-[#f2d53c] duration-500 text-lg md:text-3xl font-bold font-playfair text-[#ebf6f5] mb-8`}><span className={`${toggle ? '' : "animate__animated animate__fadeInDown animate__slow  animate__delay-1s"}`}>{toggle ? '' : `Among ${winnerContest.Applied.length} People`}</span></p>
                                                </div>
                                            </div>
                                            <h1

                                                className={`${toggle ? '' : "animate__animated animate__fadeInDown animate__slow"} mt-10 text-2xl md:text-5xl font-bold mb-4 font-roboto text-[#5cbdb9]`}>{toggle ? '' : winnerContest.ContestName}</h1>
                                            <p className='group-hover:text-[#5cbdb9] duration-[2500ms] text-lg font-medium font-pop text-[#ebf6f5]'>Join the contest and showcase your talent! Your name could be the next one celebrated here. Believe in yourself and take the chance to shine!</p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;