import Header from "../../layout/header";
import style from "./hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className={style.hero}>
        <div className={style.slider}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className={style.content}>
          <p>Now taking online orders</p>
          <div className={style.kababs}>Kababs</div>
          <div className={style.details}>
            Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to ... This is a standard Indian mint chutney served with poppadums
            along with mint and lemon.
          </div>
          <div className={style.actions}>
            <button className={style.btn_cart}>Add To Cart</button>
            <button className={style.btn_book}>Book a Table</button>
          </div>
        </div>
        <div className={style.image}>
          <img src="images/Hero Image.png" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}
