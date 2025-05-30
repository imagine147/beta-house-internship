"use client";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import Bg from "../../../images/13625 1.png"
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Simulate sending form data
    console.log("Submitted:", data);

    // Simulate server interaction
    setTimeout(() => {
      reset(); // Reset form after simulated response
    }, 500);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="w-11/12 mx-auto px-4 md:px-0 lg:pl-16 flex flex-col md:flex-row items-center justify-center h-screen gap-12">
      {/* Mobile Top Nav */}
      <div className="block lg:hidden w-full fixed top-0 left-0 bg-[#1D293F1F] py-4 z-50">
        <Link href="/" className="px-8 md:px-12 flex items-center gap-2 text-white">
          <span className="rounded-full bg-[#3D9970] px-1 py-0.5">
            <h1 className="text-lg">BH</h1>
          </span>
          <div className="text-lg font-bold">BetaHouse</div>
        </Link>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-2/3 xl:w-1/2 mx-auto mt-16 mb-16">
        <div className="text-[#181A20D1] space-y-2">
          <h3 className="text-[#181A20] tracking-tight text-xl md:text-2xl">
            FORGET PASSWORD 📨
          </h3>
          <p className="text-xs">Please provide the email address used to create your account</p>
        </div>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-[#181A20D1] text-xs flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="text-[#2632388F] border border-[#DEDFE0] rounded p-4"
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="rounded-md py-3 hover:opacity-90 text-xs md:text-base w-full text-center my-6 bg-[#3D9970] text-white cursor-pointer transition duration-300"
          >
            <p className="text-base text-white">Submit</p>
          </button>

          <h4
            onClick={handleBack}
            className="text-sm font-normal flex gap-1 cursor-pointer text-[#767779] hover:text-[#3D9970] transition duration-300"
          >
            <BsArrowLeft style={{ width: "20px", height: "20px" }} />
            Back to previous
          </h4>
        </form>
      </div>

      {/* Image Section */}
      <Link href="/" className="relative hidden lg:block">
        <Image
          width={779}
          height={1028}
          src={Bg}
          alt="House Image"
          className="w-[779px] 2xl:h-screen object-cover rounded-lg"
        />
        <div className="absolute top-8 left-8 flex items-center gap-2 text-white hover:opacity-80 transition duration-300">
          <span className="rounded-full bg-[#3D9970] px-1 py-0.5">
            <h1 className="text-lg">BH</h1>
          </span>
          <div className="text-lg font-bold">BetaHouse</div>
        </div>
      </Link>
    </div>
  );
}
