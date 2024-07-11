import PageTitle from "@/components/pageTitle";
import ProjectCard from "@/components/projectCard";


export default function Author() {
  return (
    <div>
      <PageTitle title="author: NTKien2192" subTitle="ARTICLES POSTED BY NTKIEN2192" />
      <div className="container mx-auto flex justify-center my-20">
        <div className="basis-9/12">
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
