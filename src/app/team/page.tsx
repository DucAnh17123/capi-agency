"use client"

import PageTitle from "@/components/pageTitle";
import UserCard from "@/components/userCard";

export default function Team() {
  return (
    <div>
      <PageTitle title="archive" subTitle="team"/>

      <div className="container mx-auto flex justify-center my-[6rem]">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-[1.5rem] lg:gap-[2rem] xl:gap-8">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
}
