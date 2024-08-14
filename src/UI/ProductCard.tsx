import Button from "./Button";
import { motion } from "framer-motion";
import { fadeAndTranslateUpVariants } from "animations/variants";
import manequin from "assets/manequin.jpg";
import Cart from "assets/cart.svg?react";
import { useNavigationParams } from "hooks/useNavigationParams";
import { Link, NavLink } from "react-router-dom";

export type TCollectionsCard = {
  img: string;
  discount?: string;
  libelle?: string;
  price?: string;
  productId: string;
};

function ProductCard({
  img,
  libelle,
  discount,
  price,
  productId,
}: TCollectionsCard) {
  const { removeQuery, navigate } = useNavigationParams();
  return (
    <motion.div
      className="group  w-max cursor-pointer "
      // onClick={() => removeQuery()}
    >
      <Link to={`/product-details/${productId}`}>
        <div className="relative">
          <img
            loading="lazy"
            src={img}
            alt={libelle}
            className="object-cover w-[323px] !h-[405px] rounded-[20px]"
          />
          <div className="absolute flex flex-col group-hover:bg-[rgba(0,0,0,0.25)] group-hover:rounded-[20px] inset-0 p-[2rem] ">
            {discount != "" && (
              <Button
                text="GET OFF 20%"
                fullWidth={false}
                className="text-[1.2rem]"
                variant="secondary"
                radius="full"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            )}

            <div className=" hidden mt-auto group-hover:flex  items-center space-x-[0.4rem]">
              <Button
                text="ADD TO CART"
                fullWidth={false}
                className="text-[1.2rem]"
                variant="secondary"
                radius="full"
                iconPosition="left"
                Icon={() => <Cart />}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/cart");
                }}
              />
              <Button
                text="BUY NOW"
                fullWidth={false}
                className="text-[1.2rem]"
                variant="outline-white"
                radius="full"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/checkout");
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[2.4rem] md:text-[30]">{libelle}</p>
          <p className=" text-[#7E7E7E] text-[2.8rem]">$ {price}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;
