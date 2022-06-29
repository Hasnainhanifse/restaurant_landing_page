import Image from "next/image";
import Star from "../../ui/icons/star";
import style from "./popularProducts.module.css";
export default function PopularProducts() {
  return (
    <div className={style.popular}>
      <div className={style.heading}>
        <p>ONLINE STORE</p>
        <div className={style.heading_name}>Popular Products</div>
      </div>
      <div className={style.products}>
        <div className={style.product}>
          <div>
            <Image src="/images/Product 1.png" alt="product image" width="180" height="100" />
          </div>
          <div className={style.product_star}>
            <Star />
          </div>
          <div className={style.product_country}>Chinese</div>
          <div className={style.product_name}>Hot Wings</div>
          <div>
            <button className={style.product_button}>
              Add to cart <span>$14.0</span>
            </button>
          </div>
        </div>
        <div>
          <div className={style.product}>
            <div>
              <Image src="/images/Product 2.png" alt="product image" width="180" height="100" />
            </div>
            <div className={style.product_star}>
              <Star />
            </div>
            <div className={style.product_country}>Indian Style</div>
            <div className={style.product_name}>Rice with Curry</div>
            <div>
              <button className={style.product_button}>
                Add to cart <span>$14.0</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={style.product}>
            <div>
              <Image src="/images/Product 3.png" alt="product image" width="180" height="100" />
            </div>
            <div className={style.product_star}>
              <Star />
            </div>
            <div className={style.product_country}>Pakistani Style</div>
            <div className={style.product_name}>Chapati</div>
            <div>
              <button className={style.product_button}>
                Add to cart <span>$14.0</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={style.product}>
            <div>
              <Image src="/images/Product 4.png" alt="product image" width="180" height="100" />
            </div>
            <div className={style.product_star}>
              <Star />
            </div>
            <div className={style.product_country}>Western Dish</div>
            <div className={style.product_name}>Sweetdish</div>
            <div>
              <button className={style.product_button}>
                Add to cart <span>$14.0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
