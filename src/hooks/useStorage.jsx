import React, { useEffect, useState } from 'react'
import { projectStorage , projectFirestore, timeStamp} from '../firebase/Firebase'

const useStorage = (file) => {
    const[progress,setProgress] = useState(0); 
    const[error,setError] = useState(null); 
    const[url,setUrl] = useState(null); 


    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        //putting upload on a percentage
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        },(err)=>{
            setError(err); //if error comes
        },async ()=>{
            const url = await storageRef.getDownloadURL();
            //Creating a data base by url
            const createdAt = timeStamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    },[file])
  return {progress,url,error}
}

export default useStorage