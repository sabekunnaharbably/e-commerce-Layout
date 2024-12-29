import React from 'react'

import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Flex from '../../components/Flex'
import { TfiMenuAlt } from "react-icons/tfi";
import { Select, Option } from "@material-tailwind/react";
import { GoTriangleDown } from "react-icons/go";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import imgOne from '../../assets/Image.png'
import imgTwo from '../../assets/Image1.png'
import imgThree from '../../assets/Image2.png'
import imgFour from '../../assets/Image3.png'
import Product from '../Product';
import imgFive from '../../assets/Image5.png'
import imgSix from '../../assets/Image6.png'
import imgSeven from '../../assets/Image7.png'
import imgEight from '../../assets/Image8.png'
import { GrAdd } from "react-icons/gr";
import { GrStatusWarningSmall } from "react-icons/gr";





const Shop = () => {

  return (

    <>

      <div className={"w-full py-[110px]"}>
        <Container>

          <Heading as="h3" text={"Products"} className={"font-dm text-[39px] font-bold  text-hbColor pb-8"} />
          <Heading as="h5" text={"Home  >  Products"} className={"font-dm text-[12px]  text-menuColor pb-4"} />



          <div className={"py-9 "}>

            <Flex className={" justify-between "}>

              <div className={"w-3/12 pr-8"}>
                <Heading as="h3" text={"Shop by Category"} className={"font-dm text-sm font-bold text-fotterMenuColor "} />

                <div className={"py-4 relative"}>

                  <Heading as="p" text={"Category 1"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} /> <GrAdd className={"absolute right-0 top-14"} />

                  <Heading as="p" text={"Category 2"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 borer-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Category 3"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} /> <GrAdd className={"absolute right-0 bottom-48"} />
                  <Heading as="p" text={"Category 4"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Category 5"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />

                </div>

                <div className="flex justify-between">
                  <Heading as="h3" text={"Shop by Color"} className={"font-dm text-sm font-bold text-fotterMenuColor "} /><GrStatusWarningSmall />
                </div>

                <div className={"py-4"}>
                  <Heading as="p" text={"Color 1"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Color 2"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 borer-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Color 3"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Color 4"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Color 5"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />

                </div>


                <div className="flex justify-between">
                  <Heading as="h3" text={"Shop by Brand"} className={"font-dm text-sm font-bold text-fotterMenuColor "} /><GrStatusWarningSmall />
                </div>


                <div className={"py-4"}>
                  <Heading as="p" text={"Brand 1"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Brand 2"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 borer-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Brand 3"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Brand 4"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"Brand 5"} className={"font-dm text-xs  text-menuColor pb-6 border-b-2 border-1px solidshopCategoryColor"} />

                </div>


                <Heading as="h3" text={"Shop by Price"} className={"font-dm text-sm font-bold text-fotterMenuColor "} />

                <div className={"py-4"}>
                  <Heading as="p" text={"$0.00 - $9.99"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"$10.00 - $19.99"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 borer-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"$20.00 - $29.99"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"$30.00 - $39.99"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />
                  <Heading as="p" text={"$40.00 - $69.99"} className={"font-dm text-xs  text-menuColor py-6 border-b-2 border-1px solidshopCategoryColor"} />

                </div>

              </div>

              <div className="w-9/12 ">
                <Flex>
                  <div className="w-4/12">
                    <Flex className={" justify-start items-center gap-x-3"}>
                      <div className={"p-3 bg-black gap-x-8"}>
                        <TfiLayoutGrid2Alt className={"text-lg text-white"} />
                      </div>
                      <div className={"border border-8px solid shopCategoryColor p-2"}>
                        <TfiMenuAlt className={"text-2xl  text-shopIconColor"} />
                      </div>
                    </Flex>
                  </div>

                  <div className="w-8/12">
                    <Flex className={" justify-between items-end"}>
                      <div className="w-4/12">
                        <Flex >
                          <div className=" mr- ">
                            <Heading as="h6" text={"Sort by:"} className={" font-dm text-4 text-menuColor py-"} />
                            <div className="w-[200px] relative ml-8 selectt ">
                              <Select label="Featured" >
                                <Option>Featured</Option>
                                <Option>Featured</Option>
                                <Option>Featured</Option>
                                <Option>Featured</Option>
                                <Option>Featured</Option>
                              </Select>
                              <GoTriangleDown className={"absolute bottom-12 left-52"} />
                            </div>
                          </div>

                          <div className=" ml-20 ">
                            <Heading as="h6" text={"Show:"} className={" font-dm text-4 text-menuColor "} />
                            <div className="w-[200px] relative ml-8 selectt ">
                              <Select label="36" >
                                <Option>10</Option>
                                <Option>25</Option>
                                <Option>15</Option>
                                <Option>35</Option>
                                <Option>20</Option>
                              </Select>
                              <GoTriangleDown className={"absolute bottom-12 left-52"} />
                            </div>
                          </div>
                        </Flex>
                      </div>
                    </Flex>
                  </div>
                </Flex>

                <div className="">

                  <Flex className={"flex-wrap"}>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgFive}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgSix}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />

                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgSeven}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgEight}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgOne}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgTwo}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgThree}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgFour}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgOne}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>


                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgTwo}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgThree}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>

                    <div className="w-[31%]">
                      <Product
                        badgeName={'New'}
                        imgSrc={imgFour}
                        listxtOne={'Add to Wish List'}
                        comparetxtTwo={'Compare'}
                        carttxtThree={'Add to Cart'}
                        basicText={'Basic Crew Neck Tee'}
                        priceText={'$44.00'}
                        blackTxt={'Black'}
                      />
                    </div>
                  </Flex>


                </div>

              </div>

            </Flex>
          </div>





        </Container>


      </div >


      

    </>
  )
}

export default Shop