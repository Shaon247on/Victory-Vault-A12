
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { MdArrowOutward } from "react-icons/md";
import { SiSpringCreators } from "react-icons/si";


import { EffectCoverflow } from 'swiper/modules';
import Title from '../../../Components/Title/Title';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const CreatorSlider = () => {
    const axios = useAxiosPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get('/users')
            return data
        }
    })
    const creators = users.filter(user => user.role === 'creator')
    console.log(creators);

    return (
        <div className='mt-32'>
            <Title
                subTitle='Creators Rush'
                mainTitle='Watch Our Best Contest Creators'
            >

            </Title>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className=" flex justify-center w-[315px] lg:w-full items-center mx-auto"
            >
                {
                    creators.map(creator =>
                        <SwiperSlide key={creator.email} className='w-[315px] lg:max-w-96 mx-auto '>
                            <div className='flex flex-col mx-auto gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[315px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                                <div className='absolute inset-0 bg-cover bg-center' style={{
                                    backgroundImage: `url(${creator.photo})`
                                }}></div>
                                <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-300' />
                                <div className='relative flex flex-col gap-3'>
                                    <SiSpringCreators className='text-blue-600 group-hover:text-blue-400 w-16 h-16'></SiSpringCreators>
                                    <h1 className='text-xl lg:text-2xl'>{creator.name}</h1>
                                    <p className='lg:text-[18px]'>Creator</p>
                                </div>
                                <MdArrowOutward className='absolute bottom-5 left-4 w-[40px] h-[40px] text-white group-hover:text-blue-400 group-hover:rotate-45 duration-300'></MdArrowOutward>
                            </div>
                        </SwiperSlide>
                    )
                }                
            </Swiper>
        </div>
    );
};

export default CreatorSlider;