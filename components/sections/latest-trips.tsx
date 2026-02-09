import SectionTemplate from "../templates/section-template";
import MyLink from "../atoms/my-link";
import TripCard from "../cards/trip-card";

const LatestTrips = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?page=1&limit=8`,
    { method: "GET" },
  );
  const resJSON = await res.json();
  const trips = resJSON.data;

  return (
    <SectionTemplate
      badgeText={<p>popular trips</p>}
      title={<p>Popular Right Now</p>}
      text={
        <p>
          What travelers are booking this season — based on availability,
          weather, and trail conditions.
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
        </div>
      }
    </SectionTemplate>
  );
};

export default LatestTrips;
