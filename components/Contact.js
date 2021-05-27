import { useForm } from "react-hook-form";

function Contact() {
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
        console.log(response.status);
      }
    });
  }

  return (
    <div id="contact" className="mx-5 pt-16 flex flex-col md:flex-row">
      <div className="pt-3 md:w-1/3 md:text-right md:mr-5">
        <h1>CONTACT ME</h1>
      </div>
      <div className="text-sm py-6 md:pt-3 md:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-8">
            <div className="contact-form">
              <input
                required
                type="text"
                name="name"
                className={`w-full bg-gray-200 dark:bg-gray-700 focus:border focus:border-green-400 rounded-md p-2 focus:outline-none ${
                  errors.name ? "border border-red-500" : null
                }`}
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
                className={`w-full bg-gray-200 dark:bg-gray-700 focus:border focus:border-green-400 rounded-md p-2 focus:outline-none ${
                  errors.name ? "border border-red-500" : null
                }`}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
                className={`w-full bg-gray-200 dark:bg-gray-700 focus:border focus:border-green-400 rounded-md p-2 focus:outline-none ${
                  errors.name ? "border border-red-500" : null
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
              <label className="">Message</label>
            </div>
            {errors.message && (
              <p className="pl-1 text-red-600 text-xs">
                {errors.message.message}
              </p>
            )}
          </div>

          <input type="submit" className="primary-btn w-full" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
