const getResourse = async(url) => {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('ошибка по адресу ${url}')
    }
    return await response.json()

    
}
getResourse('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data))

document.addEventListener('DOMContentLoaded', function() {   
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const data = {
            nameOfGun: document.getElementById('nameOfGun').value, 
            description: document.getElementById('discription').value,
            cartridge: document.getElementById('cartridge').value,
            typeOfGun: document.getElementById('typeofgun').value,
            damageRange: document.getElementById('damagerange').value
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Post request success :', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});