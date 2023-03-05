import React from "react";

import { Img, Input, Text, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";

const ShoppingCartPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-[40px] md:gap-[40px] gap-[70px] items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group_12.svg"
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
        <div className="flex md:flex-col flex-row gap-[28px] items-start justify-start max-w-[1268px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 flex-col md:gap-[40px] gap-[70px] items-center justify-start p-[16px] rounded-[8px] shadow-bs md:w-[100%] w-[68%]">
            <div className="flex flex-col gap-[23px] items-start justify-start md:w-[100%] w-[97%]">
              <Input
                className="font-medium leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_902 text-black_902 text-left w-[100%]"
                wrapClassName="w-[100%]"
                name="FrameSeventySeven"
                placeholder="My Shopping Cart"
                size="2xl"
                variant="UnderLineBluegray100"
              ></Input>
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start pt-[6px] md:w-[100%] w-[77%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-[auto] object-cover rounded-[4px] w-[194px]"
                  alt="pngwingOne"
                />
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[66%]">
                  <Text
                    className="text-black_902 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="font-medium mt-[19px] text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[23px] md:w-[100%] w-[23%]">
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      variant="body1"
                    >
                      Color:
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Blue
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] md:w-[100%] w-[39%]">
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-gilroy font-semibold">
                        $
                      </span>
                      <span className="md:text-[22px] sm:text-[20px] text-colors4 text-[24px] font-gilroy font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text
                      className="font-medium line-through mt-[11px] text-bluegray_400 text-left w-[auto]"
                      variant="body2"
                    >
                      <span className="text-colors3 text-[16px] font-gilroy font-semibold">
                        $6
                      </span>
                      <span className="text-colors3 text-[16px] font-gilroy font-semibold">
                        55.99
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-gilroy items-center justify-between mt-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-evenly w-[auto]">
                      <Button
                        className="flex h-[36px] items-center justify-center w-[36px]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineBluegray100"
                      >
                        <Img
                          src="images/img_menu_36X36.svg"
                          className="h-[16px]"
                          alt="menu"
                        />
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[64px] text-[18px] text-black_902 text-center w-[auto]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBluegray400"
                      >
                        1
                      </Button>
                      <Button
                        className="flex h-[36px] items-center justify-center w-[36px]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineBluegray100"
                      >
                        <Img
                          src="images/img_plus_36X36.svg"
                          className="h-[16px]"
                          alt="plus"
                        />
                      </Button>
                    </div>
                    <Line className="bg-bluegray_100 h-[24px] my-[6px] w-[1px]" />
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      variant="body1"
                    >
                      Save For Later
                    </Text>
                    <Line className="bg-bluegray_100 h-[24px] my-[6px] w-[1px]" />
                    <Text
                      className="font-medium text-left text-red_700 w-[auto]"
                      variant="body1"
                    >
                      Remove
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-[16px] md:w-[100%] w-[97%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-black_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Delivery Address
                </Text>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-center justify-start mt-[23px] p-[16px] rounded-[4px] w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between my-[8px] w-[100%]">
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[24px] items-start justify-between sm:w-[100%] w-[67%]">
                    <Img
                      src="images/img_radiobutton.svg"
                      className="h-[36px] w-[36px]"
                      alt="RadioButton"
                    />
                    <div className="flex flex-col gap-[22px] items-start justify-start pt-[2px] sm:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[43%]">
                        <Text
                          className="mt-[3px] text-black_902 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Jone Cooper
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-[2px] min-w-[50px] text-[14px] text-black_902 text-center w-[auto]"
                          shape="RoundedBorder6"
                          size="sm"
                          variant="FillBluegray100"
                        >
                          Work
                        </Button>
                      </div>
                      <Text
                        className="text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="sm:mt-[0] mt-[4px] text-blue_A700 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Edit
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start mt-[24px] p-[16px] rounded-[4px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start my-[8px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_search.svg"
                    className="h-[36px] w-[36px]"
                    alt="search"
                  />
                  <div className="flex flex-col gap-[22px] items-start justify-start pt-[2px] sm:w-[100%] w-[89%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[42%]">
                      <Text
                        className="mt-[3px] text-black_902 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Jone Cooper
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mb-[2px] min-w-[54px] text-[14px] text-black_902 text-center w-[auto]"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="FillBluegray100"
                      >
                        Home
                      </Button>
                    </div>
                    <Text
                      className="text-black_902 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start mt-[24px] p-[16px] rounded-[4px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start my-[8px] md:w-[100%] w-[62%]">
                  <Img
                    src="images/img_search.svg"
                    className="h-[36px] w-[36px]"
                    alt="search One"
                  />
                  <div className="flex flex-col gap-[21px] items-start justify-end pt-[5px] sm:w-[100%] w-[88%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="text-black_902 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Jone Cooper
                      </Text>
                    </div>
                    <Text
                      className="text-black_902 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </Text>
                  </div>
                </div>
              </div>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_902 text-black_902 text-left w-[100%]"
                wrapClassName="flex mt-[24px] w-[100%]"
                name="Frame9986"
                placeholder="Add Address"
                prefix={
                  <Img
                    src="images/img_plus_1.svg"
                    className="ml-[16px] mr-[24px] my-[auto]"
                    alt="plus"
                  />
                }
                shape="RoundedBorder6"
                size="xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-center justify-start mb-[623px] p-[16px] rounded-[8px] shadow-bs md:w-[100%] w-[31%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[92%]">
              <Input
                className="font-medium leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_902 text-black_902 text-left w-[100%]"
                wrapClassName="w-[100%]"
                name="Group1525"
                placeholder="Price Details"
                size="2xl"
                variant="UnderLineBluegray100"
              ></Input>
              <div className="flex flex-col gap-[28px] items-center justify-start mt-[15px] pt-[5px] w-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    variant="body1"
                  >
                    $1110.58
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Discount
                  </Text>
                  <Text
                    className="font-medium text-green_600 text-left w-[auto]"
                    variant="body1"
                  >
                    -$111.98
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Delivery Charges
                  </Text>
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    variant="body1"
                  >
                    $10
                  </Text>
                </div>
              </div>
              <Line className="bg-bluegray_100 h-[1px] mt-[16px] w-[100%]" />
              <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
                <Text
                  className="font-medium text-black_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Total Amount
                </Text>
                <Text
                  className="font-medium text-black_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  $1120.58
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold text-[16px] text-center text-white_A700 w-[326px]"
              shape="RoundedBorder6"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
