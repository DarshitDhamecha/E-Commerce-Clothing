import Aos from 'aos';
import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'aos/dist/aos.css';
import { useFormik } from 'formik';
import { DNKpage } from '../Schema';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Ecommerce() {


    const logoSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
    }, []);

    // map for product ================
    const productItems = [
        { id: 1, img: "/images/sports-shoe1-400x400.jpg", title: "DNK Blue Shoes", gender: "Men", withOutOffer: 3000, withOffer: 1500 },
        { id: 2, img: "/images/sports-shoe3-600x600.jpg", title: "DNK Yello Shoes", gender: "Men", withOutOffer: 2500, withOffer: 2000 },
        { id: 3, img: "/images/product-m-jeans1-400x400.jpg", title: "Dark Bown Jeans", gender: "Men", withOutOffer: 5000, withOffer: 4000 },
        { id: 4, img: "/images/product-w-jeans2-400x400.jpg", title: "Blue Denim Jeans", gender: "Women", withOutOffer: 4500, withOffer: 2999 },
        { id: 5, img: "/images/product-w-jeans4-400x400.jpg", title: "Basic Gray Jeans", gender: "Women", withOutOffer: 2000, withOffer: 999 },
        { id: 6, img: "/images/product-w-jeans1-400x400.jpg", title: "Blue Denim Shorts", gender: "Women", withOutOffer: 1200, withOffer: 799 },
        { id: 7, img: "/images/product-accessory2-600x600.jpg", title: "Anchor Brscelet", gender: "Accessories", withOutOffer: 1500, withOffer: 999 },
        { id: 8, img: "/images/product-accessory1-600x600.jpg", title: "Boho Bangle Bracelet", gender: "Accessories", withOutOffer: 1200, withOffer: 999 },
        { id: 9, img: "/images/product-bag1-600x600.jpg", title: "Light Brown Purse", gender: "Accessories", withOutOffer: 5999, withOffer: 4999 },
        { id: 10, img: "/images/product-bag3-600x600.jpg", title: "Bright Red Bag", gender: "Accessories", withOutOffer: 7000, withOffer: 5000 },
    ];

    const detailsItem = [
        { id: 1, image: "/images/globe-free-img.png", hedding: "Worldwide Shipping", details: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
        { id: 2, image: "/images/quality-free-img.png", hedding: "Best Quality", details: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
        { id: 3, image: "/images/tag-free-img.png", hedding: "Best Quality", details: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
        { id: 4, image: "/images/lock-free-img.png", hedding: "Secure Payments", details: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    ]

    return (
        <>
            <div className='bg-img'>
                {/* <-------------for header------------> */}
                <Header />
                <div className='Height d-flex lg:px-5 lg:mx-5 xl:mx-5 xl:px-5 text-white  align-items-center justify-content-center justify-content-lg-start justify-content-xl-start text-center text-lg-start text-xl-start'>
                    <div className='content-anim'>
                        <h1 className='display-3 font-bold'>Raining offers for</h1>
                        <h1 className='display-3 font-bold'>Hot Summer!</h1>
                        <h3 className='fs-2 mt-3 font-semibold'>25% off on All Products</h3>
                        <div className='mt-4 d-flex gap-3 justify-content-center flex-wrap justify-content-lg-start justify-content-xl-start'>
                            <button className='bg-white text-black  btn px-4 py-2 rounded-0 hover:!bg-black hover:!text-white '>SHOP NOW</button>
                            <button className='bg-transparent border-1 border-white px-4 py-2 text-white btn  rounded-0 hover:!bg-white hover:!text-black'>FIND MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='mx-auto w-75'>
                    <Slider {...logoSlider}>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-1.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-2.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-3.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-4.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-5.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-1.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-2.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-3.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-4.png" alt="" />
                        </div>
                        <div className=' d-flex justify-center'>
                            <img src="/images/client-logo-5.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='wraper 100 d-flex px-5  gap-2 my-5'>
                <div className='first-product-bg' data-aos="zoom-in">
                    <div className='bg-fillter flex justify-center items-end p-4'>
                        <div className=' text-white'>
                            <h1 className='fs-2'>20% Off On Tops</h1>
                            <p className='my-2'>use your distinctive brand voice, evoke emotion and tell a story</p>
                            <button className='btn rounded-0 bg-white font-semibold px-3 py-2 hover:!bg-black hover:text-white'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='second-product-bg' data-aos="zoom-in">
                    <div className='bg-fillter flex justify-center items-end p-4'>
                        <div className=' text-white'>
                            <h1 className='fs-2'>Latest Men's Wear</h1>
                            <p className='my-2'>use your distinctive brand voice, evoke emotion and tell a story</p>
                            <button className='btn rounded-0 bg-white font-semibold px-3 py-2 hover:!bg-black hover:text-white'>CHECK OUT</button>
                        </div>
                    </div>
                </div>
                <div className='third-product-bg' data-aos="zoom-in">
                    <div className='bg-fillter'>
                        <div className='bg-fillter flex justify-center items-end p-4'>
                            <div className=' text-white'>
                                <h1 className='fs-2'>Latest Footwear</h1>
                                <p className='my-2'>use your distinctive brand voice, evoke emotion and tell a story</p>
                                <button className='btn rounded-0 bg-white font-semibold px-3 py-2 hover:!bg-black hover:text-white'>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f5f7f9] w-100 py-4 px-2'>
                <h1 className='text-center display-4 font-semibold my-3'>Featured Products</h1>
                <div className='w-[120px] mx-auto h-[3px] bg-[#0084d6]'></div>
                <div className='container'>
                    <div className='row row-cols-lg-5 row-cols-md-3 row-cols-2 mt-3 justify-content-center'>
                        {productItems.map((item) => (
                            <div key={item.id} className='col my-3' data-aos="fade-up">
                                <div className='relative'>
                                    <img src={item.img} className='pro-img' alt="" />
                                    <div className='absolute justify-center items-center top-0 pro-bg'>
                                        <div className='absolute top-2 right-2 fs-5'>
                                            <div>
                                                <i class="fa-solid fa-circle-info ms-1" title='View Details'></i>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='btn mx-auto rounded-0 bg-white font-semibold mt-3 btn-sm hover:!bg-black hover:text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <p className='font-semibold text-lg'>{item.title}</p>
                                <p className='text-lg'>{item.gender}</p>
                                <div className='flex gap-2'>
                                    <p className='line-through font-thin text-lg'>{item.withOutOffer}₹</p>
                                    <p className='text-lg'>{item.withOffer}₹</p>
                                </div>
                                <div className='flex mt-1'>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-[80px] w-100'>
                    <div className='baner-three mx-auto'>
                        <div className='banercontent-Height px-3 d-flex lg:px-5 lg:mx-5 xl:mx-5 xl:px-5 text-white  align-items-center justify-content-center justify-content-lg-start justify-content-xl-start text-center text-lg-start text-xl-start'>
                            <div className=''>
                                <h3 className='fs-2 mt-3 font-semibold my-3'>Limited Time Offer</h3>
                                <h1 className='display-3 font-bold'>Special Edition</h1>
                                <h3 className='fs-4 my-3'>You can have anything you want in life if you dress for it</h3>
                                <h3 className='fs-4 my-3'>Buy T-shirt At 20% Discount, Use Code OFF20</h3>
                                <button className='bg-white text-black  btn px-4 py-2 rounded-0 hover:!bg-black hover:!text-white'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-100 px-0 mt-5 m-0 row row-cols-lg-4 justify-center items-center row-cols-md-2 row-cols-1'>
                    {detailsItem.map((elem) => (
                        <div key={elem.id} className='col my-3 px-2 p-0 text-center'>
                            <img src={elem.image} alt="" className='mx-auto w-25' />
                            <p className='font-semibold text-xl'>{elem.hedding}</p>
                            <p className='text-[14px]'>{elem.details}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            {/* <----------for footer---------------> */}
            <Footer />
        </>
    )
}
