import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections.Discover a world of comfort,design,and value
        </p>
      </div>

      {/* 
          grid: 这个类用于将元素设置为网格布局容器
          lg:grid-cols-4: 在大屏幕（lg屏幕大小）上，将网格布局的列数设置为4列
          md:grid-cols-3: 在中等屏幕（md屏幕大小）上，将网格布局的列数设置为3列
          sm:grid-cols-2: 在小屏幕（sm屏幕大小）上，将网格布局的列数设置为2列
          grid-cols-1: 在其他情况下（未指定屏幕大小时），将网格布局的列数设置为1列
          sm:gap-4: 在小屏幕上，设置网格布局的列之间的间距为4
          gap-14: 在其他情况下（未指定屏幕大小时），设置网格布局的列之间的间距为14
      */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            {...product}
          ></PopularProductCard>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
