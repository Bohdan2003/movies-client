import Image from "next/image";
import { cn } from "@/utils/cn";
import { buttonCls } from "@/utils/consts/clsVariable";
import {PlayIcon} from "@/components/icons/PlayIcon";

export const Introducing: React.FC = () => {
  return (<section>
    <div className="relative -z-10">
      <Image
        className="w-full h-[860px] object-cover"
        src="/images/introducingBg.png"
        alt="background"
        width={1920}
        height={860}
      />
      <Image
        className="absolute top-[50%] left-[50%] -translate-1/2"
        src="/images/introducingImg.png"
        alt="figure"
        width={470}
        height={470}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
    </div>
    <div className="container flex flex-col items-center -mt-[70px]">
      <h1 className="text-white text-[58px] font-bold">The Best Streaming Experience</h1>
      <p className="text-center">
        StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime,
        anywhere. With<br/>
        StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular
        TV shows, and more.<br/>
        You can also create your own watchlists, so you can easily find the content you want to watch.
      </p>
      <button className={cn(buttonCls, 'mt-[50px] flex gap-[5px] items-center')}><PlayIcon/> Start Watching Now</button>
    </div>
  </section>);
};