		$(document).ready(function()
		{
			
			$('#formulario').on('submit', function(event)
			{
				var texto=$('#valor').val();
				event.preventDefault();
				$('#board').append(
					'<div class="contenedor">'	
					+'<div class="pin"><span>x</span>'
					+'</div>'
					+'<div class="valorizacion"><img id="corazon" src="img/corazon.png"/>'
					+'</div>'
					+ texto
					+'<p id="megusta">0</p>'
					+'</div>'
				)
				$('#valor').val('');
				$('#valor').focus();
			});

			$('#board').on('click','.pin', function()
			{
				$(this).parent().fadeOut(900);
				$('#valor').val('');
				$('#valor').focus();

			});
		
			$('#board').on('click','.valorizacion', function(event)
			{
				//alert($("#megusta").text());
				var contador = parseInt(jQuery("#megusta").text());
				contador = contador++
				$("#megusta").text(contador);
				
			});
			
		});