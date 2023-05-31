import React from "react";
import { Data } from "../../fakeData";

const Property = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <h1 className="text-white text-4xl">
          ویژگی های <span className="font-bold text-pink-600">بلست</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mx-auto lg:max-w-[1240px]  mt-10 p-3 rtl">
        {Data.map((e) => {
          return (
            <div
              className="text-black rounded-xl flex flex-row items-center justify-start gap-4 bg-white px-1 py-5  "
              key={e.id}
            >
              <div
                style={{ backgroundColor: e.color }}
                className="border rounded-3xl p-2 text-white"
              >
                {e.icon}
              </div>
              <div className="flex flex-col items-center text-right gap-4">
                <p className="font-bold">{e.name}</p>
                <p className="text-slate-500">{e.shortDetail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Property;
