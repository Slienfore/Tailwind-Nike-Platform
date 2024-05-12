import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      // 大屏幕 flex-row, 小屏幕 flex-col 布局
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray leading-8 mt-6 mb-14 text:lg sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button iconURL={arrowRight} label="Shop now"></Button>

        {/* flex-wrap 避免屏幕太小不显示, wrap */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>

              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mal:xl:py-50 xl:min-h-screen flex-1 flex items-center justify-center bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          width={610}
          height={510}
          className="object-contain relative z-10"
          alt="Shoe collection"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max:sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImage={bigShoeImage}
              ></ShoeCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
