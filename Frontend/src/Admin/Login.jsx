import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import axios from 'axios';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Github } from 'lucide-react';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authUser, setAuthUser] = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.pass,
    };
    axios.post("http://localhost:3000/api/admin/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successfully");
        }
        sessionStorage.setItem("Investa-x", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  }
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden',
      padding: '24px'
    }}>

      {/* ── BACKGROUND DECORATION ──────────────────────── */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--accent-faint) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      {/* ── LOGIN CARD ────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          border: '1px solid #cccc',
          borderRadius: '32px',
          padding: '48px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            border: '1px solid var(--border)'
          }}>
            <ShieldCheck size={32} color="var(--accent)" />
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-1px' }}>
            Welcome Back
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>
            Enter your credentials to access your dashboard
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} >
          {/* Email Field */}
          <motion.div variants={itemVariants} style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={18} />
              <input
                type="email"
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}  {...register("email", { required: true })}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            {errors.email && <span className=' text-red-600 font-semibold'>This field is required</span>}
          </motion.div>

          {/* Password Field */}
          <motion.div variants={itemVariants} style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '14px 44px 14px 48px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  outline: 'none'
                }}  {...register("pass", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#cccc', cursor: 'pointer' }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.pass && <span className=' text-red-600 font-semibold'>This field is required</span>}
          </motion.div>


          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              padding: '16px',
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            SIGN IN <ArrowRight size={18} />
          </motion.button>
        </form>


      </motion.div>
    </div>
  );
};

export default Login;