var img=[];
var product=[];
var dollar= [];
var totalprice=0; 
$(".add").click(function(){
    $(".imgz").html("");
    $(".namez").html("");
    $(".pricez").html(""); 
    var url=$(".img").val();
    img.push(url);
    var itmz= img.length;
        img.forEach(function(imgs){
             $(".imgz").append("<div class='store'>"+"<p id='shown'>"+"<img src=" +imgs+ ">"+"</p>"+"</div>");
        });
    $(".items2").html("<p>"+itmz+"</p>");
    console.log(url);
    console.log(itmz);
    
    var type=$(".name").val();
    product.push(type);
    product.forEach(function(nam){
    $(".namez").append("<div class='store'>"+"<p id='ame'>"+ nam +"</p>"+"</div>");
    });
    console.log(type);
    
    var money=parseInt($(".price").val());
    dollar.push(money);
    dollar.forEach(function(mon){
    $(".pricez").append("<div class='store'>"+"<p id='moniy'>" + "$" + mon +"</p>" +"</div>");
    });
    
    totalprice+=money;
    $(".cost2").html("<p>"+ "$" + totalprice + "</p>");
    console.log(money); 
});
$(".finish").click(function(){
    $(".wrapper").fadeOut();
    $(".moment").fadeIn();
});
$(".done").click(function(){
var codez=$(".code").val();    
    if(codez==="Dollars"){
       alert("You have purchased"+" "+ product[0]+" "+"and other items and your total is"+" " +"$"+parseInt(totalprice*.25) +". Thank you for Shopping at Emily's Limitless Online Store hope you come back soon!!!");
    }
    else{
       $(".moment").hide();
       $(".wrapper").show();        
       alert("(Really?? It was 'Dollars'!) Anyways you have purchased"+" "+ product[0]+" "+"and other items and your total is"+" " +"$"+totalprice +". Thank you for Shopping at Emily's Limitless Online Store hope you come back soon.");
    }
});
$(".skip").click(function(){
        alert("(Lazy ._.) You have purchased"+" "+ product[0]+" "+"and other items and your total is"+" " +"$"+totalprice +". Thank you for Shopping at Emily's Limitless Online Store hope you come back soon.");
});


