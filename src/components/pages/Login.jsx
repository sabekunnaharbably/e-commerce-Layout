import React from 'react'
import Container from '../Container'
import Heading from '../Heading'

const Login = () => {
    return (
        <>
            <div className="py-2 relative overflow-hidden">
                <Container>
                    <div className=" py-20">
                        <Heading as="h1" text="Login" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
                        <Heading as="h4" text="Home  >  Login" className={"font-dm text-xs  text-menuColor py-4 "} />
                    </div>
                    <div className="py-10">
                        <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className={"font-dm text-base  text-menuColor mb-10 pr-[663px]"} />
                    </div>
                    <div className="py-20">
                        <Heading as="h2" text="Returning Customer" className={"font-dm text-5xl font-bold text-fotterMenuColor capitalize pb-10"} />

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Email address</label>
                                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="company@domain.com" />
                            </div>

                            <div>
                                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Password</label>
                                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="•••••••••" />
                            </div>

                        </div>

                        <div className="py-8 ">
                            <Heading as="h4" text={"Log in"} className={"font-dm text-sm font-bold py-4 px-12 inline-block border-2 border-black text-black "} />
                        </div>


                        {/* <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Email address</label>
                         <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="company@domain.com" /> */}

                    </div>

                    <div className={" w-full border border-1px solid  text-menuColor my-2 hover:border hover:border-lime-500 "}>
                    </div>

                    <div className="py-8">
                        <Heading as="h2" text="New Customer" className={"font-dm text-5xl font-bold text-fotterMenuColor capitalize pb-10"} />
                    </div>

                    <div className="py-8">
                        <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className={"font-dm text-base  text-menuColor mb-10 pr-[663px]"} />
                    </div>

                    <div className="py-8 ">
                                <Heading as="h4" text={"Continueo"} className={"font-dm text-sm font-bold ml-16 bg-black py-4 px-12 inline-block  text-white absolute bottom-[15px] left-[216px] mb-9"} />
                            </div>




                </Container >

            </div>

        </>
    )
}

export default Login