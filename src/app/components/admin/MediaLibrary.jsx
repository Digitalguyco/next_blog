"use client";
import React, {useState, useEffect} from 'react';
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import Image from 'next/image';

export default function MediaLibrary() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
          const storage = getStorage();
          const listRef = ref(storage, "/"); // Reference to your folder
    
          try {
            // List all files in the 'images' folder
            const res = await listAll(listRef);
            const filesWithMetadata = await Promise.all(
              res.items.map(async (itemRef) => {
                const downloadURL = await getDownloadURL(itemRef); // Get download URL
                const metadata = await getMetadata(itemRef); // Get metadata
    
                return {
                  url: downloadURL,
                  name: metadata.name,
                  fullPath: metadata.fullPath,
                  size: metadata.size,
                  contentType: metadata.contentType,
                  lastModified: metadata.updated, // Last modified time
                };
              })
            );
            const test = filesWithMetadata;
            console.log(test);
            setFiles(filesWithMetadata);
          } catch (error) {
            console.error("Error fetching files: ", error);
          }
        };
    
        fetchFiles();
      }, []);
  return (
    <div className=" w-full gap-[30px] flex-row flex-wrap flex justify-between items-start">
         {files.length == 0 && (
        <div className='mt-6 '>
          <h1>No Images...</h1>
        </div>
      )}

      {files.map((file, index)=>(
        <div key={index} className="w-[30%]  mt-8 flex-grow gap-[30px] overflow-x-scroll flex justify-between items-center ">

            <div className=" flex flex-1 flex-col justify-between">
                        <Image width={500} height={500} className='h-72'   src={file.url || "/article1.png"} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">{file.name}</div>
                                  <div className="text-black text-sm font-normal font-['Inter'] leading-tight">{new Date(file.lastModified).toLocaleString()}</div>
                                </div>
                                <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
            </div>
      ))}

            
    </div>
  )
}
