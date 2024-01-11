import *as Yup from 'yup';


// for DNKhome page
export const DNKpage = Yup.object({
    name: Yup.string().required('Name Is Required*'),
    email: Yup.string().required('Your Email is Required'),
})