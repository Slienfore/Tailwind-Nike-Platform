import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    // max-xl:flex-col-reverse -> 当屏幕过小时候, 需要将图片与内容进行倒置
    <section className="flex max-xl:flex-col-reverse justify-wrap items-center gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          className="object-contain w-full"
          width={773}
          height={687}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special</span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals.From premier selections to incredible savings,we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires,surpassing the loftiest expectations.Your journey with us is
          nothing short of exceptional.
        </p>

        {/* flex-wrap: wrap; -> 子元素将根据容器的尺寸自动换行，以适应容器的宽度 */}
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
