document.addEventListener("DOMContentLoaded",function(){
    var elementos=document.getElementsByTagName("article");
    
    for(var i=0;i<elementos.length;i++){
        var elemento=elementos[i];
        elemento.addEventListener("mouseover",function(){
            this.style.backgroundColor = "#e7f0f8";
            this.style.borderColor="#26467e";
            this.style.boxShadow="0px 0px 18px 8px rgba(0, 0, 0, 0.2)";
        });
        elemento.addEventListener("mouseout",function(){
            this.style.backgroundColor= "#EFEFEF";
            this.style.borderColor="#EFEFEF";
            this.style.boxShadow="none";
        })
    }
});