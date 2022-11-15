let studentArray = [];

async function getStudents(url) {
	const student = await fetch(url);
	const jsondata = await student.json();
	jsondata.forEach((student) => {
		studentArray.push(student);
	});
}
function listStudents() {
	const student = document.getElementById('slytherin');
	for (let i = 0; i < 5; i++) {
		if (studentArray[i] == false) {
			student.innerHTML += `<div class="card">
	  <img class="image" src="${studentArray[0].image}"</img>
		<div class="container">
		<ul>
		<li><h2>Name:${studentArray[i].name}</h2></li>
		<li><h2>House:${studentArray[i].house}</h2></li>
		<li><h2>Age:${studentArray[i].yearOfBirth}</h2></li>
		</ul>
		</div>
	  </div>`;
		} else if (studentArray[i] == '') {
			student.innerHTML += `<div class="card">
	  <img class="image" src="${studentArray[i].image}"</img>
		<div class="container">
		  <ul>
		  <li><h2>Name:${studentArray[i].name}</h2></li>
		  <li><h2>House:${studentArray[i].house}</h2></li>
		</ul>
		</div>
	  </div>`;
		} else {
			student.innerHTML += `<div class="card">
	  <img class="image" src="${studentArray[i].image}"</img>
		<div class="container">
		  <ul>
		  <li><h2>Name:${studentArray[i].name}</h2></li>
		  <li><h2>House:${studentArray[i].house}</h2></li>
		  <li><h2>Age:${studentArray[i].yearOfBirth}</h2></li>
		</ul>
		</div>
	  </div>`;
		}
	}
		}
getStudents('http://hp-api.herokuapp.com/api/characters/house/ravenclaw').then(() => {
	listStudents();
})

//-----------------------------------