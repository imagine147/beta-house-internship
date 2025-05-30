"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Bg from "../../../images/13625 1.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      console.log("Form data submitted:", data);

      // Simulate API call
      await new Promise((res) => setTimeout(res, 1000));

      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto px-4 md:px-0 lg:pl-16 flex flex-col md:flex-row items-center justify-center gap-12 h-screen 2xl:h-full">
      {/* Top Navbar for mobile */}
      <div className="block lg:hidden w-full fixed top-0 left-0 bg-[#1D293F1F] py-4 z-50">
        <Link href="/" className="px-8 md:px-12 flex items-center gap-2 text-white">
          <span className="rounded-full bg-[#3D9970] px-1 py-0.5">
            <h1 className="text-lg">BH</h1>
          </span>
          <div className="text-lg font-bold">BetaHouse</div>
        </Link>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-2/3 xl:w-1/2 mx-auto">
        <div className="text-[#181A20D1] space-y-2">
          <h3 className="text-[#181A20] tracking-tight text-2xl">Welcome Back to BetaHouse!</h3>
          <p className="text-xs">Let's get started by filling out the information below</p>
        </div>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-[#181A20D1] text-xs flex flex-col gap-2">
            {/* Email Field */}
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="text-[#2632388F] border border-[#DEDFE0] rounded p-4"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-[12px]">{errors.email.message}</span>
            )}

            {/* Password Field */}
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, number, and special character",
                },
              })}
              className="text-[#2632388F] border border-[#DEDFE0] rounded p-4"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-500 text-[12px]">{errors.password.message}</span>
            )}

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between pt-2 pb-4">
              <div className="flex flex-col">
                <label className="text-[#716F6F] flex gap-2 items-center accent-[#3D9970]">
                  <input
                    type="checkbox"
                    {...register("rememberMe", {
                      required: "You must agree to remember your login",
                    })}
                  />
                  Remember Me
                </label>
                {errors.rememberMe && (
                  <span className="text-red-500 text-[12px]">{errors.rememberMe.message}</span>
                )}
              </div>

              <Link href="/auth/forgotpassword">
                <p className="text-[#EC5E5E] cursor-pointer hover:opacity-80">Forgot Password</p>
              </Link>
            </div>
          </div>

          {/* Submit & Google Buttons */}
          <div className="text-xs space-y-4">
            <button
              type="submit"
              className="w-full rounded-lg py-3 text-white bg-[#3D9970] disabled:opacity-50 hover:opacity-90 transition-opacity cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
            <div className="w-full flex items-center justify-center gap-1">
              <div className="w-[40%] border border-gray-300"></div>
              or
              <div className="w-[40%] border border-gray-300"></div>
            </div>
            <button
              type="button"
              className="w-full flex gap-2 items-center justify-center text-[#292929] border rounded-lg py-3 cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              <FcGoogle size={16} />
              Continue with Google
            </button>
          </div>

          {/* Sign Up Link */}
          <Link
            href="/auth/signup"
            className="flex gap-2 text-[#716F6F] text-xs justify-center pt-4 cursor-pointer"
          >
            New User?<span className="text-[#3D9970] hover:opacity-50">Sign Up</span>
          </Link>
        </form>
      </div>

      {/* Image Section */}
      <div className="relative hidden lg:block">
        <Image
          src={Bg}
          alt="House Image"
          width={779}
          height={1028}
          className="w-[779px] h-auto object-cover"
        />
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-white hover:opacity-80">
          <span className="rounded-full bg-[#3D9970] px-1 py-0.5">
            <h1 className="text-lg">BH</h1>
          </span>
          <div className="text-lg font-bold">BetaHouse</div>
        </Link>
      </div>
    </div>
  );
}
