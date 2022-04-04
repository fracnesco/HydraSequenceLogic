// this is NOT a good way to do this
test = setInterval(()=> {
visual = () =>{ if (a.fft[0] > 0.6 ) return osc()
  return noise() };
visual().out()
}, 100)

clearTimeout(test)
