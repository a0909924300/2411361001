document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("welcomeBtn");
    if(btn){
        btn.addEventListener("click", function(){
            alert("歡迎來到我的自我介紹網站！希望你會喜歡這個網站，並且能更加認識我 😊");
        });
    }
});
