// import "../public/assets/css/spinner.css";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full my-11">
      {/* <div className="ldio-tfiaujkqh2">
        <div></div>
      </div> */}
      <Image src="/assets/images/spinner.svg" alt="loading ..."/>
    </div>
  );
}
