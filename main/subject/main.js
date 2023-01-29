function visit_home()
{
    window.location.replace("../main.html")
}

function visit_features()
{
    window.location.replace("../features.html")
}

function visit_about_us()
{
    window.location.replace("../about_us.html")
}

let current_location = window.location.href;
current_location = current_location.split("/");
current_location = current_location[current_location.length - 1];
current_location = current_location.split(".")[0]
console.log(current_location);

//marking attendance
let data_container = document.getElementsByClassName("data-container");

let check_box = document.getElementsByClassName("check-box");
let present = document.getElementsByClassName("present");
let absent = document.getElementsByClassName("absent");

function switch_toggle(e)
{
    // console.log(e);
    let req_elements = document.getElementsByClassName(e.classList[1]);
    // cons ole.log(req_elements);

    if(e.value == "present")
    {
        e.value = "absent";
        req_elements[0].style.color = "black";
        req_elements[2].style.color = "red";
    }else{
        e.value = "present";
        req_elements[0].style.color = "green";
        req_elements[2].style.color = "black";
    }
};

//data fetching
data_container = document.getElementsByClassName('data-container');
// console.log(data_container);
let dict = [
    {
        usn : "1NH21IS104",
        name : "Nithesh Kumar",
    },
    {
        usn : "1NH21IS105",
        name : "P Aditya",
    },
    {
        usn : "1NH21IS106",
        name : "Jagruth P",
    },
    {
        usn : "1NH21IS107",
        name : "Rohan shetty",
    },
    {
        usn : "1NH21IS108",
        name : "Harsh",
    },
    {
        usn : "1NH21IS109",
        name : "Aryan Ghai",
    }
];

function fetch_data(usn, name)
{
    let div = document.createElement('div');
    div.classList.add('data-card');
    let usn_label = document.createElement('label');
    usn_label.innerHTML = usn;
    let name_label = document.createElement('label');
    name_label.innerHTML = name;
    let present = document.createElement('label');
    present.classList.add("present", usn);
    present.innerHTML = "present";

    let switch_label = document.createElement('label');
    switch_label.classList.add("switch");
    let check_box = document.createElement('input');
    check_box.classList.add("check-box");
    check_box.type = "checkbox";
    check_box.value = "present";
    check_box.setAttribute("onclick", "switch_toggle(this)");
    check_box.classList.add("check-box", usn);
    let slider_span = document.createElement('span');
    slider_span.classList.add('slider');
    switch_label.appendChild(check_box);
    switch_label.appendChild(slider_span);

    let absent = document.createElement('label');
    absent.classList.add("absent", usn);
    absent.innerHTML = "absent";
    let calendar = document.createElement('button');
    calendar.innerHTML = "calendar";

    let array = [usn_label, name_label, present, switch_label, absent, calendar];
    // div.appendChild(usn_label);
    // div.appendChild(name_label);
    // div.appendChild(present);
    // div.appendChild(switch_label);
    // div.appendChild(absent);
    // div.appendChild(calendar);

    array.forEach((value, index, array)=>{
        div.appendChild(value);
    }) 

    data_container[0].appendChild(div);
};

function add_list()
{
    for(let i = 0; i < dict.length; i++){
        fetch_data(dict[i].usn, dict[i].name);
    }
};

add_list();

function post_data()
{
    let student_array = document.getElementsByClassName('check-box');
    let students_present = [];
    let students_absent = [];

    for(let i =0; i < student_array.length; i++)
    {
        let value = student_array[i].value;
        let usn = student_array[i].classList[1];
        
        if(value == "present")
        {
            students_present.push(usn);
        }else{
            students_absent.push(usn);
        }
    }

    console.log("students who are present");
    console.log(students_present);
    console.log("students who are absent");
    console.log(students_absent);
}