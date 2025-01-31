

const FilterMessage = ({searchMessage, handleSearchMessageChange}) => (
  <div className="flex flex-col items-center">
    <input className="input input-bordered w-full max-w-xs"value={searchMessage} onChange={handleSearchMessageChange} placeholder="Search messages..." />
  </div>
);

export default FilterMessage;