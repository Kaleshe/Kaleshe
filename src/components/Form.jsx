import React from "react";

const FormControl = ({ children }) => (
  <div className="flex flex-wrap">{children}</div>
);

const Form = () => (
  <section className="bg-white p-4 rounded-2xl lg:flex lg:gap-x-12">
    <div className="bg-black text-white p-8 rounded-2xl overflow-hidden relative lg:basis-6/12 lg:p-12">
      <h2 className="font-bold text-2xl lg:text-5xl lg:max-w-sm lg:leading-[55px]">
        Let's work together
      </h2>
      <span className="absolute rounded-[100%] border-white border-[30px] h-80 w-80 left-3/4 top-4 lg:h-[289px] lg:w-[289px] lg:-left-40 lg:top-3/4"></span>
      <span className="absolute rounded-[100%] border-white/15 border-[20px] h-80 w-80 right-1/4 -top-12 lg:border-[40px] lg:h-[479px] lg:w-[479px]  lg:-right-2/3 lg:top-1/4"></span>
    </div>
    <form
      name="input"
      method="POST"
      action="https://formspree.io/f/xrgdkzoy"
      className="space-y-4 lg:basis-5/12 lg:py-28"
    >
      <FormControl>
        <label className="text-sm mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-[#D9D9D9] rounded basis-full py-1.5 px-2"
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
          className="border border-[#D9D9D9] rounded basis-full py-1.5 px-2"
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
          className="border border-[#D9D9D9] rounded basis-full py-1.5 px-2"
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
