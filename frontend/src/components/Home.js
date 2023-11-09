import '../styles/home.css'
import { Link } from "react-router-dom";
export default function homepage()
{

return(
<>
<body className='Home-page'>
    <header>
        <nav>
            <div className="logo">
            </div>
            <ul>
                <li><Link className="Home" to="/">Home</Link></li>
                <li><Link className="About-Nav" to="/">About Us</Link></li>
                <li><Link className="Event-Info" to="/">Event Info</Link></li>
            </ul>
        </nav>
</header>
<div className="container">
    <div className="Tedx-Main1">
    <form method="POST" >
        <input name="Name" type="text" placeholder="Name" required><br>
        <input name="Email" type="email" placeholder="Email" required><br>
        <button type="submit">Send</button>
    </form> 
    </div>
//     <div className="Tedx-Main2">
//         <h3>IDEAS WORTH SPREADING</h3>
//         <br/>
//         <p>
//             This is a platform which provides an atmosphere for thought provoking discussions
//             and a critical way of looking and consequently tackling issues and questions at all levels. 
//             Here, you experience real, jaw-dropping stories which continues to inspire people to reach their potential 
//             and  help them break their limits and go beyond.
//         </p>      
//     </div> 
//     <div className="Tedx-Main3">
//         <img className="img3" src="https://cdn.flipit.money/img/flips/ekKkekgtEeCxFnIjvSJCojB5XdZAh7KetEF4lxOD.jpeg" alt="img"/>   
//         <img className="img3" src="https://iithadmissionsblog.files.wordpress.com/2016/06/img_0310.jpg?w=1200" alt="img"/>    
//     </div>
 </div>


</body>
</>
)
}
