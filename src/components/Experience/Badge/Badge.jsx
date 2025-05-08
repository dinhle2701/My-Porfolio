import React from 'react'
import Image from 'next/image'
import badges from '@/data/badge'

const Badge = () => {

    return (
        <div className='badge text-black'>
            <p>This is a Badge</p>
            {badges.map((badge, index) => {
                <div key={index}>
                    <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                        src={badge.image}
                        alt={`Badge ${index + 1}`}
                        fill
                        width={80}
                        height={80} />
                </div>
            })}
        </div>
    )
}

export default Badge
