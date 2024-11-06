/**
 * @author 'abdullah allhayni  '
 * @version v1.0
 * @description Castom hook vedo .
 * @TODO : cut all related hook   .
 * @step :
 * 1- App.js
 * 2- cut related hook vedio
 * 3- identefier danimeic input
 * 4- defind output by return
 * @var defaultSearchTerm
 * @returns   {List,function} vedio and search
 */
import { useState, useEffect } from "react";
import youtube from "../API/youtub";

const useVideo = (defaultSearchTerm) => {
  // insshall value for vedue and selct vedoe
  const [videos, setVideos] = useState([]);

  // useEffect
  useEffect(() => {
    // defolt serch
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  //   handle serch
  const search = async (term) => {
    // hook for serch API
    const respnse = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // set state
    setVideos(respnse.data.items);
  };
  //   return data
  return [videos, search];
};
export default useVideo;
