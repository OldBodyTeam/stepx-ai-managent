import ProductItem from "./ProductItem";

const RightListProducts = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-none pb-16 rounded-16">
      <div className="cursor-pointer">
        {Array(15)
          .fill(1)
          .map((_, index) => {
            return <ProductItem key={index} />;
          })}
      </div>
    </div>
  );
};
export default RightListProducts;
