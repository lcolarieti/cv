import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {ICv} from '../interfaces/cv';


export const useData = (url: string, setReady: Dispatch<SetStateAction<boolean>>) => {
  const [data, setData] = useState({} as ICv);

  useEffect(() => {
    (async () => {
      const response: ICv = await (await fetch(url)).json();
      setData(response);
      setReady(true);
    })();
  }, [url, setReady]);

  return data;
}