'use client'
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { SliderWithTopNavigation } from "@/components/sliders/SliderWithTopNavigation";
import { TCategoriesSliderItem } from "@/utils/types/categories";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";

export const CategoriesSlider: React.FC<{
  items: TCategoriesSliderItem[]}
> = ({items}) => (
  <SliderWithTopNavigation
    title={
      <SectionHeader
        title="Explore our wide variety of categories"
        subTitle="Whether you are looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      />
    }
    items={
      items.map((item) => (
        <SwiperSlide
          className="p-[30px] bg-black-10 border-[1px] border-black-15 rounded-[12px]"
          key={item.id}
        >
          <Image
            className="h-[272px] w-full object-cover object-top"
            src={item.img}
            alt={item.name}
            width={252}
            height={292}
          />
          <div className="mt-[8px] flex justify-between gap-[20px]">
            <p className="text-white font-semibold">{item.name}</p>
            <Link href="#"><ArrowIcon/></Link>
          </div>
        </SwiperSlide>
      ))
    }
  />
)