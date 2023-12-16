import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const PropsManagerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="sm:h-[1071px] h-[1080px] md:h-[1955px] m-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-end pl-2.5 py-2.5 w-full">
              <div className="md:h-[598px] sm:h-[830px] h-[837px] md:mt-0 mt-[212px] relative w-[24%] md:w-full">
                <div className="md:h-[598px] sm:h-[830px] h-[837px] m-auto w-full">
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-1/2">
                    <div className="flex flex-col md:gap-10 gap-[272px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Img
                          className="h-[207px] md:h-auto object-cover w-[207px]"
                          src="images/img_rectangle5.png"
                          alt="rectangleFive"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtInterRegular30Black900"
                        >
                          <>
                            緊急的呼喚號角
                            <br />
                            *5
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Img
                          className="h-[207px] md:h-auto object-cover w-[207px]"
                          src="images/img_rectangle5.png"
                          alt="rectangleFive_One"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtInterRegular30Black900"
                        >
                          <>
                            緊急的呼喚號角
                            <br />
                            *5
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-auto">
                    <Img
                      className="h-[207px] md:h-auto object-cover w-[207px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive_Two"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterRegular30Black900"
                    >
                      <>
                        緊急的呼喚號角
                        <br />
                        *5
                      </>
                    </Text>
                  </div>
                  <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-auto">
                    <Img
                      className="h-[207px] md:h-auto object-cover w-[207px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive_Three"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterRegular30Black900"
                    >
                      <>
                        緊急的呼喚號角
                        <br />
                        *5
                      </>
                    </Text>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-auto">
                    <Img
                      className="h-[207px] md:h-auto object-cover w-[207px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive_Four"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterRegular30Black900"
                    >
                      <>
                        緊急的呼喚號角
                        <br />
                        *5
                      </>
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                  <Img
                    className="h-[207px] md:h-auto object-cover w-[207px]"
                    src="images/img_rectangle5.png"
                    alt="rectangleFive_Five"
                  />
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                    size="txtInterRegular30Black900"
                  >
                    <>
                      緊急的呼喚號角
                      <br />
                      *5
                    </>
                  </Text>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:mt-0 mt-[212px] w-[36%] md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[598px] h-[837px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[279px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Img
                          className="h-[207px] md:h-auto object-cover w-[207px]"
                          src="images/img_rectangle5.png"
                          alt="rectangleFive"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtInterRegular30Black900"
                        >
                          <>
                            緊急的呼喚號角
                            <br />
                            *5
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Img
                          className="h-[207px] md:h-auto object-cover w-[207px]"
                          src="images/img_rectangle5.png"
                          alt="rectangleFive_One"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtInterRegular30Black900"
                        >
                          <>
                            緊急的呼喚號角
                            <br />
                            *5
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
                    <Img
                      className="h-[207px] md:h-auto object-cover w-[207px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive_Two"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterRegular30Black900"
                    >
                      <>
                        緊急的呼喚號角
                        <br />
                        *5
                      </>
                    </Text>
                  </div>
                </div>
                <div className="md:h-[598px] h-[837px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[279px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Img
                          className="h-[207px] md:h-auto object-cover w-[207px]"
                          src="images/img_rectangle5.png"
                          alt="rectangleFive"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtInterRegular30Black900"
                        >
                          <>
                            緊急的呼喚號角
                            <br />
                            *5
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Img
                          className="h-[207px] md:h-auto object-cover w-[207px]"
                          src="images/img_rectangle5.png"
                          alt="rectangleFive_One"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtInterRegular30Black900"
                        >
                          <>
                            緊急的呼喚號角
                            <br />
                            *5
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
                    <Img
                      className="h-[207px] md:h-auto object-cover w-[207px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive_Two"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterRegular30Black900"
                    >
                      <>
                        緊急的呼喚號角
                        <br />
                        *5
                      </>
                    </Text>
                  </div>
                </div>
                <div className="h-[837px] relative w-full">
                  <div className="flex flex-col items-center justify-start mb-[-0.61px] mx-auto w-auto z-[1]">
                    <Img
                      className="h-[207px] md:h-auto object-cover w-[207px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive_Two"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterRegular30Black900"
                    >
                      <>
                        緊急的呼喚號角
                        <br />
                        *5
                      </>
                    </Text>
                  </div>
                  <div className="h-[558px] mt-auto mx-auto w-full">
                    <div className="flex flex-col items-center justify-start mb-[-0.61px] mx-auto w-auto z-[1]">
                      <Img
                        className="h-[207px] md:h-auto object-cover w-[207px]"
                        src="images/img_rectangle5.png"
                        alt="rectangleFive_One"
                      />
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterRegular30Black900"
                      >
                        <>
                          緊急的呼喚號角
                          <br />
                          *5
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-auto mx-auto w-auto">
                      <Img
                        className="h-[207px] md:h-auto object-cover w-[207px]"
                        src="images/img_rectangle5.png"
                        alt="rectangleFive"
                      />
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterRegular30Black900"
                      >
                        <>
                          緊急的呼喚號角
                          <br />
                          *5
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <Img
                className="h-[100px] md:ml-[0] ml-[660px] md:mt-0 mt-[162px] w-[100px]"
                src="images/img_discardbutton.svg"
                alt="discardbutton"
              />
            </div>
          </div>
          <div className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[29px] sm:px-5 top-[0] w-full">
            <Img
              className="common-pointer h-[70px] md:ml-[0] ml-[15px]"
              src="images/img_home.svg"
              alt="home"
              onClick={() => navigate("/homenormaluser")}
            />
            <Img
              className="h-[120px] md:ml-[0] ml-[19px] w-[120px]"
              src="images/img_returnbutton.svg"
              alt="returnbutton"
            />
            <Text
              className="md:ml-[0] ml-[547px] md:text-5xl text-[80px] text-amber-A400 text-center"
              size="txtInterRegular80"
            >
              道具包
            </Text>
          </div>
        </div>
        <div className="absolute bg-blue-100 bottom-[0] flex flex-col gap-[35px] items-center justify-center p-[23px] md:px-5 right-[0] w-[37%]">
          <div className="flex flex-col items-center justify-start mt-6 w-auto sm:w-full">
            <Img
              className="h-[482px] md:h-auto object-cover w-[482px] sm:w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive_Six"
            />
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-purple-500_01 w-auto"
              size="txtInterRegular50Purple50001"
            >
              緊急的呼喚號角
            </Text>
          </div>
          <Text
            className="mb-[13px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
            size="txtInterRegular50Black900"
          >
            <>
              能夠發布”緊急任務”的道具。
              <br />
              <br />
              傳說這個號角的聲音曾引來千萬的人潮。
            </>
          </Text>
        </div>
      </div>
    </>
  );
};

export default PropsManagerPage;
