import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { PASSWORD_API_END_POINT } from '@/utils/constant';
import Navbar from '../shared/Navbar';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${PASSWORD_API_END_POINT}/reset-password/${token}`, { password });
      toast.success("Password reset successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Navbar/>
    <form onSubmit={handleReset} className="w-[500px] mx-auto mt-20 border p-6 rounded-lg">
      <label className="text-lg">Enter New Password</label>
      <Input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <Button  type="submit">Reset Password</Button>
    </form>
    </div>
  );
};

export default ResetPassword;
