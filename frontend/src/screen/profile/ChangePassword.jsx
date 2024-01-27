// @ts-nocheck
import React, { useState } from "react";
import Input from "@/components/Input";
import { updatePasswordSchema } from "@/schemas";
import { useFormik } from "formik";

const ChangePassword = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("tobiloba.a.salau@gmail.com");

  const onSubmit = async (values, actions) => {
    console.log(values);
    // dispatch(register({...values}));
    // dispatch(login(values));
  };


  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: updatePasswordSchema,
    onSubmit,
  });

  return (
    <div className="bg-white exo p-6 rounded-md">
      <h1 className="text-xl font-[600] text-slate-600">Change Password</h1>

      <form className="grid grid-cols-1  gap-8 mt-14" onSubmit={handleSubmit} autoComplete="off">
      <Input
                placeholder="Type in your Email"
                type="text"
                label="Email"
                value={values.email}
                handleChange={handleChange}
                error={errors.email && touched.email ? errors.email : undefined}
                id="email"
              />
              <Input
                placeholder="New Password"
                type="password"
                label="Password"
                value={values.password}
                handleChange={handleChange}
                error={
                  errors.password && touched.password
                    ? errors.password
                    : undefined
                }
                id="password"
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                label="Confirm Password"
                value={values.confirmPassword}
                handleChange={handleChange}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
                id="confirmPassword"
              />
<div className="flex justify-end mt-8">
      <button type="submit" className='px-6 py-3 text-[14px] rounded-md shadow-md bg-slate-100 hover:border border-slate-500 hover:bg-white text-slate-600'>Change Password</button>
      </div>
      </form>

      
    </div>
  );
};

export default ChangePassword;
