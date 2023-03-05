import React from "react";

import { Img, Input, Text, List, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";

const StoreCreditsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-[40px] md:gap-[40px] gap-[70px] items-center justify-start mx-[auto] pb-[294px] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group_13.svg"
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
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[31px] items-start justify-start p-[16px] rounded-[8px] shadow-bs md:w-[100%] w-[68%]">
            <Input
              className="font-medium leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_902 text-black_902 text-left w-[100%]"
              wrapClassName="md:ml-[0] ml-[16px] sm:ml-[0] sm:w-[100%] w-[97%]"
              name="Group1541"
              placeholder="Order Summary"
              size="3xl"
              variant="UnderLineBluegray100"
            ></Input>
            <List
              className="flex-col gap-[32px] grid mb-[16px] md:ml-[0] ml-[16px] w-[74%]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-[auto] object-cover rounded-[4px] w-[194px]"
                  alt="pngwingOne"
                />
                <div className="flex sm:flex-1 flex-col items-start justify-start pb-[48px] sm:pr-[20px] md:pr-[40px] pr-[48px] sm:w-[100%] w-[auto]">
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
                  <div className="flex flex-row items-center justify-start mt-[17px] md:w-[100%] w-[26%]">
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] md:w-[100%] w-[43%]">
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
                </div>
              </div>
              <Line className="self-center h-[1px] bg-bluegray_100 w-[100%]" />
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-[auto] object-cover rounded-[4px] w-[194px]"
                  alt="pngwingOne One"
                />
                <div className="flex sm:flex-1 flex-col items-start justify-start pb-[48px] sm:pr-[20px] md:pr-[40px] pr-[48px] sm:w-[100%] w-[auto]">
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
                  <div className="flex flex-row items-center justify-start mt-[17px] md:w-[100%] w-[26%]">
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] md:w-[100%] w-[43%]">
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
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-center justify-start mb-[257px] p-[16px] rounded-[8px] shadow-bs md:w-[100%] w-[31%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[92%]">
              <Input
                className="font-medium leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_902 text-black_902 text-left w-[100%]"
                wrapClassName="w-[100%]"
                name="Group1543"
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
                    className="font-medium text-green_600 text-left w-[auto]"
                    variant="body1"
                  >
                    Store Credits
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
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreCreditsPage;
