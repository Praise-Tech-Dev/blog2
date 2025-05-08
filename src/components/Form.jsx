import React, { useState } from 'react'
import { userLogin } from '../utils/userApi'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../utils/api/validation/userValidation'
import { useFormik } from 'formik'
import { useRecoilState } from 'recoil'
import { userState } from '../utils/atom/userAtom'
import { tokenState } from '../utils/atom/tokenAtom'

export default function Form() {
//  not necesary again
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser ] = useRecoilState(userState)

  const [loading, setLoading] = useState(true)
  const [visibility, setVisibility] = useState(false)

  const Navigate = useNavigate()

  const onSubmit = async () => {
    // e.preventDefault()
    setLoading(true)
    const data = {
      username: values.username,
      password: values.password
    }

    await userLogin(data).then(res=>{
      console.log('response from login', res.data);
      setToken({
        access:res?.data?.access,
        refresh:res?.data?.refresh,
      })

      setUser(res.data.user)
      Navigate('/')

      
    })  
    setLoading(true)
  }

  const initialValues = {
    username: '',
    password: '',
  }


  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange
  } = useFormik({
    validateOnMount: true,
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit,
  }
)
  

  
  return (
    
    <div className='bg-gray-700 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto'>
      <h1 className='text-5xl  font-bold my-2'>Sign in</h1>
      <p className='text-[20px]'>Stay updated on your news with PraiseBlog </p>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        <input 
        type="text" 
        name='username'
        onChange={handleChange}
        onBlur={handleBlur} 
        value={values.username} 
        placeholder='Email or Phone' 
        className='border-[1px] border-white p-4 mt-7'/>
        {
          errors.username && touched.username &&
          <p  className='text-red-400 text-xs'>{errors.username}</p>
        }
        <div className='relative border mt-7'>
          <div onClick={()=>setVisibility(!visibility)} className="absolute right-0 bottom-0 h-full border flex items-center cursor-pointer">
            <i className={`px-5 text-black pi  ${visibility? 'pi-eye-slash':'pi-eye'} text-lg`}></i>
          </div>
          <div>
            <input 
            type={visibility?'text':'password'} 
            name='password'
            onChange={handleChange}
            onBlur={handleBlur} 
            value={values.password} 
            placeholder='Password' 
            className='w-full  p-4 ' />
          </div>
        </div>
        {
          errors.password && touched.password &&
          <p  className='text-red-400 text-xs'>{errors.password}</p>
        }

        <a href='' className='my-3 text-blue-400'>Forgot Password?</a>
        
          <button 
          disabled={!isValid} 
          
          className={`p-2 w-[80%] text-center mx-auto rounded-3xl ${!isValid || isSubmitting ? 'bg-blue-300 cursor-no-drop ': 'bg-blue-800 hover:bg-blue-600 cursor-pointer'}  flex gap-2 items-center justify-center`}
          type='submit'> 
          {
            isSubmitting ?
            <i className="pi pi-spinner pi-spin"></i> : ''
          }
          Sign in</button>
          
        
        <p className='text-center'>or</p>
        <button className='bg-transparent border-white border-[1px] rounded-4xl p-3 text-[16px]'>
        <div><i className='pi pi-apple text-white text-2xl'></i> Sign in with Apple </div>
            
        </button>
      </form>
      
    </div>
  )
}
