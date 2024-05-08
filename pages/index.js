import styles from "@/styles/Home.module.css";
import { Env } from "@humanwhocodes/env";

export default function Home({ items }) {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        {items.map((item) => {
          return <p key={item.id}>{item.text}</p>;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const env = new Env();

  console.log("ENV:", env.get("FUNC_URL"));

  const res = await fetch(env.get("FUNC_URL"));

  let items = await res.json();

  return {
    props: { items },
  };
}
