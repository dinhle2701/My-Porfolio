import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'
import ScrollReveal from '../Custom/ScrollReveal'

const Contact = () => {
  return (
    <div id='contact' className='scroll-mt-18 reveal'>
      <ScrollReveal />
      <h1 className='text-center py-10 text-4xl font-bold text-amber-950'>CONTACTS</h1>

      <Container>
        <div className='flex justify-center text-center bg-white py-9 rounded-3xl'>
          <div className="contact-group  overflow-hidden">
            <div className='flex justify-start align-center mb-4'>
              <Image className='me-5' src={"https://png.pngtree.com/png-clipart/20210311/original/pngtree-phone-icon-in-circle-black-png-image_5994540.png"}
                alt='phone' width={20} height={20} />
              <p className='inline-block min-w-[80px] text-center hover:text-black  transform transition duration-300 ease-in-out hover:scale-105'>0941982794</p>
            </div>
            <div className='flex justify-start align-center mb-4'>
              <Image className='me-5' src={"https://cdn.tgdd.vn/2020/03/GameApp/png-200x200.png"}
                alt='gmail' width={20} height={20} />
              <p className='inline-block max-w-[200px] text-center hover:text-black  transform transition duration-300 ease-in-out hover:scale-105'>
                <a href="dinhlt2701@gmail.com">dinhlt2701@gmail.com</a>
              </p>
            </div>
            <div className='flex justify-start align-center mb-4'>
              <Image className='me-5' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png"}
                alt='Github' width={20} height={20} />
              <p className='inline-block min-w-[200px] text-center hover:text-black  transform transition duration-300 ease-in-out hover:scale-105'>
                <a href="https://github.com/dinhle2701">https://github.com/dinhle2701</a>
              </p>
            </div>
            <div className='flex justify-start align-center mb-4'>
              <Image className='me-5' src={"https://foxfio.com/wp-content/uploads/2024/01/LinkedIn_icon.svg.png"}
                alt='linkedin' width={20} height={20} />
              <p className="inline-block min-w-[400px] text-left hover:text-black  transform transition duration-300 ease-in-out hover:scale-105">
                <a href="https://www.linkedin.com/in/dinh-le-60454427a" target="_blank" rel="noopener noreferrer">
                  https://www.linkedin.com/in/dinh-le-60454427a
                </a>
              </p>
            </div>
            <div className='flex justify-start align-center'>
              <Image className='me-5' src={"https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png"}
                alt='Github' width={20} height={20} />
              <p className='inline-block max-w-[250px] text-center hover:left-0 hover:text-black  transform transition duration-300 ease-in-out hover:scale-105'>
                <a href="https://www.facebook.com/messages/t/100039244096491" rel="noopener noreferrer">https://www.facebook.com/messages/t/100039244096491</a>
              </p>
            </div>
          </div>
        </div>
        <div className="subscribe">
          {/* contact */}


          {/* subscribe */}
          <div className=' flex justify-between items-center py-35'>
            <div className="w-280">
              <p className="text-blue-600 mb-6 text-sm"><b>SUBSCRIBE</b></p>
              <h1 className='text-5xl font-bold text-indigo-950'>Subscribe Me To Get More Latest Update Information From Me</h1>
            </div>

            <div>
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugit cumque quod odio velit hic.
                Eveniet sunt alias voluptatum voluptatibus debitis?
              </p>
              <div className="form">
                <form action="">
                  <input type="text" className='rounded-l-2xl w-70 px-5 py-2 bg-white' placeholder='Enter your email' />
                  <button className="bg-blue-500 me-3 rounded-r-2xl
                   hover:bg-sky-700 hover:cursor-pointer transform transition duration-300 ease-in-out 
                   hover:scale-105 inline-block text-white px-4 py-2">Subcribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer border-t-1 py-3">
          <p className='text-center'>@ Copy right 2025 | All Rights Reserved |</p>
        </div>
      </Container >
    </div >
  )
}

export default Contact
