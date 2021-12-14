declare global {
  interface Navigator {
      getUserMedia?: any,
      webkitGetUserMedia?: any,
      mozGetUserMedia?: any,
      msGetUserMedia?: any
  }
}
export function checkCapability() : boolean {
  let webRTCSupport = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia ||
        window.RTCPeerConnection;
  if (webRTCSupport) {
    return true;
  }
  else {
    return false;
  }
}
