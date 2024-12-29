import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import imgNine from '../../assets/Image17.png'
import imgSeventeen from '../../assets/Image13.png'
import Image from '../Image'


const About = () => {
    return (

        <>
            <div className="py-12 relative overflow-hidden ">
                <Container>
                    <div className="">
                        <Heading as="h2" text="About" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
                        <Heading as="h4" text="Home  >  About" className={"font-dm text-xs  text-menuColor py-4 "} />
                    </div>
                    <div className="pt-10 pb-20">
                        <Flex>
                            <div className="w-1/2 gap-x-10 relative">
                                <Image imgSrc={imgNine} />
                                
                                <Heading as="h4" text={"Our Brands"} className={"font-dm text-sm font-bold pb-4 bg-black py-4 inline-block px-12 text-white absolute bottom-[15px] left-[216px] "} />
                            </div>
                        
                            <div className="w-1/2 ml-10 relative">
                                <Image imgSrc={imgSeventeen} />
                                <Heading as="h4" text={"Our Stores"} className={"font-dm text-sm font-bold pb-4 bg-black py-4 inline-block px-12 text-white absolute bottom-[15px] right-[216px] "} />
                            </div>
                        </Flex>
                    </div>
                    <div className="py-6">
                        <Heading as="p" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style." className={"font-dm text-[39px] text-fotterMenuColor leading-[52px] ca"} />
                    </div>
                    <div className="py-14">
                        <Flex>
                            <div className="w-1/3">
                                <div className="py-4">
                                    <Heading as="h2" text="Our Vision" className={"font-dm text-2xl font-bold text-fotterMenuColor capitalize "} />
                                </div>
                                <div className="py-4">
                                    <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className={"font-dm text-xs text-fotterMenuColor leading-7 capitalize "} />
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div className="py-4">
                                    <Heading as="h2" text="Our Story" className={"font-dm text-2xl font-bold text-fotterMenuColor capitalize "} />
                                </div>
                                <div className="py-4">
                                    <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className={"font-dm text-xs text-fotterMenuColor leading-7 capitalize "} />
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div className="py-4">
                                    <Heading as="h2" text="Our Brands" className={"font-dm text-2xl font-bold text-fotterMenuColor capitalize "} />
                                </div>
                                <div className="py-4">
                                    <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className={"font-dm text-xs text-fotterMenuColor leading-7 capitalize "} />
                                </div>
                            </div>

                        </Flex>

                    </div>
                </Container>

            </div>


            Ami About Pages
        </>
    )
}

export default About


