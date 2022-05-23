// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');
console.log(mainEl)

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';


// Task 1.3
// Add a class of flex-ctrto mainEl.

 mainEl.style.classList = "flex-center";


//  Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const  topMenuEl = document.querySelector("nav");
console.log(topMenuEl)



// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = "100%"


// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.


topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
// Add a class of flex-aroundto topMenuEl.


topMenuEl.style.classlist = 'flex-around';

// Task 3.0
// Copy the following data structure to the top of script.js:

let about = [];
let catalog = [];
let orders = [];
let account = [];


var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  

  // use the site below to try and piece together I was unable to use TA hours because i work on the weekends. also the solotion below is 
  // https://websitesetup.org/wp-content/uploads/2020/09/Javascript-Cheat-Sheet.pdf

  // var index;
  // for (index = 0; index < menuLinks.length; index++) {
  //     var a = documnet.createElement("a");
  //     var text = document.createTextNode(menuLinks[index].text)
  //     a.appendChild(text);
  //     a.href = menulinks[index].href
  //     topMenuEl.appendChild(a);
  //     console.log(a);
  


