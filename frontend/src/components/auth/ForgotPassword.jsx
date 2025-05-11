import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { PASSWORD_API_END_POINT  } from '@/utils/constant';
import Navbar from '../shared/Navbar';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${PASSWORD_API_END_POINT}/forgot-password`, { email });
      toast.success("Reset link sent to your email!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit} className="w-[500px] mx-auto mt-20 border p-6 rounded-lg">
      <Label className="text-lg">Enter Email address</Label>
      <Input
        type="email"
        placeholder="your@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />
      <Button type="submit">
        Send Reset Link
        </Button>
    </form>
    </div>
  );
};

export default ForgotPassword;
