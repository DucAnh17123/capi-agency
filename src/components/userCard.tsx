import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function UserCard() {
  return (
    <div className="group/userCard">
      <Link href="/team/1" legacyBehavior>
        <div>
          <div className="overflow-hidden cursor-pointer">
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
              <Link
                legacyBehavior
                href=""
                className="opacity-0 group-hover/userCard:opacity-100 duration-500"
              >
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 hover:text-gray-600"
                    icon={faXTwitter}
                  />
                </div>
              </Link>
              <Link
                legacyBehavior
                href=""
                className="opacity-0 group-hover/userCard:opacity-100 duration-500 delay-200"
              >
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 hover:text-gray-600 "
                    icon={faFacebookF}
                  />
                </div>
              </Link>
              <Link
                legacyBehavior
                href=""
                className="opacity-0 group-hover/userCard:opacity-100 duration-500 delay-[400ms]"
              >
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 hover:text-gray-600 "
                    icon={faLinkedinIn}
                  />
                </div>
              </Link>
              <Link
                legacyBehavior
                href=""
                className="opacity-0 group-hover/userCard:opacity-100 duration-500 delay-[600ms]"
              >
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 hover:text-gray-600 "
                    icon={faInstagram}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
