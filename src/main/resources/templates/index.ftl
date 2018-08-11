<!DOCTYPE HTML>
<html>
 <head>
  <meta charset="utf-8">
  <title>Nexus Aqua</title>
 <#--<link rel="stylesheet" href="style_test.css">-->
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
<script>

    window.onload = function () {
        'use strict';
        document.querySelector('#send').onclick = function () {

            let arr = {
                        "inn" : document.querySelector('input[name=inn]').value,
                        "company_name" : document.querySelector('input[name=company_name]').value,
                        "fio_kl" : document.querySelector('input[name=fio_kl]').value,
                        "position_kl" : document.querySelector('input[name=position_kl]').value,
                        "phone" : document.querySelector('input[name=phone]').value,
                        "email" : document.querySelector('input[name=email]').value,
                        "client" : document.getElementById('client').checked,
                        "postavschik" : document.getElementById('postavschik').checked,
                        "istochnik_zakaza" : document.querySelector('input[name=istochnik_zakaza]').value,
                        "address" : document.querySelector('input[name=address]').value,
                        "comment" : document.querySelector('textarea[name=comment]').value
                    },
                    strJson = JSON.stringify(arr);
                   // let = 'name=' + arr.company_name + '&' + 'inn=' + arr.inn;

//document.querySelector('#result').innerHTML = (document.getElementById("klient").checked);

//alert(strJson);
//console.log(str);

            //var params = '';

            ajaxPost(strJson);

        };
        // document.querySelector('#download').onclick = function () {
        //     ajaxDownload('download.php', formFill);
        //
        //
        //
        // }


        document.querySelector('#clear').onclick = function() {

            document.querySelector('#inn').value = '';
            document.querySelector('#company_name').value = '';
            document.querySelector('#fio_kl').value = '';
            document.querySelector('#position_kl').value = '';
            document.querySelector('#phone').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#client').checked = false;
            document.querySelector('#postavschik').checked = false;
            document.querySelector('#address').value = '';
            document.querySelector('#comment').value = '';



        }
    }
    function ajaxPost(strJson){

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if(request.readyState == 4 && request.status == 200) {
                if (request.responseText === 1) {
                    document.querySelector('#result').innerHTML = 'Форма отправлена!';
                    document.querySelector('form').style.display = 'none';
                }
                else {
                    document.querySelector('#result').innerHTML = request.responseText;
                }
            }
        }

        request.open('POST', 'https://akinatoraqua.herokuapp.com/customers');
     //   request.open('POST', 'http://localhost:8080/customers');
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-Type', 'application/json');
        alert(strJson);
        request.send(strJson);
        //request.send('param=' + strJson);
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function ajaxDownload(url, callback){

        var request = new XMLHttpRequest();


        request.onreadystatechange = function() {

            if(request.readyState == 4 && request.status == 200) {
                callback(request.responseText);
            }

        }
        request.open('POST', url);
        request.send();



    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function formFill(responseText){
        var arr = JSON.parse(responseText)
        document.querySelector('#inn').value = arr.inn;
        document.querySelector('#company_name').value = arr.company_name;
        document.querySelector('#fio_kl').value = arr.fio_kl;
        document.querySelector('#position_kl').value = arr.position_kl;
        document.querySelector('#phone').value = arr.phone;
        document.querySelector('#email').value = arr.email;
        document.querySelector('#client').checked = arr.client;
        document.querySelector('#postavschik').checked = arr.postavschik;
        document.querySelector('#istochnik_zakaza').value = arr.istochnik_zakaza;
        document.querySelector('#address').value = arr.address;
        document.querySelector('#comment').value = arr.comment;
    }

</script>
 </body>
</html>
