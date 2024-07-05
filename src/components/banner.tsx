export default function Banner() {
  return (
    <div className="h-auto w-full">
      <div className="relative w-full pt-[45%] h-auto bg-[url('/assets/images/general/banner-home.jpg')] bg-auto bg-no-repeat bg-center">
        <div className="absolute top-1/4 left-0 w-full h-auto text-white text-center z-10">
          <div className="text-2xl font-bold">Chào mừng tới</div>
          <div className="text-[9rem] leading-[10rem] font-bold uppercase opacity-0 animate-fadeIn">
            Ux universe
          </div>
          <div className="text-lg font-semibold">
            Chúng tôi xây dựng trải nghiệm sản phẩm số cho ý tưởng của bạn
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pb-14 container mx-auto z-20">
            <div className="flex justify-between h-full">
              <div>
                <div className="grid grid-cols-4 gap-5 text-white text-sm font-semibold">
                  <div className="col-span-4">
                    <div className="uppercase w-fit font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
                      Creative studio
                    </div>
                  </div>
                  <div className="col-span-1 text-xl">Capi</div>
                  <div className="col-span-3 text-xl">
                    Sáng tạo và phát triển <br />
                    sản phẩm số
                  </div>
                  <div className="col-span-1">Địa chỉ</div>
                  <div className="col-span-3">
                    20.5959° N, 105.4916° E
                    <br />
                    Việt Nam / Hà Nội
                  </div>
                  <div className="col-span-1">Thành lập</div>
                  <div className="col-span-3">Tháng 10 – 2018</div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="btn-secondary">
                  behance
                </div>
                <div className="btn-secondary">
                  dribble
                </div>
                <div className="btn-secondary">
                  facebook
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
