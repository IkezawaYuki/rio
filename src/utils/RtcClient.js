import FirebaseSignallingClient from "./FirebaseSignallingClient";
import { ref, onValue } from "firebase/database";

export default class RtcClient {
  constructor(setRtcClient) {
    const config = {
      iceServers: [{urls: "stun:stun.stunprotocol.org"}],
    }
    this.rtcPeerConnection = new RTCPeerConnection(config);
    this.firebaseSignallingClient = new FirebaseSignallingClient();
    this.localPeerName = "";
    this.remotePeerName = "";
    this._setRtcClient = setRtcClient;
    this.mediaStream = null;
  }

  setRtcClient() {
    this._setRtcClient(this);
  }

  async getMediaStream() {
    try {
      const constraints = { audio: true, video: true }
      this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      console.error(error);
    }
  }

  startListening(localPeerName) {
    this.localPeerName = localPeerName;
    this.setRtcClient();
    onValue(ref(this.firebaseSignallingClient.database, localPeerName), (snapshot) => {
      const data = snapshot.val();

    });
  }
}