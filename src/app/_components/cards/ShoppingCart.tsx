import Image from "next/image";
type CartProps = {
  className?: string;
};
export const ShoppingCart = function ({ className }: CartProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="group visible inline-block duration-300">
        <Image
          src="/icons/cart-icon.png"
          width={28}
          height={0}
          alt="shopping cart icon"
        />
        <div className="border-1 invisible absolute right-0 z-50 mt-7 h-[465px] w-[330px] overflow-auto overflow-x-hidden rounded border-slate-600 bg-slate-50 p-6 opacity-0 duration-300 after:absolute after:left-0 after:right-0 after:top-[-12px] after:h-[12px] after:w-full after:bg-slate-50 after:opacity-0 after:content-[''] hover:visible hover:mt-3 hover:opacity-100 hover:duration-300 group-hover:visible group-hover:mt-3 group-hover:opacity-100 group-hover:duration-300">
          <small className="text-black">
            You have <em className="highlight text-black">2 item(s)</em> in your
            shopping bag
          </small>
          <div className="ci-item">
            <Image src="/product" width={80} height={80} alt="" />
            <div className="ci-item-info">
              <h5>
                <a href="/product">{"product"}</a>
              </h5>
              <p>{"produits.get(10).getPrix()"}</p>
              <div className="ci-edit">
                <a href="#" className="edit fa fa-edit"></a>
                <a href="#" className="edit fa fa-trash"></a>
              </div>
            </div>
          </div>
          <div className="ci-item">
            <Image src="/" width={80} height={80} alt="" />
            <div className="ci-item-info">
              <h5>
                <a href="#">{"produits.get(5).getTitre()"}</a>
              </h5>
              <p>{"produits.get(5).getPrix()"}</p>
              <div className="ci-edit">
                <a href="#" className="edit fa fa-edit"></a>
                <a href="#" className="edit fa fa-trash"></a>
              </div>
            </div>
          </div>
          <div className="ci-total">
            Subtotal: {"produits.get(5).getPrix() + produits.get(10).getPrix()"}
          </div>
          <div className="cart-btn">
            <a href="#">View Bag</a>
            <a href="#">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
};
