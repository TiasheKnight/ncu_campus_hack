import React from "react";

import { Button } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-[229px] mr-[215px] my-[19px] w-[77%]">
          <Button
            className="cursor-pointer font-inter font-semibold h-[74px] leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-[212px]"
            shape="round"
            color="teal_900"
            size="md"
            variant="fill"
          >
            校級活動
          </Button>
          <Button
            className="cursor-pointer font-inter font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[212px]"
            shape="round"
            color="blue_700"
            size="md"
            variant="fill"
          >
            系級活動
          </Button>
          <Button
            className="cursor-pointer font-inter font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[212px]"
            shape="round"
            color="green_900"
            size="md"
            variant="fill"
          >
            社團活動
          </Button>
          <Button
            className="cursor-pointer font-inter font-semibold h-[74px] leading-[normal] ml-6 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-center w-[292px]"
            shape="round"
            color="lime_800_01"
            size="md"
            variant="fill"
          >
            靜態休閒活動
          </Button>
          <Button
            className="cursor-pointer font-inter font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[22px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[292px]"
            shape="round"
            color="blue_800"
            size="md"
            variant="fill"
          >
            動態休閒活動
          </Button>
          <Button
            className="cursor-pointer font-inter font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[132px]"
            shape="round"
            color="yellow_800"
            size="md"
            variant="fill"
          >
            其他
          </Button>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
