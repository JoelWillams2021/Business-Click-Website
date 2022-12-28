const data = {
    "businesses": [
        {
            "name": "test",
            "description": "test description",
            "link": "#",
            "tags": ["jewelry"]
        },
        {
            "name" : "test2",
            "description": "test description",
            "link": "#",
            "tags": []
        },
        {
            "name": "test3",
            "description": "test description",
            "link": "#",
            "tags": ["jewelry"]
        }
    ]
}

const table = document.getElementById("businesses_table");

const searchBar = document.getElementById("searchBar");
const submitButton = document.getElementById("submitButton");

renderBusinesses(data["businesses"]);

// function that renders businesses on page given a list of businesses
function renderBusinesses(business_list) {
    table.innerHTML = ''; // clear the table
    if(business_list.length > 0) {
        business_list.forEach(({name, description, link, tags}) => {

            let outer_div = document.createElement("div");
            outer_div.style = "flex: 1 0 21%;";
            outer_div.classList.add("bg-white", "rounded-4");

            let inner_div = document.createElement("div");
            inner_div.classList.add("p-3");

            let name_a = document.createElement("a");
            name_a.target = '_blank';
            name_a.href = link;
            name_a.classList.add("text-decoration-none", "text-black");

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

            name_a.appendChild(name_h4);

            inner_div.appendChild(name_a);
            inner_div.appendChild(description_p);
            inner_div.appendChild(tags_p);

            outer_div.appendChild(inner_div);

            table.appendChild(outer_div);
        });
    } else {
        const message = document.createElement("p");
        message.innerText = 'No businesses found!';
        table.appendChild(message);
    }
}

function changeSearchQuery(query) {
    // when value of search bar is changed, re-render the filtered out businesses
    let value = query.toLowerCase();
    if(value.trim() == '') {
        // if search bar is empty, render all businesses
        renderBusinesses(data["businesses"]);
    } else {
        // filter out businesses with names that match the search query
        let businesses = [];
        data["businesses"].forEach((business) => {
            if(business.name.toLowerCase() == value) {
                businesses.push(business);
            }
        });
        renderBusinesses(businesses);
    }
}


searchBar.addEventListener("change", (e) => {
    e.preventDefault();
    changeSearchQuery(searchBar.value);
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    changeSearchQuery(searchBar.value);
});
