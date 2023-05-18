const container = document.querySelector('.container')
container.style.width = '200px';
container.style.height = '200px';

const bod = document.body;

const sizeButton = document.createElement('button');
sizeButton.classList.add('btn');
sizeButton.textContent = 'Press Me';
bod.appendChild(sizeButton)
//overlord.appendChild(sizeButton)

let tileSize = 10;
for (i = 0; i < Number(tileSize); i ++) {
    const subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
    //subcontainer.style.height = '20px'
    container.appendChild(subcontainer)

    for (j = 0; j < Number(tileSize); j++) {
        const tempDiv = document.createElement('div')
        tempDiv.style.backgroundColor = 'red';
        tempDiv.style.width = '10px'
        tempDiv.style.height = 100%
        tempDiv.classList.add('tile')
        subcontainer.appendChild(tempDiv)
    }
}

sizeButton.addEventListener('click', () => {
    container.innerHTML = ''
    tileSize = prompt('Enter a number')
    for (i = 0; i < Number(tileSize); i ++) {
        const subcontainer = document.createElement('div');
        subcontainer.classList.add('subcontainer');
        //subcontainer.style.height = '20px'
        container.appendChild(subcontainer)
    
        for (j = 0; j < Number(tileSize); j++) {
            const tempDiv = document.createElement('div')
            tempDiv.style.backgroundColor = 'red';
            tempDiv.style.width = '10px'
            tempDiv.style.height = 100%
            tempDiv.classList.add('tile')

            tempDiv.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = 'black';
            })
            subcontainer.appendChild(tempDiv)
        }
    }
})


