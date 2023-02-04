import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults)

  const { location, startDate, endDate, noOfGuests } = router.query;

  return (
    <div>
      <Header placeholder={`${location} | ${startDate} - ${endDate} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays -{startDate} - {endDate}- for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold  mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 text-gray-800 space-x-4 whitespace-nowrap">
            <p className="button">cancellation flexibility</p>
            <p className="button">Type of Place </p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
          {searchResults.map(({img,location,title,description,star,price,total}) =>(
              <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
              />
          ))}
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res) => res.json());
  return {
    props: {
      searchResults,
    },
  };
}
