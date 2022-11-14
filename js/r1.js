fetch('https://hp-api.herokuapp.com/api/characters/house/ravenclaw')
	.then((data) => {
		return data.json();
	})
	.then((objectData) => {
		let favData = '';
		objectData.map((values) => {
			for (let i = 0; i < 3; i++) {
				if (favData == false) {
					favData += `<div class="card">
		<img class="image" src="${values.image}"</img>
		  <div class="container">
		  <ul>
		  <li><h2>Name:${values.name}</h2></li>
		  <li><h2>Actor:${values.actor}</h2></li>
		  <li><h2>House:${values.house}</h2></li>
		  <li><h2>Age:${values.dateOfBirth}</h2></li>
		  <li><h2>Year:${values.yearOfBirth}</h2></li>
		  <li><h2>Hair:${values.hairColour}</h2></li>
		  <li><h2>Eyes:${values.eyeColour}</h2></li>
		  <li><h2>Blood:${values.ancestry}</h2></li>
		</ul>
		  </div>
		</div>`;
				}
				document.getElementById('ravenclaw').innerHTML = favData;
			}
		});
	});