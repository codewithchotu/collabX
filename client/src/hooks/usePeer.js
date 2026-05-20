import Peer from 'simple-peer';

export const createPeer = (stream) => {
  return new Peer({
    initiator: true,
    trickle: false,
    stream,
  });
};