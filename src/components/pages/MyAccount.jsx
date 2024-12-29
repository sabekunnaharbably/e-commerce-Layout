import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import UserDashboard from '../UserDashboard'

const MyAccount = () => {

  return (
    <>
      <div className="py-20">
        <Container>
          <div className=" py-20 relative overflow-hidden">
            <Heading as="h1" text="My Account" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
            <Heading as="h4" text="Home  >  My account" className={"font-dm text-xs  text-menuColor py-4 "} />
          </div>
          <div className="py-9">
            <Flex>
              <div className="w-1/3">
                <Heading as="h3" text={"Dashboard"} className={"font-dm text-sm font-bold text-fotterMenuColor "} />
                <div className={"py-4 "}>
                  <Heading as="p" text={"Others"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Donwloads"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 borer-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Addresses"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Account details"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Logout"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                </div>
              </div>
              <div className="w-2/3">
          <p> p te vejal ase</p>
              </div>
            </Flex>


          </div>
        </Container>
      </div>
     
    </>
  )
}

export default MyAccount