// Your application goes here
const getData = async () => {
    const res = await fetch('https://mocki.io/v1/84954ef5-462f-462a-b692-6531e75c220d');
    const response = await res.json();
    console.log(response);
    var form = document.getElementById("form");
    response.forEach((ele) => {
        const div = document.createElement('div');
        const label = document.createElement("label");

        if (ele.type === "text") {
            var FN = document.createElement("input");
            FN.setAttribute("type", ele.type);
            FN.setAttribute("name", ele.name);
            FN.setAttribute("id", ele.name);
            FN.setAttribute("required", ele.required === 1 ? true : false);
            label.innerHTML = ele.label;
            div.appendChild(label);
            div.appendChild(FN);
            form.appendChild(div);
        } else if (ele.type === "email") {
            var FN = document.createElement("input");
            FN.setAttribute("type", ele.type);
            FN.setAttribute("name", ele.name);
            FN.setAttribute("id", ele.name);
            FN.setAttribute("required", ele.required === 1 ? true : false);
            label.innerHTML = ele.label;
            div.appendChild(label);
            div.appendChild(FN);
            form.appendChild(div);
        } else if (ele.type === "tel") {
            var FN = document.createElement("input");
            FN.setAttribute("type", ele.type);
            FN.setAttribute("name", ele.name);
            FN.setAttribute("id", ele.name);
            FN.setAttribute("pattern", ele.pattern);
            FN.setAttribute("required", ele.required === 1 ? true : false);
            label.innerHTML = ele.label;
            div.appendChild(label);
            div.appendChild(FN);
            form.appendChild(div);
        } else if (ele.type === "radio") {
            label.innerHTML = ele.legend;
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
            ele.options.forEach((option) => {
                const radioLabel = document.createElement('label');
                radioLabel.innerHTML = option.label;
                var FN = document.createElement("input");
                FN.setAttribute("type", ele.type);
                FN.setAttribute("name", ele.name);
                FN.setAttribute("id", ele.name);
                FN.setAttribute("value", option.value);
                FN.setAttribute("required", ele.required === 1 ? true : false);
                radioLabel.appendChild(FN);
                div.appendChild(radioLabel);
            });
            form.appendChild(div);
        }
    });

    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "Submit";
    button.addEventListener('click', handleSubmit);
    form.appendChild(button);

    document.getElementsByTagName("body")[0].appendChild(form);
}


const handleSubmit = async (event) => {
    event.preventDefault();
    const nameFirst = document.getElementById("nameFirst").value;
    const nameLast = document.getElementById("nameLast").value;
    const contactPhone = document.getElementById("contactPhone").value;
    const contactEmail = document.getElementById("contactEmail").value;
    const contactPreferred = document.getElementById("contactPreferred").value;
    console.log(nameFirst, nameLast, contactPhone, contactEmail, contactPreferred);
    const request = [
        {
            "name": "nameFirst",
            "value": nameFirst
        },
        {
            "name": "nameLast",
            "value": nameLast
        },
        {
            "name": "contactPhone",
            "value": contactPhone
        },
        {
            "name": "contactEmail",
            "value": contactEmail
        },
        {
            "name": "contactPreferred",
            "value": contactPreferred
        }
    ];

    const res = await fetch('https://putsreq.com/RWhI8ht10y5kqfmemrML', {
        method: 'POST',
        body: JSON.stringify(request)
    });
    console.log(res);
    const response = await res.json();
    console.log(response);
}



getData();
