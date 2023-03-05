import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const AffiliateURLPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[55px] items-center justify-start mx-[auto] pb-[42px] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group.svg"
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
              <div className="bg-white_A700 flex flex-1 items-start justify-start sm:pr-[20px] pr-[24px] py-[24px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col gap-[13px] items-end justify-start w-[100%]">
                  <div className="h-[194px] relative w-[100%]">
                    <Img
                      src="images/img_pngwing1.png"
                      className="absolute h-[194px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[4px] w-[92%]"
                      alt="pngwingOne"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-[14px] text-center text-gray_50 top-[0] w-[auto]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="capitalize font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="font-medium mt-[23px] text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      boAt Airdopes 131
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[8px] py-[7px] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-gilroy">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-[20px] text-colors1 text-[24px] font-gilroy">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border-[1px] border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-[2px] rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1.svg"
                          className="h-[12px] my-[3px] w-[12px]"
                          alt="StarOne"
                        />
                        <Text
                          className="font-medium mt-[2px] text-amber_500 text-left w-[auto]"
                          variant="body4"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-[8px] text-[16px] text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                    >
                      Go to Store
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-start justify-start sm:pr-[20px] pr-[24px] py-[24px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col gap-[13px] items-end justify-start w-[100%]">
                  <div className="h-[194px] relative w-[100%]">
                    <Img
                      src="images/img_pngwing1_194X248.png"
                      className="absolute h-[194px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[4px] w-[92%]"
                      alt="pngwingOne One"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-[14px] text-center text-gray_50 top-[0] w-[auto]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="capitalize font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="font-medium mt-[23px] text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      HP Envy 13 x360
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[8px] py-[7px] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-gilroy">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-[20px] text-colors1 text-[24px] font-gilroy">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border-[1px] border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-[2px] rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_12X12.svg"
                          className="h-[12px] my-[3px] w-[12px]"
                          alt="StarOne One"
                        />
                        <Text
                          className="font-medium mt-[2px] text-amber_500 text-left w-[auto]"
                          variant="body4"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-[8px] text-[16px] text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                    >
                      Go to Store
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-start justify-start sm:pr-[20px] pr-[24px] py-[24px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col gap-[13px] items-end justify-start w-[100%]">
                  <div className="h-[194px] relative w-[100%]">
                    <Img
                      src="images/img_pngwing1_1.png"
                      className="absolute h-[194px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[4px] w-[92%]"
                      alt="pngwingOne Two"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-[14px] text-center text-gray_50 top-[0] w-[auto]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="capitalize font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="font-medium mt-[20px] text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      OnePlus 10R 5G
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-gilroy">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-[20px] text-colors1 text-[24px] font-gilroy">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border-[1px] border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-[2px] rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_1.svg"
                          className="h-[12px] my-[3px] w-[12px]"
                          alt="StarOne Two"
                        />
                        <Text
                          className="font-medium mt-[2px] text-amber_500 text-left w-[auto]"
                          variant="body4"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-[8px] text-[16px] text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                    >
                      Go to Store
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-start justify-start sm:pr-[20px] pr-[24px] py-[24px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex flex-col gap-[13px] items-end justify-start w-[100%]">
                  <div className="h-[194px] relative w-[100%]">
                    <Img
                      src="images/img_pngwing1_2.png"
                      className="absolute h-[194px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[4px] w-[92%]"
                      alt="pngwingOne Three"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-[14px] text-center text-gray_50 top-[0] w-[auto]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="capitalize font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="font-medium mt-[20px] text-black_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      APPLE iPad
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-gilroy">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-[20px] text-colors1 text-[24px] font-gilroy">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border-[1px] border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-[2px] rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_2.svg"
                          className="h-[12px] my-[3px] w-[12px]"
                          alt="StarOne Three"
                        />
                        <Text
                          className="font-medium mt-[2px] text-amber_500 text-left w-[auto]"
                          variant="body4"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-[8px] text-[16px] text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                    >
                      Go to Store
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateURLPage;
