import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

import * as Yup from "yup"

const initialValues={firstName:"",lastName:"",email:"",password:"",gender:""};
const validationSchema={email:Yup.string().email("Invalid email").required("Email is required"),
    password:Yup.string().min(6, "Password must be at least 6 character!").required("Password is required!")
};

const Register = () =>{

        const [gender,setGender] = useState("");

        const handleSubmit = (values) =>{
            values.gender = gender;
            console.log("handle submit", values)
        }

        const handleChange = (event) => {
            setGender(event.target.value)
        }

    return(
        <>
            <Formik 
                onSubmit={handleSubmit} 
                // validationSchema={validationSchema} 
                initialValues={initialValues}>
                <Form className="space-y-5">
                    <div className="space-y-5">
                        <div>
                            <Field 
                            as={TextField} 
                            name="firstName" 
                            placeholder="First Name"  
                            type="text" 
                            variant="outlined" 
                            fullWidth
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500"></ErrorMessage>
                        </div>
                        <div>
                            <Field 
                            as={TextField} 
                            name="lastName" 
                            placeholder="Last Name"  
                            type="text" 
                            variant="outlined" 
                            fullWidth
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500"></ErrorMessage>
                        </div>
                        <div>
                            <Field 
                            as={TextField} 
                            name="Email" 
                            placeholder="Email"  
                            type="email" 
                            variant="outlined" 
                            fullWidth
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500"></ErrorMessage>
                        </div>
                        <div>
                            <Field 
                            as={TextField} 
                            name="Password" 
                            placeholder="Password"  
                            type="password" 
                            variant="outlined" 
                            fullWidth
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500"></ErrorMessage>

                        </div>

                        <div>
                            <RadioGroup
                                onChange={handleChange}
                                row
                                aria-label="gender"
                                name="gender"
                    
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                {/* <FormControlLabel  value="disable" disabled control={<Radio/>} label="Other"/> */}
                                <ErrorMessage name="gender" component="div" className="text-red-500"></ErrorMessage>
                            </RadioGroup>
                        </div>
                    </div>

                    <Button sx={{padding: ".8rem 0rem"}} fullWidth type="submit" variant="contained" color="primary"> Register </Button>
                </Form>

            </Formik>
        </>

    );

}

export default Register