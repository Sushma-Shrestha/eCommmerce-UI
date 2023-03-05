import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const LoyaltySystemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-end w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start p-[22px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start max-w-[1286px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_group_7.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="flex gap-[12px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[101px] my-[6px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[406px]"
                  name="InputField"
                  placeholder="Search Items, Customer etc"
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
                  size="smSrc"
                ></Input>
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex font-opensans h-[56px] items-end justify-start md:ml-[0] ml-[480px] p-[8px] rounded-[50%] w-[56px]">
                  <div className="h-[35px] md:h-[36px] mb-[4px] relative w-[36px]">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border-[1px] border-bluegray_50 border-solid font-semibold h-[18px] pb-[5px] pt-[2px] px-[5px] right-[0] rounded-[50%] text-left text-white_A700 top-[0] w-[18px]"
                      variant="body5"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border-[1px] border-blue_A701 border-solid flex h-[56px] items-center justify-start md:ml-[0] ml-[24px] p-[4px] rounded-[50%] w-[56px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start mr-[auto] md:px-[20px] md:w-[100%] w-[83%]">
            <aside className="flex flex-col md:hidden justify-start w-[300px]">
              <div className="bg-white_A700 flex flex-col gap-[309px] md:gap-[40px] items-center justify-end p-[5px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start mt-[19px] md:w-[100%] w-[87%]">
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[49%]">
                      <Img
                        src="images/img_save.svg"
                        className="h-[24px] w-[24px]"
                        alt="save"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-start pr-[17px] py-[17px] w-[100%]">
                    <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[62%]">
                      <Img
                        src="images/img_coinsoutline.svg"
                        className="h-[24px] w-[24px]"
                        alt="coinsOutline"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700 text-left w-[auto]"
                        variant="body2"
                      >
                        Rewards Points
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[46%]">
                      <Img
                        src="images/img_user.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Friend List
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[49%]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[24px] w-[24px]"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[31%]">
                      <Img
                        src="images/img_edit_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="edit"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[35%]">
                      <Img
                        src="images/img_bag.svg"
                        className="h-[24px] w-[24px]"
                        alt="bag"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[42%]">
                      <Img
                        src="images/img_ticket.svg"
                        className="h-[24px] w-[24px]"
                        alt="ticket"
                      />
                      <Text
                        className="font-semibold mt-[4px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Coupons
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[54%]">
                      <Img
                        src="images/img_notification.svg"
                        className="h-[24px] w-[24px]"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[40%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex font-opensans items-start justify-start p-[8px] md:w-[100%] w-[87%]">
                  <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] w-[29%]">
                    <Img
                      src="images/img_question.svg"
                      className="h-[24px] w-[24px]"
                      alt="question"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                      variant="body2"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 items-center justify-start md:mt-[0] mt-[32px] pt-[4px] w-[100%]">
              <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_902 text-left w-[auto]"
                  variant="body2"
                >
                  Rewards Points
                </Text>
                <div className="flex flex-col gap-[32px] items-center justify-start md:ml-[0] ml-[218px] md:w-[100%] w-[75%]">
                  <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[73%]">
                      <div className="flex flex-col gap-[31px] items-start justify-start ml-[20px] w-[auto]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Total Reward Points
                        </Text>
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $500
                        </Text>
                      </div>
                      <Img
                        src="images/img_image2022051.png"
                        className="h-[100px] md:h-[auto] mr-[20px] object-cover w-[100px]"
                        alt="image2022051"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[16px] items-center justify-start md:w-[100%] w-[26%]">
                      <Button
                        className="cursor-pointer font-medium text-[18px] text-center text-white_A700 w-[162px]"
                        shape="RoundedBorder6"
                      >
                        Withdraw
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-[18px] text-blue_A700 text-center w-[163px]"
                        shape="RoundedBorder6"
                        variant="OutlineBlueA700"
                      >
                        Deposit
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-end p-[32px] sm:px-[20px] rounded-[6px] w-[100%]">
                    <div className="flex flex-col gap-[35px] items-start justify-start mt-[5px] w-[100%]">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Recent Transactions
                      </Text>
                      <List
                        className="flex-col font-inter gap-[28.79px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-blue_A700 text-left w-[auto]"
                            variant="body2"
                          >
                            Today
                          </Text>
                          <div className="flex flex-col font-gilroy items-center justify-end pt-[5px] w-[100%]">
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="font-semibold text-left text-red_700 w-[auto]"
                                variant="body1"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-blue_A700 text-left w-[auto]"
                            variant="body2"
                          >
                            21/09/2021
                          </Text>
                          <div className="flex flex-col font-gilroy items-center justify-end pt-[5px] w-[100%]">
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="font-semibold text-left text-red_700 w-[auto]"
                                variant="body1"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-blue_A700 text-left w-[auto]"
                            variant="body2"
                          >
                            03/09/2021
                          </Text>
                          <div className="flex flex-col font-gilroy items-center justify-end pt-[5px] w-[100%]">
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="font-semibold text-left text-red_700 w-[auto]"
                                variant="body1"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-bluegray_100 h-[1px] mt-[17px] w-[100%]" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoyaltySystemPage;
