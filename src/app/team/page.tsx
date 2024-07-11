"use client"

import PageTitle from "@/components/pageTitle";
import UserCard from "@/components/userCard";

export default function Team() {
  return (
    <div>
      <PageTitle title="archive" subTitle="team"/>

      <div className="container mx-auto flex justify-center mb-[6rem]">
        <div className="basis-9/12">
          <div className="grid grid-cols-3 gap-6">
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
