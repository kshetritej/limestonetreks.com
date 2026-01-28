import TrekDetailPage from "@/components/trek-detail/TrekDetailPage";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log("Slug: ", slug)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity/slug/${slug}`,
  );
  const data = await res.json();

  const trip = data?.data;

  return <TrekDetailPage trip={trip} />;
}
