import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'

const SignUP = () => {

  return (
    <>

      <div className="py-10 relative overflow-hidden">
        <Container>
          <div className=" py-20">
            <Heading as="h1" text="Sign up" className={"font-dm text-5xl font-bold text-fotterMenuColor "} />
            <Heading as="h4" text="Home  >  Sign up" className={"font-dm text-xs  text-menuColor py-4 "} />
          </div>
          <div className="py-10">
            <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className={"font-dm text-base  text-menuColor mb-10 pr-[663px]"} />
          </div>
          <div className={" w-full border border-1px solid  text-menuColor my-2 hover:border hover:border-lime-500 "}>
          </div>
          <div className="py-20">
            <Heading as="h2" text="Your Personal Details" className={"font-dm text-5xl font-bold text-fotterMenuColor capitalize pb-10"} />

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">First Name</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="First Name" />
              </div>
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Last Name</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Last Name" />
              </div>
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Email address</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="company@domain.com" />
              </div>
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Telephone</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Your phone number" />
              </div>
            </div>
            <div className={" w-full border border-1px solid  text-menuColor my-20 hover:border hover:border-lime-500 "}>
            </div>
          </div>
          <div className="py-10">
            <Heading as="h2" text="New Customer" className={"font-dm text-5xl font-bold text-fotterMenuColor capitalize pb-10"} />
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Address 1</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="4279 Zboncak Port Suite 6212" />
              </div>
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Address 2</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="—" />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">City</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Your city" />
              </div>
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Post Code</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="05228" />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Country</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Please select" />
              </div>
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Region/State</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Please select" />
              </div>
            </div>
            <div className={" w-full border border-1px solid  text-menuColor my-20 hover:border hover:border-lime-500 "}>
            </div>
          </div>
          <div className="py-10">
            <Heading as="h2" text="Your Password" className={"font-dm text-5xl font-bold text-fotterMenuColor capitalize pb-10"} />
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Password</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Password" />
              </div>
              <div>
                <label for="helper-text" class="block mb-2 text-sm font-dm font-bold text-gray-900 ">Repeat Password</label>
                <input type="email" aria-describedby="helper-text-explanation" class=" border-b-2 border-0 text-gray-900 text-sm block w-1/2  dark:placeholder-gray-400 pb-4 " placeholder="Repeat password" />
              </div>
            </div>
            <div className={" w-full border border-1px solid  text-menuColor my-20 hover:border hover:border-lime-500 "}>
            </div>

            <div className="py-10">
              <div class="flex">
                <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-indeterminate-checkbox" />
                <label class="text-sm text-gray-500 ms-3 dark:text-neutral-400">I have read and agree to the Privacy Policy</label>
              </div>
            </div>

            <div className="py-5">

              <Flex>
                <Heading as="h4" text="Subscribe Newsletter" className={"font-dm text-sm  text-menuColor capitalize pb-10 pr-10"} />
                <div class="flex  gap-2">

                  <div class="flex">
                    <input type="checkbox" class="shrink-0 mb-20 border-gray-200 rounded text-blue-600  dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 " />
                    <label class="text-sm text-gray-500 ms-3  dark:text-neutral-400">Yes</label>
                  </div>

                  <div class="flex">
                    <input type="checkbox" class="shrink-0 mb-20 ml-10 border-gray-200 rounded text-blue-600  dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 " />
                    <label class="text-sm text-gray-500 ms-3 dark:text-neutral-400">No</label>
                  </div>
                </div>
              </Flex>
                <Heading as="h4" text={"Log in"} className={"font-dm text-sm font-bold ml-16 bg-black py-4 px-12 inline-block  text-white absolute bottom-[15px] left-[216px] mb-9"} />
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default SignUP