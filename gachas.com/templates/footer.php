______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

<footer>
                <br><br><br>
                <div class="spisok-footer">
                <ul>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="about">О&nbspнас</a></li>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="contacts">Контакты</a></li>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="connection">Обратная свзяь</a></li>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="team">Команда</a></li>
                </ul></div>
                <div id="socialmedia"></div>
                <div class="contact-center"><p style="color:white">Контакт-центр: 8 (928) 777-73-23</p></div>
                <div class="copyright"><p style="color:white">&copy;&nbsp;"ООО" Gachas</p></div>
              </footer>
              <br>
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<?php
    switch($route) {
      case '':
        echo '<script src="main.js"></script>';
        echo '<script data-semver="1.4.0-rc.2" src="https://code.angularjs.org/1.4.0-rc.2/angular.js" data-require="angular.js@1.4.x"></script>';
        break;
      case 'menu':
        echo '<script src="time.js"></script>';
        break;         
      case 'cart':
        echo '<script src="cart.js"></script>';
        break;
      case 'connection':
        echo '<script src="time.js"></script>';
        break;
      case 'contacts':
        echo '<script src="time.js"></script>';
        break;
      case 'about':
        echo '<script src="time.js"></script>';
        break;
      case 'team':
        echo '<script src="team.js"></script>';
        break;        
      case 'vitaliy-tcal':
        echo '<script src="team.js"></script>';
        break;
      case 'slava-kopilov':
        echo '<script src="team.js"></script>';
        break;
      case 'nikita-tolkunov':
        echo '<script src="team.js"></script>';
        break;
      case 'felix-kesov':
        echo '<script src="team.js"></script>';
        break;
      case 'register':
        echo '<script src="time.js"></script>';
        break;    
      case 'authorization':
        echo '<script src="time.js"></script>';
        break;
      case 'connect':
          echo '<script src="time.js"></script>';
          break;    
      case 'logout':
          echo '<script src="time.js"></script>';
          break;
      case 'signin':
          echo '<script src="time.js"></script>';
          break;    
      case 'signup':
          echo '<script src="time.js"></script>';
          break;                     
  }
      
?>
    </body>
    </html>