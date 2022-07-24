
export const getTotalPages = (length)=> Math.ceil(length/10);


export const getRecordIndex = (page)=> (page-1)*process.env.REACT_APP_PAGE_SIZE;


