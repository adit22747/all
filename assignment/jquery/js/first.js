$(document).ready(
    ()=>{
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            type: "GET",
            dataType: "JSON",
            // data: "[{}]",
            // success: function(data){
            //     // let dat=JSON.parse(data);
            //     // console.log(data[0].id);
        
            //     // for (var i=1;i<data.length;i++)
            //     // {
            //     //     // console.log("dat====="+data[i].title);
            //     //     // $('#images').text(data[i]);
            //     //     $('#images').append("<div id='div1'><p>"+data[i].title+"</p><img src="+data[i].url+"></div>");
            //     // }
            //     $.each(data,function(key,value){
            //         $('body').append('<div id="div'+value.id+'"'+'></div>');
            //         $('#div'+value.id).append('<img id="img'+value.id+'"src='+value.thumbnailUrl+'/><br/>');
            //         $('#div'+value.id).append('<p>'+value.title+'</p>');
            //         $('#div'+value.id).append('<button>add to cart</button>');

            //     })
            // }
            success : (x)=>{
                for(var i=0;i<x.length;i++){
                    var img=x[i].thumbnailUrl;
                    $("body").append('<section><center><img src="'+img+'"/><br><div>"'+x[i].title+'<div><button>add to cart</button></center></scetion>');
                }
            }
        });
    }
);