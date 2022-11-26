//start
array_1=['pen','paper','book','river'];

random_no = Math.floor((Math.random()*array_1.length));
Element_of_array = array_1[random_no];

console.log(Element_of_array);

document.getElementById("stbd").innerHTML = "Sketch to be drawn : " + Element_of_array;
//first part - random Drawing

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
//Second part - time manegment end
//start
function preload()
{
    classsifier = ml5.imageClassifier('DoodleNet');
}

function setup()
{
    canvas = createCanvas(280 , 280);
    
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth =  window.speechSynthesis;
}

function clearCanvas()
{
    background("white");
}

function draw()
{
    strokeWeight(13);
    stroke(0); // colour

    if (mouseIsPressed) 
    {
        line(pmouseX , pmouseY , mouseX , mouseY);
    }
}

function classifyCanvas()
{
    classsifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    if (results[0].label == Element_of_array)
    {console.log(results);
    document.getElementById('Sketch').innerHTML = 'Your Sketch : ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence : ' + Math.round(results[0].confidence * 100) + "%";

    speakup = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(speakup);
    }

}