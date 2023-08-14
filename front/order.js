var code;

function OrderProduct()
{
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var product = document.getElementById("pt").innerHTML;

    $.ajax({
        url: '../backend/sendMessage.php',
        method: 'post',
        dataType: 'text',
        data:
        {
            name: name,
            email: email
        },
        success: function(data){
            if (data.length == 4)
            {
                code = data;
                
                document.getElementById("form").innerHTML = "";
                document.getElementById("form").insertAdjacentHTML(
                    'beforeend', 
                    `<input name="code" type="number" max-length="4" placeholder="code" class="inputCl">` +                
                    `<div id="send" onclick="ConfirmCode('` + code + `', '` + name + `', '` + email + `', '` + product + `')" style="text-align: center; cursor:pointer;" class="inputCl">CONFIRM</div>`
                );
            } 
            else
            {
                alert("Ошибка\n" + JSON.parse(data).errors[0].message);
            }           
        },
    error: function (jqXHR, exception) {
	if (jqXHR.status === 0) {
		console.log('Not connect. Verify Network.');
	} else if (jqXHR.status == 404) {
		console.log('Requested page not found (404).');
	} else if (jqXHR.status == 500) {
		console.log('Internal Server Error (500).');
	} else if (exception === 'parsererror') {
		console.log('Requested JSON parse failed.');
	} else if (exception === 'timeout') {
		console.log('Time out error.');
	} else if (exception === 'abort') {
		console.log('Ajax request aborted.');
	} else {
		console.log('Uncaught Error. ' + jqXHR.responseText);
	}
    }
    });
}

function ConfirmCode(code, name, email, product)
{
    var enteredCode = document.getElementsByName("code")[0].value;

    if (code == enteredCode)
    {
        $.ajax({
            url: '../backend/createOrder.php',
            method: 'post',
            dataType: 'text',
            data:
            {
                name: name,
                email: email,
                product: product
            },
            success: function(data){
                if (data == "200")
                {
                    document.getElementById("form").innerHTML = "";
                    document.getElementById("form").insertAdjacentHTML(
                        'beforeend', 
                        `<div id="pt" class="prodTitle">Ваша заявка принята! Мы скоро свяжемся с вами. Ожидайте...</div>`
                    );
                } 
                else
                {
                    alert("Ошибка\n" + JSON.parse(data).errors[0].message);
                }           
            },
        error: function (jqXHR, exception) {
        if (jqXHR.status === 0) {
            console.log('Not connect. Verify Network.');
        } else if (jqXHR.status == 404) {
            console.log('Requested page not found (404).');
        } else if (jqXHR.status == 500) {
            console.log('Internal Server Error (500).');
        } else if (exception === 'parsererror') {
            console.log('Requested JSON parse failed.');
        } else if (exception === 'timeout') {
            console.log('Time out error.');
        } else if (exception === 'abort') {
            console.log('Ajax request aborted.');
        } else {
            console.log('Uncaught Error. ' + jqXHR.responseText);
        }
        }
        });
    }
    else
    {
        document.getElementById("form").innerHTML = "";
        document.getElementById("form").insertAdjacentHTML(
            'beforeend', 
            `<div id="pt" class="prodTitle">Неверный код! Попробуйте ещё раз...</div>`
        );
    }
}