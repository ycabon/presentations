import { s, ar as G, ax as L, aq as P, dq as U } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(l,n){const{textureFloat:i,colorBufferFloat:f}=l.capabilities,s$1=i?.textureFloat,u=i?.textureFloatLinear,_=i?.textureHalfFloat,m=i?.textureHalfFloatLinear,p=i?.HALF_FLOAT,d=f?.textureFloat,x=f?.textureHalfFloat,b=f?.floatBlend,{floatBufferBlendWorking:h}=l.driverTest;if(!s$1&&!_)throw new s("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");if(!d&&!x)throw new s("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(b&&h||x))throw new s("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(h?"":" This device claims support for EXT_float_blend, but does not actually support it."));const E=s$1&&d&&b&&h,F=_&&x,c=u,R=m,L$1=!!f?.R32F,T=!!f?.R16F;if(E&&(c||!R))return c||n.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),{dataType:G.FLOAT,samplingMode:c?L.LINEAR:L.NEAREST,pixelFormat:L$1?P.RED:P.RGBA,internalFormat:L$1?U.R32F:P.RGBA};if(F)return R||n.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),{dataType:p,samplingMode:R?L.LINEAR:L.NEAREST,pixelFormat:T?P.RED:P.RGBA,internalFormat:T?U.R16F:P.RGBA};throw new s("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}

export { l };
