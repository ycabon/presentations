/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as t}from"./common.js";function a(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function s(t,a,s,n,h,M,r,o,u,c,b,e,i,f,m,l,x){return t[0]=a,t[1]=s,t[2]=n,t[3]=h,t[4]=M,t[5]=r,t[6]=o,t[7]=u,t[8]=c,t[9]=b,t[10]=e,t[11]=i,t[12]=f,t[13]=m,t[14]=l,t[15]=x,t}function n(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function h(t,a){if(t===a){const s=a[1],n=a[2],h=a[3],M=a[6],r=a[7],o=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=s,t[6]=a[9],t[7]=a[13],t[8]=n,t[9]=M,t[11]=a[14],t[12]=h,t[13]=r,t[14]=o}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t}function M(t,a){return r(t,a)||n(t),t}function r(t,a){const s=a[0],n=a[1],h=a[2],M=a[3],r=a[4],o=a[5],u=a[6],c=a[7],b=a[8],e=a[9],i=a[10],f=a[11],m=a[12],l=a[13],x=a[14],q=a[15],p=s*o-n*r,d=s*u-h*r,g=s*c-M*r,j=n*u-h*o,v=n*c-M*o,k=h*c-M*u,w=b*l-e*m,y=b*x-i*m,z=b*q-f*m,A=e*x-i*l,B=e*q-f*l,C=i*q-f*x;let D=p*C-d*B+g*A+j*z-v*y+k*w;return D?(D=1/D,t[0]=(o*C-u*B+c*A)*D,t[1]=(h*B-n*C-M*A)*D,t[2]=(l*k-x*v+q*j)*D,t[3]=(i*v-e*k-f*j)*D,t[4]=(u*z-r*C-c*y)*D,t[5]=(s*C-h*z+M*y)*D,t[6]=(x*g-m*k-q*d)*D,t[7]=(b*k-i*g+f*d)*D,t[8]=(r*B-o*z+c*w)*D,t[9]=(n*z-s*B-M*w)*D,t[10]=(m*v-l*g+q*p)*D,t[11]=(e*g-b*v-f*p)*D,t[12]=(o*y-r*A-u*w)*D,t[13]=(s*A-n*y+h*w)*D,t[14]=(l*d-m*j-x*p)*D,t[15]=(b*j-e*d+i*p)*D,t):null}function o(t,a,s){const n=a[0],h=a[1],M=a[2],r=a[3],o=a[4],u=a[5],c=a[6],b=a[7],e=a[8],i=a[9],f=a[10],m=a[11],l=a[12],x=a[13],q=a[14],p=a[15];let d=s[0],g=s[1],j=s[2],v=s[3];return t[0]=d*n+g*o+j*e+v*l,t[1]=d*h+g*u+j*i+v*x,t[2]=d*M+g*c+j*f+v*q,t[3]=d*r+g*b+j*m+v*p,d=s[4],g=s[5],j=s[6],v=s[7],t[4]=d*n+g*o+j*e+v*l,t[5]=d*h+g*u+j*i+v*x,t[6]=d*M+g*c+j*f+v*q,t[7]=d*r+g*b+j*m+v*p,d=s[8],g=s[9],j=s[10],v=s[11],t[8]=d*n+g*o+j*e+v*l,t[9]=d*h+g*u+j*i+v*x,t[10]=d*M+g*c+j*f+v*q,t[11]=d*r+g*b+j*m+v*p,d=s[12],g=s[13],j=s[14],v=s[15],t[12]=d*n+g*o+j*e+v*l,t[13]=d*h+g*u+j*i+v*x,t[14]=d*M+g*c+j*f+v*q,t[15]=d*r+g*b+j*m+v*p,t}function u(t,a,s){const n=s[0],h=s[1],M=s[2];if(a===t)t[12]=a[0]*n+a[4]*h+a[8]*M+a[12],t[13]=a[1]*n+a[5]*h+a[9]*M+a[13],t[14]=a[2]*n+a[6]*h+a[10]*M+a[14],t[15]=a[3]*n+a[7]*h+a[11]*M+a[15];else{const s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],b=a[5],e=a[6],i=a[7],f=a[8],m=a[9],l=a[10],x=a[11];t[0]=s,t[1]=r,t[2]=o,t[3]=u,t[4]=c,t[5]=b,t[6]=e,t[7]=i,t[8]=f,t[9]=m,t[10]=l,t[11]=x,t[12]=s*n+c*h+f*M+a[12],t[13]=r*n+b*h+m*M+a[13],t[14]=o*n+e*h+l*M+a[14],t[15]=u*n+i*h+x*M+a[15]}return t}function c(t,a,s){const n=s[0],h=s[1],M=s[2];return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*h,t[5]=a[5]*h,t[6]=a[6]*h,t[7]=a[7]*h,t[8]=a[8]*M,t[9]=a[9]*M,t[10]=a[10]*M,t[11]=a[11]*M,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function b(a,s,n,h){let M,r,o,u,c,b,e,i,f,m,l,x,q,p,d,g,j,v,k,w,y,z,A,B,C=h[0],D=h[1],E=h[2],F=Math.sqrt(C*C+D*D+E*E);return F<t()?null:(F=1/F,C*=F,D*=F,E*=F,M=Math.sin(n),r=Math.cos(n),o=1-r,u=s[0],c=s[1],b=s[2],e=s[3],i=s[4],f=s[5],m=s[6],l=s[7],x=s[8],q=s[9],p=s[10],d=s[11],g=C*C*o+r,j=D*C*o+E*M,v=E*C*o-D*M,k=C*D*o-E*M,w=D*D*o+r,y=E*D*o+C*M,z=C*E*o+D*M,A=D*E*o-C*M,B=E*E*o+r,a[0]=u*g+i*j+x*v,a[1]=c*g+f*j+q*v,a[2]=b*g+m*j+p*v,a[3]=e*g+l*j+d*v,a[4]=u*k+i*w+x*y,a[5]=c*k+f*w+q*y,a[6]=b*k+m*w+p*y,a[7]=e*k+l*w+d*y,a[8]=u*z+i*A+x*B,a[9]=c*z+f*A+q*B,a[10]=b*z+m*A+p*B,a[11]=e*z+l*A+d*B,s!==a&&(a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15]),a)}function e(t,a,s){const n=Math.sin(s),h=Math.cos(s),M=a[4],r=a[5],o=a[6],u=a[7],c=a[8],b=a[9],e=a[10],i=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=M*h+c*n,t[5]=r*h+b*n,t[6]=o*h+e*n,t[7]=u*h+i*n,t[8]=c*h-M*n,t[9]=b*h-r*n,t[10]=e*h-o*n,t[11]=i*h-u*n,t}function i(t,a,s){const n=Math.sin(s),h=Math.cos(s),M=a[0],r=a[1],o=a[2],u=a[3],c=a[8],b=a[9],e=a[10],i=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=M*h-c*n,t[1]=r*h-b*n,t[2]=o*h-e*n,t[3]=u*h-i*n,t[8]=M*n+c*h,t[9]=r*n+b*h,t[10]=o*n+e*h,t[11]=u*n+i*h,t}function f(t,a,s){const n=Math.sin(s),h=Math.cos(s),M=a[0],r=a[1],o=a[2],u=a[3],c=a[4],b=a[5],e=a[6],i=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=M*h+c*n,t[1]=r*h+b*n,t[2]=o*h+e*n,t[3]=u*h+i*n,t[4]=c*h-M*n,t[5]=b*h-r*n,t[6]=e*h-o*n,t[7]=i*h-u*n,t}function m(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function l(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(a,s,h){if(0===s)return n(a);let M,r,o,u=h[0],c=h[1],b=h[2],e=Math.sqrt(u*u+c*c+b*b);return e<t()?null:(e=1/e,u*=e,c*=e,b*=e,M=Math.sin(s),r=Math.cos(s),o=1-r,a[0]=u*u*o+r,a[1]=c*u*o+b*M,a[2]=b*u*o-c*M,a[3]=0,a[4]=u*c*o-b*M,a[5]=c*c*o+r,a[6]=b*c*o+u*M,a[7]=0,a[8]=u*b*o+c*M,a[9]=c*b*o-u*M,a[10]=b*b*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a)}function q(t,a){const s=Math.sin(a),n=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=s,t[7]=0,t[8]=0,t[9]=-s,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(t,a){const s=Math.sin(a),n=Math.cos(a);return t[0]=n,t[1]=s,t[2]=0,t[3]=0,t[4]=-s,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function g(t,a){const s=a[0],n=a[1],h=a[2],M=a[4],r=a[5],o=a[6],u=a[8],c=a[9],b=a[10];return t[0]=Math.sqrt(s*s+n*n+h*h),t[1]=Math.sqrt(M*M+r*r+o*o),t[2]=Math.sqrt(u*u+c*c+b*b),t}function j(t,a,s,n){const h=a[0],M=a[1],r=a[2],o=a[3],u=h+h,c=M+M,b=r+r,e=h*u,i=h*c,f=h*b,m=M*c,l=M*b,x=r*b,q=o*u,p=o*c,d=o*b,g=n[0],j=n[1],v=n[2];return t[0]=(1-(m+x))*g,t[1]=(i+d)*g,t[2]=(f-p)*g,t[3]=0,t[4]=(i-d)*j,t[5]=(1-(e+x))*j,t[6]=(l+q)*j,t[7]=0,t[8]=(f+p)*v,t[9]=(l-q)*v,t[10]=(1-(e+m))*v,t[11]=0,t[12]=s[0],t[13]=s[1],t[14]=s[2],t[15]=1,t}function v(t,a){const s=a[0],n=a[1],h=a[2],M=a[3],r=s+s,o=n+n,u=h+h,c=s*r,b=n*r,e=n*o,i=h*r,f=h*o,m=h*u,l=M*r,x=M*o,q=M*u;return t[0]=1-e-m,t[1]=b+q,t[2]=i-x,t[3]=0,t[4]=b-q,t[5]=1-c-m,t[6]=f+l,t[7]=0,t[8]=i+x,t[9]=f-l,t[10]=1-c-e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function k(t,a,s,n,h,M,r){const o=1/(s-a),u=1/(h-n),c=1/(M-r);return t[0]=2*M*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*M*u,t[6]=0,t[7]=0,t[8]=(s+a)*o,t[9]=(h+n)*u,t[10]=(r+M)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=r*M*2*c,t[15]=0,t}function w(t,a,s,n,h,M,r){const o=1/(a-s),u=1/(n-h),c=1/(M-r);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(a+s)*o,t[13]=(h+n)*u,t[14]=(r+M)*c,t[15]=1,t}function y(a,s,h,M){const r=s[0],o=s[1],u=s[2];let c=r-h[0],b=o-h[1],e=u-h[2];const i=t();if(Math.abs(c)<i&&Math.abs(b)<i&&Math.abs(e)<i)return void n(a);let f=1/Math.sqrt(c*c+b*b+e*e);c*=f,b*=f,e*=f;const m=M[0],l=M[1],x=M[2];let q=l*e-x*b,p=x*c-m*e,d=m*b-l*c;f=Math.sqrt(q*q+p*p+d*d),f?(f=1/f,q*=f,p*=f,d*=f):(q=0,p=0,d=0);let g=b*d-e*p,j=e*q-c*d,v=c*p-b*q;f=Math.sqrt(g*g+j*j+v*v),f?(f=1/f,g*=f,j*=f,v*=f):(g=0,j=0,v=0),a[0]=q,a[1]=g,a[2]=c,a[3]=0,a[4]=p,a[5]=j,a[6]=b,a[7]=0,a[8]=d,a[9]=v,a[10]=e,a[11]=0,a[12]=-(q*r+p*o+d*u),a[13]=-(g*r+j*o+v*u),a[14]=-(c*r+b*o+e*u),a[15]=1}function z(t,a,s,n){const h=a[0],M=a[1],r=a[2],o=n[0],u=n[1],c=n[2];let b=h-s[0],e=M-s[1],i=r-s[2],f=b*b+e*e+i*i;f>0&&(f=1/Math.sqrt(f),b*=f,e*=f,i*=f);let m=u*i-c*e,l=c*b-o*i,x=o*e-u*b;return f=m*m+l*l+x*x,f>0&&(f=1/Math.sqrt(f),m*=f,l*=f,x*=f),t[0]=m,t[1]=l,t[2]=x,t[3]=0,t[4]=e*x-i*l,t[5]=i*m-b*x,t[6]=b*l-e*m,t[7]=0,t[8]=b,t[9]=e,t[10]=i,t[11]=0,t[12]=h,t[13]=M,t[14]=r,t[15]=1,t}function A(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function B(a,s){if(a===s)return!0;const n=a[0],h=a[1],M=a[2],r=a[3],o=a[4],u=a[5],c=a[6],b=a[7],e=a[8],i=a[9],f=a[10],m=a[11],l=a[12],x=a[13],q=a[14],p=a[15],d=s[0],g=s[1],j=s[2],v=s[3],k=s[4],w=s[5],y=s[6],z=s[7],A=s[8],B=s[9],C=s[10],D=s[11],E=s[12],F=s[13],G=s[14],H=s[15],I=t();return Math.abs(n-d)<=I*Math.max(1,Math.abs(n),Math.abs(d))&&Math.abs(h-g)<=I*Math.max(1,Math.abs(h),Math.abs(g))&&Math.abs(M-j)<=I*Math.max(1,Math.abs(M),Math.abs(j))&&Math.abs(r-v)<=I*Math.max(1,Math.abs(r),Math.abs(v))&&Math.abs(o-k)<=I*Math.max(1,Math.abs(o),Math.abs(k))&&Math.abs(u-w)<=I*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(c-y)<=I*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(b-z)<=I*Math.max(1,Math.abs(b),Math.abs(z))&&Math.abs(e-A)<=I*Math.max(1,Math.abs(e),Math.abs(A))&&Math.abs(i-B)<=I*Math.max(1,Math.abs(i),Math.abs(B))&&Math.abs(f-C)<=I*Math.max(1,Math.abs(f),Math.abs(C))&&Math.abs(m-D)<=I*Math.max(1,Math.abs(m),Math.abs(D))&&Math.abs(l-E)<=I*Math.max(1,Math.abs(l),Math.abs(E))&&Math.abs(x-F)<=I*Math.max(1,Math.abs(x),Math.abs(F))&&Math.abs(q-G)<=I*Math.max(1,Math.abs(q),Math.abs(G))&&Math.abs(p-H)<=I*Math.max(1,Math.abs(p),Math.abs(H))}function C(a){const s=t(),n=a[0],h=a[1],M=a[2],r=a[4],o=a[5],u=a[6],c=a[8],b=a[9],e=a[10];return Math.abs(1-(n*n+r*r+c*c))<=s&&Math.abs(1-(h*h+o*o+b*b))<=s&&Math.abs(1-(M*M+u*u+e*e))<=s}function D(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[8]&&0===t[9]&&1===t[10]}export{M as A,q as B,w as C,z as D,x as a,j as b,a as c,e as d,A as e,m as f,g,i as h,r as i,v as j,n as k,D as l,o as m,C as n,k as o,B as p,y as q,f as r,c as s,h as t,s as u,u as v,d as w,l as x,p as y,b as z};
