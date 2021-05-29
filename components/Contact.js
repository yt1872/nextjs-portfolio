import { useForm } from "react-hook-form";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleModal = () => setSubmitted(!submitted);
  // const showModal = () => setSubmitted(!submitted);
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
    <div id="contact" className="mx-5 pt-16 flex flex-col md:flex-row">
      <div className="pt-3 md:w-1/3 md:text-right md:mr-5">
        <h1>CONTACT ME</h1>
      </div>
      <div className="text-sm py-6 px-2 md:pt-3 md:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <div className="mb-8">
            <div className="contact-form">
              <input
                required
                type="text"
                name="name"
                className={`${errors.name ? "border border-red-500" : null}`}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
              />
              <label className="">Your Name</label>
            </div>
            {errors.name && (
              <p className="pl-1 text-red-600 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-8">
            <div className="contact-form">
              <input
                required
                type="text"
                name="email"
                className={`${errors.name ? "border border-red-500" : null}`}
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
              <label className="">Your Email</label>
            </div>
            {errors.email && (
              <p className="pl-1 text-red-600 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-8">
            <div className="contact-form">
              <textarea
                required
                type="text"
                rows={5}
                name="message"
                className={`${errors.name ? "border border-red-500" : null}`}
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
              <label className="">Message</label>
            </div>
            {errors.message && (
              <p className="pl-1 text-red-600 text-xs">
                {errors.message.message}
              </p>
            )}
          </div>
          <input type="submit" className="primary-btn w-full" value="SUBMIT" />
          {/* <div onClick={handleModal}>test</div> */}
        </form>
      </div>

      {submitted ? (
        <div className="fixed z-50 h-screen w-screen bg-gray-600 bg-opacity-90 top-0 left-0 px-4 flex flex-col items-center justify-center">
          <div className="bg-accent dark:bg-gray-800 w-full text-center rounded relative max-w-md">
            <XCircleIcon
              className="w-6 absolute right-2 top-2"
              onClick={handleModal}
            />
            <CheckCircleIcon className="text-green-400 w-32 m-auto mt-6" />
            <p className="text-green-400 tracking-wider">SUBMITTED!</p>
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
