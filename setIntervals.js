
clearInterval(test)
test = setInterval(()=>{
  let visual = [osc(), noise(), voronoi(), osc(2,2,2) ];
  let i = Math.floor(Math.random() * visual.length);
visual[i].out();
},2*1000 // change in milliseconds
);


//with feedback is nice
clearInterval(feedback)
feedback = setInterval(()=>{
  let visual = [
    src(o0).modulate(noise(),0.001),
    src(o0).scale(0.995,0.997),
    src(o0).scale(1.001,1.003),
    src(o0).modulateHue(src(o0).colorama(0.2),23),
    src(o0).colorama(0.00001).modulate(noise(),0.01).contrast(1.001),
  ];
  let i = Math.floor(Math.random() * visual.length);
visual[i].out();
},0.5*1000 // change in milliseconds
);

//play something inside
osc().out()
