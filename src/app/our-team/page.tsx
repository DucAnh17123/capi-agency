import Link from "next/link";

import PageTitle from "@/components/pageTitle";
import UserList from "@/components/userList";
import PageList from "@/components/pageList";

export default function OurMission() {
  return (
    <div>
      <PageTitle title="Our team" />

      <div className="container mx-auto">
        <div className="flex justify-around gap-20">
          <div className="flex-1">
            <div className="text-sm text-gray-400 font-semibold uppercase my-1">
              (SUCCESSFUL TEAM)
            </div>
            <div className="text-7xl font-bold leading-[5.5rem]">
              Our Skilled Professionals
            </div>
          </div>

          <div className=" flex-1 text-sm text-gray-500 font-semibold my-1 flex items-center justify-end">
            <div className="w-[70%] space-y-3">
              <div className="text-lg text-black">
                We offer a comprehensive suite of services to cater to various
                aspects of a client’s needs.
              </div>
              <div className="font-medium leading-6">
                Digital agencies are at the forefront of the digital landscape,
                combining creative and technical expertise to help clients
                thrive in the digital world.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 my-20">
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative pt-[40%] bg-[url('/assets/images/general/banner-3.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
          <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1 flex justify-center flex-col items-start text-white gap-6">
              <div className="text-sm uppercase font-semibold">(be part of us)</div>
              <div className="text-7xl font-bold">Join to the Our Skilled Team</div>
              <div className="w-[80%]">
                Digital agencies are at the forefront of the digital landscape,
                combining creative and technical expertise to help clients
                thrive in the digital world.
              </div>
              <button className="btn-primary-white group/btn flex items-center gap-3">
                get in touch
                <div className="group-hover/btn:scale-150 group-hover/btn:bg-black w-2 h-2 rounded-full bg-white transition-all duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <PageList />
    </div>
  );
}
