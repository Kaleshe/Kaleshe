import React from "react";

const FormControl = ({ children }) => (
  <div className="flex flex-wrap">{children}</div>
);

const Form = () => (
  <section
    id="contact"
    className="bg-white p-4 rounded-2xl flex flex-wrap gap-y-8 scroll-mt-6 md:gap-x-12"
  >
    <div className="bg-black text-white p-8 rounded-2xl basis-full overflow-hidden relative md:basis-6/12 md:p-12">
      <h2 className="py-8 font-bold text-3xl md:text-4xl lg:text-5xl md:py-0 md:max-w-xs lg:max-w-sm lg:leading-[55px]">
        Let's work together
      </h2>
      <span className="absolute rounded-[100%] border-white border-[30px] h-80 w-80 left-3/4 top-4 md:h-[289px] md:w-[289px] md:-left-40 md:top-3/4"></span>
      <span className="absolute rounded-[100%] border-white/15 border-[20px] h-80 w-80 right-1/4 -top-12 md:border-[40px] md:h-[479px] md:w-[479px] md:-right-2/3 md:top-1/4"></span>
    </div>
    <form
      name="input"
      method="POST"
      action="https://formspree.io/f/xrgdkzoy"
      className="space-y-4 basis-full md:basis-5/12 md:py-28"
    >
      <FormControl>
        <label className="text-sm mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border w-full border-[#D9D9D9] rounded basis-full py-1.5 px-2"
          type="text"
          name="name"
          required
        />
      </FormControl>
      <FormControl>
        <label className="text-sm mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border w-full border-[#D9D9D9] rounded basis-full py-1.5 px-2"
          type="email"
          name="_replyto"
          required
        />
      </FormControl>
      <FormControl>
        <label className="text-sm mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="border w-full border-[#D9D9D9] rounded basis-full py-1.5 px-2"
          name="message"
          required
        ></textarea>
      </FormControl>
      <input
        type="submit"
        value="Send"
        className="bg-black text-white font-medium w-full py-2 rounded-full !mt-6 cursor-pointer hover:bg-warm-gray-70 transition-all"
      />
      <input type="hidden" name="_next" value="thanks" />
    </form>
  </section>
);

export default Form;
