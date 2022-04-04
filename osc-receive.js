msg.setPort(99111)

msg.on('/test', (args) => {
 console.log(args)
})

msg.on('/test', (args) => {
  if (args[0] == 0) { osc().out()   }
  if (args[0] == 1) { noise().out() }
})
