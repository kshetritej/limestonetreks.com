const numbersData = [
  {
    count: "20+",
    achievement: "Years of Experience",
  },
  {
    count: "100+",
    achievement: "Trips Planned",
  },
  {
    count: "98%",
    achievement: "Traveler Satisfaction",
  },
];
export function Stats() {
  return (
    <div className="w-full bg-primary mt-12 text-white p-8 mx-auto ">
      <div className="flex container mx-auto max-w-5xl">
        {numbersData.map((data, index) => {
          return (
            <div key={index} className="p-4 border w-100 flex flex-col items-center justify-center nth-[1]:border-r-0 nth-[3]:border-l-0">
              <div className="text-3xl font-bold">{data.count}</div>
              <p className="text-sm">{data.achievement}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
