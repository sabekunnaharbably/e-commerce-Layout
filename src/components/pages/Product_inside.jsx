import React from 'react'

import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import imgNine from '../../assets/Image14.png'
import imgTen from '../../assets/Image16.png'
import imgEleven from '../../assets/Image15.png'
import imgTwelve from '../../assets/Image13.png'
import { FaStar } from "react-icons/fa";
// import { Input } from "@material-tailwind/react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Select, Option } from "@material-tailwind/react";
import Image from '../Image'




const Product_inside = () => {

  return (
    <>
      <div className=" relative overflow-hidden ">
        <Container>
          <Heading as="h5" text={"Home  >  Products"} className={"font-dm text-sm  text-menuColor pb-14"} />
          <div className="py-12">
            <Flex className={"flex-wrap"}>
              <div className="w-1/2 pb-4">
                <Image imgSrc={imgNine} />
              </div>
              <div className="w-1/2 pl-8">
                <Image imgSrc={imgTen} />
              </div>
              <div className="w-1/2">
                <Image imgSrc={imgEleven} />
              </div>
              <div className="w-1/2 pl-8 ">
                <Image imgSrc={imgTwelve} />
              </div>
            </Flex>
          </div>
          <div className="py-8 ">
            <Heading as="h2" text={"Product"} className={"font-dm text-5xl font-bold text-fotterMenuColor pb-4"} />
          </div>
          <div className="">
            <Flex>
              <div className={"text-starIconColor"}>
                <Flex>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Flex>
              </div>
              <Heading as="h4" text={"1 Review"} className={"font-dm text-sm text-menuColor pb-4 ml-8"} />
            </Flex>
          </div>
          <div className="">
            <Flex>
              <Heading as="h4" text={"$88.00"} className={"font-dm text-sm text-menuColor pb-4 "} />
              <Heading as="h4" text={"$44.00"} className={"font-dm text-xl font-bold text-fotterMenuColor pb-4 ml-8"} />
            </Flex>
            <div className={" w-1/2 border border-1px solid  text-menuColor my-4 hover:border hover:border-lime-500 "}>
            </div>
          </div>
          <div className={"py-8"}>
            <Flex>
              <Heading as="h4" text={"COLOR  :"} className={"font-dm text-sm font-bold text-fotterMenuColor pb-4 "} />
              <div className="">
                <Flex>
                  <input type="color" value="" className="w-6 h-6 rounded-full " />
                  {/* <input type="color" value="" />
                  <input type="color" value="" />
                  <input type="color" value="" /> */}
                </Flex>
              </div>
            </Flex>
          </div>
          <div className={"py-4"}>
            <div className=" mr- ">
              <Heading as="h6" text={"SIZE :"} className={" font-dm text-sm font-bold text-fotterMenuColor pb-4"} />
              <div className="w-[200px] relative ml-8">
                <Select label="S" >
                  <Option>M</Option>
                  <Option>S</Option>
                  <Option>L</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                </Select>
                <MdOutlineArrowDropDown className={"absolute bottom-12 left-52"} />
              </div>
            </div>
          </div>
          <div className={"py-4"}>
            <Flex>
              <Heading as="h4" text={"QUANTITY :"} className={"font-dm text-sm font-bold text-fotterMenuColor pb-4 pt-4 mr-8 "} />
              <p className={"border border-1px-solid  py-3 px-10  "}>-<span className={"px-10"}>1</span>+</p>
            </Flex>
          </div>
          <div className={" w-1/2 border border-1px solid  text-menuColor my-2 hover:border hover:border-lime-500"}>
          </div>
          <div className={"py-4"}>
            <Flex>
              <Heading as="h4" text={"QUANTITY :"} className={"font-dm text-sm font-bold text-fotterMenuColor pb-4 "} />
              <div className="ml-8">
                <Heading as="h4" text={"In stock"} className={"font-dm text-sm text-menuColor pb-4 "} />
              </div>
            </Flex>
          </div>
          <div className={" w-1/2 border border-1px solid  text-menuColor my-2 hover:border hover:border-lime-500 "}>
          </div>
          <div className={"py-4"}>
            <Flex>
              <div className="py-4 px-20  border 2px solid hover:bg-black ">
                <Heading as="h4" text={"Add to Wish List"} className={"font-dm text-sm font-bold text-fotterMenuColor pb-4 hover:text-white "} />
              </div>
              <div className="ml-8 py-4 px-20  border 2px solid hover:bg-black ">
                <Heading as="h4" text={"Add to Cart"} className={"font-dm text-sm font-bold text-black pb-4 hover:text-white  "} />
              </div>
            </Flex>
          </div>
          <div className={" w-1/2 border border-1px solid  text-menuColor my-8 hover:border hover:border-lime-500 "}>
          </div>


          <div id="accordion-collapse" data-accordion="collapse">

            {/* <h2 id="accordion-collapse-heading-1">
              <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>What is Flowbite?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2> */}

            {/* <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
              </div>
            </div> */}

            <h2 id="accordion-collapse-heading-2">
              <button type="button" class="flex items-center justify-between w-1/2 p-5 font-dm font-bold text-base  border-b-2  dark:text-gray-400  gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span className="text-fotterMenuColor">FEATURES & DETAILS</span>

                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            {/* 
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
              </div>
            </div> */}

            <h2 id="accordion-collapse-heading-3">
              <button type="button" class="flex items-center justify-between w-1/2 p-5 font-dm font-bold text-base  border-b-2 dark:text-gray-400 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span className="text-fotterMenuColor">SHIPPING & RETURNS</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div id="accordion-collapse-body-3" class="show" aria-labelledby="accordion-collapse-heading-3">
              <div class="py-10">
                <p class="mb-20 text-gray-500 dark:text-gray-400 pr-[506px] font-dm text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>

                {/* <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                  <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                </ul>
                 */}
              </div>
            </div>
          </div>

          <div className="py-10">
            <Flex>
              <Heading as="h4" text={"Description"} className={"font-dm text-xl  text-menuColor pb-4 hover:text-white "} />
              <Heading as="h4" text={"Reviews (1)"} className={"font-dm text-xl font-bold text-fotterMenuColor pb-4 hover:text-white pl-10"} />
            </Flex>
          </div>
          <div className="py-4">
            <Heading as="h4" text={"1 review for Product"} className={"font-dm text-sm  text-menuColor pb-4 "} />
          </div>
          <div className={" w-full  border border-1px solid  text-menuColor my-4 hover:border hover:border-lime-500 "}>
          </div>
          <div className="py-10">
            <Flex>
              <Heading as="h5" text={"John Ford"} className={"font-dm text-sm text-fotterMenuColor pb-4 "} />
              <div className={"text-starIconColor ml-10 "}>
                <Flex>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Flex>
              </div>
            </Flex>
            <Heading as="h6" text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} className={"font-dm text-sm text-menuColor pb-4 "} />
                                           
          </div>


          <div className="py-6">
                        <Heading as="h2" text="Add a Review" className={"font-dm text-4xl font-bold text-fotterMenuColor capitalize py-8 "} />

                        <div class="py-8">
                            <div className="pb-8">
                                <label class="block mb-2 text-xl font-bold font-dm text-gray-900 ">Name</label>
                                <input type="text" id="first_name" class="border-b-2 border-0 text-sm w-1/2 pb-4 dark:placeholder-gray-400 " placeholder="Your name here" />
                            </div>
                            <div className="pb-8">
                                <label class="block mb-2 text-xl font-bold font-dm text-gray-900 ">Email</label>
                                <input type="text" id="first_name" class="border-b-2 border-0 text-sm w-1/2 pb-4 dark:placeholder-gray-400 " placeholder="Your email here" />
                            </div>
                            <label class="block mb-2 text-xl font-bold font-dm text-gray-900 pb-1">Review</label>
                            <textarea rows="4" class="w-1/2 pb-4 text-sm text-gray-900 border-0 border-b-2  dark:placeholder-gray-400 " placeholder="Your review here"></textarea>
                            <div className="py-8 ">
                                <Heading as="h4" text={"Post"} className={"font-dm text-sm font-bold ml-16 bg-black py-4 px-12 inline-block  text-white absolute bottom-[15px] left-[216px] mb-9"} />
                            </div>
                        </div>
                    </div>

                    commit hello


        </Container>
      </div >

    </>
  )
}

export default Product_inside