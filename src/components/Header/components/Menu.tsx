import { ROUTES } from "@/utils/router";
import { MenuItem } from './MenuItem';

export const Menu: React.FC = () => {
  return (<nav className="bg-black-06 border-[4px] border-black-10 px-[40px] py-[24px] rounded-[12px]">
    <ul className="flex gap-[30px]">
      <MenuItem
        text="Home"
        href={ROUTES.HOME}
      />
      <MenuItem
        text="Movies & Shows"
        href={ROUTES.MOVIES_SHOWS}
      />
      <MenuItem
        text="Support"
        href={ROUTES.SUPPORT}
      />
      <MenuItem
        text="Subscriptions"
        href={ROUTES.SUBSCRIPTIONS}
      />
    </ul>
  </nav>)
}