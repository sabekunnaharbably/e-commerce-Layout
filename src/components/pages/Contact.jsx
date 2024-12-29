import React from 'react'
import Container from '../Container'
import Heading from '../Heading'


const Contact = () => {
    return (
        <>

            <div className="py-11 relative overflow-hidden">
                <Container>
                    <div className=" py-20">
                        <Heading as="h1" text="Contacts" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
                        <Heading as="h4" text="Home  >  Contact" className={"font-dm text-xs  text-menuColor py-4 "} />
                    </div>
                    <div className="py-6">
                        <Heading as="h2" text="Fill up a Form" className={"font-dm text-4xl font-bold text-fotterMenuColor capitalize py-8 "} />

                        <div class="py-8">
                            <div className="pb-8">
                                <label class="block mb-2 text-xl font-bold font-dm text-gray-900 ">Name</label>
                                <input type="text" id="first_name" class="border-b-2 border-0 text-sm w-1/2 pb-4 dark:placeholder-gray-400 " placeholder="Your name here" />
                            </div>
                            <div className="pb-8">
                                <label class="block mb-2 text-xl font-bold font-dm text-gray-900 ">Email</label>
                                <input type="text" id="first_name" class="border-b-2 border-0 text-sm w-1/2 pb-4 dark:placeholder-gray-400 " placeholder="Your email here" />
                            </div>
                            <label class="block mb-2 text-xl font-bold font-dm text-gray-900 pb-1">Message</label>
                            <textarea rows="4" class="w-1/2 pb-4 text-sm text-gray-900 border-0 border-b-2  dark:placeholder-gray-400 " placeholder="Your massage here"></textarea>
                            <div className="py-8 ">
                                <Heading as="h4" text={"Post"} className={"font-dm text-sm font-bold ml-16 bg-black py-4 px-12 inline-block  text-white absolute bottom-[15px] left-[216px] mb-9"} />
                            </div>
                        </div>
                    </div>
                </Container>  
            </div>
        </>
    )
}

export default Contact