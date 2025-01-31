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

  const handleDoubleClick = () => {
    if (window.innerWidth >= 768) {
      setIsEditable(true);
    }
  }

  return (
    <div className="card w-80 bg-white shadow-lg mb-2 mx-auto">
      <div className="card-body p-4">
        <div 
          className="flex justify-between items-center sm:cursor-pointer" 
          onDoubleClick={handleDoubleClick}
        >
          <div className="flex-grow text-center">
            {isEditable 
              ? <EditMessageForm
                  messageText={messageText}
                  modifyMessage={modifyMessage}
                />
              : <p className="text-neutral">
                  {messageText}
                  <span className="hidden sm:inline text-xs text-gray-400 pl-2">
                    (double click to edit)
                  </span>
                </p>
            }
          </div>
          <button 
            className="btn btn-ghost btn-xs btn-outline ml-2" 
            onClick={() => deleteMessage(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;