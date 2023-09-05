import { useState, useEffect } from 'react';
import sendRequest from './path-to-sendRequest';

async function acquire(url) {
  try {
    return await sendRequest(url);
  } catch (error) {
    console.log("Error while fetching data:", error);
    throw error;
  }
}

export default function useAcquireData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    acquire(url)
      .then(fetchedData => {
        if (fetchedData) setData(fetchedData);
      });
  }, [url]);  // re-run if url changes

  return data;
}
