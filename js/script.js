// Root
const root = document.getElementById('root');

/*  Nav Component */
const nav = document.createElement('nav');
const heading1 = document.createElement('h1');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const button1 = document.createElement('button');

// Creating Text in for element
const heading1Text = document.createTextNode('Money Heist');
const listText1 = document.createTextNode('Home');
const listText2 = document.createTextNode('About');
const listText3 = document.createTextNode('Bank');
const button1Text = document.createTextNode('Join Us');

// Appending text into element
heading1.appendChild(heading1Text);
li1.appendChild(listText1);
li2.appendChild(listText2);
li3.appendChild(listText3);
button1.appendChild(button1Text);

// Appending list into ul
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Appending element into nav (container)
nav.appendChild(heading1);
nav.appendChild(ul);
nav.appendChild(button1);

// Appending nav into root element
root.appendChild(nav);

/* Content Component */
const divContainer = document.createElement('div');
const divFlex1 = document.createElement('div');
const divFlex2 = document.createElement('div');

// Adding Classes
divContainer.classList.add('flex-container')
divFlex1.classList.add('flex1')
divFlex2.classList.add('flex2')

// Creating Element for div
const parag1 = document.createElement('p');
const image1 = document.createElement('img'); 
const button2 = document.createElement('button');

// Inserting Text and Photos into element
const p1Text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, unde. Fugit quas quos in ipsam laboriosam nostrum amet fuga, nihil vel placeat, excepturi alias officiis eligendi iusto quia. Doloremque distinctio sapiente sit pariatur assumenda libero provident animi culpa nam, voluptas repellat repudiandae molestias at sequi rerum incidunt eligendi illum vero?');
const button2Text = document.createTextNode('Explore The World');
image1.src = 'img/logo.png';

// Inserting
parag1.appendChild(p1Text);
button2.appendChild(button2Text);

// Inserting into Div
divFlex1.appendChild(parag1);
divFlex1.appendChild(button2);
divFlex2.appendChild(image1);

// Inserting into div container
divContainer.appendChild(divFlex1);
divContainer.appendChild(divFlex2);

// Insert into root
root.appendChild(divContainer);