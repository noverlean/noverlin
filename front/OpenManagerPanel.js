function Clear()
{
    console.clear();
}

function ShowOrders(code)
{    
    $.ajax({
        url: '../backend/getAllOrders.php',
        method: 'post',
        dataType: 'text',
        data:
        {
            code: code
        },
        success: function(data){
            console.log(JSON.parse(data));        
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

function RemoveOrder(code, id)
{    
    $.ajax({
        url: '../backend/RemoveOrder.php',
        method: 'post',
        dataType: 'text',
        data:
        {
            id: id,
            code: code
        },
        success: function(data){
            console.log(data);        
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

function takeOverConsole () {
  var console = window.console

  if (!console) return

  function intercept (method) {
    var original = console[method]

    console[method] = function () {
      var message
      // do sneaky stuff
      if (original.apply) {
        // Do this for normal browsers
        original.apply(console, arguments)
        
        message = arguments
      } else {
        // Do this for IE
        message = Array.prototype.slice.apply(arguments).join(' ')

        original(message)
      }
      
      var obj = {
        type: method,
        message: message
      }
      
      // тут доступен obj
      //alert(obj.message)
    }
  }
  var methods = ['log', 'info', 'warn', 'error']

  for (var i = 0; i < methods.length; i++) {
    intercept(methods[i])
  }
}

takeOverConsole();