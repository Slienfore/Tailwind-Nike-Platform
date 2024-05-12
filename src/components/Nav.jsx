import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    // 使用 absolute 定位, 不占据位置
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img width={130} height={29} src={headerLogo} alt="Logo" />
        </a>

        {/* 小屏幕隐藏 */}
        <ul className="max-lg:hidden flex-1 flex justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monts errat leading-normal text-lg text-slate-gary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 大屏幕隐藏, 小屏幕显示 */}
        <div className="hidden max-lg:block">
          <img width={25} height={25} src={hamburger} alt="Hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
