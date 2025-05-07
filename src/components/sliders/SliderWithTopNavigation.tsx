'use client';
import { FC, ReactNode, useRef } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowIcon } from "@/components/icons/ArrowIcon";

import 'swiper/css';
import './sliderWithTopNavigation.css';

type TSliderProps = {
  title: ReactNode;
  items: ReactNode;
};

const navBtnCLs = "p-[14px] rounded-[8px] bg-black-10 cursor-pointer";

export const SliderWithTopNavigation: FC<TSliderProps> = ({ title, items }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="flex justify-between items-center gap-[40px]">
        { title }

        <div className="flex items-center gap-[16px] p-[16px] bg-black-06 rounded-[12px] border-[1px] border-black-12">
          <button
            className={navBtnCLs}
            ref={prevRef}
          > <ArrowIcon className="rotate-180"/> </button>

          <div
            className="flex gap-[4px]"
            ref={paginationRef}
          />

          <button
            className={navBtnCLs}
            ref={nextRef}
          > <ArrowIcon/> </button>
        </div>
      </div>

      <Swiper
        className="mt-[80px]"
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        pagination={{
          el: null,
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        onBeforeInit={(swiper) => {
          if(swiper.params.navigation && typeof swiper.params.navigation !== "boolean"){
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }

          if(swiper.params.pagination && typeof swiper.params.pagination !== "boolean")
            swiper.params.pagination.el = paginationRef.current;
        }}
      >
        {items}
      </Swiper>
    </div>
  );
};
