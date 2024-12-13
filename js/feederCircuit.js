feederCircuitProtection.innerHTML =
`<selection class="motorProtection">


				<!--<label id=" "class="input">FLC of motor II: </label>
				<label id="flcMii" class="color"></label><label class="inform"> Amps</label>
				</br>

				<label id=" "class="input">FLC of motor III: </label>
				<label id="flcMiii" class="color"></label><label class="inform"> Amps</label>
				</br>-->

				<!--//begin table-->
				<table>
						<tbody>
							<tr>
								<th colspan="2"><label class="articleSteps">Enter FLC of additional motors</label></th>
							</tr>
							<tr>
								<td><label class="input">Circuit Breaker Motor I: </label></td>
								<td><input type="text" id="txt0" class ="stepI" placeholder="enter flc" value="" maxlength="5" size="4"></td>
							</tr>
							<tr>
								<td><label class="input">FLC Motor II:  </label></td>
								<td><input type="text" id="txtflcII" class ="stepI" placeholder="enter flc" value="" maxlength="5" size="4"></td>
							</tr>
							<tr>
								<td><label class="input">FLC Motor III:  </label></td>
								<td><input type="text" id="txtflcIII" class ="stepI" placeholder="enter flc" value="" maxlength="5" size="4"></td>
							</tr>
							<tr>
								<td><label class="input">FLC Motor IV: </label></td>
								<td><input type="text" id="txtflcIV" class ="stepI" placeholder="enter flc" value="" maxlength="5" size="4"></td>
							</tr>
						</tbody>
					</table>
						<!-- DivTable.com -->

				</br></br>

				<section>
					<label class="input">Calculate:</label>
					<button onclick="fullLoadCurrent()" id="btn2">Feeder Circuit</button>
				</section>

				</br></br>
				</br></br>

				<table>
						<tbody>
							<tr>
								<th colspan="2"><label class="articleSteps">Feeder circuit protection requirements: </label></th>
							</tr>
							<tr>
								<td><label id=" " class="input">Feeder overcurrent device: </label></td>
								<td><label id="totalFlc" class="color"></label><label class="inform">amps</label><label class="input" > (Round Down)</label></td>
							</tr>
							<tr>
								<td><label id=" "class="input">Feeder circuit breaker size: </label></td>
								<td><label id="fdCkBr" class="color"></label><label class="inform"> Amp Breaker</label> </td>
							</tr>
							<tr>
								<td><label class="input">Feeder circuit conductor size: </label></td>
								<td><label id="feederCircuit" class="color"></label><label class="inform">amps</label></td>
							</tr>
						</tbody>
					</table>
						<!-- DivTable.com -->
					</br>

				<label id="brMotori" class="color"></label>

</selection>`;
