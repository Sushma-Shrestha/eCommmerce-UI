import React from "react";

import { Img, Text, Input, Button } from "components";

const GuestLoginPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex font-gilroy items-center justify-start mx-[auto] p-[150px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[62px] items-center justify-start mb-[332px] md:w-[100%] w-[45%]">
          <Img
            src="images/img_group_6.svg"
            className="h-[35px] w-[32%]"
            alt="Group"
          />
          <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
            <Text
              className="font-semibold text-bluegray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Login as a Guest
            </Text>
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[4px] items-start justify-start sm:w-[100%] w-[512px]">
                <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Email
                  </Text>
                </div>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                  type="email"
                  name="email"
                  placeholder="jane@gmail.com"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Password
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-end justify-start mt-[4px] w-[100%]">
                  <Input
                    className="font-medium md:h-[auto] p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    type="password"
                    name="password"
                    placeholder="*********"
                    suffix={
                      <Img
                        src="images/img_eye.svg"
                        className="ml-[35px] mr-[12px] my-[auto]"
                        alt="eye"
                      />
                    }
                    shape="RoundedBorder6"
                    size="sm"
                    variant="OutlineBluegray100"
                  ></Input>
                  <Text
                    className="font-medium text-blue_A700 text-left w-[auto]"
                    variant="body1"
                  >
                    Forgot Password?
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium text-[16px] text-center text-white_A700 w-[512px]"
                shape="RoundedBorder6"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestLoginPage;
