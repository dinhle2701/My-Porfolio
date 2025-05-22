import React from 'react'
import Container from '../Custom/Container'
import { WiCloudyWindy } from "react-icons/wi";
import { TbAutomation } from "react-icons/tb";
import { FaStackOverflow } from "react-icons/fa";


const Role = () => {
    return (
        <div id='role' className='role text-center text-white scroll-mt-18 reveal relative mb-18'>
            <Container>
                <div className="text-center">
                    <h1 className=' text-sm font-bold'>WORKING POSITION</h1>
                    <p className='text-4xl my-8  font-bold'>ROLE I CAN TAKE ON</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {/* Card 1 */}
                    <div className='w-full max-w-sm h-full'>
                        <div className="flex flex-col h-full bg-white rounded-2xl p-6 hover:bg-blue-500 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 group">
                            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center mx-auto my-6">
                                <FaStackOverflow className='text-5xl text-blue-500' />
                            </div>
                            <p className='text-2xl font-bold text-black text-center group-hover:text-white'>FullStack Developer</p>
                            <p className='text-gray-700 text-center mt-4 mb-6 group-hover:text-white flex-grow'>
                                Responsible for developing web apps from database design, UI/UX, testing, to deployment and operations.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='w-full max-w-sm h-full'>
                        <div className="flex flex-col h-full bg-white rounded-2xl p-6 hover:bg-blue-500 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 group">
                            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center mx-auto my-6">
                                <WiCloudyWindy className='text-6xl text-blue-500' />
                            </div>
                            <p className='text-2xl font-bold text-black text-center group-hover:text-white'>Cloud Developer</p>
                            <p className='text-gray-700 text-center mt-4 mb-6 group-hover:text-white flex-grow'>
                                Develop applications both on-premises and cloud-based, with good knowledge of cloud platforms.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='w-full max-w-sm h-full'>
                        <div className="flex flex-col h-full bg-white rounded-2xl p-6 hover:bg-blue-500 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 group">
                            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center mx-auto my-6">
                                <TbAutomation className='text-5xl text-blue-500' />
                            </div>
                            <p className='text-2xl font-bold text-black text-center group-hover:text-white'>DevOps Developer</p>
                            <p className='text-gray-700 text-center mt-4 mb-6 group-hover:text-white flex-grow'>
                                Handle deployment, monitoring, maintenance, upgrades, and ensure application security.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Role