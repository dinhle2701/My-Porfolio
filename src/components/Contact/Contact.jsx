import React from 'react'
import Container from '../Custom/Container'

const Contact = () => {
  return (
    <div id='contact' >
      <Container>
        <div className="subscribe flex justify-between items-center py-35">
          <div className="w-280">
            <p className="text-purple-600 mb-6 text-sm"><b>SUBSCRIBE</b></p>
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
                <input type="text" className=' w-70 p-2 bg-white' placeholder='Enter your email'/>
                <button className="bg-blue-700 text-white px-4 py-2">Subcribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer border-t-1 py-3">
          <p className='text-center'>@ Copy right 2025 | All Rights Reserved |</p>
        </div>
      </Container>
    </div>
  )
}

export default Contact
