import React from "react";
import researchImg from "../../public/images/research.png";
import { FcCalculator, FcLike, FcCustomerSupport } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="container mx-auto pt-20 rtl">
      <div className="flex justify-around flex-col items-center w-full">
        <div className="flex flex-col justify-center gap-8 text-center text-white">
          <h2 className="font-bold text-5xl">با برنامه جلو برو</h2>
          <p className="text-3xl ">
            با <span className="text-pink-600 font-bold">بلست</span> شروع کن
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-12 mt-14">
          <div className="flex flex-col items-center justify-center gap-4 bg-white w-52 h-60 rounded-2xl  shadow-lg shadow-slate-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59.59"
              height="56.032"
              viewBox="0 0 59.59 56.032"
            >
              <path
                id="Path_161"
                data-name="Path 161"
                d="M271.162-100.369a8.051,8.051,0,0,1-2.544-1.016q-5.849-3.555-11.695-7.114a9.1,9.1,0,0,1-1.233-.9,7.631,7.631,0,0,1-2.46-4.013,10.637,10.637,0,0,1-.277-2.567v-13.854a10.443,10.443,0,0,1,.141-1.7,7.7,7.7,0,0,1,2.362-4.477,9.834,9.834,0,0,1,1.63-1.215q3.506-2.122,7-4.258c.92-.564,1.836-1.137,2.737-1.733.146-.1.273-.221.411-.326l1.436-.875a8.607,8.607,0,0,1,1.036-.532,6.666,6.666,0,0,1,4.11-.46,8.041,8.041,0,0,1,2.544,1.016q5.849,3.555,11.695,7.114a9.1,9.1,0,0,1,1.233.9,7.622,7.622,0,0,1,2.46,4.013,10.647,10.647,0,0,1,.28,2.567q0,6.93,0,13.854a10.736,10.736,0,0,1-.141,1.7,7.694,7.694,0,0,1-2.362,4.477,9.861,9.861,0,0,1-1.632,1.215q-3.505,2.122-7,4.258c-.92.564-1.836,1.137-2.737,1.733-.143.1-.27.221-.409.326l-1.438.875a8.417,8.417,0,0,1-1.036.532A6.666,6.666,0,0,1,271.162-100.369Z"
                transform="translate(-232.436 145.549)"
                fill="#bafef1"
              ></path>
              <g
                id="Group_259"
                data-name="Group 259"
                transform="translate(0 10.758)"
              >
                <path
                  id="Path_402"
                  data-name="Path 402"
                  d="M118.176,34.085l-4.3-5.845a1.183,1.183,0,1,0-1.906,1.4l3.753,5.1-4.065,4.838a1.182,1.182,0,1,0,1.811,1.52l4.663-5.55A1.183,1.183,0,0,0,118.176,34.085Z"
                  transform="translate(-111.378 -20.753)"
                ></path>
                <path
                  id="Path_403"
                  data-name="Path 403"
                  d="M135.13,39.575l-4.065-4.838,3.753-5.1a1.183,1.183,0,1,0-1.906-1.4l-4.3,5.845a1.183,1.183,0,0,0,.047,1.461l4.663,5.55a1.182,1.182,0,0,0,1.811-1.52Z"
                  transform="translate(-88.179 -20.753)"
                ></path>
                <circle
                  id="Ellipse_89"
                  data-name="Ellipse 89"
                  cx="1.336"
                  cy="1.336"
                  r="1.336"
                  transform="translate(22.279 21.674)"
                ></circle>
                <path
                  id="Path_404"
                  data-name="Path 404"
                  d="M150.168,52.442l-.014-.021a34.7,34.7,0,0,0-2.216-4.327c-5.188-8.529-1.492-21.657-1.454-21.789a1.183,1.183,0,0,0-2.272-.657c-.166.577-4.027,14.249,1.707,23.676a30.807,30.807,0,0,1,1.525,2.863c-1.953.539-6.462,1.457-14.383,1.355a63.584,63.584,0,0,1-14.381-1.4c.449-.941.939-1.885,1.506-2.821,5.734-9.427,1.873-23.1,1.707-23.676a1.183,1.183,0,0,0-2.272.657c.038.132,3.734,13.26-1.454,21.789a34.541,34.541,0,0,0-2.227,4.36l-.017.024,0,.021a38.985,38.985,0,0,0-3.086,16.474,1.183,1.183,0,0,0,1.178,1.1l.085,0a1.183,1.183,0,0,0,1.1-1.263,37.359,37.359,0,0,1,2.525-14.461c1.993.532,6.765,1.5,15.324,1.563.255,0,.506,0,.757,0,8.089,0,12.645-.981,14.594-1.542A37.393,37.393,0,0,1,150.91,68.8a1.183,1.183,0,0,0,1.1,1.263l.085,0a1.183,1.183,0,0,0,1.177-1.1,38.973,38.973,0,0,0-3.1-16.5Z"
                  transform="translate(-109.438 -24.796)"
                ></path>
              </g>
            </svg>
            <p className="text-black font-bold">کاهش وزن</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white w-52 h-60 rounded-2xl  shadow-lg shadow-slate-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.414"
              height="53.075"
              viewBox="0 0 60.414 53.075"
            >
              <path
                id="Path_161"
                data-name="Path 161"
                d="M271.162-100.369a8.051,8.051,0,0,1-2.544-1.016q-5.849-3.555-11.695-7.114a9.1,9.1,0,0,1-1.233-.9,7.631,7.631,0,0,1-2.46-4.013,10.637,10.637,0,0,1-.277-2.567v-13.854a10.443,10.443,0,0,1,.141-1.7,7.7,7.7,0,0,1,2.362-4.477,9.834,9.834,0,0,1,1.63-1.215q3.506-2.122,7-4.258c.92-.564,1.836-1.137,2.737-1.733.146-.1.273-.221.411-.326l1.436-.875a8.607,8.607,0,0,1,1.036-.532,6.666,6.666,0,0,1,4.11-.46,8.041,8.041,0,0,1,2.544,1.016q5.849,3.555,11.695,7.114a9.1,9.1,0,0,1,1.233.9,7.622,7.622,0,0,1,2.46,4.013,10.647,10.647,0,0,1,.28,2.567q0,6.93,0,13.854a10.736,10.736,0,0,1-.141,1.7,7.694,7.694,0,0,1-2.362,4.477,9.861,9.861,0,0,1-1.632,1.215q-3.505,2.122-7,4.258c-.92.564-1.836,1.137-2.737,1.733-.143.1-.27.221-.409.326l-1.438.875a8.417,8.417,0,0,1-1.036.532A6.666,6.666,0,0,1,271.162-100.369Z"
                transform="translate(-252.953 145.549)"
                fill="#fffb91"
              ></path>
              <g
                id="Group_258"
                data-name="Group 258"
                transform="translate(17.148 2.758)"
              >
                <path
                  id="Path_398"
                  data-name="Path 398"
                  d="M179.109,30.3h-1.726a12.4,12.4,0,0,0-23.435,0h-1.729a8.2,8.2,0,0,0-8.188,8.188V64.1a8.2,8.2,0,0,0,8.188,8.188h26.889A8.2,8.2,0,0,0,187.3,64.1V38.49A8.2,8.2,0,0,0,179.109,30.3Zm-13.445-5.97a10.115,10.115,0,1,1-10.115,10.115A10.127,10.127,0,0,1,165.664,24.332ZM184.932,64.1a5.831,5.831,0,0,1-5.824,5.824H152.219A5.831,5.831,0,0,1,146.4,64.1V38.49a5.831,5.831,0,0,1,5.824-5.824h1.144a12.618,12.618,0,0,0-.18,1.78,12.48,12.48,0,0,0,24.96,0,12.273,12.273,0,0,0-.18-1.78h1.144a5.831,5.831,0,0,1,5.824,5.824Z"
                  transform="translate(-144.031 -21.967)"
                ></path>
                <path
                  id="Path_399"
                  data-name="Path 399"
                  d="M170.207,34.943H149.479a1.182,1.182,0,0,0,0,2.365h20.727a1.182,1.182,0,0,0,0-2.365Z"
                  transform="translate(-138.21 -4.261)"
                ></path>
                <path
                  id="Path_400"
                  data-name="Path 400"
                  d="M170.207,37.832H149.479a1.182,1.182,0,0,0,0,2.365h20.727a1.182,1.182,0,0,0,0-2.365Z"
                  transform="translate(-138.21 -0.319)"
                ></path>
                <path
                  id="Path_401"
                  data-name="Path 401"
                  d="M153.862,33.442a1.181,1.181,0,0,0,1.182-1.182V26.02a1.182,1.182,0,0,0-2.365,0v6.24A1.183,1.183,0,0,0,153.862,33.442Z"
                  transform="translate(-132.229 -18.049)"
                ></path>
              </g>
            </svg>
            <p className="text-black font-bold">افزایش وزن</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white w-52 h-60 rounded-2xl  shadow-lg shadow-slate-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61.366"
              height="53.42"
              viewBox="0 0 61.366 53.42"
            >
              <path
                id="Path_161"
                data-name="Path 161"
                d="M271.162-100.369a8.051,8.051,0,0,1-2.544-1.016q-5.849-3.555-11.695-7.114a9.1,9.1,0,0,1-1.233-.9,7.631,7.631,0,0,1-2.46-4.013,10.637,10.637,0,0,1-.277-2.567v-13.854a10.443,10.443,0,0,1,.141-1.7,7.7,7.7,0,0,1,2.362-4.477,9.834,9.834,0,0,1,1.63-1.215q3.506-2.122,7-4.258c.92-.564,1.836-1.137,2.737-1.733.146-.1.273-.221.411-.326l1.436-.875a8.607,8.607,0,0,1,1.036-.532,6.666,6.666,0,0,1,4.11-.46,8.041,8.041,0,0,1,2.544,1.016q5.849,3.555,11.695,7.114a9.1,9.1,0,0,1,1.233.9,7.622,7.622,0,0,1,2.46,4.013,10.647,10.647,0,0,1,.28,2.567q0,6.93,0,13.854a10.736,10.736,0,0,1-.141,1.7,7.694,7.694,0,0,1-2.362,4.477,9.861,9.861,0,0,1-1.632,1.215q-3.505,2.122-7,4.258c-.92.564-1.836,1.137-2.737,1.733-.143.1-.27.221-.409.326l-1.438.875a8.417,8.417,0,0,1-1.036.532A6.666,6.666,0,0,1,271.162-100.369Z"
                transform="translate(-230.66 153.651)"
                fill="#ffbef2"
                opacity="0.54"
              ></path>
              <g id="Group_260" data-name="Group 260">
                <path
                  id="Path_405"
                  data-name="Path 405"
                  d="M124.813,40.363c-.3-2.506-.577-4.873-.634-7.049a12.452,12.452,0,0,0-5.54-9.434c-2.885-2.078-6.169-2.911-8.557-2.175-4.994,1.535-6.453,10.574-6.6,11.6a1.18,1.18,0,0,0,1.1,1.35l8.16.471a25.877,25.877,0,0,0-2.19,12.908c-5.386-3.771-10.089-4.244-13.646-3.634a32.618,32.618,0,0,0-4.987-5.476c-7.983-6.358-16.963.887-17.053.962a1.181,1.181,0,0,0,1.5,1.823c.076-.059,7.576-6.115,14.078-.934a27.494,27.494,0,0,1,3.968,4.258,14.138,14.138,0,0,0-4.495,2.49,1.182,1.182,0,0,0,1.6,1.738c.336-.307,8.361-7.4,19.845,2.393a1.183,1.183,0,0,0,1.918-1.175c-.021-.083-1.927-8.392,2.376-15.838a1.185,1.185,0,0,0-.958-1.771l-8.652-.5c.608-2.854,2.133-7.611,4.722-8.406,1.681-.513,4.223.206,6.486,1.833a10.106,10.106,0,0,1,4.554,7.578c.061,2.286.348,4.705.65,7.266a72.205,72.205,0,0,1,.627,15.556,5.962,5.962,0,0,1-.988,2.845,17.513,17.513,0,0,1-10.352,6.24c-12.636,2.258-17.7-.494-24.91-5.169a1.182,1.182,0,0,0-1.154-.073,1.2,1.2,0,0,0-.667.943,18.381,18.381,0,0,1-3.89,8.578,1.183,1.183,0,0,0,1.847,1.478,21.575,21.575,0,0,0,4.041-8c7.018,4.415,12.754,6.784,25.149,4.573a19.82,19.82,0,0,0,11.882-7.226,8.3,8.3,0,0,0,1.4-3.975A74.309,74.309,0,0,0,124.813,40.363Z"
                  transform="translate(-74.435 -21.442)"
                ></path>
                <path
                  id="Path_406"
                  data-name="Path 406"
                  d="M100.8,39.4a1.182,1.182,0,0,0-1.083-2.1c-8.12,4.183-16.112-2.043-16.192-2.107a1.183,1.183,0,1,0-1.475,1.849,20.4,20.4,0,0,0,11.633,4.1A15.384,15.384,0,0,0,100.8,39.4Z"
                  transform="translate(-64.656 -3.023)"
                ></path>
              </g>
            </svg>
            <p className="text-black font-bold">عضله سازی</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white w-52 h-60 rounded-2xl  shadow-lg shadow-slate-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58.718"
              height="45.319"
              viewBox="0 0 58.718 45.319"
            >
              <path
                id="Path_161"
                data-name="Path 161"
                d="M271.162-100.369a8.051,8.051,0,0,1-2.544-1.016q-5.849-3.555-11.695-7.114a9.1,9.1,0,0,1-1.233-.9,7.631,7.631,0,0,1-2.46-4.013,10.637,10.637,0,0,1-.277-2.567v-13.854a10.443,10.443,0,0,1,.141-1.7,7.7,7.7,0,0,1,2.362-4.477,9.834,9.834,0,0,1,1.63-1.215q3.506-2.122,7-4.258c.92-.564,1.836-1.137,2.737-1.733.146-.1.273-.221.411-.326l1.436-.875a8.607,8.607,0,0,1,1.036-.532,6.666,6.666,0,0,1,4.11-.46,8.041,8.041,0,0,1,2.544,1.016q5.849,3.555,11.695,7.114a9.1,9.1,0,0,1,1.233.9,7.622,7.622,0,0,1,2.46,4.013,10.647,10.647,0,0,1,.28,2.567q0,6.93,0,13.854a10.736,10.736,0,0,1-.141,1.7,7.694,7.694,0,0,1-2.362,4.477,9.861,9.861,0,0,1-1.632,1.215q-3.505,2.122-7,4.258c-.92.564-1.836,1.137-2.737,1.733-.143.1-.27.221-.409.326l-1.438.875a8.417,8.417,0,0,1-1.036.532A6.666,6.666,0,0,1,271.162-100.369Z"
                transform="translate(-252.953 145.549)"
                fill="#beefff"
              ></path>
              <g
                id="Group_261"
                data-name="Group 261"
                transform="translate(9.607 2.663)"
              >
                <path
                  id="Path_407"
                  data-name="Path 407"
                  d="M86.808,27.5a13.8,13.8,0,0,0-19.488,0l-1.014,1.014L65.243,27.45A13.78,13.78,0,0,0,45.755,46.938L58.632,59.815a10.866,10.866,0,0,0,15.348,0L86.808,46.988A13.8,13.8,0,0,0,86.808,27.5ZM85.136,45.316,72.309,58.143a8.5,8.5,0,0,1-12,0L47.427,45.266A11.415,11.415,0,1,1,63.572,29.124l1.9,1.9a1.183,1.183,0,0,0,1.672,0l1.849-1.851A11.416,11.416,0,0,1,85.136,45.316Z"
                  transform="translate(-41.726 -23.421)"
                ></path>
                <path
                  id="Path_408"
                  data-name="Path 408"
                  d="M63.925,29.346,55.713,37.56l-4.433-4.436A1.182,1.182,0,1,0,49.608,34.8l5.268,5.271a1.179,1.179,0,0,0,1.672,0L65.6,31.017a1.182,1.182,0,1,0-1.672-1.672Z"
                  transform="translate(-31.446 -15.81)"
                ></path>
              </g>
            </svg>
            <p className="text-black font-bold">فیتنس</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white w-52 h-60 rounded-2xl  shadow-lg shadow-slate-400/50">
            <Image src={researchImg} width={61.366} height={53.42} />
            <p className="text-black font-bold">آنالیز</p>
          </div>
        </div>
        {/* Cards */}
        {/* <div className="flex flex-col gap-20 pt-8 md:flex-row">
          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="flex md:flex-row flex-col justify-center items-center gap-36 py-9">
          <div className="shadow-xl shadow-slate-500/50 rounded-lg bg-white p-2 text-center flex flex-col items-center justify-center gap-5 w-44 h-44">
            <FcCalculator size={50} />
            <p className="text-xl">محاسبه گر</p>
          </div>
          <div className="shadow-xl shadow-slate-500/50 rounded-lg bg-white  p-2 text-center flex flex-col items-center justify-center gap-5 w-44 h-44">
            <FcLike size={50} />
            <p className="text-xl">فیتنس</p>
          </div>
          <div className="shadow-xl shadow-slate-500/50 rounded-lg bg-white p-2 text-center flex flex-col items-center justify-center gap-5 w-44 h-44">
            <FcCustomerSupport size={50} />
            <p className="text-xl">ارتباط با ما</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section1;
