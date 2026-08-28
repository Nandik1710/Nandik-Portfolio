import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <p>404</p>
      <h1>Looks like this route never made it to production.</h1>
      <Link href="/">Back home</Link>
    </main>
  );
}
