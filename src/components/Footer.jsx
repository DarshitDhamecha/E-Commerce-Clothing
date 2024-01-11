import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='border-1 gap-5 flex-wrap !border-l-0 !border-r-0 flex py-3 justify-evenly border-gray-400 mt-5 p-5 w-100'>
                <div className='px-4'>
                    <img src="/images/logo@2x-free-img-120x40.png" alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='fs-3 font-semibold'>For Her</h3>
                    <p className='text-lg'>Women Jeans</p>
                    <p className='text-lg'>Tops and Shirts</p>
                    <p className='text-lg'>Women Jackets</p>
                    <p className='text-lg'>Heels and Flats</p>
                    <p className='text-lg'>Women Accessories</p>
                </div>
                <div className='text-center'>
                    <h3 className='fs-3 font-semibold'>For Him</h3>
                    <p className='text-lg'>Men Jeans</p>
                    <p className='text-lg'>Men Shirts</p>
                    <p className='text-lg'>Men Shoes</p>
                    <p className='text-lg'>Men Accessories</p>
                    <p className='text-lg'>Men Jackets</p>
                </div>
                <div>
                    <p className='font-semibold text-xl mb-2'>Subscribe</p>
                    <input type="text" className='form-control w-100' placeholder='Enter Your Email' />
                    <button className='btn rounded-0 bg-[#008ce4] text-white font-semibold px-3 py-2 hover:!bg-black hover:text-white my-3'>Subscribe</button>
                </div>
                <div className='flex gap-3'>
                    <i className="fa-brands fa-instagram fs-3"></i>
                    <i className="fa-brands fa-facebook fs-3" ></i>
                    <i className="fa-brands fa-whatsapp fs-3"></i>
                    <i className="fa-brands fa-twitter fs-3"></i>
                    <i className="fa-solid fa-envelope fs-3"></i>
                </div>
            </div>
        </>
    )
}
