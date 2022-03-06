// Get access to DOM elements
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');

// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
}); 

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});
// function creat new post : 
const creatNewPost = () => {
  let newPost = document.createElement('article');
let newTitle = document.createElement('h5');
  let newParagraphe = document.createElement('p');
  newTitle.textContent="new Blog Post";
  newParagraphe.textContent = "Hide at bottom of staircase to trip human. Ask for petting. Roll on the floor purring your whiskers off. Trip on catnip nap all day";
  newPost.appendChild(newTitle);
  newPost.appendChild(newParagraphe);
  newPost.classList.add('list-group-item');
  return newPost;
};
// creat new post in the section bellow :
  let postButton = document.getElementById('add-post');
  const mySection = document.querySelector('section');
postButton.addEventListener('click',() => {
  mySection.appendChild(creatNewPost());});
//remove the last post :
let removeButton = document.getElementById('remove-post');
removeButton.addEventListener('click',()=>{
  let lastPost = document.querySelector('section').lastChild;
  mySection.removeChild(lastPost);
})