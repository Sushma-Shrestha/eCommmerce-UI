import React from "react";

import { Img, Text, Line, Button, List } from "components";

const PrintPage = () => {
  return (
    <>
      <div className="bg-gray_52 flex font-gilroy items-start justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[28px] items-start justify-start md:px-[20px] md:w-[100%] w-[95%]">
          <aside className="flex flex-col md:hidden justify-start w-[300px]">
            <div className="bg-gray_50 flex flex-col gap-[35px] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_group_8.svg"
                className="h-[35px] mt-[3px] w-[65%]"
                alt="Group"
              />
              <div className="flex flex-col gap-[375px] md:gap-[40px] items-center justify-start mb-[8px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
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
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] w-[45%]">
                      <Img
                        src="images/img_dollaraltsoli.svg"
                        className="h-[24px] w-[24px]"
                        alt="dollaraltSoli"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-start pr-[17px] py-[17px] rounded-[8px] w-[100%]">
                    <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[50%]">
                      <Img
                        src="images/img_file_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="file"
                      />
                      <Text
                        className="font-semibold text-blue_A700 text-left w-[auto]"
                        variant="body2"
                      >
                        Documents
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[61%]">
                      <Img
                        src="images/img_walletoutline.svg"
                        className="h-[24px] w-[24px]"
                        alt="walletOutline"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Wallet & Cards
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[54%]">
                      <Img
                        src="images/img_car.svg"
                        className="h-[24px] w-[24px]"
                        alt="car"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[43%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-[4px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] w-[45%]">
                      <Img
                        src="images/img_menu.svg"
                        className="h-[24px] w-[24px]"
                        alt="menu"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        variant="body2"
                      >
                        Messages
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
                <div className="flex font-opensans items-start justify-start p-[8px] w-[100%]">
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
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[42px] items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="header-row mt-[14px] mb-[13px]">
                  <Text
                    className="font-semibold text-bluegray_900 text-left"
                    as="h4"
                    variant="h4"
                  >
                    Documents
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-row font-opensans gap-[24px] sm:hidden items-center justify-between w-[14%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex h-[56px] items-end justify-start p-[8px] rounded-[50%] w-[56px]">
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
                  <div className="border-[1px] border-blue_A701 border-solid flex h-[56px] items-center justify-start p-[4px] rounded-[50%] w-[56px]">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                      alt="ProfileImgLarg"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
              <div className="bg-gray_50 flex flex-col gap-[12px] h-[196px] md:h-[auto] items-center justify-center max-w-[1022px] outline outline-[2px] outline-blue_A700 sm:px-[20px] px-[32px] py-[15px] rounded-[6px] w-[100%]">
                <Img
                  src="images/img_file_26X26.svg"
                  className="h-[26px] w-[26px]"
                  alt="file One"
                />
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body1"
                >
                  Add a File Here or
                </Text>
                <Button
                  className="flex items-center justify-center min-w-[96px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_upload.svg"
                      className="mr-[8px] text-center"
                      alt="upload"
                    />
                  }
                  shape="RoundedBorder6"
                  size="md"
                  variant="OutlineBlueA700"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-blue_A700 text-left">
                    Upload
                  </div>
                </Button>
              </div>
              <List
                className="flex-col gap-[22.95px] grid items-center pb-[3px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-row gap-[7px] items-center justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="file Two"
                      />
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-[14px] text-blue_A700 text-center w-[auto]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA700"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-row gap-[7px] items-center justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="file Three"
                      />
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-[14px] text-blue_A700 text-center w-[auto]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA700"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-row gap-[7px] items-center justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="file Four"
                      />
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-[14px] text-blue_A700 text-center w-[auto]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA700"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-row gap-[7px] items-center justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="file Five"
                      />
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-[14px] text-blue_A700 text-center w-[auto]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA700"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintPage;
