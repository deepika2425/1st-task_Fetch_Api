fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
    .then(response => response.json())
    .then(data => ShowData(data))
    .catch(error => console.error('Error:', error));

function ShowData(data) {
    let productsArr = [];

    for (product in data.products) {
        productsArr.push(data.products[product]);
    }
    productsArr.sort((a, b) => { return a.popularity - b.popularity }).reverse();

    document.getElementById('userData').innerHTML = productsArr.map((user) =>
        `<tr>
     <td>${user.subcategory}</td>
     <td>${user.title}</td>
     <td>${user.price}</td>
     <td>${user.popularity}</td>
    </tr>`
    ).join("");
}