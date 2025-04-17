import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'

const Role = () => {
    return (
        <div id='role' className='role text-center h-screen scroll-mt-18'>
            <Container>
                <h1 className='text-blue-600 text-sm'><b>WORKING POSITION</b></h1>
                <p className='text-4xl my-8 text-amber-950 font-bold'>ROLE I CAN TAKE ON</p>
                <div className="flex items-center justify-center">
                    <div className='mx-6'></div>
                    <div className='group w-120'>
                        <div className="cloud bg-gray-200 rounded-2xl px-15 text-white py-2 me-4 hover:bg-blue-900 hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 inline-block">
                            <div className="rounded-4xl  p-9 bg-gray-300 my-14 w-10 h-10 text-center  mx-auto"></div>
                            <p className='text-2xl font-bold text-black group-hover:text-white'>Full Stack Developer</p>
                            <p className='text-gray-700 my-7 group-hover:text-white'>Responsible for develop webapp from basic steps like choose database for use, project business analysis, build ui/ux, test, deploy and operations.</p>
                        </div>
                    </div>

                    <div className='mx-2'></div>
                    <div className='group w-120'>
                        <div className="cloud bg-gray-200 rounded-2xl px-15 text-white py-2 me-4 hover:bg-blue-900 hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 inline-block">
                            <div className="rounded-4xl  p-9 bg-gray-300 my-14 w-10 h-10 text-center mx-auto">
                                <Image
                                className='text-center'
                                    src="/server.png"
                                    alt="server icon"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <p className='text-2xl font-bold text-black m-0 group-hover:text-white'>Cloud Developer</p>
                            <p className='text-gray-700 my-7 group-hover:text-white'>Develop application with two types main development are on-premises and cloud platform. A person who has knowledge for cloud platform</p>
                        </div>
                    </div>

                    <div className='mx-2'></div>
                    <div className='group w-120'>
                        <div className="cloud bg-gray-200 rounded-2xl px-15 text-white py-2 me-4 hover:bg-blue-900 hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 inline-block">
                            <div className="rounded-4xl  p-9 bg-gray-300 my-14 w-10 h-10 text-center  mx-auto"></div>
                            <p className='text-2xl font-bold text-black group-hover:text-white'>DevOps Developer</p>
                            <p className='text-gray-700 my-7 group-hover:text-white'>Responsible for application deployment, monitoring, operation and maintenance of application upgrades and ensuring application security</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Role
