import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const addWord = async () => {
  // async save to db
  return (
    <div className="w-90 mx-auto">
      addWord
      <Input placeholder="anglicky" />
      <Input placeholder="česky" />
      <Button> Add </Button>
      <Link href="/">
        <Button> Zpět </Button>
      </Link>
    </div>
  );
};

export default addWord;
