import { useForm } from "react-hook-form";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleModal = () => setSubmitted(!submitted);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(values) {
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(values),
    }).then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      } else {
        handleModal();
        console.log(response.status);
      }
    });
  }

  return (
    <div id="contact" className="pt-24 w-5/6 md:w-3/5 lg:w-2/5 mx-auto">
      <div className="">
        <div>
          <h1>Contact</h1>
          <div className="sectionUnderline"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <div className="mb-6">
            <div className="contact-form">
              <label className="">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="John Smith"
                required
                type="text"
                name="name"
                className={`${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400"
                }`}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
              />
            </div>
            {errors.name && (
              <p className="pl-1 text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-6">
            <div className="contact-form">
              <label className="">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="johnsmith@mail.com"
                required
                type="text"
                name="email"
                className={`${
                  errors.email
                    ? "border-2 border-red-500 focus:border-red-500"
                    : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400"
                }`}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your email",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="pl-1 text-red-500 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <div className="contact-form">
              <label className="">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Hello!"
                required
                type="text"
                rows={5}
                name="message"
                className={`${
                  errors.message
                    ? "border-2 border-red-500 focus:border-red-500"
                    : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400"
                }`}
                {...register("message", {
                  required: {
                    value: true,
                    message: "Please enter a message",
                  },
                  maxLength: {
                    value: 500,
                    message: "Max length is 500 characters",
                  },
                })}
              />
            </div>
            {errors.message && (
              <p className="pl-1 text-red-500 text-xs">
                {errors.message.message}
              </p>
            )}
          </div>
          <input type="submit" className="primary-btn w-full" value="Submit" />
        </form>
      </div>

      {submitted ? (
        <div
          onClick={handleModal}
          className="cursor-pointer fixed z-50 h-screen w-screen bg-slate-600 dark:bg-slate-700 bg-opacity-95 dark:bg-opacity-95 top-0 left-0 px-4 flex flex-col items-center justify-center"
        >
          <div
            data-aos="fade-up"
            className="bg-slate-50 dark:bg-slate-800 w-full text-center rounded relative max-w-md"
          >
            <XCircleIcon
              className="w-6 absolute right-2 top-2 cursor-pointer"
              onClick={handleModal}
            />
            <CheckCircleIcon className="text-green-500 dark:text-green-400 w-32 m-auto mt-6" />
            <p className="text-green-400 font-semibold tracking-wider">
              Submitted!
            </p>
            <div className="pt-4 mb-6">
              Thanks for getting in touch! <br />I will get back to you as soon
              as I can
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Contact;
