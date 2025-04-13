import Link from "next/link";
import { footerTitleCls } from "@/utils/consts/clsVariable";

interface ListProps {
  title: string;
  titleHref?: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const List: React.FC<ListProps> = ({ title, titleHref, links }) => {
  return (
    <nav aria-label={title}>
      {
        titleHref
          ? <Link
            href={titleHref}
            className={footerTitleCls}
          >
            {title}
          </Link>
          : <p className={footerTitleCls}>{title}</p>
      }
      <ul className="mt-[24px] grid gap-[14px]">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="font-medium"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
