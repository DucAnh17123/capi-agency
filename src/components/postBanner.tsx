import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function PostBanner() {
  return (
    <div className="relative bg-[url('/assets/images/general/post-banner.jpg')] bg-center bg-cover bg-no-repeat w-full h-[600px] ">
      <div className="absolute right-0 left-0 bottom-0">
        <div className="container mx-auto flex flex-row justify-center">
          <div className="basis-9/12 text-white space-y-7 pb-14">
            <div className="btn-secondary">digital</div>
            <div className="text-6xl text-white font-semibold tracking-tighter">
              Unraveling Marketing Trends
            </div>
            <div className="flex justify-between text-sm text-white uppercase font-medium">
              <div>
                (JANUARY 2, 2024 BY <Link href="">NTKIEN2192</Link>)
              </div>
              <div className="flex gap-5">
                <div>
                  <FontAwesomeIcon className="mr-2" icon={faComment} />
                  <span>2</span>
                </div>
                <div>
                  <FontAwesomeIcon className="mr-2" icon={faHeart} />
                  <span>99</span>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer animate-bounce">
              <FontAwesomeIcon
                className="text-2xl font-thin"
                icon={faArrowDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
