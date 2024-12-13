branchCircuitProtection.innerHTML =
`<selection class="motorSelections">

	<table>
			<tbody>
					<tr>
						<th colspan="6"><label class="articleSteps">Enter Specifications of Largest Motor: </label></th>
					</tr>

					<tr>
					<td><label class="input">Input flc: </label></td>
					<td><input type="text" id="flc_motor_I" class ="stepI" placeholder="enter flc" value="" maxlength="5" size="4"></td>

					<td><label class="input"> Select motor overload rating percentage: </label></td>
					<td>
							<select id="selectOverLoad">
								<option value="115">115</option>
								<option value="125">125</option>
								<option value="130">130</option>
								<option value="140">140</option>
							</select>

							<label id="lbl20">% </label></li>
					</td>

					<td><label class="input">Pick percentage of motor type per Table 430.52!</label></td>
					<td>
						<select id="selectOverCurrent">
								<option value="150">150</option>
								<option value="175">175</option>
								<option value="250">250</option>
								<option value="300">300</option>
								<option value="800">800</option>
								<option value="1100">1100</option>
							</select>

						<label class="input">%</label></li></td>
					</tr>

			</tbody>
	 </table>
	 </br>
	 <label class="input">Calculate:</label>
	 <button onclick="branchLoadCurrent()" id="btn1">Branch Circuit</button>
			<!-- DivTable.com -->

	</br></br>
	<table>
			<tbody>
					<tr>
					<th colspan="2"><label class="articleSteps">Branch circuit protection requirements</label></th>
					</tr>

					<tr>
						<td><label class="input">FLC entered: </label></td>
						<td>
								<label id="flc_entered" class="color" placeholder="0.00"></label>
								<label class="inform">amps (full load current)</label>
						</td>
					</tr>
					<tr>
						<td><label class="input">Overload Protection: </label></td>
						<td>
								<label id="ovrldpr" class="color"></label>
								<label class="inform">amp Heater</label>
						</td>
					</tr>

					<tr>
						<td><label class="input">Branch overcurrent device: </label></td>
						<td>
								<label id="brOvDe" class="color"></label>
								<label class="inform">amps (Article 240.6 allows to round up)</label>
						</td>
					</tr>

					<tr>
						<td><label id=" "class="input">Branch circuit breaker size: </label></td>
						<td>
								<label id="branchCircuit" class="color"></label>
								<label class="inform"> Amp Breaker</label>
						</td>
					</tr>

					<tr>
						<td><label class="input">Branch circuit conductor size: </label></td>
						<td>
								<label id="brCoSz" class="color"></label>
								<label class="inform">amps</label>
						</td>
					</tr>
			</tbody>
	</table>
	<!-- DivTable.com -->
	</br></br>

</selection>`;
