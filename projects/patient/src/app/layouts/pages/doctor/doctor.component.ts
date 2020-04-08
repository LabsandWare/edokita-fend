import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  viewMode = true;
  // localStream;
  constructor() { }
  
  ngOnInit(): void {
  }
  call() {
    this.viewMode = !this.viewMode;
    const mediaStreamConstraints = {
      video: true,
    };
    navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(this.gotLocalMediaStream).catch(this.handleLocalMediaStreamError);
    
  }
  gotLocalMediaStream(mediaStream) {
    let localStream;
    const localVideo = document.querySelector('video');
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
  }
  handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
  }
}
