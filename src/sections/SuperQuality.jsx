import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      // max-lg:flex-col 当屏幕宽度达到或小于大屏幕尺寸时候, 将布局方向设置为垂直
      className="max-lg:flex-col flex justify-between items-center gap-10 w-full max-container"
    >
      {/* Left Box */}
      <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      {/* Right Box */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          // object-fit: object-contain -> 调整对象(img, video)在容器中尺寸
          // contain -> 对象保持原始宽高比, 缩放以适应容器
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
