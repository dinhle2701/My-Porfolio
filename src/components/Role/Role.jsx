import React from 'react'
import Container from '../Custom/Container'
import { WiCloudyWindy } from "react-icons/wi";
import { TbAutomation } from "react-icons/tb";
import { FaStackOverflow } from "react-icons/fa";


const Role = () => {
    return (
        <div id='role' className='role text-center h-screen scroll-mt-18 reveal'>
            <Container>
                <h1 className='text-blue-600 text-sm'><b>WORKING POSITION</b></h1>
                <p className='text-4xl my-8 text-amber-950 font-bold'>ROLE I CAN TAKE ON</p>
                <div className="flex items-center justify-center">
                    <div className='mx-6'></div>
                    <div className='group w-120'>
                        <div className="cloud relative bg-gray-200 rounded-2xl px-15 text-white py-2 me-4 hover:bg-blue-900 hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 inline-block">
                            <div className="rounded-4xl  p-9 bg-gray-300 my-14 w-10 h-10 text-center  mx-auto">
                                <FaStackOverflow className='text-8xl text-center top-7 right-25 absolute' />

                            </div>
                            <p className='text-2xl font-bold text-black group-hover:text-white'>Full Stack Developer</p>
                            <p className='text-gray-700 my-7 group-hover:text-white'>Responsible for develop webapp from basic steps like choose database for use, project business analysis, build ui/ux, test, deploy and operations.</p>
                        </div>
                    </div>

                    <div className='mx-2'></div>
                    <div className='group w-120'>
                        <div className="cloud relative bg-gray-200 rounded-2xl px-15 text-white py-2 me-4 hover:bg-blue-900 hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 inline-block">
                            <div className="rounded-4xl  p-9 bg-gray-300 my-14 w-10 h-10 text-center mx-auto">
                                <WiCloudyWindy className='text-9xl text-center top-3 right-20 absolute' />
                            </div>
                            <p className='text-2xl font-bold text-black m-0 group-hover:text-white'>Cloud Developer</p>
                            <p className='text-gray-700 my-7 group-hover:text-white'>Develop application with two types main development are on-premises and cloud platform. A person who has knowledge for cloud platform</p>
                        </div>
                    </div>

                    <div className='mx-2'></div>
                    <div className='group w-120'>
                        <div className="cloud relative bg-gray-200 rounded-2xl px-15 text-white py-2 me-4 hover:bg-blue-900 hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 inline-block">
                            <div className="rounded-4xl  p-9 bg-gray-300 my-14 w-10 h-10 text-center  mx-auto">
                                <TbAutomation className='text-8xl text-center top-9 right-24 absolute' />

                            </div>
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
