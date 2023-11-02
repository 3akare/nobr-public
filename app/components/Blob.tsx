//next imports
import Image from "next/image";

//images
import blob from "@images/blob.svg";

const Blob = () => {
  return (
    <>
      <Image
        src={blob}
        alt="blob"
        className="absolute -top-10 blur opacity-30 hidden lg:block"
        priority
        loading="eager"
      />
      <Image
        src={blob}
        alt="blob"
        className="absolute -bottom-90 right-0 rotate-180 blur opacity-20 hidden lg:block"
        priority
        loading="eager"
      />
    </>
  );
};

export default Blob;