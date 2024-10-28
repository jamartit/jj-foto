import Image from "next/image";
import Link from "next/link";

export default function Logo({
  homePageLink,
  mobileLogo,
}: {
  homePageLink?: boolean;
  mobileLogo?: boolean;
}) {
  return (
    <>
      {homePageLink ? (
        <Link href={"/"}>
          <ImagePart mobileLogo={mobileLogo} />
        </Link>
      ) : (
        <ImagePart />
      )}
    </>
  );
}

function ImagePart({ mobileLogo }: { mobileLogo?: boolean }) {
  return (
    <Image
      className="dark:invert"
      src="/logobig.png"
      alt="Next.js logo"
      width={mobileLogo ? 150 : 270}
      height={mobileLogo ? 50 : 80}
    />
  );
}
