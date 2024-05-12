const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    // sm:w-[350px] 表示在小屏幕上, 宽度设置为固定的 350 px
    // sm:min-w-[350px] 将元素的最小宽度设置为 350 px, 元素的宽度可以自适应 但不会低于 350px
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
