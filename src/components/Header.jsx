import { useFormik } from 'formik';
import React from 'react'
import { DNKpage } from '../Schema';

export default function Header() {

    const initialvalue = {
        name: "",
        email: "",
    }

    const formik = useFormik({
        initialValues: initialvalue,
        validationSchema: DNKpage,
        // onSubmit: (value) => {
        //     console.log(value);
        // }
    });

    return (
        <>
            <div className='header-anim p-4 flex items-center justify-between Border fillter'>
                <div className='flex items-center gap-4 text-white'>
                    <img src="/images/logo1-free-img.png" className='d-none d-lg-block d-xl-block cursor-pointer h-[50px]' alt="" />
                    <img src="/images/logo@2x-free-img-120x40.png" className='d-block d-lg-none d-xl-none cursor-pointer h-[35px]' alt="" />
                    <div className=' items-center gap-4 d-none d-lg-flex d-xl-flex '>
                        <a href='#' className='text-lg font-semibold cursor-pointer'>EVERYTHING</a>
                        <a href='#' className='text-lg font-semibold cursor-pointer'>WHOMEN</a>
                        <a href='#' className='text-lg font-semibold cursor-pointer'>MEN</a>
                        <a href='#' className='text-lg font-semibold cursor-pointer'>ACCESSORIES</a>
                    </div>
                </div>
                <div className='flex gap-4 items-center '>
                    <div className='d-none text-white d-lg-flex d-xl-flex gap-4'>
                        <a href="#">ABOUT</a>
                        <a href="#">CONTACT US</a>
                    </div>
                    <i className="fa-solid fa-bag-shopping fs-4 lg:text-white xl:text-white"></i>
                    <button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-user fs-4 lg:text-white xl:text-white"></i>
                    </button>

                    <button className='d-block d-lg-none d-xl-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fa-solid fa-bars fs-4"></i>
                    </button>
                </div>
            </div>

            {/* ------------modal for user icon click----------- */}
            <form onSubmit={formik.handleSubmit}>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header py-2">
                                <div className='flex w-100 justify-between'>
                                    <p className='text-2xl font-semibold text-[#008ce4]'>Login</p>
                                    <button type="button" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark fs-3"></i></button>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label htmlFor="name" className='font-semibold'>Name :</label>
                                    <input type="text" name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className='form-control' placeholder='Enter Your Name...' />
                                    <div className="text-danger">
                                        {formik.touched.name &&
                                            formik.errors.name && (
                                                <div className="error">
                                                    {formik.errors.name}
                                                </div>
                                            )}
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="email" className='font-semibold'>Email :</label>
                                    <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className='form-control' placeholder='Enter Your Email...' />
                                    <div className="text-danger">
                                        {formik.touched.email &&
                                            formik.errors.email && (
                                                <div className="error">
                                                    {formik.errors.email}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer px-3 py-0">
                                <button type="submit" className="btn rounded-2 bg-[#008ce4] text-white font-semibold  hover:!bg-black hover:text-white my-3">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {/*--------- offcanvas for responsive header---------- */}
            <div className="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <button type="button" className="px-2 py-2 position-absolute right-0 top-0 border-1 border-black border-dashed" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark fs-4"></i></button>
                </div>
                <div className="offcanvas-body p-0">
                    <i className="fa-solid fa-user display-2 mx-3"></i>
                    <div className='bg-[#f5f7f9] mt-5 menu-border'>
                        <p className='mt-3 mx-3'>EVERYTHING</p>
                        <hr className='my-3' />
                        <p className='mx-3'>WOMEN</p>
                        <hr className='my-3' />
                        <p className='mx-3'>MEN</p>
                        <hr className='my-3' />
                        <p className='mb-3 mx-3'>ACCESSORIES</p>
                    </div>
                    <div className='bg-[#f5f7f9] mt-5 menu-border'>
                        <p className='mt-3 mx-3'>ABOUT</p>
                        <hr className='my-3' />
                        <p className='mb-3 mx-3'>CONTACT US</p>
                    </div>
                    <div className='bg-[#f5f7f9] justify-center menu-border gap-4 absolute bottom-0 w-100 flex p-3 mt-5'>
                        <i className="fa-brands fa-instagram fs-3"></i>
                        <i className="fa-brands fa-facebook fs-3" ></i>
                        <i className="fa-brands fa-twitter fs-3"></i>
                        <i className="fa-solid fa-envelope fs-3"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
