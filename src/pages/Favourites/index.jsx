import React from "react";

import { Img, Input, Text, SelectBox, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const FavouritesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group_4.svg"
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
        <div className="bg-white_A700 flex items-center justify-end max-w-[1120px] mx-[auto] pt-[30px] md:px-[20px] px-[30px] rounded-[6px] shadow-bs1 w-[100%]">
          <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[26px] items-center justify-start pt-[9px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Favourites
                </Text>
                <SelectBox
                  className="font-medium text-[16px] text-bluegray_900 text-left w-[auto]"
                  placeholderClassName="text-bluegray_900"
                  name="Frame9870"
                  placeholder="Filter & Sort"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] mr-[0] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
            </div>
            <List
              className="flex-col font-opensans gap-[23px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_pngwing1_180X180.png"
                    className="h-[180px] md:h-[auto] object-cover rounded-[4px] w-[180px]"
                    alt="pngwingOne"
                  />
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          src="images/img_trash.svg"
                          className="h-[24px] w-[24px]"
                          alt="trash"
                        />
                      </div>
                      <Text
                        className="mt-[20px] text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-[40px] items-end justify-between mt-[18px] w-[100%]">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start w-[auto]">
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[61%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
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
                          <div className="flex flex-row gap-[15px] items-end justify-between w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="md:text-[22px] sm:text-[20px] text-colors2 text-[24px] font-opensans font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="font-medium line-through mt-[11px] text-bluegray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-[10px] text-[16px] text-center text-white_A700 w-[164px]"
                          shape="RoundedBorder6"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_pngwing1_180X180.png"
                    className="h-[180px] md:h-[auto] object-cover rounded-[4px] w-[180px]"
                    alt="pngwingOne One"
                  />
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          src="images/img_trash.svg"
                          className="h-[24px] w-[24px]"
                          alt="trash One"
                        />
                      </div>
                      <Text
                        className="mt-[20px] text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-[40px] items-end justify-between mt-[18px] w-[100%]">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start w-[auto]">
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[61%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
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
                          <div className="flex flex-row gap-[15px] items-end justify-between w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="md:text-[22px] sm:text-[20px] text-colors2 text-[24px] font-opensans font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="font-medium line-through mt-[11px] text-bluegray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-[10px] text-[16px] text-center text-white_A700 w-[164px]"
                          shape="RoundedBorder6"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_pngwing1_180X180.png"
                    className="h-[180px] md:h-[auto] object-cover rounded-[4px] w-[180px]"
                    alt="pngwingOne Two"
                  />
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          src="images/img_trash.svg"
                          className="h-[24px] w-[24px]"
                          alt="trash Two"
                        />
                      </div>
                      <Text
                        className="mt-[20px] text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-[40px] items-end justify-between mt-[18px] w-[100%]">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start w-[auto]">
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[61%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
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
                          <div className="flex flex-row gap-[15px] items-end justify-between w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="md:text-[22px] sm:text-[20px] text-colors2 text-[24px] font-opensans font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="font-medium line-through mt-[11px] text-bluegray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-[10px] text-[16px] text-center text-white_A700 w-[164px]"
                          shape="RoundedBorder6"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_pngwing1_180X180.png"
                    className="h-[180px] md:h-[auto] object-cover rounded-[4px] w-[180px]"
                    alt="pngwingOne Three"
                  />
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          src="images/img_trash.svg"
                          className="h-[24px] w-[24px]"
                          alt="trash Three"
                        />
                      </div>
                      <Text
                        className="mt-[20px] text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-[40px] items-end justify-between mt-[18px] w-[100%]">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start w-[auto]">
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[61%]">
                            <Text
                              className="font-medium text-bluegray_900 text-center w-[auto]"
                              variant="body1"
                            >
                              Color:
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_400 text-center w-[auto]"
                              variant="body1"
                            >
                              Blue
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="md:text-[22px] sm:text-[20px] text-colors text-[24px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="md:text-[22px] sm:text-[20px] text-colors2 text-[24px] font-opensans font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="font-medium line-through mt-[8px] text-bluegray_400 text-center w-[auto]"
                              variant="body2"
                            >
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                $
                              </span>
                              <span className="text-colors3 text-[16px] font-opensans font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-[10px] text-[16px] text-center text-white_A700 w-[164px]"
                          shape="RoundedBorder6"
                          size="lg"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritesPage;
