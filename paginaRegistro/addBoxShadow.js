document.addEventListener("DOMContentLoaded",function(){
    var section=document.getElementById("ventajas");
    var elementos=section.getElementsByTagName("li");
    
    for(var i=0;i<elementos.length;i++){
        var elemento=elementos[i];
        elemento.addEventListener("mouseover",function(){
            this.style.backgroundColor = "#e7f0f8";
            this.style.boxShadow="0px 0px 18px 8px rgba(0, 0, 0, 0.2)";
        });
        elemento.addEventListener("mouseout",function(){
            this.style.backgroundColor= "#EFEFEF";
            this.style.boxShadow="none";
        })
    }
});