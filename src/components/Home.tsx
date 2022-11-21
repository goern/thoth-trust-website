import { useLoaderData } from "react-router-dom";

interface HomeLoaderData {
  date: string;
}

export function Home() {
  let data = useLoaderData() as HomeLoaderData;

  return (
    <div>
      <h2>Home</h2>
      <p>Home</p>
      <p>Last loaded at: {data.date}</p>
    </div>
  );
}

export async function homeLoader(): Promise<HomeLoaderData> {
  return {
    date: new Date().toISOString(),
  };
}

export default Home;
