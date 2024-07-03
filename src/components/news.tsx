import NewsCard from "@/components/newsCard";



export default function News() {
    return (
        <div className="my-20 container mx-auto ">
      <div className="w-full h-[40px] relative">
        <div className="absolute top-0 left-0 translate-x-[-50%] border-[20px] w-0 h-0 border-t-yellow-500 border-x-transparent border-b-transparent rotate-45"></div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-400 uppercase my-2">
          (HOW IT WORKINGS)
          </div>
          <div className="text-5xl font-semibold uppercase mt-4">
          Our Latest News
          </div>
        </div>
        <button className="group/btn mt-10 border-[1px] border-black rounded-full text-sm font-semibold py-3 px-4 uppercase flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-500">
          View all news
          <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
        </button>
      </div>

      <div className="mt-6 flex gap-6">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
    )
}