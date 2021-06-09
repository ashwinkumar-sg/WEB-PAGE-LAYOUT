
import SinIn from  "./component/Body"
import download from "./image/download.png"
import mark from "./image/mark.png"

function App() {
  return (
    <div >
      <header class="bg-primary p-5">
        <div class="container">
        <div class="row">
        <div className="col-4">
          <div class="row">
          <div className="col-2 "><h6>ENGLISH</h6></div>
          <div className="col-2 "><h6>USD</h6></div>
        </div>
        </div>
        <div className="col-4 ">
          <img class="mx-auto d-block"src={download} alt='EMBRYO' /> 
        </div>
        <div className="col-4"></div>
        </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
      <div className="collapse navbar-collapse">

        <ul className="navbar-nav mx-auto navbar-brand">
        <li className="nav-item active">
          <a className="nav-link" href="">HOME</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="">SHOP</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="">ACCESSORIES</a>
        </li>
        <li className="nav-item active" >
        <a className="nav-link" href="">CATEGORIES</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="">PAGE</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link"href="">CONTACT US</a>
        </li>
        <li className="nav-item active bg-dark" >
        <a className="nav-link text-white" href="">ADMIN PANNEL</a>
        </li>
        </ul>
      </div>
      </div>
      </nav>

      <SinIn/>

  <footer class=" py-5  bg-dark">
    <div class="container">
  
    <div class="row text-white">

      <div class="col-4">
      <h5>ABOUT COMPANY</h5>
      <h6 >Here you can use rows and columns here to organize your footer content.
        Lorem ipsum dolor sit amet,consectetur adipisicing elit.
        Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h6>
      </div>

      

     
      <div class="col">
        <h5>ABOUT</h5>
        <ul class="list-unstyled ">
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">about us</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">terms and condition</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">privacy policy</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">FAQ</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">contact us</a></li>
        </ul>
      </div>

      <div class="col">
        <h5>SESSION</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">sign in</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">register</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">forget password</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">thank you</a></li>
        </ul>
      </div>

      <div class="col">
        <h5>CATEGORIES</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">women</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">men</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">accessories</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">gadgets</a></li>
        </ul>
      </div>

      <div class="col">
        <h5>SOCIAL</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">facebook</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">twitter</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">youtube</a></li>
          <li class="mb-2"><a class="text-decoration-none text-reset" href="">google plus</a></li>
        </ul>
      </div>
    </div>
    
    <hr class="rounded bg-white"></hr>
    <div class="row">
      <span class="col"> <img  src={mark} alt="mark"></img></span>
      <span class="col text-end "><h6 class="text-white">© All Rights Reversed | Made With Love by IRON NETWORK for better Web</h6></span>

      </div>
    </div>
</footer>
</div>

  );
}

export default App;
