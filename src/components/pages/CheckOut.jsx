import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import { IoMedicalSharp } from "react-icons/io5";
import Flex from '../Flex';

import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["Product", "Total", ""];



const CheckOut = () => {

  const CheckOut = [
    {
      Product: "Product name x 1",
      Total: "389.99 $",

    },
    {
      Product: "Subtotal",
      Total: "389.99 $",

    },
    {
      Product: "Total",
      Total: "389.99 $",
    },
  ];




  return (
    <>

      <div className="py-20 relative overflow-hidden ">
        <Container>
          <div className=" py-10">
            <Heading as="h1" text="Checkout" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
            <Heading as="h4" text="Home  >  Checkout " className={"font-dm text-xs  text-menuColor py-4 "} />
          </div>
          <div className="py-10">
            <h1>akta heading hobe</h1>
          </div>
          <div className="py-20">
            <Heading as="h2" text="Billing Details" className={"font-dm text-5xl font-bold text-fotterMenuColor capitalize pb-10"} />
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div className=" relative mr-8">
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">First Name <IoMedicalSharp className=" absolute top-0 left-20" /></label>
                <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full   dark:placeholder-gray-400 pb-4 " placeholder="First Name" />
              </div>
              <div className=" relative ">
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Last Name <IoMedicalSharp className=" absolute top-0 left-20" /></label>
                <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full   dark:placeholder-gray-400 pb-4 " placeholder="Last Name" />
              </div>
            </div>
            <div className="py-2 ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Companye Name (optional) </label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Company Name" />
            </div>
            <div className="my-4 relative ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Country <IoMedicalSharp className=" absolute top-0 left-16 " /></label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Company Name" />
            </div>
            <div className="my-4 relative ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Street Address <IoMedicalSharp className=" absolute top-0 left-28 " /></label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="House number and street name" />
            </div>
            <div className="my-4  ">
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Apartment, suite, unit etc. (optional)" />
            </div>
            <div className="my-4 relative ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Town/City<IoMedicalSharp className=" absolute top-0 left-20 " /></label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Town/City" />
            </div>
            <div className="my-4 ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">County (optional)</label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="County" />
            </div>
            <div className="my-4 relative ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Post Code <IoMedicalSharp className=" absolute top-0 left-20 " /></label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Post Code" />
            </div>
            <div className="my-4 relative ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Phone<IoMedicalSharp className=" absolute top-0 left-12 " /></label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Phone" />
            </div>
            <div className="my-4 relative ">
              <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Email Address <IoMedicalSharp className=" absolute top-0 left-28 " /></label>
              <input type="email" class=" border-b-2 border-0 text-gray-900 text-sm block w-full  dark:placeholder-gray-400 pb-4 " placeholder="Email" />
            </div>
          </div>
          <div className="py-10">
            <Heading as="h1" text="Additional Information" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
            <Heading as="h4" text="Other Notes (optional)" className={"font-dm text-sm font-bold  text-fotterMenuColor py-4 "} />
            <Heading as="h5" text="Notes about your order, e.g. special notes for delivery." className={"font-dm text-xs  text-menuColor py-4 "} />
          </div>
          <div className={" w-full border border-1px solid  text-menuColor my-20 hover:border hover:border-lime-500 "}>
          </div>
          <div className="py-10">
            <Heading as="h1" text="Your Order" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
          </div>


          <div className="py-20">

          <Card className=" w-full overflow-hidden">

            <table className="w-1/2 text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                        // className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      className="border-2 py-3  pl-4 font-dm text-sm font-bold text-fotterMenuColor  "
                    >
                      <Typography
                      // variant="small"
                      // color="blue-gray"
                      // className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CheckOut.map(({ Product, Total }, index) => {
                  const isLast = index === CheckOut.length - 4;
                  const classes = isLast ? "p-4" : "p-4 border-2 ";

                  return (
                    <tr key={Product}>
                      <td className={classes}>
                        <Typography
                        //  variant="small"
                        //  color="blue-gray"
                        //  className="font-normal"
                        >
                          {Product}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          //  variant="small"
                          //  color="blue-gray"
                          // className="font-normal "
                        >
                          {Total}
                        </Typography>
                      </td>


                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          </div>


        </Container>
      </div>








    </>
  )
}

export default CheckOut