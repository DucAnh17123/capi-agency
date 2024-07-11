import PageTitle from "@/components/pageTitle";
import ProjectCard from "@/components/projectCard";

export default function Tag() {
    return (
        <div>
          <PageTitle title="Branding" subTitle='POSTS TAGGED "BRANDING"' />
    
          <div className="container mx-auto flex justify-center my-20">
            <div className="basis-9/12">
              <div className="text-center text-3xl font-semibold tracking-tight">
                Tag: <span className="text-yellow-500">Branding</span>
              </div>
              <div className="space-y-20 mt-14">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      );
}