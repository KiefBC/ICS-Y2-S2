'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import messageService from '@/services/messageService';
import messagesContext from '@/context/messagesContext';
import type { TMessage } from '@/shared.types';

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  // list of messages 
  const [messages, setMessages] = useState<TMessage[]>([]);

  const router = useRouter();

  useEffect(() => {
    console.log('useEffect was executed!');
    // start of IIFE
    (async () => {
      try {
        console.log('Fetching messages from:', process.env.NEXT_PUBLIC_SERVICE_URL);
        const serverMessages = await messageService.getAll();
        console.log('Received messages:', serverMessages);
        setMessages(serverMessages);
      } catch (error: any) {
        console.error('API Error:', error.response || error);
      }
    })();
    // end IFFE
  }, []);

  // this will be called by addNewMessage in the Form
  // inverse data flow - pass data up to App
  const addMessage = async (newMessageText: string) => {

    if (messages.some((message: TMessage) =>
      message.text.toLowerCase() === newMessageText.toLowerCase())) {
      alert(`${newMessageText} message is already in list of messages!`);
    } else {

      // POST Request
      try {
        const newMessageObject =
          await messageService.create({ text: newMessageText });
        setMessages(messages.concat(newMessageObject));
        router.push('/');
      } catch (error: any) {
        console.log('API Error: ' + error);
      }
    }
  }

  const editMessage = async (modifiedMessageId: number, modifiedMessageText: string) => {
    const newMessages = messages.map((message: TMessage) =>
      message.id === modifiedMessageId
        ? { ...message, text: modifiedMessageText }
        : message
    );

    try {
      await messageService.update(modifiedMessageId,
        { text: modifiedMessageText });
      setMessages(newMessages);
    } catch (error) {
      console.log('API Error: ' + error);
    }
  }


  const deleteMessage = async (messageId: number) => {
    try {
      await messageService.deleteOne(messageId);
      setMessages(messages.filter((message: TMessage) => message.id !== messageId));
    } catch (error: any) {
      console.log('API Error: ' + error);
    }
  }


  return (
    <messagesContext.Provider value={{ messages, editMessage, deleteMessage, addMessage }}>
      {children}
    </messagesContext.Provider>
  );
}

export default MessageProvider;
