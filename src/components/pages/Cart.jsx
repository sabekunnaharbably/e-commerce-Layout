import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import { GrFormClose } from "react-icons/gr";
import Image from '../Image';
import imgNineteen from '../../assets/Image12.png'
import { Select, Option } from "@material-tailwind/react";

const Cart = () => {
  return (
    <>
      <div className="py-20 relative overflow-hidden ">
        <Container>
          <div className=" py-10">
            <Heading as="h1" text="Cart" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
            <Heading as="h4" text="Home  > Cart" className={"font-dm text-xs  text-menuColor py-4 "} />
          </div>

          <div className="py-10 ">
            <div className="py-3 bg-shopColor">

              <Flex>
                <div className="w-[25%]">
                  <Heading as="h4" text="Product" className={"font-dm text-xs font-bold text-menuColor py-4 pl-3 "} />

                </div>
                <div className="w-[25%]">
                  <Heading as="h4" text="Price" className={"font-dm text-xs font-bold text-menuColor py-4 pl-3 "} />
                </div>
                <div className="w-[25%]">
                  <Heading as="h4" text="Quantity" className={"font-dm text-xs font-bold text-menuColor py-4 pl-3 "} />
                </div>
                <div className="w-[25%]">
                  <Heading as="h4" text="Total" className={"font-dm text-xs font-bold text-menuColor py-4 pl-3 "} />
                </div>
              </Flex>
            </div>
            <div className="py-4">
              <Flex>
                <div className="w-[25%]">
                  <div className="py-2">
                    <Flex>
                      <GrFormClose className="ml-2 mt-5 w-20 " />
                      <Image imgSrc={imgNineteen} className={"w-20"} />
                      <button type="button" class=" font-dm text-xs font-bold text-fotterMenuColor py-2 pl-3 ">Product name  </button>
                    </Flex>
                  </div>
                </div>
                <div className="w-[25%]">
                  <Heading as="h4" text="$44.00" className={"font-dm text-sm font-bold text-menuColor py-8 pl-3 "} />
                </div>
                <div className="w-[25%]">
                  <Flex>
                    {/* <Heading as="h4" text={""} className={"font-dm text-sm font-bold text-fotterMenuColor pb-4 pt-4 mt-8 "} /> */}
                    <p className={"border border-1px-solid py-2 px-4 mt-6 "}>-<span className={"px-8 py-2 "}>1</span>+</p>
                  </Flex>
                </div>
                <div className="w-[25%]">
                <Heading as="h4" text="$44.00" className={"font-dm text-sm font-bold text-menuColor py-8 pl-3 "} />
                </div>
              </Flex>
            </div>

            <h1>bakita bostese na</h1>


          </div>



        </Container >
      </div>
    </>
  )
}

export default Cart