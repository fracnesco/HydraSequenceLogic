//Sends osc from SuperCollider to Hydra

a = NetAddr.new("localhost", 99111) // connect to the port

(Routine {
	loop {
		var x = 2.rand;
		a.sendMsg("/test", x);
		0.5.wait;
	}
}.play)
