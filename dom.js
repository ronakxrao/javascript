//EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.links);

// SELECTORS //
// GET ELEMENT BY ID //
//console.log(document.getElementById('header-title'));
//var headerTitle =document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME //

//var items =document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundcolor = 'yellow';

//to change colour of all
//gives error

//items.styke.backgroundcolor = 'f4f4f4';

//for(var i =0; i< items.length; i++){
    //items[i].style.backgroundColor = '#f4f4f4';
//} 

// GET ELEMENTS BY TAG NAME //

//var items =document.getElementsByTagName('li');
//console.log(li);
//li[1].textContent = 'Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundcolor = 'yellow';

//for(var i =0; i< li.length; i++){
   // li[i].style.backgroundColor = '#f4f4f4';
//} 

// QUERYSELECTOR //

//var header = document.querySelector('main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World'

//var sumbit = document.querySelector('input[type="sumbit"]');
//sumbit.value = "SEND";

//var item = document.querySelector('.list-group-item');
//item.style.colotr = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//item.style.colotr = 'red';

//var secondItem = document.querySelector('.list-group-item:nthchild(2)');
//secondItem.style.colotr = 'red';

// TRAVERSING THE DOM //

var itemlist = document.querySelector('#items');

// parent node
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.background = '#f4f4f4';
//console.log(itemlist.parentNode.parentNode);


// parentElement //
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.background = '#f4f4f4';
//console.log(itemlist.parentElement.parentElement);

// CHILD NODE //
//console.log(itemlist.childNodes);

// Children Node //

//console.log(item.list.children);
//console.log(item.list.children[1]);
//itemlist.children[1].style.backgroundColor = 'yellow';

// FirstChild //
//console.log(itemlist.firstchild);

// FirstElementChild //

//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = 'Helo 1';

// lastChild // 
//console.log(itemlist.lastchild);

// lastElementChild //

//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'Helo 4';

// NEXTSIBLING //
//console.log(itemlist.nextSibling);

// NEXTELEMENTSIBLING //
//console.log(itemlist.nextElementSibling);

// PreviousSibling //
//console.log(itemlist.previousSibling);

// PreviousElementSibling //
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'green';

// CreateElement //

// Create a DIV

//varnewDiv = document.createElement('div');

// ADD CLASS //

//newDiv.classname = 'hello';

// ADD ID //
//newDiv.id = 'hello1';

// ADD ATTR //
//newDiv.setAttribute('title', 'hello div');

// CREATE TEXT NODE
//var newDiv = document.creatsTextNodez('Hello World');

// ADDTEXTTODIV //
//newDiv.appendchild(newDivtext);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//console.log(newDiv);

//newDiv.style.fontsize = '30px';

//container.insertBefore(newDiv, h1);


// EVENTLISTENER//

//var button =document.getElementById('button').addEventListener('click', buttonClick);

//function buttonClick(e){
    //console.log('button clicked');
   // document.getElementById('header-title').textContent = 'Changed';
    //document.querySelector('#main').computedStyleMap.backgroundColor ='#f4f4f4';
   //console.log(e);  

   //console.log(e.target);
   //console.log(e.target.id);
   //console.log(e.target.className);
   //console.log(e.target.classlist);
   //console.log(e.type);
   //console.log(e.clientx);
   //console.log(e.clientY);

   //console.log(e.offsetx);
   //console.log(e.offsetY);

   //console.log(e.altkey);
   //console.log(e.ctrlkey);
   //console.log(e.shiftkey);
//}

var button =document.getElementById('button');
var box =document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type); 
}

