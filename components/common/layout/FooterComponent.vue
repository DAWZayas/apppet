<template>
  <footer>
		<footer>
      <div class="footer hidden-sm-and-down" id="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-xs-12">
              <span class="logo">AppPet</span>
              <div class="container">
                <div class="social-icons-logo">
                  <i class="icon fa fa-twitter"></i>
                  <i class="icon fa fa-facebook"></i>
                  <i class="icon fa fa-google-plus"></i>
                  <i class="icon fa fa-instagram"></i>
                  <i class="icon fa fa-youtube-play"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-xs-12">
              <h3>MENU</h3>
              <ul>
                <li><span>Inicio</span></li>
                <li><span>Candidatos</span></li>
                <li><span>Mensajes</span></li>
                <li><span>Noticias</span></li>
                <li><span>Ayuda</span></li>
              </ul>
            </div>
            <div class="col-lg-3 col-xs-12">
              <h3>CATEGORIES</h3>
              <ul>
                <li><span>Mascotas</span></li>
                <li><span>En Adopción</span></li>
                <li><span>Perdidos</span></li>
                <li><span>Adopción</span></li>
              </ul>
            </div>
            <div class="col-lg-3 col-xs-12">
              <h3>CONTACTO</h3>
              <ul>
                <li><span>Address</span> </li>
                <li><span>Phone</span> </li>
                <li><span>Fax</span> </li>
                <li><span>E-Mail</span> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
	  </footer>
    <div fixed class="footer-icons hidden-md-and-up">
	    <div class="container">
	      <div class="social-icons">
          <i class="icon fa fa-twitter"></i>
          <i class="icon fa fa-facebook"></i>
          <i class="icon fa fa-google-plus"></i>
          <i class="icon fa fa-instagram"></i>
          <i class="icon fa fa-youtube-play"></i>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2017. All right reserved.</p>
    </div>
	</footer>
</template>
<script>
</script>
<style lang="scss">
  p {
    margin: 0;
  }
  .footer {
    padding: 30px  0px 0px;
    color: #ccc;
    background-color: #222;
  }
  .footer .container{
    margin: auto;
  }
  .footer .row {
    margin: auto;
    width: 80%;
  }
  .footer h3 {
    color: #4db6ac;
    font-size:15px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .footer ul {
    font-size: 13px;
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    margin-top: 15px;
    color: #7F8C8D;
  }
  .footer ul li span {
    padding: 10px 0px;
    display: block;
    color: #aaa;
    font-weight: 600;
    font-size: 13px;
  }
  .footer ul li span:hover {
    color: #1e76a8;
  }
  .footer-bottom {
    background-color: #111;
    color: #282c2d;
    font-size: 12px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .footer-bottom p {
    font-size: 13px;
    color: #FFF;
  }
  .footer-icons {
    background-color: #f7f7f7;
    text-align: center;
    padding: 0.5em 0;
  }
  .footer-icons .social-icons i {
    padding: 0px 20px;
    font-size: 2rem;
    color: #1e76a8;
  }
  .footer-icons .social-icons i:hover {
    cursor: pointer;
  }
  /* SOCIAL-ICONS-LOGO */
  .social-icons-logo i {
    padding: 0px 5px;
    color: #1e76a8 !important;
  }
  .social-icons-logo i:hover {
    cursor: pointer;
  }
  .logo {
    color: #4db6ac;
    font-size: 30px;
    font-weight: 600;
  }
  @media only screen and (max-width: 599px) {
    .container {
      padding: 15px;
    }
    
  }
</style>

