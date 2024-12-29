import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import { FaSearch } from "react-icons/fa";

const E404 = () => {

  return (
    <>
      <div className="py-20 relative overflow-hidden ">
        <Container>
          <div className=" py-10">
            <Heading as="h1" text="404" className={"font-dm text-[200px] font-bold text-fotterMenuColor "} />
            <Heading as="h4" text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search? " className={"font-dm text-sm pr-[778px] text-menuColor py-4 "} />
          </div>
          <div className="py-10 relative ">
            <lebel type="text" className=""><FaSearch className=" absolute top-14 left-[620px] " /> </lebel>
            <input type="text" className="border-2 py-4 font-dm  text-menuColor text-sm block w-1/2 pl-4  " placeholder="Type to search" />
          </div>
          <div className="py-8 ">
            <Heading as="h4" text={"Back to Home"} className={"font-dm text-sm font-bold ml-16 bg-black py-4 px-12 inline-block  text-white absolute bottom-[15px] left-[216px] mb-9"} />
          </div>
        </Container>
      </div>

    </>
  )
}

export default E404