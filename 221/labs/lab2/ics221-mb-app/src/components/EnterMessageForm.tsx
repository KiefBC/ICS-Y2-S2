'use client'

import { useContext } from 'react';
import messagesContext from '@/context/messagesContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// TypeScript type for Form Data
type FormData = {
  messageText: string;
}

// Zod Schema for the Form's Message
// the message object is for real-time validation
const messageSchema = z.object({
  messageText: z
    .string()
    .trim()
    .min(3, { message: "Your message must be at least 3 characters." })
    .max(30, { message: "Your message must be no more than 30 characters." })
});


const EnterMessageForm = () => {

  const { addMessage } = useContext(messagesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(messageSchema),
  })


  return (
    <div className="md:w-1/2 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
            Add a Message
          </h2>
        </div>

        {/* Card */}
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <form onSubmit={handleSubmit( data => addMessage(data.messageText)) }>
            <div className="mb-4 sm:mb-8">
              <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">Enter a Message:</label>
              <input type="text" {...register("messageText")} id="message" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter a message..." />
              <p className="ml-1 mt-2 text-sm text-red-600">{errors.messageText?.message}</p>
            </div>
            <div className="mt-6 grid gap-3">
              <button 
                type="submit" 
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border bg-transparent text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-neutral-800"
              >
                Add Message
              </button>
              <a 
                href="/"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Back to Home
              </a>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
};

export default EnterMessageForm;