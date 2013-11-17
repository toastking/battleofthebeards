var uploadElement = document.getElementById('getFile'),
		        alertValue = function(){
		            alert(uploadElement.value);
		        };

		    if(window.addEventListener){
		        uploadElement.addEventListener('change', alertValue);
		    }
		    else{
		        uploadElement.attachEvent('onchange', alertValue);
		    }
