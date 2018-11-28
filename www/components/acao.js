$(document).ready(function(){
      $(document).on('change','#foto',function(){
        var prop = document.getElementById('foto').files[0];
        var nome_imagem = prop.name;
        var extensao_imagem = nome_imagem.split('.').pop().toLowerCase();

        if(jQuery.inArray(extensao_imagem,['gif','jpg','jpeg','']) == -1){
           navigator.notification.alert("imagem invalida");
        }else{
          var form_data = new FormData();
          form_data.append("file",prop);
          $.ajax({
            url:'https://crudmobile3i2-jussimar.c9users.io/vai/upload.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend:function(){
              $('#msg').html('Carregando......');
            },
            success:function(data){
              console.log(data);
              $('#msg').html(data);
            }
          });
        }
      });
    });