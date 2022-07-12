/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=new Float32Array(1);new Uint32Array(n.buffer);function M(n){return [255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function w(n,r){return 65535&n|r<<16}function x(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}

export { M, w, x };
