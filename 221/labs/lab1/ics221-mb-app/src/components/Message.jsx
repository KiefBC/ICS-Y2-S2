import { useState } from "react";
import EditMessageForm from './EditMessageForm';
import { useContext } from 'react';
import messagesContext from '@/context/messagesContext';


const Message = ({ id, messageText }) => {

  const [ isEditable, setIsEditable ] = useState(false);

  const { editMessage, deleteMessage } = useContext(messagesContext);
  
  const modifyMessage = modifiedText => {
    editMessage(id, modifiedText);
    setIsEditable(false);
  }

  return (
    <li style={{ color: '#333333' }} onDoubleClick={ () => setIsEditable(true) }>
      { isEditable
        ? <EditMessageForm
            messageText={messageText}
            modifyMessage={modifyMessage}
          />
        : messageText 
      }
      <button style={{ marginLeft: '8px', color: 'red' }} onClick={ () => deleteMessage(id) }>(Delete)</button>
    </li>
  );
}

export default Message;