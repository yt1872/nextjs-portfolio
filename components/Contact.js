import { useForm } from "react-hook-form";
import { FiX, FiCheckCircle } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ja } from "../locales/ja";

function Contact() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ja;
  const [submitted, setSubmitted] = useState(false);
  const contactForm = useRef(null);
  const handleModal = () => setSubmitted(!submitted);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   console.log(errors);
  //   contactForm.current.focus();
  // }, [t]);

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
    <div id="contact" className="pt-24 w-5/6 md:w-3/5 mx-auto max-w-5xl">
      <div className="">
        <div>
          <h1>{t.contact}</h1>
          <div className="sectionUnderline"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <div className="mb-6">
            <div className="contact-form">
              <label className="">
                {t.name} <span className="text-red-500">*</span>
              </label>
              <input
                placeholder={t.namePlaceHolder}
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
                    message: t.errorName,
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
                {t.email} <span className="text-red-500">*</span>
              </label>
              <input
                placeholder={t.emailPlaceHolder}
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
                    message: t.errorEmail,
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: t.errorInvalidEmail,
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
                {t.message} <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder={t.messagePlaceHolder}
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
                    message: t.errorMessage,
                  },
                  maxLength: {
                    value: 500,
                    message: t.errorLength,
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
          <input
            type="submit"
            className="primary-btn w-full"
            value={t.submit}
          />
        </form>
      </div>

      {submitted ? (
        <div
          onClick={handleModal}
          className="cursor-pointer fixed z-50 h-screen w-screen bg-slate-600 dark:bg-slate-700 bg-opacity-95 dark:bg-opacity-95 top-0 left-0 px-6 flex flex-col items-center justify-center"
        >
          <div
            data-aos="fade-up"
            className="bg-slate-50 dark:bg-slate-800 w-full text-center rounded relative max-w-lg px-4 cursor-default"
          >
            <FiX
              className="text-2xl absolute right-2 top-2 cursor-pointer text-slate-500 hover:text-slate-900 hover:dark:text-slate-200"
              onClick={handleModal}
            />
            <FiCheckCircle className="text-green-500 dark:text-green-400 w-24 h-24 m-auto mt-6" />
            <div className="text-2xl font-semibold mt-4 text-slate-900 dark:text-slate-200">
              {t.thanks}
            </div>
            <div
              className="pt-4 mb-6"
              dangerouslySetInnerHTML={{ __html: t.reply }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Contact;
