import Image from "next/image";

export const ReviewBatch = ({
  imageSource,
  alt,
  reviewCount,
}: {
  imageSource: string;
  alt: string;
  reviewCount: number;
}) => {
  return (
    <div
      className="bg-white/80 rounded-sm p-4 w-fit"
      style={{
        borderRadius: "12px",
      }}
    >
      <Image src={imageSource} alt={alt} width={100} height={100} />
      <p className="text-primary font-bold">
        Review: 5/5 ({reviewCount} Reviews)
      </p>
    </div>
  );
};
