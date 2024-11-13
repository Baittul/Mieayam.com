<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Mie Ayam </title>
      <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap">
  <link rel="stylesheet" href="style-zip.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <h1>Mie Ayam Larich</h1>
    <p class="price-33">Harga mulai Rp10.000</p>
  </header>

  <!-- Menu Section -->
  <section class="menu-section">
    <h2 class="section-title">Menu Mie Ayam<p1>Tanpa Pengawet</p1></h2>
    
    <div class="menu">
      <div class="menu-item scroll-animation">
        <img src="mieayam1.jpg" alt="Mie Ayam Pedas" class="menu-img">
        <h3>Mie Ayam Pedas</h3>
        <p>Mi pedas dengan topping ayam pedas khas Korea</p>
        <p class="price">Rp10.000</p>
      </div>
      <div class="menu-item scroll-animation">
        <img src="mieayam2.jpg" alt="Mie Ayam Keju" class="menu-img">
        <h3>Mie Ayam Keju</h3>
        <p>Mi lembut dengan keju meleleh dan ayam renyah</p>
        <p class="price">Rp12.000</p>
      </div>
      <div class="menu-item scroll-animation">
        <img src="mieayam3.jpg" alt="Mie Ayam Original" class="menu-img">
        <h3>Mie Ayam Original</h3>
        <p>Mi klasik dengan topping ayam khas Indonesia</p>
        <p class="price">Rp10.000</p>
      </div>
      <div class="menu-item scroll-animation">
        <img src="mieayam4.jpg" alt="Mie Ayam Saus Korea" class="menu-img">
        <h3>Mie Ayam Saus Korea</h3>
        <p>Mi dengan saus manis pedas khas Korea</p>
        <p class="price">Rp11.000</p>
      </div>
    </div>
  </section>

  <!-- pesan  -->
<section class="chat-section">
  <h2 class="section-title">Hubungi Kami</h2>
  <form class="chat-form" action="https://formspree.io/f/movqdbld" method="POST" id="chatForm">
    <input type="text" name="name" placeholder="Nama Anda" required>
    <input type="text" name="Alamat" placeholder="Alamat" required>
    <input type="tel" name="phone" placeholder="No HP Anda" required>
    <textarea name="message" placeholder="Ketik" required></textarea>
    <button type="submit">Kirim</button>
  </form>
</section>

    <footer>
        <div class="footer-container">
            <div class="footer-item contact-info">
                <p><i class="fas fa-map-marker-alt"></i>Almuslim</p>
                <p><i class="fas fa-phone-alt"></i> Call: +6289512595271</p>
                <p><i class="fas fa-envelope"></i>almuslimkarpet@gmail.com</p>
            </div>
            <div class="footer-item">
                <h3>Usefull Link</h3>
                <ul>
                    <li><a href="#">almuslim</a></li>
                    <li><a href="#">Baittulmuslim</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">policy</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>Repair</h3>
                <p>The awards for design, creativity and innovation on the
                website’and aplication for you.</p>
            </div>
            <div class="footer-item">
                <h3>Social Media</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="footer-item">
                <h3>Our Repair Center</h3>
                <p>The awards for design, creativity and innovation on the Internet’</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>2024 All Rights Reserved. Design by zipmsi</p>
            <a style="color:#fff;">Belikan pengembang coffe</a>
        </div>
    </footer>
    <script>
        function toggleMenu() {
            const menu = document.getElementById('menu');
            const overlay = document.getElementById('overlay');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
        

        }
    </script>

  <!-- JavaScript -->
  <script src="script-zip.js"></script>
</body>
</html>
