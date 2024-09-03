import Image from 'next/image';

export default function Logo() {
  return (
    <Image
    src="/farelabs-logo.png"
    width={560}
    height={620}
    className="block"
    alt="Fare Labs"
  />   
     
  );
}
