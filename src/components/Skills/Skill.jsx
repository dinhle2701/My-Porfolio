import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'
import ScrollReveal from '../Custom/ScrollReveal'

const Skill = () => {
    return (
        <div id='skill' className='h-fit scroll-mt-18 reveal '>
            <ScrollReveal />

            <Container>
                <h1 className='text-center py-10 text-4xl text-amber-950'>SKILLS</h1>
                <div className='bg-gray-300 py-6 px-10 rounded-3xl'>
                    <h3 className='text-center text-white pb-6'>TECHNICAL SKILL</h3>
                    <div className="flex flex-wrap gap-2">
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex'>
                            <Image src={"https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={30} />
                            ReactJS
                        </button>

                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex'>
                            <Image src={"https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png"}
                                alt="React Native"
                                width={30}
                                height={30} />
                            React Native
                        </button>

                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="HTML/CSS"
                                width={30}
                                height={20} />
                            HTML/CSS
                        </button>

                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex'>
                            <Image src={"https://images.viblo.asia/aec9657d-51c9-4d60-acc3-b784680ff410.png"}
                                alt="TailwindCSS"
                                width={30}
                                height={20} />
                            TailwindCSS
                        </button>

                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://i0.wp.com/phocode.com/wp-content/uploads/2016/09/nodejsLogo.png?fit=300%2C300&ssl=1"}
                                alt="NodeJS"
                                width={30}
                                height={20} />
                            NodeJS
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"}
                                alt="Next.JS"
                                width={30}
                                height={20} />
                            Next.JS
                        </button>

                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex  items-center'>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"}
                                alt="Vite"
                                width={30}
                                height={20} />
                            Vite
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex  items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            RESTful API
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex  items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Spring Boot
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex  items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Spring Security
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Hibernate
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            SQL
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            MySQL
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            PostgreSQL
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            MongoDB
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            ESLint
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Prettier
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Postman
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Figma
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Git/Github
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            CI/CD
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Terraform
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Docker
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            Linux
                        </button>
                        <button className='bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center'>
                            <Image src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                                alt="Developer Avatar"
                                width={30}
                                height={20} />
                            AWS Platform
                        </button>

                    </div>


                </div>
            </Container>
        </div>
    )
}

export default Skill
