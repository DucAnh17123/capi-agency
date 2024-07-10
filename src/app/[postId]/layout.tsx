import SideBar from "@/components/sideBar";

export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto mt-header-height mb-[20rem] flex flex-row justify-center">
        <div className="basis-9/12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-9"></div>

            <div className="col-span-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
