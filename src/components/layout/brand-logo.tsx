import Image from "next/image";

export function BrandLogo() {
  return (
    <Image
      src="/logo-shiftgnosis.svg"
      alt="SHIFT GNOSIS"
      width={2403}
      height={459}
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}
