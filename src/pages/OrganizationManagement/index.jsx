import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const OrganizationManagementPage = () => {
  const table1Data = React.useRef([
    { thirty: "學生會", thirtyOne: "學生會長", thirtyTwo: "關注" },
    { thirty: "中文系學會", thirtyOne: "中文系會長", thirtyTwo: "關注" },
    { thirty: "資管系學會", thirtyOne: "資管系會長", thirtyTwo: "關注" },
    { thirty: "萬紫千紅", thirtyOne: "白天一朵花", thirtyTwo: "關注" },
    { thirty: "邀醉", thirtyOne: "千杯不醉", thirtyTwo: "關注" },
    { thirty: "網球社", thirtyOne: "網球社社長", thirtyTwo: "關注" },
    { thirty: "學務處", thirtyOne: "學務處主任", thirtyTwo: "關注" },
  ]);
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("thirty", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-6 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[364px] pb-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            組織名稱
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("thirtyOne", {
        cell: (info) => (
          <Text
            className="pb-[35px] pl-[5px] pt-6 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[327px] pb-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            創辦管理員
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("thirtyTwo", {
        cell: (info) => (
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between pr-1.5 py-1.5">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxxxxxxxxxxxxxxxxxxxxx
            </Text>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[177px] md:mt-0 my-3 text-3xl sm:text-[26px] md:text-[28px] text-center"
              shape="round"
              color="green_800_01"
              size="md"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[1008px] pb-[35px] pl-0.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            組織介紹
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex font-inter h-[1080px] justify-end mx-auto relative w-full">
        <div className="md:h-[1071px] h-[1178px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 h-[1071px] inset-x-[0] mx-auto top-[1%] w-full"></div>
          <div className="overflow-auto absolute bottom-[0] inset-x-[0] mx-auto w-[89%]">
            <ReactTable
              columns={table1Columns}
              data={table1Data.current}
              rowClass={"border-b border-black-900"}
              headerClass=""
            />
          </div>
          <div className="absolute md:h-64 h-[284px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-blue_gray-700 flex flex-row md:gap-10 gap-[735px] inset-x-[0] items-center justify-start mx-auto p-[39px] sm:px-5 top-[0] w-full">
              <Img
                className="common-pointer h-[70px] ml-1"
                src="images/img_home.svg"
                alt="home"
                onClick={() => navigate("/homenormaluser")}
              />
              <Text
                className="md:text-5xl text-[80px] text-amber-A400 text-center"
                size="txtInterRegular80"
              >
                組織
              </Text>
            </div>
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-semibold h-64 leading-[normal] right-[3%] rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-center w-64"
              onClick={() => navigate("/organizationcreate")}
              shape="circle"
              color="light_blue_800"
              size="xl"
              variant="fill"
            >
              創建組織
            </Button>
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-semibold h-64 leading-[normal] right-[20%] rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-center w-64"
              onClick={() => navigate("/organizationedit")}
              shape="circle"
              color="light_green_900"
              size="xl"
              variant="fill"
            >
              編輯組織
            </Button>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-center justify-start left-[4%] md:px-5 top-[21%] w-[23%]">
          <Text
            className="bg-white-A700 border-2 border-black-900 border-solid justify-center sm:mt-0 my-[9px] pl-[31px] pr-[35px] sm:px-5 py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[356px]"
            size="txtInterRegular30"
          >
            請輸入組織名稱
          </Text>
          <Img
            className="h-[74px] sm:ml-[0] ml-[5px] w-[74px]"
            src="images/img_search.svg"
            alt="search_One"
          />
        </div>
      </div>
    </>
  );
};

export default OrganizationManagementPage;
