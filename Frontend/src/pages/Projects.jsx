import {useEffect,useState} from "react"

import axios from "axios"

function Projects()
{
const[a,b]=useState([])

useEffect(
()=>
{
axios
.get("http://localhost:5000/projects")
.then(
(c)=>
{
b(c.data)
}
)
},
[]
)

return(
<div>

<h1>Projects</h1>

{
a.map(
(c)=>
(
<div
className="project"
key={c.id}
>

<h3>{c.title}</h3>

<p>{c.description}</p>

</div>
)
)
}

</div>
)
}

export default Projects