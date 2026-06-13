import Image from 'next/image';

interface RatingProps {
  rating: string | number;
  maxRating?: number;
}

export function Rating({ rating, maxRating = 5 }: RatingProps) {
  const numRating = Number(rating) || 0;
  const fullStars = Math.floor(numRating);
  const hasHalfStar = numRating - fullStars >= 0.1;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Image key={`full-${i}`} src="/svgs/star.svg" alt="star" width={18} height={17} />
        ))}
        {hasHalfStar && (
          <div className="relative w-[17px] h-[17px]">
            <div className="absolute top-0 left-0 w-[50%] h-full overflow-hidden">
               <Image src="/svgs/star.svg" alt="star half" width={18} height={17} className="max-w-none" />
            </div>
          </div>
        )}
      </div>
      <span className="text-sm font-medium ml-1">
        {rating}/<span className="text-muted-foreground">{maxRating}</span>
      </span>
    </div>
  );
}
