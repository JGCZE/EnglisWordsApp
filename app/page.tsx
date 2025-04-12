import App from "@/components/App";
import { Button } from "@/components/ui/button";
import { getWord } from "@/lib/actions";
import Link from "next/link";

const Home = async () => {
  const words = await getWord();

  if (!words) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border max-w-96 mx-auto mt-5 min-h-60">
      <App words={words} />
      <Link href="/add">
        <Button>Přidej slovo</Button>
      </Link>
    </div>
  );
};

export default Home;
