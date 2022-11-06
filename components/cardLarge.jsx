const { default: Image } = require("next/image");
import Link from "next/link";

const CardLarge = ({ data }) => {
  return (
    <Link href={`/products/1`}>
      <div className="bg-white shadow-lg rounded-xl	w-[250px] md:w-[325px] h-[350px] p-5 hover:scale-105 transform transition duration-500">
        <div className="flex flex-col justify-between h-full">
          <div className="relative h-full">
            <Image
              src={data.image_url}
              alt={data.name}
              width={300}
              height={450}
              className="absolute bottom-0 left-0 w-56 md:w-full"
            />
          </div>
          <div>
            <div className="font-medium text-2xl text-stone-800 text-center mt-4 mb-3">
              {data.name}
            </div>
            <div className="font-normal text-base text-center text-stone-500">
              {data.description}
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="font-medium text-2xl">1 Bag</div>
              <div className="font-bold text-2xl">{data.price}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardLarge;
