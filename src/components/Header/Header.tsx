import { Logo } from "@/components/Logo/Logo";
import { Menu } from "@/components/Header/components/Menu";
import { Search } from "@/components/Search/Search";

export const Header: React.FC = () => {
  return (<header className="fixed z-10 top-[22px] left-0 right-0">
    <div className="container flex items-center justify-between">
      <Logo/>
      <Menu/>
      <div className="w-[200px] flex justify-end">
        <Search/>
      </div>
    </div>
  </header>);
};