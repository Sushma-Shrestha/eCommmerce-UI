import React from "react";

import { Img, Input, Text, List } from "components";
import { CloseSVG } from "../../assets/images";

const CouponCodeGeneratorPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[55px] items-center justify-start mx-[auto] pb-[97px] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group_1.svg"
                  className="h-[35px]"
                  alt="Group"
                />
              </li>
              <li className="ml-[52px] sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[40%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="flex md:w-[100%] sm:w-[100%] w-[40%]"
                  name="InputField"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search_black_900.svg"
                      className="cursor-pointer my-[auto] mx-[12px]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#bac1ce"
                        className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder6"
                ></Input>
              </li>
              <li className="ml-[50px] sm:w-[100%] sm:my-[10px] w-[33%] my-[8px]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-center">
                  <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] sm:w-[100%] w-[27%]">
                    <a
                      className="cursor-pointer font-medium ml-[9px] text-[16px] text-gray_900 text-left w-[auto]"
                      href="javascript:"
                    >
                      Orders
                    </a>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown"
                    />
                  </div>
                  <a
                    className="cursor-pointer font-medium sm:ml-[0] ml-[51px] sm:mt-[0] mt-[11px] text-[16px] text-gray_900 text-left w-[auto]"
                    href="javascript:"
                  >
                    Categories
                  </a>
                  <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] sm:w-[100%] w-[27%]">
                    <a
                      className="cursor-pointer font-medium ml-[16px] text-[16px] text-gray_900 text-left w-[auto]"
                      href="javascript:"
                    >
                      More
                    </a>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
              </li>
              <li className="ml-[66px] sm:w-[100%] sm:my-[10px] w-[2%] my-[13px]">
                <Img
                  src="images/img_cart.svg"
                  className="h-[26px]"
                  alt="cart"
                />
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col font-chivo md:gap-[40px] gap-[70px] items-center justify-start max-w-[1268px] mx-[auto] md:px-[20px] w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex h-[300px] items-start justify-start p-[32px] sm:px-[20px] rounded-[16px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group6514.png')" }}
          >
            <div className="flex flex-col gap-[32px] justify-start mb-[4px] md:ml-[0] ml-[18px] md:w-[100%] w-[37%]">
              <div className="bg-white_A700 md:h-[45px] h-[80px] mr-[241px] p-[17px] relative rounded-[17.14px] w-[46%]">
                <Img
                  src="images/img_image62.png"
                  className="absolute h-[45px] inset-[0] justify-center m-[auto] object-cover w-[76%]"
                  alt="imageSixtyTwo"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[11px] text-left text-white_A700 sm:w-[100%] w-[98%]"
                as="h1"
                variant="h1"
              >
                Get extra 20% off on Gadgets
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-gilroy gap-[30px] items-center justify-end pt-[6px] w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <Text
                className="font-semibold mt-[6px] text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Deals Of The Day
              </Text>
              <Img
                src="images/img_clock.svg"
                className="h-[40px] mb-[6px] w-[40px]"
                alt="clock"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 items-center justify-end py-[20px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col items-start justify-start mt-[3px] w-[100%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[24px] md:w-[100%] w-[84%]">
                    <Img
                      src="images/img_pngwing1_3.png"
                      className="h-[194px] md:h-[auto] object-cover w-[100%]"
                      alt="pngwingOne"
                    />
                    <Text
                      className="font-medium text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700 border-dashed border-x-[1.37px] border-y-[1px] flex items-center justify-start mt-[15px] p-[12px] w-[100%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[92%]">
                      <Text
                        className="font-semibold text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[20px] w-[20px]"
                        alt="file"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[24px] mt-[13px] text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-end py-[20px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col items-start justify-start mt-[3px] w-[100%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[24px] md:w-[100%] w-[84%]">
                    <Img
                      src="images/img_pngwing1_4.png"
                      className="h-[194px] md:h-[auto] object-cover w-[100%]"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="font-medium text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700 border-dashed border-x-[1.37px] border-y-[1px] flex items-center justify-start mt-[15px] p-[12px] w-[100%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[92%]">
                      <Text
                        className="font-semibold text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[20px] w-[20px]"
                        alt="file One"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[24px] mt-[13px] text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-end py-[20px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col items-start justify-start mt-[3px] w-[100%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[24px] md:w-[100%] w-[84%]">
                    <Img
                      src="images/img_pngwing1_5.png"
                      className="h-[194px] md:h-[auto] object-cover w-[100%]"
                      alt="pngwingOne Two"
                    />
                    <Text
                      className="font-medium text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700 border-dashed border-x-[1.37px] border-y-[1px] flex items-center justify-start mt-[15px] p-[12px] w-[100%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[92%]">
                      <Text
                        className="font-semibold text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[20px] w-[20px]"
                        alt="file Two"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[24px] mt-[13px] text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-end py-[20px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col items-start justify-start mt-[3px] w-[100%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[24px] md:w-[100%] w-[84%]">
                    <Img
                      src="images/img_pngwing1_6.png"
                      className="h-[194px] md:h-[auto] object-cover w-[100%]"
                      alt="pngwingOne Three"
                    />
                    <Text
                      className="font-medium text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700 border-dashed border-x-[1.37px] border-y-[1px] flex items-center justify-start mt-[15px] p-[12px] w-[100%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[92%]">
                      <Text
                        className="font-semibold text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[20px] w-[20px]"
                        alt="file Three"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[24px] mt-[13px] text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCodeGeneratorPage;
