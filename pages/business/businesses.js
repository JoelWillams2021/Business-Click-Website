const data = {
    "businesses": [
        {
            "name": "test",
            "description": "test description",
            "tags": ["jewelry"]
        },
        {
            "name" : "test2",
            "description": "test description",
            "tags": []
        },
        {
            "name": "test3",
            "description": "test description",
            "tags": ["jewelry"]
        }
    ]
}

let businesses = data["businesses"];

businesses.forEach(({name, description, tags}) => {

    let outer_div = document.createElement("div");
    outer_div.style = "flex: 1 0 21%; background-color: white; border-radius: 15px; ";
    
    let inner_div = document.createElement("div");
    inner_div.classList.add("p-3");

    let name_h4 = document.createElement("h4");
    name_h4.innerText = name;

    let description_p = document.createElement("p");
    description_p.innerText = description;

    let tags_p = document.createElement("p");
    tags_p.innerText = 'Tags: ';
    if(tags.length > 0) {
        tags.forEach((e) => {
            tags_p.innerText += e;
        })
    } else {
        tags_p.innerText += 'None';
    }

    inner_div.appendChild(name_h4);
    inner_div.appendChild(description_p);
    inner_div.appendChild(tags_p);

    outer_div.appendChild(inner_div);

    document.getElementById("businesses_table").appendChild(outer_div);
});