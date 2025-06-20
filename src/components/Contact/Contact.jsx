import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'
import ScrollReveal from '../Custom/ScrollReveal'

const Contact = () => {
  return (
    <div id='contact' className='contact scroll-mt-18 reveal text-white'>
      <ScrollReveal />
      <h1 className='text-center py-10 text-4xl font-bold'>CONTACTS</h1>

      <Container>
        {/* Contact Section */}
        <div className="flex justify-center text-center mx-10 bg-white text-black py-9 rounded-3xl px-4">
          <div className="contact-group w-full max-w-2xl flex justify-between items-center gap-6">
            {[
              {
                icon: "https://png.pngtree.com/png-clipart/20210311/original/pngtree-phone-icon-in-circle-black-png-image_5994540.png",
                link: "tel:0941982794", // bạn có thể bật lại nếu muốn
              },
              {
                icon: "https://cdn.tgdd.vn/2020/03/GameApp/png-200x200.png",
                link: "mailto:dinhlt2701@gmail.com",
              },
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png",
                link: "https://github.com/dinhle2701",
              },
              {
                icon: "https://foxfio.com/wp-content/uploads/2024/01/LinkedIn_icon.svg.png",
                link: "https://www.linkedin.com/in/dinh-le-60454427a",
              },
              {
                icon: "https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png",
                link: "https://www.facebook.com/messages/t/100039244096491",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:shadow-md transition-transform duration-300 rounded-full"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-10 h-10 object-contain rounded-full"
                />
              </a>
            ))}
          </div>
        </div>


        {/* Subscribe Section */}
        <div className="subscribe  px-4 py-16 mt-10 rounded-xl">
          <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold">SUBSCRIBE</p>
              <h1 className='text-3xl lg:text-5xl font-bold leading-snug'>
                Subscribe Me To Get More Latest Update Information From Me
              </h1>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <p className='mb-6'>
                Stay connected! Subscribe to receive updates, news, and future projects. I promise to send only meaningful and helpful content!
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <input
                  type="email"
                  required
                  className='rounded-2xl px-5 py-2 w-full sm:w-72 border border-white'
                  placeholder='Enter your email'
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer border-t-1 py-3">
          <p className='text-center'>© Design by Dinh 2025 | All Rights Reserved</p>
        </div>
      </Container>

    </div >
  )
}

export default Contact
