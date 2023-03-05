import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const FreeCreditsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-gilroy items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start p-[22px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start max-w-[1286px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_group_5.svg"
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
          <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
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
                  <div className="flex flex-row gap-[6px] items-center justify-start pr-[16px] py-[16px] w-[100%]">
                    <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[48%]">
                      <Img
                        src="images/img_coinsoutline.svg"
                        className="h-[24px] w-[24px]"
                        alt="coinsOutline"
                      />
                      <Text
                        className="font-semibold mt-[4px] text-blue_A700 text-left w-[auto]"
                        variant="body2"
                      >
                        My Credits
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
            <div className="flex flex-1 flex-col gap-[24px] items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-semibold text-gray_902 text-left w-[auto]"
                  variant="body1"
                >
                  My Credits
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[161px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder6"
                >
                  Earn Free Credits
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[6px] w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start pr-[5px] py-[5px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Credits
                    </Text>
                    <Text
                      className="font-semibold mb-[2px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $50,000
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[6px] w-[100%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start pr-[5px] py-[5px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Free Credits
                    </Text>
                    <Text
                      className="font-semibold mb-[2px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $10,000
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[6px] w-[100%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start pr-[5px] py-[5px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Redeemed Credits
                    </Text>
                    <Text
                      className="font-semibold mb-[2px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $08,000
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-[16px] items-center justify-start p-[24px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[71%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_902 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Credits
                    </Text>
                    <div className="flex sm:flex-1 flex-row gap-[32px] items-center justify-between sm:w-[100%] w-[41%]">
                      <div className="border-[1px] border-bluegray_400 border-solid flex flex-row gap-[16px] items-start justify-between w-[81%]">
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <div className="flex items-center justify-start p-[10px] w-[100%]">
                            <Text
                              className="font-medium text-blue_A700 text-left w-[auto]"
                              variant="body2"
                            >
                              Yearly
                            </Text>
                          </div>
                          <Line className="bg-blue_A700 h-[2px] w-[100%]" />
                        </div>
                        <div className="flex items-start justify-center w-[auto]">
                          <Text
                            className="font-medium text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            Monthly
                          </Text>
                        </div>
                        <div className="flex items-start justify-center w-[auto]">
                          <Text
                            className="font-medium text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            Daily
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_902 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $50,000
                    </Text>
                    <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start pb-[4px] pl-[4px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          50K
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          40K
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          30K
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          20K
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          10K
                        </Text>
                        <Text
                          className="font-normal h-[16px] md:ml-[0] ml-[10px] not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          5K
                        </Text>
                        <Text
                          className="font-normal mb-[20px] md:ml-[0] ml-[9px] not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          0K
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[30px] items-end justify-between md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[10px] items-center justify-start w-[5%]">
                          <div className="bg-blue_A701 h-[212px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Jan
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[132px] w-[5%]">
                          <div className="bg-blue_A701 h-[80px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Feb
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[36px] w-[5%]">
                          <div className="bg-blue_A701 h-[176px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Mar
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[31px] w-[5%]">
                          <div className="bg-blue_A701 h-[181px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Apr
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[157px] w-[5%]">
                          <div className="bg-blue_A701 h-[55px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            May
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[94px] w-[5%]">
                          <div className="bg-blue_A701 h-[118px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Jun
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[49px] w-[5%]">
                          <div className="bg-blue_A701 h-[163px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Jul
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[108px] w-[5%]">
                          <div className="bg-blue_A701 h-[104px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Aug
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[91px] w-[5%]">
                          <div className="bg-blue_A701 h-[121px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Sep
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center justify-start mt-[58px] w-[5%]">
                          <div className="bg-blue_A701 h-[154px] rounded-[5px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Oct
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 mt-[39px] w-[13%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                            <div className="bg-blue_A701 h-[173px] rounded-[5px] w-[100%]"></div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              Nov
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                            <div className="bg-blue_A701 h-[173px] rounded-[5px] w-[100%]"></div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              Des
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[27%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-semibold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Friend List
                      </Text>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu One"
                      />
                    </div>
                    <List
                      className="flex-col gap-[15px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[93px] w-[100%]">
                        <Img
                          src="images/img_jankoferlicg.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                          alt="jankoferlicG"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_902 text-left w-[auto]"
                            variant="body4"
                          >
                            Benny Chagur
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body5"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[93px] w-[100%]">
                        <Img
                          src="images/img_studioportrait.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                          alt="studioportrait"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_902 text-left w-[auto]"
                            variant="body4"
                          >
                            Chynita Heree
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body5"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[87px] w-[100%]">
                        <Img
                          src="images/img_youngbeardedm.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                          alt="youngbeardedm"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_902 text-left w-[auto]"
                            variant="body4"
                          >
                            David Yers
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body5"
                          >
                            Regular Customer
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[99px] w-[100%]">
                        <Img
                          src="images/img_cheerfulindian.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                          alt="cheerfulindian"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_902 text-left w-[auto]"
                            variant="body4"
                          >
                            Hayder Jahid
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body5"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[99px] w-[100%]">
                        <Img
                          src="images/img_cheerfulindian.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                          alt="cheerfulindian One"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_902 text-left w-[auto]"
                            variant="body4"
                          >
                            Hayder Jahid
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body5"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[99px] w-[100%]">
                        <Img
                          src="images/img_cheerfulindian.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                          alt="cheerfulindian Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_902 text-left w-[auto]"
                            variant="body4"
                          >
                            Hayder Jahid
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body5"
                          >
                            Member
                          </Text>
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
    </>
  );
};

export default FreeCreditsPage;
