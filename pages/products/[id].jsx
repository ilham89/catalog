import Image from "next/image";

export const getServerSideProps = async ({ params }) => {
  const id = typeof params?.id === "string" ? params.id : "";

  const res = await fetch(
    `https://my-json-server.typicode.com/ilham89/catalog/products/${id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Detail = ({ data }) => {
  return (
    <div className="block md:flex items-center justify-around">
      <Image
        src={data.image_url}
        alt={data.name}
        width={400}
        height={800}
        className="mb-6"
      />
      <div className="md:w-96 space-y-8">
        <div className="text-3xl md:text-6xl font-semibold">{data.name}</div>
        <div className="text-stone-500 text-base md:text-xl font-normal">
          {data.description}
        </div>
        <div className="font-bold text-lg md:text-3xl text-right">
          {data.price}
        </div>
      </div>
    </div>
  );
};

export default Detail;
