function fullLoadCurrent() {

	let x = document.getElementById("txt0").value; //z = circuit breaker for motor 1
	let y = document.getElementById("txtflcII").value; //x = Motor II flc
	let z = document.getElementById("txtflcIII").value; //y = Motor III flc
	let mi = document.getElementById("txtflcI").value; //a = Motor I flc
	let fConSize; // feeder conductor size
	let larMotorFLC;
	let totalMotorFLC;

	let cirBrk = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100, 110, 125, 150, 175,
              200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000,
              2500, 3000, 4000, 5000, 6000];

	function innerTest() {

	//test for largest motor code

	if (Number(mi) < Number(x)) {
		window.alert("Motor 1 has to be the largest motor!");

	} else if (Number(mi) < Number(y)) {
		window.alert("Motor 1 has to be the largest motor");

	} else {
		larMotorFLC = mi * 1.25;
		totalMotorFLC = Number(larMotorFLC) + Number(x) + Number(y);
		totalMotorFLC = Number(totalMotorFLC).toFixed(2);
		document.getElementById(id="feederCircuit").innerHTML = Number(totalMotorFLC).toFixed(2);
	}

	//end of test largest motor code

	/*document.getElementById("flcMii").innerHTML = x;
	document.getElementById("flcMiii").innerHTML = y;
	document.getElementById("cKbrMotorI").innerHTML = z;
	document.getElementById("flcMi").innerHTML = mi;*/

	xyz = Number(x) + Number(y) + Number(z);
	fConSize = (Number(mi).toFixed(2) * 1.25) + Number(x) + Number(y);

	document.getElementById("totalFlc").innerHTML = Number(xyz).toFixed(2);

	if (xyz > 15 && xyz < cirBrk[1])
		document.getElementById("fdCkBr").innerHTML = cirBrk[1]; //20;

		else if (xyz > cirBrk[1] && xyz <= cirBrk[2])
			document.getElementById("fdCkBr").innerHTML = cirBrk[2];//25;

		else if (xyz > cirBrk[2] && xyz <= cirBrk[3])
			document.getElementById("fdCkBr").innerHTML = cirBrk[3];//30;

		else if (xyz > cirBrk[3] && xyz <= cirBrk[4])
			document.getElementById("fdCkBr").innerHTML = cirBrk[4];//35;

		else if (xyz > cirBrk[4] && xyz <= cirBrk[5])
			document.getElementById("fdCkBr").innerHTML = cirBrk[5];//40;

		else if (xyz > cirBrk[5] && xyz <= cirBrk[6])
			document.getElementById("fdCkBr").innerHTML = cirBrk[6];//45;

		else if (xyz > cirBrk[6] && xyz <= cirBrk[7])
			document.getElementById("fdCkBr").innerHTML = cirBrk[7];//50;

		else if (xyz > cirBrk[7] && xyz <= cirBrk[8])
			document.getElementById("fdCkBr").innerHTML = cirBrk[8];//55;

		else if (xyz > cirBrk[8] && xyz <= cirBrk[9])
			document.getElementById("fdCkBr").innerHTML = cirBrk[9];//60;

		else if (xyz > cirBrk[9] && xyz <= cirBrk[10])
			document.getElementById("fdCkBr").innerHTML = cirBrk[10];//70;

		else if (xyz > cirBrk[10] && xyz <= cirBrk[11])
			document.getElementById("fdCkBr").innerHTML = cirBrk[11];//80;

		else if (xyz > cirBrk[11] && xyz <= cirBrk[12])
			document.getElementById("fdCkBr").innerHTML = cirBrk[12];//90;

		else if (xyz > cirBrk[12] && xyz <= cirBrk[13])
			document.getElementById("fdCkBr").innerHTML = cirBrk[13];//100;

		else if (xyz > cirBrk[13] && xyz <= cirBrk[14])
			document.getElementById("fdCkBr").innerHTML = cirBrk[14];//110;

		else if (xyz > cirBrk[14] && xyz <= cirBrk[15])
			document.getElementById("fdCkBr").innerHTML = cirBrk[15];//125;

		else if (xyz > cirBrk[15] && xyz <= cirBrk[16])
			document.getElementById("fdCkBr").innerHTML = cirBrk[16];//150;

		else if (xyz > cirBrk[16] && xyz <= cirBrk[17])
			document.getElementById("fdCkBr").innerHTML = cirBrk[17];//175

		else if (xyz > cirBrk[17] && xyz <= cirBrk[18])
			document.getElementById("fdCkBr").innerHTML = cirBrk[18];//200;

		else if (xyz > cirBrk[18] && xyz <= cirBrk[19])
			document.getElementById("fdCkBr").innerHTML = cirBrk[19];//225;

		else if (xyz > cirBrk[19] && xyz <= cirBrk[20])
			document.getElementById("fdCkBr").innerHTML = cirBrk[20];//250;

		else if (xyz > cirBrk[20] && xyz <= cirBrk[21])
			document.getElementById("fdCkBr").innerHTML = cirBrk[21];//300;

		else if (xyz > cirBrk[21] && xyz <= cirBrk[22])
			document.getElementById("fdCkBr").innerHTML = cirBrk[22];//350;

		else if (xyz > cirBrk[22] && xyz <= cirBrk[23])
			document.getElementById("fdCkBr").innerHTML = cirBrk[23];//400;

		else if (xyz > cirBrk[23] && xyz <= cirBrk[24])
			document.getElementById("fdCkBr").innerHTML = cirBrk[24];//450;

		else if (xyz > cirBrk[24] && xyz <=cirBrk[25])
			document.getElementById("fdCkBr").innerHTML = cirBrk[25];//500;

		else if (xyz <> cirBrk[25] && xyz <= cirBrk[26])
			document.getElementById("fdCkBr").innerHTML = cirBrk[26];//600;

		else if (xyz > cirBrk[26] && xyz <= cirBrk[27])
			document.getElementById("fdCkBr").innerHTML = cirBrk[27];//700;

		else if (xyz > cirBrk[27] && xyz <= cirBrk[28])
			document.getElementById("fdCkBr").innerHTML = cirBrk[28];//800;

		else if (xyz > cirBrk[28] && xyz <= cirBrk[29])
			document.getElementById("fdCkBr").innerHTML = cirBrk[29];//1000;

		else if (xyz > cirBrk[28] && xyz <= cirBrk[30])
			document.getElementById("fdCkBr").innerHTML = cirBrk[30];//1200;

		else if (xyz > cirBrk[30] && xyz <= cirBrk[31])
			document.getElementById("fdCkBr").innerHTML = cirBrk[31];//1600;

		else if (xyz > cirBrk[31] && xyz <= cirBrk[32])
			document.getElementById("fdCkBr").innerHTML = cirBrk[32];//2000;

		else if (xyz > cirBrk[32] && xyz <= cirBrk[33])
			document.getElementById("fdCkBr").innerHTML = cirBrk[33];//2500;

		else if (xyz > cirBrk[33] && xyz <= cirBrk[34])
			document.getElementById("fdCkBr").innerHTML = cirBrk[34];//3000;

		else if (xyz > cirBrk[34] && xyz <= cirBrk[35])
			document.getElementById("fdCkBr").innerHTML = cirBrk[35];//4000;

		else if (xyz > cirBrk[35] && xyz <= cirBrk[36])
			document.getElementById("fdCkBr").innerHTML = cirBrk[36];//5000;

		else if (xyz > cirBrk[36] && xyz <= cirBrk[37])
			document.getElementById("fdCkBr").innerHTML = cirBrk[37];//6000;

		else {
			document.getElementById(id="fdCkBr").innerHTML = cirBrk[0]; //15

			//brCircuit = Number(document.getElementById(id="branchCircuit").value).toFixed(0);
			//return Number(document.getElementById(id="branchCircuit").value).toFixed(0);

		} //end of if, else if, else loop

	 }

	innerTest();
}
fullLoadCurrent();
