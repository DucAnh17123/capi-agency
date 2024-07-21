import PageTitle from "@/components/pageTitle";
import ProjectCard from "@/components/projectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Tag() {
  return (
    <div>
      <PageTitle title="Branding" subTitle='POSTS TAGGED "BRANDING"' />

      <div className="container mx-auto flex justify-center my-10 xl:my-20">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="text-center text-3xl font-semibold tracking-tight">
            Tag: <span className="text-yellow-500">Branding</span>
          </div>
          <div className="space-y-10 lg:space-y-20 mt-14">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mb-20">
        <div className="flex gap-2">
          <div className="relative text-white bg-black rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              1
            </div>
          </div>
          <div className="relative rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              2
            </div>
          </div>
          <div className="relative rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              3
            </div>
          </div>
          <div className="relative rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rotate-45 hover:rotate-0">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
