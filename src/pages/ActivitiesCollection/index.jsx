import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";

const ActivitiesCollectionPage = () => {
  const table6Data = React.useRef([
    {
      twoHundredNinetySix: "運動會",
      twoHundredNinetySeven: "校級活動",
      rowtwohundredninetyeight: "xxxx/xx/xx",
      threeHundred: "xxx / xxxx",
    },
    {
      twoHundredNinetySix: "SA 報告會",
      twoHundredNinetySeven: "系級活動",
      rowtwohundredninetyeight: "xxxx/xx/xx",
      threeHundred: "xxx / xxx",
    },
    {
      twoHundredNinetySix: "SA 報告會",
      twoHundredNinetySeven: "系級活動",
      rowtwohundredninetyeight: "xxxx/xx/xx",
      threeHundred: "xxx / xxx",
    },
    {
      twoHundredNinetySix: "SA 報告會",
      twoHundredNinetySeven: "系級活動",
      rowtwohundredninetyeight: "xxxx/xx/xx",
      threeHundred: "xxx / xxx",
    },
    {
      twoHundredNinetySix: "SA 報告會",
      twoHundredNinetySeven: "系級活動",
      rowtwohundredninetyeight: "xxxx/xx/xx",
      threeHundred: "xxx / xxx",
    },
  ]);
  const navigate = useNavigate();
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();
    return [
      table6ColumnHelper.accessor("twoHundredNinetySix", {
        cell: (info) => (
          <Text
            className="pb-[25px] pl-[11px] pt-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[364px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            活動名稱
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("twoHundredNinetySeven", {
        cell: (info) => (
          <Text
            className="pb-[25px] pl-1.5 pt-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[329px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            活動類型
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("rowtwohundredninetyeight", {
        cell: (info) => (
          <div className="flex flex-row gap-[146px] items-start justify-end p-[21px] sm:px-5">
            <Text
              className="mt-[69px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxx
            </Text>
            <Text
              className="mb-0.5 mt-[67px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[77px] items-center justify-end min-w-[470px] md:pr-10 sm:pr-5 pr-[116px]">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動舉辦人
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              日期
            </Text>
          </div>
        ),
      }),
      table6ColumnHelper.accessor("threeHundred", {
        cell: (info) => (
          <Text
            className="pb-[23px] sm:pl-5 pl-[35px] pt-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[535px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            目前參與人數/ 活動人數上限
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 flex flex-col gap-[15px] h-max inset-[0] justify-center m-auto pt-[221px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[69px] mr-[1416px] md:px-5 w-[23%] md:w-full">
            <Text
              className="bg-white-A700 border-2 border-black-900 border-solid justify-center md:mt-0 my-[9px] pl-[31px] pr-[35px] sm:px-5 py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[356px]"
              size="txtInterRegular30"
            >
              請輸入活動名稱
            </Text>
            <Img
              className="h-[74px] md:ml-[0] ml-[5px] w-[74px]"
              src="images/img_search.svg"
              alt="search_One"
            />
          </div>
          <div className="md:h-[738px] h-[760px] md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto top-[0] w-[89%]">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table6Columns}
                  data={table6Data.current}
                  rowClass={"border-b border-black-900"}
                  headerClass=""
                />
              </div>
              <Line className="bg-black-900 h-px mt-[91px] w-full" />
            </div>
            <Img
              className="absolute bottom-[0] h-[114px] inset-x-[0] mx-auto"
              src="images/img_bottom.svg"
              alt="bottom"
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
            className="h-[120px] ml-12 md:ml-[0] w-[120px]"
            src="images/img_returnbutton.svg"
            alt="returnbutton"
          />
          <Text
            className="md:ml-[0] ml-[383px] md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            收藏活動紀錄
          </Text>
        </div>
      </div>
    </>
  );
};

export default ActivitiesCollectionPage;
