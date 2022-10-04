
type peopleType = {
	name: string;
	location: string;
	[otherOptions: string]: unknown;
}


function renderPeople(people: peopleType[]) {
	return people.map((p) => (`<div> 
		<li> ${p.name} </li>
		<li> ${p.location} </li> 	
	</div>
`))
}


console.log(renderPeople([{ name: "Joe", location: "Brighton" }]))