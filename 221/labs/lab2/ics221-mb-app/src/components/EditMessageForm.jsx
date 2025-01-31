import { useState } from 'react';

const EditMessageForm = ({ messageText, modifyMessage }) => {

  const [ modifiedText, setModifiedText] = useState(messageText);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    modifyMessage(modifiedText);
  }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type='text'
          value={modifiedText}
          onChange={event => setModifiedText(event.target.value)}
          className="input input-bordered w-1/2 max-w-xs"
        />
    </form>
  );
}

export default EditMessageForm;