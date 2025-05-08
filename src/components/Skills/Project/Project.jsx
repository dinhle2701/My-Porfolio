import React, { useState } from 'react'
import Image from 'next/image'
import projects from '@/data/projects'
import ModalProject from './ModalProject';

const Project = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project); // ✅ lưu project đang chọn
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null); // ✅ reset khi đóng modal
    };

    return (
        <div className='project'>
            <div className=' py-6 px-10 rounded-3xl'>
                <h3 className='text-center text-white pb-6 text-2xl font-bold'>PROJECTS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-items-center pb-9">
                    {projects.map((item, index) => (
                        <div key={index} className="bg-white rounded-3xl text-center w-[350px] shadow-md flex flex-col mb-2">
                            <div className="relative h-[150px] rounded-t-3xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={`Project ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out hover:cursor-pointer hover:scale-110"
                                />
                            </div>

                            <div className="p-4 flex flex-col flex-grow">
                                <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                <p className="text-gray-500 mb-1"><i><b>{item.date}</b></i></p>
                                <p className="text-gray-600 mb-4">{item.tech}</p>
                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleOpenModal(item)} // ✅ truyền project
                                        className="bg-blue-400 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* modal */}
            <ModalProject
                show={showModal}
                handleClose={() => setShowModal(false)}
                project={selectedProject} // ✅ truyền project vào modal
            />
        </div>
    )
}

export default Project
