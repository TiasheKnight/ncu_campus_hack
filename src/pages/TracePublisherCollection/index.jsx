import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";

const TracePublisherCollectionPage = () => {
  const table4Data = React.useRef([
    {
      oneHundredThirtyEight: "運動會",
      oneHundredThirtyNine: "校級活動",
      rowonehundredforty: "xxxx/xx/xx",
      oneHundredFortyTwo: "xxx / xxxx",
    },
    {
      oneHundredThirtyEight: "SA 報告會",
      oneHundredThirtyNine: "系級活動",
      rowonehundredforty: "xxxx/xx/xx",
      oneHundredFortyTwo: "xxx / xxx",
    },
  ]);
  const navigate = useNavigate();
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("oneHundredThirtyEight", {
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
      table4ColumnHelper.accessor("oneHundredThirtyNine", {
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
      table4ColumnHelper.accessor("rowonehundredforty", {
        cell: (info) => (
          <div className="flex flex-row gap-[158px] items-start justify-end p-[21px] sm:px-5">
            <Text
              className="mb-[3px] mt-[66px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              111
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
      table4ColumnHelper.accessor("oneHundredFortyTwo", {
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
        <div className="absolute bg-blue_gray-100 flex flex-col md:gap-10 gap-[328px] h-max inset-[0] items-center justify-center m-auto pt-[310px] w-full">
          <div className="flex flex-col items-center justify-end max-w-[1700px] md:px-5 w-full">
            <div className="overflow-auto w-full">
              <ReactTable
                columns={table4Columns}
                data={table4Data.current}
                rowClass={"border-b border-black-900"}
                headerClass=""
              />
            </div>
            <Line className="bg-black-900 h-px mt-[91px] w-full" />
          </div>
          <Img className="h-[114px]" src="images/img_bottom.svg" alt="bottom" />
        </div>
        <div className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[23px] sm:px-5 top-[0] w-full">
          <Img
            className="common-pointer h-[70px] md:ml-[0] ml-[21px]"
            src="images/img_home.svg"
            alt="home"
            onClick={() => navigate("/homenormaluser")}
          />
          <Img
            className="h-[120px] mb-3 ml-12 md:ml-[0] w-[120px]"
            src="images/img_returnbutton.svg"
            alt="returnbutton"
          />
          <Text
            className="md:ml-[0] ml-[343px] md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            追蹤使用者紀錄
          </Text>
        </div>
      </div>
    </>
  );
};

export default TracePublisherCollectionPage;
