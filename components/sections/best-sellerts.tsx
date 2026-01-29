import SectionTemplate from "../templates/section-template";
import TripCard from "../cards/trip-card";

const BestSellerTrips = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?page=1&limit=8`,
    { method: "GET" },
  );
  const resJSON = await res.json();
  const trips = resJSON.data;

  return (
    <SectionTemplate
      badgeText={<p>Best Sellers</p>}
      title={<p>Our Most Loved Treks</p>}
      text={
        <p>
          These trips are chosen, booked, and recommended the most — for good
          reason. Thoughtful itineraries, experienced guides, and routes that
          never disappoint.
        </p>
      }
      buttonLink="/"
      buttonText="Explore All Latest Trips"
    >
      {
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4">
          {trips?.map((tour: any) => (
            <TripCard tour={tour} key={tour.id} />
          ))}
          {trips?.map((tour: any) => (
            <TripCard tour={tour} key={tour.id} />
          ))}
        </div>
      }
    </SectionTemplate>
  );
};

export default BestSellerTrips;
