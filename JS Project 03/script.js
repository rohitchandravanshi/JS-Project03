var btn = document.querySelector("h5")

var add = document.querySelector("#add")

var check = 0;

add.addEventListener("click", function(){
    if (check == 0){
        btn.innerHTML = "Friends"
        btn.style.color = "green"
        add.innerHTML = "Remove Friend"
        check = 1
    } else {
        btn.innerHTML = "Stranger"
        btn.style.color = "red"
        add.innerHTML = "Add Friend"
        check = 0
    }

})




