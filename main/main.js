function visit_home()
{
    window.location.replace("main.html")
}

function visit_features()
{
    window.location.replace("features.html")
}

function visit_about_us()
{
    window.location.replace("about_us.html")
}

//adding into attendace database

let data_container = document.getElementsByClassName("data-container");
function add_list()
{
    let li = document.createElement('li');
    li.innerHTML = "hello world";
    li.className = "abc";
    //name usn present absent view;
    data_container[0].appendChild(li);
}

let check_box = document.getElementsByClassName("check-box");
let present = document.getElementsByClassName("present");
let absent = document.getElementsByClassName("absent");

function switch_toggle(e)
{
    if(e.value == "present")
    {
        absent[0].style.color = "red";
        present[0].style.color = "black";
        e.value = "absent";
    }else{
        e.value = "present";
        present[0].style.color = "green";
        absent[0].style.color = "black";
    }
    console.log(e)
};