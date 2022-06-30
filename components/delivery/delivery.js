import Image from "next/image";
import style from "./delivery.module.css";

export default function Delivery() {
  return (
    <section>
      <div className={style.delivery}>
        <div className={style.slider}>
          <div>
            <button className={style.button}>Coffee</button>
          </div>
          <div>
            <button className={style.button}>Fast Food</button>
          </div>
          <div>
            <button className={style.button}>Pizza</button>
          </div>
          <div>
            <button className={style.button}>Desi menu</button>
          </div>
          <div>
            <button className={style.button}>Desserts</button>
          </div>
        </div>
        <div className={style.poster}>
          <div>delivery details</div>
          <div>cup of tea</div>
        </div>
      </div>
    </section>
  );
}
