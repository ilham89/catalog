import { Fragment } from "react";
import CardLarge from "../components/cardLarge";
import CardTopPack from "../components/cardTopPack";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://my-json-server.typicode.com/ilham89/catalog/products`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="text-2xl font-medium text-red-500">Be Active</div>
          <div className="font-bold text-slate-800 text-4xl md:text-6xl	mb-6">
            Barnsley Brew Coffee
          </div>
          <div className="font-normal text-base md:text-xl text-stone-500">
            Coffee is a brewed drink prepared from roasted coffee beans, the
            seeds of berries from certain Coffea species. When coffee berries
            turn from.
          </div>
        </div>
      </div>
      <div className="h-[600px] md:h-[750px] flex no-scrollbar flex-nowrap flex items-end overflow-x-auto gap-4 pb-4">
        <div className="w-[325px]">
          <CardLarge data={data[0]} />
        </div>
        {data.slice(1, data.length).map((product, index) => (
          <div className="w-full" key={index}>
            <CardTopPack data={product} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
