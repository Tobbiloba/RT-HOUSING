import React, { useState } from "react";

const Input = ({ label, state, setState }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-slate-600 text-[16px]">{label}</label>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="border text-slate-500 px-3 py-3 rounded-md"
      />
    </div>
  );
};

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("tobiloba.a.salau@gmail.com");
  return (
    <div className="bg-white exo p-6 rounded-md">
      <h1 className="text-xl font-[600] text-slate-600">Change Password</h1>

      <div className="grid grid-cols-1  gap-8 mt-14">
        <Input state={email} setState={setEmail} label="Password" />
        <Input state={password} setState={setPassword} label="Password" />
        <Input
          state={confirmPassword}
          setState={setConfirmPassword}
          label="Confirm Password"
        />
      </div>

      <div className="flex justify-end mt-16">
      <button className='px-6 py-3 text-[14px] rounded-md shadow-md bg-yellow-100 hover:border border-yellow-500 hover:bg-white text-yellow-600'>Change Password</button>
      </div>
    </div>
  );
};

export default ChangePassword;
