import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function UserList() {
  return (
    <div className="group/userCard">
      <Link href="">
        <div className="overflow-hidden">
          <Image
            src={"/assets/images/general/user-image.jpg"}
            alt="image"
            width={300}
            height={200}
            layout="responsive"
            className="group-hover/userCard:scale-105 duration-500"
          ></Image>
        </div>

        <div className="py-6">
          <div className="text-sm uppercase text-gray-500 font-semibold group-hover/userCard:text-yellow-500 transition-colors duration-500">
            ui/ux Designer
          </div>
          <div className="text-2xl font-bold mt-1 mb-3">Anna-Marry Scott</div>
          <div className="flex items-center gap-5">
            <Link href="" className="opacity-0 group-hover/userCard:opacity-100 duration-500">
              <FontAwesomeIcon
                className="text-sm text-gray-400 hover:text-gray-600"
                icon={faXTwitter}
              />
            </Link>
            <Link href="" className="opacity-0 group-hover/userCard:opacity-100 duration-500 delay-200">
              <FontAwesomeIcon
                className="text-sm text-gray-400 hover:text-gray-600 "
                icon={faFacebookF}
              />
            </Link>
            <Link href="" className="opacity-0 group-hover/userCard:opacity-100 duration-500 delay-[400ms]">
              <FontAwesomeIcon
                className="text-sm text-gray-400 hover:text-gray-600 "
                icon={faLinkedinIn}
              />
            </Link>
            <Link href="" className="opacity-0 group-hover/userCard:opacity-100 duration-500 delay-[600ms]">
              <FontAwesomeIcon
                className="text-sm text-gray-400 hover:text-gray-600 "
                icon={faInstagram}
              />
            </Link>
          </div>
        </div>

        <div>
          
        </div>
      </Link>
    </div>
  );
}
