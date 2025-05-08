import React from 'react'
import Image from 'next/image'

const Technical = () => {
    return (
        <div className='technical'>
            <div className='bg-gray-200 shadow-xl py-6 px-10 rounded-3xl'>
                <h3 className='text-center text-white pb-6'>TECHNICAL SKILL</h3>
                <div className="flex flex-wrap gap-2 text-black">
                    <button className="group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer">
                        <Image
                            className="me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
                            src="https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png"
                            alt="ReactJS"
                            width={35}
                            height={40}
                        />
                        ReactJS
                    </button>


                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png"}
                            alt="React Native"
                            width={35}
                            height={30} />
                        React Native
                    </button>

                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                            alt="HTML/CSS"
                            width={35}
                            height={20} />
                        HTML/CSS
                    </button>

                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"}
                            alt="TailwindCSS"
                            width={20}
                            height={20} />
                        TailwindCSS
                    </button>

                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://i0.wp.com/phocode.com/wp-content/uploads/2016/09/nodejsLogo.png?fit=300%2C300&ssl=1"}
                            alt="NodeJS"
                            width={20}
                            height={20} />
                        NodeJS
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"}
                            alt="Next.JS"
                            width={20}
                            height={20} />
                        Next.JS
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://cdn.image.st-hatena.com/image/scale/cc24ca51b8e705224799ab5bea2034c6607ee75b/backend=imagemagick;version=1;width=1300/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fn%2Fnextscape_blog%2F20210911%2F20210911000000.png"}
                            alt="SQL"
                            width={20}
                            height={20} />
                        SQL
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"}
                            alt="Vite"
                            width={20}
                            height={20} />
                        Vite
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://149860134.v2.pressablecdn.com/wp-content/uploads/pythoned.png"}
                            alt="Python"
                            width={20}
                            height={20} />
                        Python
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"}
                            alt="Java"
                            width={20}
                            height={20} />
                        Java
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"}
                            alt="Developer Avatar"
                            width={20}
                            height={20} />
                        RESTful API
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png"}
                            alt="Spring Boot"
                            width={20}
                            height={20} />
                        Spring Boot
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://huongdanjava.com/wp-content/uploads/2019/07/spring-security.png"}
                            alt="Spring Security"
                            width={20}
                            height={20} />
                        Spring Security
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/12/hibernate-interview-questions-logo.png"}
                            alt="Hibernate"
                            width={20}
                            height={20} />
                        Hibernate
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png"}
                            alt="MySQL"
                            width={20}
                            height={20} />
                        MySQL
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"}
                            alt="PostgreSQL"
                            width={20}
                            height={20} />
                        PostgreSQL
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.13.0/1743770490090/Microsoft.VisualStudio.Services.Icons.Default"}
                            alt="MongoDB"
                            width={25}
                            height={20} />
                        MongoDB
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png"}
                            alt="ESLint"
                            width={20}
                            height={20} />
                        ESLint
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://images.thetombomb.com/prettier-home-logo.png"}
                            alt="Prettier"
                            width={20}
                            height={20} />
                        Prettier
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"}
                            alt="Figma"
                            width={10}
                            height={20} />
                        Figma
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png"}
                            alt="Git/Github"
                            width={20}
                            height={20} />
                        Git/Github
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://www.mabl.com/hubfs/CICDBlog.png"}
                            alt=" CI/CD"
                            width={30}
                            height={20} />
                        CI/CD
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://ms-devlabs.gallerycdn.vsassets.io/extensions/ms-devlabs/custom-terraform-tasks/0.1.33/1728564320317/Microsoft.VisualStudio.Services.Icons.Default"}
                            alt="Terraform"
                            width={20}
                            height={20} />
                        Terraform
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://static.hosting.de/helpdesk/de/anleitungen/server/images/docker/Moby-logo.png"}
                            alt="Docker"
                            width={30}
                            height={20} />
                        Docker
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://raw.githubusercontent.com/docker-library/docs/2ac3caaf21dfba9734f20518971983edc617c77c/ubuntu/logo.png"}
                            alt="Linux"
                            width={20}
                            height={20} />
                        Linux
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://images.icon-icons.com/3053/PNG/512/postman_macos_bigsur_icon_189815.png"}
                            alt="Postman"
                            width={20}
                            height={20} />
                        Postman
                    </button>
                    <button className='group bg-white rounded-4xl py-2 px-3 mb-2 me-3 flex items-center hover:cursor-pointer'>
                        <Image className='me-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'
                            src={"https://media.licdn.com/dms/image/v2/D4D12AQEmC2CSTK0unw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691964348159?e=2147483647&v=beta&t=ANscUZ_isS1sflI32StWFrMtX46qK9f1R31T16oMDLI"}
                            alt="AWS Platform"
                            width={30}
                            height={20} />
                        AWS Platform
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Technical
