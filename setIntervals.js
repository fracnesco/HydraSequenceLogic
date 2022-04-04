
clearInterval(test)
test = setInterval(()=>{
  let visual = [osc(), noise(), voronoi(), osc(2,2,2) ];
  let i = Math.floor(Math.random() * visual.length);
visual[i].out();
},2*1000 // change in milliseconds
);
