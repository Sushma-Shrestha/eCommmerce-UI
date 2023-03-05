import React from "react";

import { Img, Input, Text, Button, List, Slider, TextArea } from "components";
import { CloseSVG } from "../../assets/images";

const AuctionBIddingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[35px] items-center justify-start mx-[auto] pb-[57px] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] shadow-bs1 w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[90%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                <Img
                  src="images/img_group_35X162.svg"
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
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1268px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[8px] shadow-bs md:w-[100%] w-[63%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <Img
                src="images/img_rectangle1380.png"
                className="h-[516px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                alt="Rectangle1380"
              />
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between mt-[30px] pb-[4px] w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[23px] items-start justify-start sm:mt-[0] mt-[8px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Secluded intown Treehouse
                  </Text>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row gap-[30px] items-center justify-between sm:w-[100%] w-[18%]">
                  <Button
                    className="cursor-pointer flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    onClick={() => sliderRef.current?.slidePrev?.()}
                    size="mdIcn"
                    variant="icbOutlineBlueA700"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[24px]"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    onClick={() => sliderRef.current?.slideNext?.()}
                    size="mdIcn"
                    variant="icbOutlineBlack9000c"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[24px]"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
              <Text
                className="font-semibold mt-[35px] text-black_900 text-left w-[auto]"
                variant="body1"
              >
                Review
              </Text>
              <div className="flex flex-row gap-[8px] items-end justify-start mt-[21px] md:w-[100%] w-[26%]">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                  alt="ProfileImgLarg"
                />
                <div className="flex flex-col gap-[9px] items-center justify-start mb-[3px] mt-[7px] w-[66%]">
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    variant="body2"
                  >
                    Leslie Alexander
                  </Text>
                  <div className="flex flex-row items-center justify-evenly md:w-[100%] w-[98%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Three"
                    />
                    <Img
                      src="images/img_star_20X20.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Four"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="font-medium leading-[26.00px] mt-[16px] text-bluegray_400 text-left w-[100%]"
                variant="body2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                congue purus sodales tincidunt. Egestas nunc habitant facilisi
                porttitor felis sit cras nulla in.
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[30px] sm:px-[20px] rounded-[8px] shadow-bs md:w-[100%] w-[36%]">
            <div className="flex flex-col items-start justify-start mb-[2px] mt-[7px] w-[100%]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Place Your Bid
              </Text>
              <div className="flex flex-row items-start justify-between mt-[31px] pt-[5px] w-[100%]">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[45%]">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Ends In
                  </Text>
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-[18px] text-center text-gray_901 w-[45px]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="FillBlue50"
                    >
                      00
                    </Button>
                    <Img
                      src="images/img_group24.svg"
                      className="h-[20px] w-[auto]"
                      alt="GroupTwentyFour"
                    />
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-[18px] text-center text-gray_901 w-[45px]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="FillBlue50"
                    >
                      00
                    </Button>
                    <Img
                      src="images/img_group24.svg"
                      className="h-[20px] w-[auto]"
                      alt="Group9828"
                    />
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-[18px] text-center text-gray_901 w-[45px]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="FillBlue50"
                    >
                      00
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Highest Bid
                  </Text>
                  <Text
                    className="font-bold text-blue_A700 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    $20,000
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start mt-[32px] pt-[9px] w-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-black_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Bids History
                  </Text>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="flex-col gap-[16px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-gray_50 border-[1px] border-bluegray_100 border-solid flex flex-1 items-center justify-start p-[8px] rounded-[6px] w-[100%]">
                    <div className="flex flex-row items-center justify-start rounded-[3px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_rectangle755.png"
                        className="h-[54px] md:h-[auto] object-cover rounded-[3px] w-[54px]"
                        alt="Rectangle755"
                      />
                      <Text
                        className="font-medium ml-[8px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-bold ml-[112px] text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50 border-[1px] border-bluegray_100 border-solid flex flex-1 items-center justify-start p-[8px] rounded-[6px] w-[100%]">
                    <div className="flex flex-row items-center justify-start rounded-[3px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_rectangle755.png"
                        className="h-[54px] md:h-[auto] object-cover rounded-[3px] w-[54px]"
                        alt="Rectangle755 One"
                      />
                      <Text
                        className="font-medium ml-[8px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-bold ml-[112px] text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50 border-[1px] border-bluegray_100 border-solid flex flex-1 items-center justify-start p-[8px] rounded-[6px] w-[100%]">
                    <div className="flex flex-row items-center justify-start rounded-[3px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_rectangle755.png"
                        className="h-[54px] md:h-[auto] object-cover rounded-[3px] w-[54px]"
                        alt="Rectangle755 Two"
                      />
                      <Text
                        className="font-medium ml-[8px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-bold ml-[112px] text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-[32px] w-[100%]"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col gap-[4px] items-start justify-start mx-[10px]">
                      <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body1"
                        >
                          Your Bid Amount
                        </Text>
                      </div>
                      <Input
                        className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                        wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                        name="InputField One"
                        placeholder="Enter amount"
                        shape="RoundedBorder6"
                        size="md"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <Button
                className="cursor-pointer font-medium mt-[40px] text-[16px] text-center text-white_A700 w-[390px]"
                shape="RoundedBorder6"
              >
                Place Your Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionBIddingPage;
