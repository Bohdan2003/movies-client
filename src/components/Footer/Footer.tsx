import { cn } from "@/utils/cn";

//components
import Link from "next/link";
import { List } from "@/components/Footer/components/List";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

//variable
import { footerTitleCls } from "@/utils/consts/clsVariable";
const socialLinkCls = "grid place-items-center size-[56px] rounded-[8px] bg-black-10 border-[1px] border-black-15";

export const Footer: React.FC = () => {
  return (<footer className="bg-black-06 mt-[150px] pt-[100px] pb-[50px]">
    <div className="container">
      <div className="flex gap-[30px] justify-between">

        <List
          title="Home"
          links={[
            { label: "Browse Categories", href: "/" },
            { label: "Supported Devices", href: "/" },
            { label: "View Pricing", href: "/" },
            { label: "FAQs", href: "/" },
          ]}
        />

        <List
          title="Movies"
          links={[
            { label: "Gernes", href: "/" },
            { label: "Trending", href: "/" },
            { label: "New Release", href: "/" },
            { label: "Popular", href: "/" },
          ]}
        />

        <List
          title="Shows"
          links={[
            { label: "Gernes", href: "/" },
            { label: "Trending", href: "/" },
            { label: "New Release", href: "/" },
            { label: "Popular", href: "/" },
          ]}
        />

        <List
          title="Support"
          links={[
            { label: "Contact Us", href: "/" },
          ]}
        />

        <List
          title="Subscription"
          links={[
            { label: "Plans", href: "/" },
            { label: "Features", href: "/" },
          ]}
        />

        <div>
          <p className={ footerTitleCls }>Connect With Us</p>
          <ul className="mt-[40px] flex gap-[14px]">
            <li><Link className={socialLinkCls} href="/"><FacebookIcon/></Link></li>
            <li><Link className={socialLinkCls} href="/"><TwitterIcon/></Link></li>
          </ul>
        </div>

      </div>
      <div className={cn(
        'flex justify-between mt-[100px] pt-[24px] relative',
        'before:absolute before:bg-black-15 before:h-[1px] before:top-0 before:left-0 before:right-0',
      )}>
        <p>@2023 streamvib, All Rights Reserved</p>
        <div className="flex gap-[40px]">
          <Link className="font-medium" href="/">Terms of Use</Link>
          <Link className="font-medium" href="/">Privacy Policy</Link>
          <Link className="font-medium" href="/">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>);
};