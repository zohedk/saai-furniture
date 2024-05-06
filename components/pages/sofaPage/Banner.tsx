import React from "react";

interface BannerProp {
  location?: string;
}

const locationStyle = "font-bold capitalize mr-[5px] ml-[5px]";

export const SofaBanner: React.FC<BannerProp> = ({ location }) => {
  return (
    <div
      className="relative w-screen h-[40vh] flex flex-col justify-center items-center bg-[#0000006e] bg-blend-multiply bg-cover bg-no-repeat bg-center gap-[10px]"
      style={{
        backgroundImage: "url('/sofa/banner-bg.jpeg')",
      }}
    >
      <h1 className="text-[20px] mobile:text-[35px] flex justify-center items-center font-bold text-white box-content pl-[20px] pr-[20px]  bg-[#00000085]">
        Sofa Set
        {location && (
          <span className="mr-[5px] ml-[5px]">
            Manufacturers{" "}
            {location && (
              <span className={`${locationStyle}`}>, {location}</span>
            )}
          </span>
        )}
      </h1>
    </div>
  );
};
