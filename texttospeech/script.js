const speech=document.getElementById('texttospeak');



function ts(){
    let speeechobj=new SpeechSynthesisUtterance(speech.value);
    window.speechSynthesis.speak(speeechobj);
}