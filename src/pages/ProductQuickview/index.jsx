import React from "react";

import { Img, Input, Text, Button, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";

const ProductQuickviewPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-[40px] md:gap-[40px] gap-[70px] items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group_9.svg"
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
          <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start md:w-[100%] w-[49%]">
            <div className="flex md:flex-col flex-row gap-[8px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start rounded-[6px] md:w-[100%] w-[auto]">
                <Img
                  src="images/img_rectangle1213.png"
                  className="h-[96px] md:h-[auto] object-cover rounded-[6px] w-[96px]"
                  alt="Rectangle1213"
                />
                <Img
                  src="images/img_rectangle1214.png"
                  className="h-[96px] md:h-[auto] object-cover rounded-[6px] w-[96px]"
                  alt="Rectangle1214"
                />
                <Img
                  src="images/img_rectangle1215.png"
                  className="h-[96px] md:h-[auto] object-cover rounded-[6px] w-[96px]"
                  alt="Rectangle1215"
                />
                <Img
                  src="images/img_rectangle1216.png"
                  className="h-[96px] md:h-[auto] object-cover rounded-[6px] w-[96px]"
                  alt="Rectangle1216"
                />
                <Img
                  src="images/img_rectangle1217.png"
                  className="h-[96px] md:h-[auto] object-cover rounded-[6px] w-[96px]"
                  alt="Rectangle1217"
                />
              </div>
              <Img
                src="images/img_rectangle163.png"
                className="sm:flex-1 h-[512px] md:h-[auto] object-cover rounded-[4px] sm:w-[100%] w-[512px]"
                alt="Rectangle163"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between rounded-[6px] w-[100%]">
              <Button
                className="cursor-pointer font-medium text-[18px] text-blue_A700 text-center w-[300px]"
                shape="RoundedBorder6"
                variant="OutlineBlueA700"
              >
                Add to Cart
              </Button>
              <Button
                className="cursor-pointer font-medium text-[18px] text-center text-white_A700 w-[300px]"
                shape="RoundedBorder6"
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[50%]">
            <Text
              className="font-gilroy font-medium leading-[32.00px] text-bluegray_900 text-left w-[100%]"
              as="h5"
              variant="h5"
            >
              OnePlus 10R 5G (Sierra Black, 12GB RAM, 256GB Storage, 150W
              SuperVOOC)
            </Text>
            <div className="flex flex-row font-gilroy sm:gap-[40px] items-start justify-between mt-[24px] w-[100%]">
              <div className="flex flex-row gap-[8px] items-start justify-between w-[47%]">
                <Img
                  src="images/img_star_24X24.svg"
                  className="h-[24px] w-[24px]"
                  alt="star"
                />
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    variant="body1"
                  >
                    4.3/5
                  </Text>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    (112 Ratings l 94 Reviews)
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_share.svg"
                className="h-[24px] w-[24px]"
                alt="share"
              />
            </div>
            <Text
              className="font-hairline font-urbanist italic mt-[36px] text-black_902 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              <span className="md:text-[26px] sm:text-[24px] text-colors4 text-[28px] font-gilroy font-semibold">
                $499
              </span>
              <span className="md:text-[22px] sm:text-[20px] text-colors4 text-[24px] font-gilroy font-fw">
                {" "}
              </span>
              <span className="text-colors3 text-[16px] font-gilroy font-semibold line-through">
                $599
              </span>
            </Text>
            <div className="flex flex-col font-gilroy gap-[16px] items-start justify-start mt-[37px] md:w-[100%] w-[28%]">
              <SelectBox
                className="font-medium text-[18px] text-black_902 text-left sm:w-[100%] w-[53%]"
                placeholderClassName="text-black_902"
                name="Group9970"
                placeholder="Shades"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_902.svg"
                    className="h-[24px] mr-[0] w-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Img
                src="images/img_group9981.svg"
                className="h-[34px] w-[100%]"
                alt="Group9981"
              />
            </div>
            <List
              className="sm:flex-col flex-row font-gilroy gap-[24px] grid sm:grid-cols-1 grid-cols-4 mt-[24px] w-[68%]"
              orientation="horizontal"
            >
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start rounded-[12px] w-[100%]">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbOutlineBluegray101"
                  >
                    <Img
                      src="images/img_checkmark_87X87.svg"
                      className="h-[58px]"
                      alt="checkmark"
                    />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body4"
                  >
                    100% <br />
                    Authentic
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start rounded-[12px] w-[100%]">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="lgIcn"
                    variant="icbOutlineBluegray101"
                  >
                    <Img
                      src="images/img_reply.svg"
                      className="h-[52px]"
                      alt="reply"
                    />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body4"
                  >
                    15 days
                    <br />
                    Returns
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start rounded-[12px] w-[100%]">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="xlIcn"
                    variant="icbOutlineBluegray101"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className=""
                      alt="Vector"
                    />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body4"
                  >
                    COD
                    <br />
                    Available
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start rounded-[12px] w-[100%]">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="lgIcn"
                    variant="icbOutlineBluegray101"
                  >
                    <Img
                      src="images/img_car_87X87.svg"
                      className=""
                      alt="car"
                    />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body4"
                  >
                    Free
                    <br />
                    Delivery
                  </Text>
                </div>
              </div>
            </List>
            <Text
              className="font-gilroy font-medium leading-[28.00px] mt-[24px] text-black_900 text-left"
              variant="body2"
            >
              <span className="text-colors5 text-[16px] font-bold">
                About this item
              </span>
              <span className="text-colors5 text-[16px]">
                <br />
              </span>
              <span className="text-colors3 text-[16px]">
                Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera
                with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471
                <br />
                Camera Features: Nightscape2.0, Super Macro, UltraShot HDR,
                Smart Scene Recognition, Portrait mode, Pro mode, Panorama,
                Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video
                HDR, Video Portrait Timelapse, Hyperlapse Mode
                <br />
                Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X
                1080 pixels 394 ppi; Aspect Ratio: 20:9
                <br />
                Display Features: Hyper Touch Mode, Reading Mode, Night Mode,
                Eye Comfort Mode, Auto brightness
                <br />
                Operating System: OxygenOS based on Android 12
                <br />
                Processor: MTK D8100 Max
                <br />
                Battery & Charging: 5000 mAh with 80W SuperVOOC
                <br />
                In-Display Fingerprint Sensor
                <br />
                Special Features: Hyperboost gaming engine
                <br />
                Alexa Hands-Free capable: Download the Alexa app to use Alexa
                hands-free. Play music, make calls, hear news, open apps,
                navigate, and more, all using just your voice, while on-the-go.
                <br />
                Show Less
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuickviewPage;
