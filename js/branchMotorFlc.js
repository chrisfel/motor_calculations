function branchLoadCurrent() {

	let inFlc = document.getElementById("flc_motor_I").value;
	let overLoadRating = document.getElementById("selectOverLoad").value;
	let overCurrentRating = document.getElementById("selectOverCurrent").value;
	let bDevSize = Number(inFlc).toFixed(2) * [Number(overCurrentRating).toFixed(2)]/100;
	let brCirConSize = Number(inFlc).toFixed(2) * 1.25;

	let cirBrk = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100, 110, 125, 150, 175,
              200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000,
              2500, 3000, 4000, 5000, 6000];

	function innerTest() {
	//inFlc = document.getElementById("txt1").value;
	//inFlc = Number(inFlc).toFixed(2);
	document.getElementById("flc_motor_I").value = Number(inFlc).toFixed(2);
	document.getElementById("flc_entered").innerHTML = Number(inFlc).toFixed(2);
	document.getElementById("ovrldpr").innerHTML = Number(inFlc).toFixed(2) * [Number(overLoadRating).toFixed(2)]/100;
	document.getElementById("brOvDe").innerHTML = bDevSize;
	document.getElementById("brCoSz").innerHTML = brCirConSize;

	//document.getElementById("brOvDe").innerHTML = Number(bDevSize).toFixed(2);

	if (bDevSize > cirBrk[0] && bDevSize <= cirBrk[1])
		document.getElementById("branchCircuit").innerHTML = cirBrk[1]; //20;

		else if (bDevSize > cirBrk[1] && bDevSize <= cirBrk[2])
			document.getElementById("branchCircuit").innerHTML = cirBrk[2];//25;

		else if (bDevSize > cirBrk[2] && bDevSize <= cirBrk[3])
			document.getElementById("branchCircuit").innerHTML = cirBrk[3];//30;

		else if (bDevSize > cirBrk[3] && bDevSize <= cirBrk[4])
			document.getElementById("branchCircuit").innerHTML = cirBrk[4];//35;

		else if (bDevSize > cirBrk[4] && bDevSize <= cirBrk[5])
			document.getElementById("branchCircuit").innerHTML = cirBrk[5];//40;

		else if (bDevSize > cirBrk[5] && bDevSize <= cirBrk[6])
			document.getElementById("branchCircuit").innerHTML = cirBrk[6];//45;

		else if (bDevSize > cirBrk[6] && bDevSize <= cirBrk[7])
			document.getElementById("branchCircuit").innerHTML = cirBrk[7];//50;

		else if (bDevSize > cirBrk[7] && bDevSize <= cirBrk[8])
			document.getElementById("branchCircuit").innerHTML = cirBrk[8];//55;

		else if (bDevSize > cirBrk[8] && bDevSize <= cirBrk[9])
			document.getElementById("branchCircuit").innerHTML = cirBrk[9];//60;

		else if (bDevSize > cirBrk[9] && bDevSize <= cirBrk[10])
			document.getElementById("branchCircuit").innerHTML = cirBrk[10];//70;

		else if (bDevSize > cirBrk[10] && bDevSize <= cirBrk[11])
			document.getElementById("branchCircuit").innerHTML = cirBrk[11];//80;

		else if (bDevSize > cirBrk[11] && bDevSize <= cirBrk[12])
			document.getElementById("branchCircuit").innerHTML = cirBrk[12];//90;

		else if (bDevSize > cirBrk[12] && bDevSize <= cirBrk[13])
			document.getElementById("branchCircuit").innerHTML = cirBrk[13];//100;

		else if (bDevSize > cirBrk[13] && bDevSize <= cirBrk[14])
			document.getElementById("branchCircuit").innerHTML = cirBrk[14];//110;

		else if (bDevSize > cirBrk[14] && bDevSize <= cirBrk[15])
			document.getElementById("branchCircuit").innerHTML = cirBrk[15];//125;

		else if (bDevSize > cirBrk[15] && bDevSize <= cirBrk[16])
			document.getElementById("branchCircuit").innerHTML = cirBrk[16];//150;

		else if (bDevSize > cirBrk[16] && bDevSize <= cirBrk[17])
			document.getElementById("branchCircuit").innerHTML = cirBrk[17];//175

		else if (bDevSize > cirBrk[17] && bDevSize <= cirBrk[18])
			document.getElementById("branchCircuit").innerHTML = cirBrk[18];//200;

		else if (bDevSize > cirBrk[18] && bDevSize <= cirBrk[19])
			document.getElementById("branchCircuit").innerHTML = cirBrk[19];//225;

		else if (bDevSize > cirBrk[19] && bDevSize <= cirBrk[20])
			document.getElementById("branchCircuit").innerHTML = cirBrk[20];//250;

		else if (bDevSize > cirBrk[20] && bDevSize <= cirBrk[21])
			document.getElementById("branchCircuit").innerHTML = cirBrk[21];//300;

		else if (bDevSize > cirBrk[21] && bDevSize <= cirBrk[22])
			document.getElementById("branchCircuit").innerHTML = cirBrk[22];//350;

		else if (bDevSize > cirBrk[22] && bDevSize <= cirBrk[23])
			document.getElementById("branchCircuit").innerHTML = cirBrk[23];//400;

		else if (bDevSize > cirBrk[23] && bDevSize <= cirBrk[24])
			document.getElementById("branchCircuit").innerHTML = cirBrk[24];//450;

		else if (bDevSize > cirBrk[24] && bDevSize <= cirBrk[25])
			document.getElementById("branchCircuit").innerHTML = cirBrk[25];//500;

		else if (bDevSize > cirBrk[25] && bDevSize <= cirBrk[26])
			document.getElementById("branchCircuit").innerHTML = cirBrk[26];//600;

		else if (bDevSize > cirBrk[26] && bDevSize <= cirBrk[27])
			document.getElementById("branchCircuit").innerHTML = cirBrk[27];//700;

		else if (bDevSize > cirBrk[27] && bDevSize <= cirBrk[28])
			document.getElementById("branchCircuit").innerHTML = cirBrk[28];//800;

		else if (bDevSize > cirBrk[28] && bDevSize <= cirBrk[29])
			document.getElementById("branchCircuit").innerHTML = cirBrk[29];//1000;

		else if (bDevSize > cirBrk[29] && bDevSize <= cirBrk[30])
			document.getElementById("branchCircuit").innerHTML = cirBrk[30];//1200;

		else if (bDevSize > cirBrk[30] && bDevSize <= cirBrk[31])
			document.getElementById("branchCircuit").innerHTML = cirBrk[31];//1600;

		else if (bDevSize > cirBrk[31] && bDevSize <= cirBrk[32])
			document.getElementById("branchCircuit").innerHTML = cirBrk[32];//2000;

		else if (bDevSize > cirBrk[32] && bDevSize <= cirBrk[33])
			document.getElementById("branchCircuit").innerHTML = cirBrk[33];//2500;

		else if (bDevSize > cirBrk[33] && bDevSize <= cirBrk[34])
			document.getElementById("branchCircuit").innerHTML = cirBrk[34];//3000;

		else if (bDevSize > cirBrk[34] && bDevSize <= cirBrk[35])
			document.getElementById("branchCircuit").innerHTML = cirBrk[35];//4000;

		else if (bDevSize > cirBrk[35] && bDevSize <= cirBrk[36])
			document.getElementById("branchCircuit").innerHTML = cirBrk[36];//5000;

		else if (bDevSize > cirBrk[36] && bDevSize <= cirBrk[37])
			document.getElementById("branchCircuit").innerHTML = cirBrk[37];//6000;

		else {
			document.getElementById(id="branchCircuit").innerHTML = cirBrk[0];

		}


	 }

	innerTest();

	let z = "Oh no, a bug!";
	document.getElementById("brMotori").innerHTML = z;

}
branchLoadCurrent();


/*let overCurrentRating = document.getElementById("selectOverCurrent").value;
	//document.getElementById("lbl18").innerHTML = "Pick percentage of motor type per Table 430.52!";
	let input = Number(document.getElementById("txt1").value).toFixed(2);
	let bDevSize = input * overCurrentRating;
	let bDevSize = bDevSize/100;
	let bDevSize = Number(bDevSize).toFixed(2)
	let document.getElementById("brOvDe").innerHTML = bDevSize;

	let z = document.getElementById("brOvDe").value;
    let document.getElementById("test").innerHTML = z;*/
