// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets"],function(M,a,N){function z(b,c,d,e,f,g){const m=d.length,h=f.length;var n=Float64Array.BYTES_PER_ELEMENT;const u=Uint32Array.BYTES_PER_ELEMENT,v=a._lclib._malloc(15+m*(Uint8Array.BYTES_PER_ELEMENT+2*n)+2*h*u);try{const p=v+16-v%16,q=p+m*n,r=q+m*n,t=r+h*u,k=t+h*u;n=()=>[a._lclib.HEAPF64.subarray(p>>3,(p>>3)+m),a._lclib.HEAPF64.subarray(q>>3,(q>>3)+m),a._lclib.HEAPU32.subarray(r>>2,(r>>2)+h),a._lclib.HEAPU32.subarray(t>>2,(t>>2)+h),a._lclib.HEAPU8.subarray(k,
k+m)];const [l,I,J,A,B]=n();l.set(d);I.set(e);J.set(f);A.set(g);B.set(c);const w=b(m,k,p,q,h,r,t);b=null;if(w){const x=a._lclib.getLayoutLinksTypes(),y=a._lclib.getLayoutLinksVerticesEndIndices(),C=a._lclib.getLayoutLinksVertices(),K=a._lclib.countLayoutLinksVertices();b={types:a._lclib.HEAPU8.subarray(x,x+h),vertexEndIndex:a._lclib.HEAPU32.subarray(y>>2,(y>>2)+h),vertices:a._lclib.HEAPF64.subarray(C>>3,(C>>3)+2*K)}}const [D,E,F,G,H]=n();d.set(D);e.set(E);f.set(F);g.set(G);c.set(H);return{success:w,
links:b}}finally{a._lclib._free(v),a._lclib.cleanupLayout()}}let L;a._lclib=null;a.NodeFlag=void 0;(function(b){b[b.None=0]="None";b[b.IsMovable=1]="IsMovable";b[b.IsGeographic=2]="IsGeographic";b[b.IsRoot=4]="IsRoot"})(a.NodeFlag||(a.NodeFlag={}));a.LinkType=void 0;(function(b){b[b.Regular=0]="Regular";b[b.Orthogonal=1]="Orthogonal";b[b.Curved=2]="Curved";b[b.Recursive=3]="Recursive"})(a.LinkType||(a.LinkType={}));a.LCForceDirectedLayout=void 0;(function(b){b.getMinIdealEdgeLength=function(){return a._lclib.getMinIdealEdgeLength()};
b.apply=function(c,d,e,f,g,m=2,h=1,n=-1){return z((u,v,p,q,r,t,k)=>a._lclib.applyForceDirectedLayout(u,v,p,q,r,t,k,m,h,n),c,d,e,f,g)}})(a.LCForceDirectedLayout||(a.LCForceDirectedLayout={}));a.LCCommunityLayout=void 0;(function(b){b.apply=function(c,d,e,f,g,m=2,h=1,n=-1){return z((u,v,p,q,r,t,k)=>a._lclib.applyCommunityLayout(u,v,p,q,r,t,k,m,h,n),c,d,e,f,g)}})(a.LCCommunityLayout||(a.LCCommunityLayout={}));a.LCSimpleLayout=void 0;(function(b){b.apply=function(c,d,e,f,g){return z(a._lclib.applySimpleLayout,
c,d,e,f,g)}})(a.LCSimpleLayout||(a.LCSimpleLayout={}));a.LCHierarchicalLayout=void 0;(function(b){b.apply=function(c,d,e,f,g){return z(a._lclib.applyHierarchicalLayout,c,d,e,f,g)}})(a.LCHierarchicalLayout||(a.LCHierarchicalLayout={}));a.LCRadialTreeLayout=void 0;(function(b){b.apply=function(c,d,e,f,g){return z(a._lclib.applyRadialTreeLayout,c,d,e,f,g)}})(a.LCRadialTreeLayout||(a.LCRadialTreeLayout={}));a.LCSmartTreeLayout=void 0;(function(b){b.apply=function(c,d,e,f,g){return z(a._lclib.applySmartTreeLayout,
c,d,e,f,g)}})(a.LCSmartTreeLayout||(a.LCSmartTreeLayout={}));a.RelationshipInterpretation=void 0;(function(b){b[b.Undirected=0]="Undirected";b[b.Directed=1]="Directed";b[b.Reversed=2]="Reversed"})(a.RelationshipInterpretation||(a.RelationshipInterpretation={}));a.CentralityMode=void 0;(function(b){b[b.ByCC_Raw=0]="ByCC_Raw";b[b.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally";b[b.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"})(a.CentralityMode||(a.CentralityMode={}));a.computeCentrality=function(b,
c,d,e,f,g,m,h,n,u,v,p,q,r,t){const k=c.length;var l=Float64Array.BYTES_PER_ELEMENT;const I=Uint32Array.BYTES_PER_ELEMENT,J=a._lclib._malloc(15+8*b*l+3*k*I);try{const A=J+16-J%16,B=A+b*l,w=B+b*l,D=w+b*l,E=D+b*l,F=E+b*l,G=F+b*l,H=G+b*l,x=H+b*l,y=x+k*I,C=y+k*I;l=()=>[a._lclib.HEAPF64.subarray(A>>3,(A>>3)+b),a._lclib.HEAPF64.subarray(B>>3,(B>>3)+b),a._lclib.HEAPF64.subarray(w>>3,(w>>3)+b),a._lclib.HEAPF64.subarray(D>>3,(D>>3)+b),a._lclib.HEAPF64.subarray(E>>3,(E>>3)+b),a._lclib.HEAPF64.subarray(F>>3,
(F>>3)+b),a._lclib.HEAPF64.subarray(G>>3,(G>>3)+b),a._lclib.HEAPF64.subarray(H>>3,(H>>3)+b),a._lclib.HEAPU32.subarray(x>>2,(x>>2)+k),a._lclib.HEAPU32.subarray(y>>2,(y>>2)+k),a._lclib.HEAPU32.subarray(C>>2,(C>>2)+k)];const [K,O,P,Q,R,S,T,U,V,W,X]=l();K.set(h);O.set(n);P.set(u);Q.set(v);R.set(p);S.set(q);T.set(r);U.set(t);V.set(c);W.set(d);X.set(e);const Y=a._lclib.computeCentrality(b,k,x,y,C,f,g,m,A,B,w,D,E,F,G,H),[Z,aa,ba,ca,da,ea,fa,ha,ia,ja,ka]=l();h.set(Z);n.set(aa);u.set(ba);v.set(ca);p.set(da);
q.set(ea);r.set(fa);t.set(ha);c.set(ia);d.set(ja);e.set(ka);return Y}finally{a._lclib._free(J)}};a.defaultBudgetTheoreticalSeconds=2;a.defaultIdealEdgeLengthMultiplier=1;a.defaultRepulsionRadiusMultiplier=-1;a.isLoaded=function(){return!!a._lclib};a.load=function(){return L?L:L=(new Promise((b,c)=>M(["../../chunks/lclayout"],b,c))).then(b=>b.lclayout).then(({default:b})=>b({locateFile:c=>N.getAssetUrl(`esri/libs/linkchartlayout/${c}`)})).then(b=>{a._lclib=b})};Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"})});