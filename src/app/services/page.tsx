"use client";
import React from "react";

import PageTitle from "@/components/pageTitle";
import Process from "@/components/process";

// import News from "../src//components/news";

export default function Service() {
  const serviceItems = [
    {
      serviceName: "CHIẾN LƯỢC",
      serviceSub:
        "Chúng tôi phát triển chiến lược sản phẩm và định hướng giải pháp cho quá trình phát triển bền vững của phần mềm.",
    },
    {
      serviceName: "BRANDING",
      serviceSub:
        "Chúng tôi xây dựng chiến lược thương hiệu và đồng hành cùng doanh nghiệp trong việc phát triển thương hiệu trên thị trường.",
    },
    {
      serviceName: "UI/UX",
      serviceSub:
        "Chúng tôi cung cấp dịch vụ thiết kế trải nghiệm người dùng (UX) và giao diện phần mềm (UI) cho các sản phẩm số.",
    },
    {
      serviceName: "PHÁT TRIỂN",
      serviceSub:
        "Chúng tôi hỗ trợ phát triển các sản phẩm phần mềm trong nhiều nền tảng với nhu cầu cụ thể từ khách hàng",
    },
    {
      serviceName: "ĐO LƯỜNG",
      serviceSub:
        "Chúng tôi đo lường chỉ số sử dụng của người dùng và báo cáo mọi vấn đề trực tiếp cho khách hàng và đội ngũ phát triển.",
    },
  ];

  return (
    <div className="mt-header-height w-full">
      <PageTitle title="Services" />

      <Process
        title="Our Capabilities"
        subTitle="(how it workings)"
        btnText="View all capabilities"
      />

      <div className="container mx-auto"></div>
    </div>
  );
}
