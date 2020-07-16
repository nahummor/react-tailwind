import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { EditPencilIcon } from '../UI/Icons/Icons';

const formSchema = Yup.object().shape({
   firstName: Yup.string().required('שדה חובה').min(2, 'שם פרטי לפחות 2 תוים'),
   lastName: Yup.string().required('שדה חובה').min(2, 'שם משפחה לפחות 2 תוים'),
   title: Yup.string().required('שדה חובה'),
});
const AddWorker = () => {
   const { register, handleSubmit, errors, formState } = useForm({
      mode: 'onChange',
      resolver: yupResolver(formSchema),
   });

   const onAddWorkerHandler = (formData) => {
      console.log(formData);
   };

   return (
      <div dir='rtl' className='p-2'>
         <form
            onSubmit={handleSubmit(onAddWorkerHandler)}
            className='flex flex-col'>
            <p className='mb-3 py-2 font-bold text-xl text-center text-gray-900 bg-gray-400 rounded-lg shadow-md'>
               עובד חדש
            </p>
            <div className='md:flex md:items-start'>
               <div className='md:w-1/3'>
                  <label
                     className='block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4 text-lg'
                     htmlFor='firstName'>
                     שם פרטי
                  </label>
               </div>
               <div className='md:w-2/3 flex flex-col'>
                  <input
                     name='firstName'
                     ref={register}
                     className='bg-gray-200 appearance-none border-2 border-gray-200 shadow-md
                                rounded w-full py-2 px-4 text-gray-700 leading-tight 
                                focus:outline-none focus:bg-white focus:border-purple-500'
                     id='firstName'
                     type='text'
                  />
                  <div className='h-8'>
                     <p className='pr-2 text-red-700 font-semibold'>
                        {errors.firstName ? errors.firstName.message : null}
                     </p>
                  </div>
               </div>
            </div>

            <div className='md:flex md:items-start'>
               <div className='md:w-1/3'>
                  <label
                     className='block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4 text-lg'
                     htmlFor='lastName'>
                     שם משפחה
                  </label>
               </div>
               <div className='md:w-2/3'>
                  <input
                     name='lastName'
                     ref={register}
                     className='bg-gray-200 appearance-none border-2 border-gray-200 shadow-md
                                rounded w-full py-2 px-4 text-gray-700 leading-tight 
                                focus:outline-none focus:bg-white focus:border-purple-500'
                     id='lastName'
                     type='text'
                  />
                  <div className='h-8'>
                     <p className='pr-2 text-red-700 font-semibold'>
                        {errors.lastName ? errors.lastName.message : null}
                     </p>
                  </div>
               </div>
            </div>

            <div className='md:flex md:items-start'>
               <div className='md:w-1/3'>
                  <label
                     className='block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4 text-lg'
                     htmlFor='title'>
                     תפקיד
                  </label>
               </div>
               <div className='md:w-2/3'>
                  <input
                     name='title'
                     ref={register}
                     className='bg-gray-200 appearance-none border-2 border-gray-200 shadow-md
                                rounded w-full py-2 px-4 text-gray-700 leading-tight 
                                focus:outline-none focus:bg-white focus:border-purple-500'
                     id='title'
                     type='text'
                  />
                  <div className='h-8'>
                     <p className='pr-2 text-red-700 font-semibold'>
                        {errors.title ? errors.title.message : null}
                     </p>
                  </div>
               </div>
            </div>
            <div className='flex flex-row-reverse'>
               <button
                  disabled={!formState.isValid}
                  type='submit'
                  className={
                     formState.isValid
                        ? 'bg-facebook-blue hover:bg-blue-700 text-white font-bold w-2/3 h-10 rounded shadow-md text-lg'
                        : 'bg-facebook-blue text-white font-bold w-2/3 h-10 rounded shadow-md text-lg opacity-50 cursor-not-allowed'
                  }>
                  <div className='flex flex-row justify-center'>
                     <span className='ml-1'>שמירה</span>
                     <EditPencilIcon />
                  </div>
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddWorker;
