"use client";
import { useState } from "react";
import FilterMessage from "./FilterMessage";
import DisplayMessages from "./DisplayMessages";
import Header from "./Header";
import Link from "next/link";

const MessageBoard = () => {
  const [searchMessage, setSearchMessage] = useState('');

  return (
    <>
      <Header />
      <FilterMessage
        searchMessage={searchMessage}
        handleSearchMessageChange={(event) =>
          setSearchMessage(event.target.value)
        }
      />
      <div className="flex justify-center m-4">
        <Link href="/addmessage" className="btn btn-wide">Add a Message</Link>
      </div>
      <DisplayMessages searchMessage={searchMessage} />
    </>
  );
};

export default MessageBoard;
