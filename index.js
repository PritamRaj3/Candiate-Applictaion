const data = [
    {
        name: 'nina',
        age: '16',
        city: 'worger',
        Language: 'c++',
        FramWork: 'react',
        image: './image/attractive.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
    {
        name: 'Roag',
        age: '22',
        city: 'xendar',
        Language: 'c++',
        FramWork: 'react',
        image: './image/w.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
    {
        name: 'Luca',
        age: '26',
        city: 'sea',
        Language: 'c++',
        FramWork: 'java',
        image: './image/girl.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
    {
        name: 'Alburto',
        age: '22',
        city: 'merina',
        Language: 'c++',
        FramWork: 'react',
        image: './image/girl2.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
    {
        name: 'julia',
        age: '22',
        city: 'jenava',
        Language: 'c++',
        FramWork: 'react',
        image: './image/anime.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'

    },
    {
        name: 'grooot',
        age: '22',
        city: 'vrinaya',
        Language: 'c++',
        FramWork: 'react',
        image: './image/anime-girls.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
    {
        name: 'oxygzen',
        age: '25',
        city: 'vrinaya',
        Language: 'c++',
        FramWork: 'react',
        image: './image/anime-girls.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
    {
        name: 'beauty',
        age: '27',
        city: 'vrinaya',
        Language: 'c++',
        FramWork: 'react',
        image: './image/anime-girls.jpg',
        more:'document to qure srlevctor syoeuuw hjhiuqw kjkia jsukqllml hahhalmdllkml'
    },
];
// cvitreater crreated
function cvitreater(profile) {
    let nextindex = 0;
    return {
        next: function () {
            return nextindex < profile.length ? {
                value: profile[nextindex++], done: false
            }
                : {
                    done: true
                }

        }
    };

};
// next button lissten
let next = document.getElementById('next');
next.addEventListener('click', nextcv);

//nextcvc functio created 
const candidate = cvitreater(data);
function nextcv() {
    const currentcandiate = candidate.next().value;
    let image = document.getElementById('img');
    let profile = document.getElementById('profile');
    let more = document.getElementById('more');

    if (currentcandiate != undefined) {
        image.innerHTML = `<img src="${currentcandiate.image}">`;
        profile.innerHTML = `
                 <ul>
                    <li>Name: ${currentcandiate.name}</li>
                    <li>Age: ${currentcandiate.age} years old</li>
                    <li>City: ${currentcandiate.city} </li>
                    <li>Language: ${currentcandiate.Language} </li>
                    <li>FramWork: ${currentcandiate.FramWork} framwork </li>
                 </ul> `;
        more.innerHTML =`${currentcandiate.more}`;

    } else {
        next.classList.add('block');
        // create a h3 and button element
        const button = document.createElement("button");
        button.id = 'ok';
        button.style.cursor ='pointer';
        button.innerText = 'Ok';
        const title = document.createElement('h3');
        title.innerText = 'Application was ended';

        //inform container in listener to show message. 
        let inform = document.getElementById('details');
        inform.appendChild(title);
        inform.appendChild(button);

        // button ok lisiten for relod window and end application
        let ok = document.getElementById('ok');
        ok.addEventListener('click', winr);


    }
};
nextcv();
// winr function window reload 
function winr() {
    console.log('clicked okk');
    window.location.reload();
}

// listen to about section
let about = document.querySelector('.about');
about.classList.add('none');

// listen for toogale property click more information
let click = document.getElementById('click');
click.addEventListener('click',toogle);
click.style.cursor ='pointer';

// toogle function create
function toogle() {
about.classList.toggle('none');
if(about.classList.contains('none')){
console.log('class list add none');
}
else{
console.log('class list not add none');
}
}
// cancle listen button
let cancle = document.querySelector('#cancle');
cancle.addEventListener('click',toogle);
