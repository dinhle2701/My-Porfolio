import React, { useState } from 'react'
import ScrollReveal from '../Custom/ScrollReveal'
import Badge from './Badge/Badge';

const Experience = () => {
    const [stateTab, setStateTab] = useState('EXPERIENCE');
    const renderContent = () => {
        switch (stateTab) {
            case 'EXPERIENCE':
                return <p className="mt-4 text-gray-600">This is the EXPERIENCE section.</p>;
            case 'EDUCATION':
                return <p className="mt-4 text-gray-600">This is the EDUCATION section.</p>;
            case 'BADGE':
                return <Badge />
            default:
                return null;
        }
    }

    return (
        <div id='experience' className='h-screen scroll-mt-18 text-white'>
            <ScrollReveal />
            <h1 className='text-center py-10 text-4xl font-bold'>EXPERIENCE</h1>

            {/* Tab Header */}
            <div className='tab mx-96 my-8 px-24' >
                <ul className='flex justify-between items-center text-xl font-bold'>
                    <li className='text-xl hover:underline hover:cursor-pointer hover:scale-120 transition-transform ease-in-out' onClick={() => setStateTab('EXPERIENCE')}>EXPERIENCE</li>
                    <li className='text-xl hover:underline hover:cursor-pointer hover:scale-120 transition-transform ease-in-out' onClick={() => setStateTab('EDUCATION')}>EDUCATION</li>
                    <li className='text-xl hover:underline hover:cursor-pointer hover:scale-120 transition-transform ease-in-out' onClick={() => setStateTab('BADGE')}>BADGE</li>
                </ul>
            </div>



            {/* Tab Content */}
            <div className='experience mx-96 bg-white rounded-3xl h-[60vh]' >
                <div className=' px-12 py-6'>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Experience
