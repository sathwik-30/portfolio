import {useState} from "react"

import axios from "axios"

function Contact()
{
const[a,b]=useState("")
const[c,d]=useState("")
const[e,f]=useState("")

const g=()=>
{
axios.post(
"http://localhost:5000/contact",
{
name:a,
email:c,
message:e
}
)

alert("MESSAGE SENT")
}

return(
<div>

<h1>Contact</h1>

<h3>Name : CHERUKURU DHYANA SATHWIK</h3>

<p>Email : cherukurusathwik3@gmail.com</p>

<p>Phone : 9392951277</p>

<p>Location : Nellore, Andhra Pradesh, India</p>

<p>
LinkedIn :
<a
href="https://www.linkedin.com/in/sathwik-cherukuru-9b74aa345/"
target="_blank"
rel="noreferrer"
>
 View Profile
</a>
</p>

<p>
GitHub :
<a
href="https://github.com/sathwik-30"
target="_blank"
rel="noreferrer"
>
 View GitHub
</a>
</p>

<br/>

<input
type="text"
placeholder="Name"
value={a}
onChange={(h)=>b(h.target.value)}
/>

<br/>
<br/>

<input
type="email"
placeholder="Email"
value={c}
onChange={(h)=>d(h.target.value)}
/>

<br/>
<br/>

<textarea
placeholder="Message"
value={e}
onChange={(h)=>f(h.target.value)}
>
</textarea>

<br/>
<br/>

<button onClick={g}>
Send
</button>

</div>
)
}

export default Contact