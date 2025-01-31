import Message from './Message';
import { useContext } from 'react';
import messagesContext from '@/context/messagesContext';


const DisplayMessages = ({ searchMessage }) => {

  const { messages }  = useContext(messagesContext);

  const messagesToShow = searchMessage
    ? messages.filter((message) => message.text.toLowerCase().includes(searchMessage) )
    : messages
  
  return (
    <ul className="flex flex-col items-center">
      {messagesToShow.map(message =>
        <Message
          key={message.id}
          id={message.id}
          messageText={message.text}
        />
      )}
    </ul>
  );
}

export default DisplayMessages;