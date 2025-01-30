

const FilterMessage = ({searchMessage, handleSearchMessageChange}) => (
  // <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //   <Box sx={{ ml: 3 }}>
  //     <Typography>Show only</Typography>
  //     <Typography>messages containing:</Typography>
  //   </Box>
  //   <TextField sx={{ ml: 1 }} value={searchMessage} onChange={handleSearchMessageChange} />
  // </Box>
  <div>
    <span>Show only messages containing:</span>
    <input value={searchMessage} onChange={handleSearchMessageChange} />
  </div>
);

export default FilterMessage;