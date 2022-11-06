import Link from "next/link";

const { default: Image } = require("next/image");

const CardTopPack = ({ data }) => {
  return (
    <Link href={`/products/${data.id}`}>
      <div className="bg-white shadow-lg rounded-xl	w-[200px] h-[250px] p-4 hover:scale-105 transform transition duration-500">
        <div className="flex flex-col justify-between h-full">
          <div className="relative h-full">
            <Image
              src={data.image_url}
              alt={data.name}
              width={200}
              height={250}
              className="absolute bottom-0 left-0"
            />
          </div>
          <div>
            <div className="font-medium text-lg	text-stone-800 text-center mt-4 mb-3">
              {data.name}
            </div>
            <div className="font-normal text-xs text-center text-stone-500">
              {data.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardTopPack;
