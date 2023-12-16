import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="common-pointer h-[70px] mb-[59px] ml-11 md:ml-[0] md:mt-0 mt-12"
          src="images/img_home.svg"
          alt="home"
          onClick={() => navigate("/homelistsystemmanager")}
        />
        <Img
          className="h-[120px] md:ml-[0] ml-[19px] md:mt-0 my-[29px] w-[120px]"
          src="images/img_returnbutton.svg"
          alt="returnbutton"
        />
        <Text
          className="mb-11 md:ml-[0] ml-[529px] md:mt-0 mt-9 md:text-5xl text-[80px] text-amber-A400 text-center"
          size="txtInterRegular80"
        >
          發布警告
        </Text>
        <div className="bg-red-800 flex md:flex-col flex-row gap-2.5 h-[91px] md:h-auto items-center justify-center mb-[50px] md:ml-[0] ml-[440px] mr-[101px] md:mt-0 mt-[37px] px-10 sm:px-5 py-2.5 rounded-[45px] w-[258px]">
          <Img
            className="h-12 md:h-auto object-cover w-12"
            src="images/img_check1.png"
            alt="checkOne"
          />
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_a2 w-auto"
            size="txtInterExtraBold40"
          >
            完成
          </Text>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
