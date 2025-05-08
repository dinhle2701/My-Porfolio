import React, { useEffect } from 'react'
import Image from 'next/image'
import ReactDOM from 'react-dom';
import { RiPuzzleLine } from "react-icons/ri";
import { GoStack } from "react-icons/go";
import { TiDeviceDesktop } from "react-icons/ti";
import { LuNewspaper } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

const ModalProject = ({ show, handleClose, project }) => {
    useEffect(() => {
        if (show) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [show]);

    if (!show || !project) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm overflow-y-auto px-4 py-6"
            onClick={handleClose}
        >
            <div
                className="relative bg-white rounded-lg shadow-lg  max-w-lg h-[90vh]  overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                >&times;</button>

                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden mt-7">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <h2 className="text-xl my-3 text-black font-semibold">{project.title}</h2>
                <p className="mb-2"><i className='text-sky-200'>{project.date}</i></p>

                <p className="mb-2"><strong className='text-black'>
                    <MdOutlineDescription className='inline me-2' />
                    Description: </strong>
                    <span className="text-sm">{project.description || "No description provided"}</span></p>

                <p className="mb-2"><strong className='text-black'>
                    <RiPuzzleLine className='inline me-2' />
                    Role: </strong>
                    <span className="text-sm">{project.role}</span></p>

                <p className="mb-2"><strong className='text-black'>
                    <LuNewspaper className='inline me-2' />
                    Responsible: </strong>
                    <span className="text-sm">{project.responsible || "No responsible provided"}</span></p>

                <p className="mb-2"><strong className='text-black'>
                    <GoStack className='inline me-2' />
                    Tech: </strong>
                    <span className="text-sm">{project.tech || "No github provided"}</span></p>

                <p className="mb-2"><strong className='text-black'>
                    <TiDeviceDesktop className='inline me-2' />
                    Deployment: </strong>
                    {project.deployment ? (
                        <a
                            href={project.deployment}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline hover:text-blue-800"
                        >
                            {project.deployment}
                        </a>
                    ) : (
                        <span className="text-sm">No github provided</span>
                    )}
                </p>

                <p className="mb-2"><strong className='text-black'>
                    <FaGithub className='inline me-2' />
                    Github: </strong>
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline hover:text-blue-800"
                        >
                            {project.github}
                        </a>
                    ) : (
                        <span className="text-sm">No github provided</span>
                    )}
                </p>

            </div>
        </div>
    );

    const modalRoot = typeof window !== 'undefined' ? document.getElementById('modal-root') : null;

    return modalRoot ? ReactDOM.createPortal(modalContent, modalRoot) : null;
};

export default ModalProject;
