import TextField from "./TextField";

function Contact() {
  return (
    <div id="contact" className="mx-5 flex flex-col md:flex-row">
      <div className="pt-3 md:w-1/3 md:text-right md:mr-5">
        <h1>CONTACT ME</h1>
      </div>
      <div className="text-sm py-3 md:w-1/2">
        <form>
          <TextField placeholder="Your Name" rows="1" />
          <TextField placeholder="E-Mail" rows="1" />
          <TextField placeholder="Message" rows="5" />
          <div className="flex justify-center">
            <a className="primary-btn w-full text-center">SUBMIT</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
