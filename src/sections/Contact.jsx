import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#26211C] text-white px-6 py-12 md:py-16" id="contact">
      <h1 className="text-4xl md:text-6xl font-[times] mb-0 md:mb-8 mt-8 md:mt-12 text-[#F5F5F5] z-20 text-center md:text-left ml-0 md:ml-18">
        Contact me
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>

          <form
            className="space-y-4"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="b37e68e2-d142-4cd4-ae81-49d9b125abd6"
            />

            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Value"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Surname</label>
              <input
                type="text"
                name="surname"
                required
                placeholder="Value"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Value"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Value"
                className="w-full px-4 py-2 rounded bg-white text-black"
              ></textarea>
            </div>

            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success" // NOG TE VERANDEREN MET SUCCESPAGE
            />

            <button
              type="submit"
              className="w-full bg-[#D7CFC6] text-black py-2 rounded shadow"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-serif mb-4">Adress</h3>
          <p className="mb-6">
            Raveschootstraat 9, 802<br />
            9000, Ghent<br />
            Belgium
          </p>

          <h3 className="text-2xl font-serif mb-4">Email</h3>
          <p className="mb-6 underline">
            <a href="mailto:lukasvannuffel02@gmail.com">
              lukasvannuffel02@gmail.com
            </a>
          </p>

          <h3 className="text-2xl font-serif mb-4">Links</h3>
          <div className="flex space-x-6">
            <a href="#" aria-label="LinkedIn">
              <img src="/svg/linkedin.svg" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 invert brightness-0" />
            </a>
            <a href="#" aria-label="GitHub">
              <img src="/svg/github.svg" alt="GitHub" className="w-6 h-6 md:w-8 md:h-8 invert brightness-0" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/svg/facebook.svg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 invert brightness-0" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/svg/instagram.svg" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 invert brightness-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
