import Image from "next/image";
export default function Home() {
  return (
      <main className={"flex w-full min-h-screen bg-white"}>
          <div className={"flex justify-center items-center mx-auto"}>
              <Image
                  src="/logobig.png"
                  alt="joanna jamroz fotografia logo"
                  width={480}
                  height={160}
                  priority
              />
          </div>
      </main>
  );
}
