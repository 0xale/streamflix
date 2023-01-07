import React from 'react'
import './video.scss'

function Video() {
  const allVideos = document.querySelectorAll('.video');

allVideos.forEach((v) => {
 v.addEventListener('mouseover', () => {
  const video = v.querySelector('video');
  video.play();
 });
 v.addEventListener('mouseleave', () => {
  const video = v.querySelector('video');
  video.pause();
 });
});

  return (
    <div>
      <div className="main-container">
      <div class="videos">
    <div class="video">
     <div class="video-time">15.13</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" type="video/mp4"> 
  
     </video>
     <div class="video-content">Planning Helps Make</div>
     <div class="view">15.4k views</div>
    </div>
    <div class="video">
     <div class="video-time">13.10</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
  
     </video>
     <div class="video-content">This Is Cloaud Break</div>
     <div class="view">13.2k views</div>
    </div>
    <div class="video">
     <div class="video-time">15.30</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4">
       </video>
     <div class="video-content">Lost Your Mind</div>
     <div class="view">11.7k views</div>
    </div>
    <div class="video">
     <div class="video-time">11.30</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4">
       </video>
     <div class="video-content">Planning Helps Make</div>
     <div class="view">9.2k views</div>
    </div>
    <div class="video">
     <div class="video-time">6.35</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4">
       </video>
     <div class="video-content">Research In Advertising</div>
     <div class="view">18.4k views</div>
    </div>
    <div class="video">
     <div class="video-time">2.21</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4">
       </video>
     <div class="video-content">See The Unmatched</div>
     <div class="view">3.4k views</div>
    </div>
    <div class="video">
     <div class="video-time">12.10</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4">
       </video>
     <div class="video-content">Dance In The Air</div>
     <div class="view">17.4k views</div>
    </div>
    <div class="video">
     <div class="video-time">7.50</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
       </video>
     <div class="video-content">Sadness Will Last Forever</div>
     <div class="view">12.6k views</div>
    </div>
     <div class="video">
     <div class="video-time">7.50</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" type="video/mp4">
       </video>
     <div class="video-content">Sadness Will Last Forever</div>
     <div class="view">12.6k views</div>
    </div>
     <div class="video">
     <div class="video-time">7.50</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" type="video/mp4">
       </video>
     <div class="video-content">Sadness Will Last Forever</div>
     <div class="view">12.6k views</div>
    </div>
     <div class="video">
     <div class="video-time">7.50</div>
     <video muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" type="video/mp4">
       </video>
     <div class="video-content">Sadness Will Last Forever</div>
     <div class="view">12.6k views</div>
    </div>
   </div>
    </div>
    </div>
  )
}

export default Video