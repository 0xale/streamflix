import React from 'react'
import './Streame.scss'
import { Client } from "@livepeer/webrtmp-sdk";
import Livepeer from "livepeer-nodejs";
import { useRef, useState, useEffect } from 'react';

function Stream() {
  const videoEl = useRef(null);
  const stream = useRef(null);
  const mounted = useRef(false);
  const [session, setSession] = useState("");
  const [url, setUrl] = useState("");
  const [showChat, setShowChat] = useState(false);
  const livepeerObject = new Livepeer("b60123b3-c22c-4666-9d77-f3ebe52a8f42");
    const StartStream = async () => {

   
      videoEl.current.volume = 0;

      stream.current = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      videoEl.current.srcObject = stream.current;
      videoEl.current.play();
     
   

    const stream_ = await livepeerObject.Stream.create({
      name: "test_stream",
      profiles: [
        {
          name: "720p",
          bitrate: 2000000,
          fps: 30,
          width: 1280,
          height: 720,
        },
        {
          name: "480p",
          bitrate: 1000000,
          fps: 30,
          width: 854,
          height: 480,
        },
        {
          name: "360p",
          bitrate: 500000,
          fps: 30,
          width: 640,
          height: 360,
        },
      ],
    });
    console.log(stream_);
    console.log(stream_.streamKey);
        const current_stream = await livepeerObject.Stream.get(stream_.id);
    console.log("video id" + stream_.id);
    const result = await current_stream.setRecord(true);
    console.log(result);
    const url =
      "https://livepeercdn.com/hls/" + stream_.playbackId + "index.m3u8";
    setUrl(url);
    const streamKey = stream_.streamKey;

    if (!stream.current) {
      alert("Video stream was not started.");
    }

    if (!streamKey) {
      alert("Invalid streamKey.");
      return;
    }
     const client = new Client();

    const session = client.cast(stream.current, streamKey);

    session.on("open", () => {
      console.log("Stream started.");
      alert("Stream started; visit Livepeer Dashboard.");
      setShowChat(true);
    });

    session.on("close", () => {
      console.log("Stream stopped.");
    });

    session.on("error", (err) => {
      console.log("Stream error.", err.message);
    });

    // console.log(title);
    // console.log(des);
    // console.log(add);
    // console.log(record);
  const closeStream = async () => {
    session.close();
    window.location.reload();
  };


 
    
  }
  const EndStream = async () => {
  // let tracks = videoEl.srcObject.getTracks();

  stream.current = stream.current.stop();
  videoEl.srcObject = null;
}
  return (
   <div>
    {/* <button onClick={()=> StartStream()}> Setup Stream</button> */}
    {/* <button onClick={()=> closeStream()}> Setup Stream</button> */}
    
       <div className="min">
       <div class="container">
      <h3>Setup your stream</h3>
      <form action="#">
        <div class="field email-field">
          <div class="input-field">
            <input type="email" placeholder="Enter Stream Name" class="email" />
          </div>
         
        </div>
        <div class="field email-field">
          <div class="input-field">
            <input type="textarea" placeholder="Enter Description" class="email" />
          </div>
       
        </div>
         <video className="cs-video" ref={videoEl} controls />

        <div class="field button-field input-field">
          <input onClick={()=>StartStream()} type="button" value="Setup your stream" />
        </div>
         <div class="field button-field input-field">
          <input onClick={()=>EndStream()} type="button" value="Setup your stream" />
        </div>
      </form>
    </div>
</div>
    </div>
  )
}

export default Stream