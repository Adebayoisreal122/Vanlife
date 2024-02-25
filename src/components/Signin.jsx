import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"

const Signin = () => {

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const validationSchema = yup.object({
    email: yup.string().email("enter valid email address"),
    password: yup.string().matches(passwordRegex, "The password must be at least 8 character, and should include one uppercase, one lowercase" ),
  });


  
  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
    },
  });


  return (
    <>

<div className=' container-fluid signal '>
<center>

<h1>
  Sign in to your account
</h1>


<form  onSubmit={formik.handleSubmit} className="form">
            <label>
                <input name="email " required=""  placeholder="" type="email"
                 onChange={formik.handleChange}
                className="input  "/>
                <span>Email Address</span>
            </label> 
            <span className="text-danger">{formik.errors.email}</span>
            <label>
                <input name="password" required="" placeholder="" type="password"
                 onChange={formik.handleChange}
                className="input "/>
                <span>Password</span>
            </label>
            <span className="text-danger">{formik.errors.password}</span>
            <button type="submit"  className="submit">Submit</button>
        </form>

</center>
</div>

    </>
  )
}

export default Signin