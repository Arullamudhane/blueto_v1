import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Bounded from "../components/Bounded";
import EarthCanvas from "../components/EarthCanvas";
import sendMailf from "../services/emailServices";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // emailjs
    //   .send(
    //     'service_z41m4bq',
    //     'template_n2q8mvi',
    //     {
    //       from_name: form.name,
    //       to_name: 'Arullamudhane',
    //       from_email: form.email,
    //       to_email: 'lcarull33@gmail.com',
    //       message: form.message,
    //     },
    //     'HQiJMRf2XAhnldRGX'
    //   )
    // sendMailf();

    // sendMailf().then(
    //   () => {
    //     setLoading(false);
    //     alert("Thank you. I will get back to you as soon as possible");
    //     setForm({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });
    //   },
    //   (error) => {
    //     setLoading(false);
    //     console.log(error);
    //     alert("Something went wrong");
    //   }
    // );
  };
  return (
    <Bounded>
      <div className=' flex lg:flex-row flex-col-reverse gap-7 overflow-hidden mx-auto '>
        <div className='flex-[0.75]  p-8 rounded-lg bg-slate-100/75 shadow-lg z-40 ml-0 md:ml-10'>
          <p className='text-lg font-semibold'>Get in touch</p>
          <h1 className='text-4xl font-bold'>Contact</h1>
          <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8 '>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Your name..'
                className='px-2 py-2 rounded-lg z-50 outline-none'
              />
            </label>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Your email..'
                className='px-2 py-2 rounded-lg z-50 outline-none'
              />
            </label>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your message</span>
              <textarea
                rows='7'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='message..'
                className='px-2 py-2 rounded-lg z-50 outline-none'
              />
            </label>
            <button
              type='submit'
              className='bg-white px-8 py-3 shadow-md w-fit font-bold rounded-md outline-none'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div className='lg:flex-1 lg:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
