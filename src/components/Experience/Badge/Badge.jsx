import React from 'react'
import Image from 'next/image'
import badges from '@/data/badge'

const Badge = () => {

    return (
        <div className='badge text-black'>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-7 justify-items-center py-6">
                {badges.map((badge, index) => (
                    <div key={index} className="bg-white rounded-3xl text-center w-[150px] shadow-md flex flex-col mb-2">
                        <div className="relative h-[150px] rounded-t-3xl overflow-hidden">
                            <Image className='me-2'
                                src={badge.image}
                                fill
                                alt={`Badge ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}

                {/* {badges.map((badge, index) => {
                    return (
                        <div key={index}>
                            
                        </div>
                    );
                })} */}
            </div>

        </div>
    )
}

export default Badge
