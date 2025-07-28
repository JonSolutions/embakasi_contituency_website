const content = document.querySelectorAll('.content');
console.log(content);
for(i=0;i<6;i++){

content[i].addEventListener('click',function(){
    this.classList.toggle('.octave')
});

};