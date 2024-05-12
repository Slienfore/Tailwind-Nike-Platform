import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex max-lg:flex-col justify-between items-center gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      {/* max-sm yong小屏幕上控制元素的对齐方式和宽度 */}
      <div className="lg:max-w-[40%] w-full flex max-sm:flex-col items-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
