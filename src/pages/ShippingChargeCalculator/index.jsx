import React from "react";

import { Img, Input, Text, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";

const ShippingChargeCalculatorPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-gilroy items-center justify-start mx-[auto] pb-[73px] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[70px] items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
              <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                  <Img
                    src="images/img_group_11.svg"
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
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[36px] items-start justify-start p-[32px] sm:px-[20px] rounded-[8px] shadow-bs md:w-[100%] w-[68%]">
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[77%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-[auto] object-cover rounded-[4px] w-[194px]"
                  alt="pngwingOne"
                />
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[66%]">
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="mt-[19px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[17px] md:w-[100%] w-[23%]">
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] md:w-[100%] w-[37%]">
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
                        $
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
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[66%]">
                <Text
                  className="font-medium text-black_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Shipping Charges
                </Text>
                <div className="flex flex-col gap-[4px] items-start justify-start mt-[16px] sm:w-[100%] w-[512px]">
                  <div className="flex items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Pick-up Area Pin Code
                    </Text>
                  </div>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="zipcode"
                    placeholder="333333"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start mt-[16px] sm:w-[100%] w-[512px]">
                  <div className="flex items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Delivery Area Pin Code
                    </Text>
                  </div>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="zipcode One"
                    placeholder="333333"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start mt-[16px] sm:w-[100%] w-[512px]">
                  <div className="flex items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Weight
                    </Text>
                  </div>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_801 text-bluegray_801 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="weight"
                    placeholder="0.5 KG"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start mt-[16px] sm:w-[100%] w-[512px]">
                  <div className="flex items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Cash On Delivery and Name Pay Balance Applicable
                    </Text>
                  </div>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_801 text-bluegray_801 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="InputField One"
                    placeholder="Not Applicable"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-[23px] pb-[11px] md:w-[100%] w-[62%]">
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Charge
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $199
                    </Text>
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body2"
                    >
                      ( Includes : Import free deposit )
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-center justify-start mb-[478px] p-[16px] rounded-[8px] shadow-bs md:w-[100%] w-[31%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[92%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Price Details
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                </div>
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
                      $199
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
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingChargeCalculatorPage;
