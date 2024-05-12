const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      // 子传父 -> 选择图片变化 -> 通知进行切换展示图片
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl cursor-pointer max:sm:flex-1
                  ${
                    bigShoeImage === imgURL.bigShoe
                      ? "border-coral-red"
                      : "border-transparent"
                  }`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
        <img
          src={imgURL.thumbnail}
          width={127}
          height={103}
          className="object-contain"
          alt="shoe collection"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
