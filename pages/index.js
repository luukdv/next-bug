import Link from "next/link";

export default function Home() {
  return (
    <Link href="/pages/test/">
      <h1 style={{ textAlign: "center" }}>Visit this link</h1>
    </Link>
  );
}
