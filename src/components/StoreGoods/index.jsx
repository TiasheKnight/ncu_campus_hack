import React from "react";

import { Img, Text } from "components";

const StoreGoods = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[374px] md:h-auto object-cover w-[374px] sm:w-full"
          src="images/img_rectangle5.png"
          alt="rectangleFive_One"
        />
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
          size="txtInterRegular40"
        >
          {props?.text1}
        </Text>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
          <Img
            className="h-[374px] md:h-auto object-cover w-[374px] sm:w-full"
            src="images/img_rectangle5.png"
            alt="rectangleFive_One"
          />
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
            size="txtInterRegular40"
          >
            {props?.text1}
          </Text>
        </div>
      </div>
    </>
  );
};

StoreGoods.defaultProps = {
  text: "緊急的呼喚號角 15 $",
  text1: "緊急的呼喚號角 15 $",
};

export default StoreGoods;
