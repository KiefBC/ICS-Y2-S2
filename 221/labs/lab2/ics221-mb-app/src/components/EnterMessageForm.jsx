"use client";
import { useState, useContext } from "react";
import messagesContext from "@/context/messagesContext";
import Link from "next/link";

const EnterMessageForm = () => {
  const { addMessage } = useContext(messagesContext);
  const [message, setMessage] = useState("");

  const addNewMessage = (event) => {
    event.preventDefault();
    addMessage(message);
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-200 shadow-xl w-96">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Enter a Message</h2>
          <form onSubmit={addNewMessage}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Type your message here"
                className="input input-bordered w-full mb-4"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <div className="flex gap-2">
                <Link href="/" className="btn btn-neutral flex-1">
                  Back
                </Link>
                <button 
                  type="submit" 
                  disabled={!message}
                  className="btn btn-primary flex-1"
                >
                  Add Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnterMessageForm;
