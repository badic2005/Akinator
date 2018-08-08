<!DOCTYPE HTML>
<html>
 <head>
  <meta charset="utf-8">
  <title>Nexus Aqua</title>

 </head>
 <body>

  <div id="container">

    <div class="main">
        <div class="main_in_main">
            <div class="content">
            <br>
            
            <form>
    
            <label for="inn">ИНН:</label></br>
            <input name="inn" id="inn" type="number" maxlength="100" /><br>
    
            <label for="company_name">Название компании:</label></br>
            <input name="company_name" id="company_name" type="text" maxlength="100" /><br>   
        
            <label for="fio_kl">ФИО контактного лица:</label></br>
            <input name="fio_kl" id="fio_kl" type="text" maxlength="100" /><br>    
    
    
            <label for="position_kl">Должность контактного лица:</label></br>
            <input name="position_kl" id="position_kl" type="text" maxlength="100" /><br>    
    
            <label for="phone">Номер телефона:</label></br>
            <input name="phone" id="phone" type="text" maxlength="100" /><br>    
    
            <label for="email">Электронная почта:</label></br>
            <input name="email" id="email" type="email" maxlength="100" /><br>    
    
            <input type="checkbox" id="client" name="client" value="0">
            <label for="client">Клиент</label><br>
    
            <br>
    
            <input type="checkbox" id="postavschik" name="postavschik" value="0">
            <label for="postavschik">Поставщик</label><br>
    
    
            <br>
    
            <label for="istochnik_zakaza">Источник заказа:</label><br>
            <input name="istochnik_zakaza" id="istochnik_zakaza" type="text" maxlength="100" />    
            <br>
    
            <label for="address">Адрес:</label><br>
            <input name="address" id="address" type="text" maxlength="100" />    
            </br>
    
            <label for="comment">Комментарий:</label><br>
            <textarea name="comment" id="comment" type="text" maxlength="100"></textarea>    
            <div class="clear"></div>
    
            <input type="button" id="send" value="Добавить" />
 	    <input type="button" id="download" value="Загрузить" />
	    <input type="button" id="clear" value="Очистить" />
            </form>
            <div id="result"></div>
            
            </div>
        </div>
    </div>
</div>
<script src="js/script.js"></script>
 </body>
</html>