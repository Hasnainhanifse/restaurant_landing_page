import Cart from "../ui/icons/cart";
import Search from "../ui/icons/search";
import User from "../ui/icons/user";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>yannal</div>
      <nav>
        <ul className={style.nav}>
          <li>menu</li>
          <li>about us</li>
          <li>our specials</li>
          <li>our locations</li>
          <li>our cheffs</li>
        </ul>
      </nav>
      <div className={style.icon}>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.cart}>
          <span className={style.counter}>3</span>
          <Cart />
        </div>
        <div className={style.user}>
          <User />
        </div>
      </div>
    </div>
  );
}
