var fandomList = null;
var alphabetDisplay;
var numberDisplay;
var reverseButton;
var tags;

var ascending;
var alphabetical = true;

//creating button to switch displays
var main_header = document.querySelector("h2");
var switchButton = document.createElement("button");
switchButton.className = "action";
switchButton.innerHTML = "Sort by Size";
switchButton.onclick = switchDisplay;
main_header.appendChild(switchButton);

function initialize()
{
    //creating a sorted list of fandoms
    fandomList = Array.from(document.querySelectorAll('ul.tags.index.group > li'));
    fandomList.sort((a,b) => b.innerHTML.match(/\d+/g).pop() - a.innerHTML.match(/\d+/g).pop());

    //selecting elements hidden during numerical display
    var alphabetTags = document.querySelector("ol.alphabet.fandom.index.group");
    var alphabetActions = document.querySelector("ul.alphabet.actions");
    alphabetDisplay = [alphabetTags, alphabetActions];

    //creating new numerical display, in same style as old alphabetical display
    numberDisplay = document.createElement("ol");
    numberDisplay.className = "alphabet fandom index group ";
    numberDisplay.style.display = "none";
    document.getElementById("main").appendChild(numberDisplay);

    var listBox = document.createElement("li");
    listBox.className = "letter listbox group";
    numberDisplay.appendChild(listBox);

    var header = document.createElement("h3");
    header.className = "header";
    header.innerHTML = "&nbsp&nbspFandoms by Size&nbsp&nbsp";
    listBox.appendChild(header);

    ascending = true;
    reverseButton = document.createElement('button');
    reverseButton.className = "action"
    reverseButton.innerHTML = "&#8595"; 
    reverseButton.onclick = reverseTags;
    header.appendChild(reverseButton);

    tags = document.createElement("ol");
    tags.className = "tags index group";
    fandomList.forEach((x) => tags.appendChild(x.cloneNode(true)));
    listBox.appendChild(tags);
}

function reverseTags ()
{
    if (ascending)
    {
        ascending = false;
        reverseButton.innerHTML = "&#8593";
        
    }
    else
    {
        ascending = true;
        reverseButton.innerHTML = "&#8595";
        
    }
    for (var i = 1; i < tags.childNodes.length; i++)
    {
        tags.insertBefore(tags.childNodes[i], tags.firstChild);
    }
}

function switchDisplay()
{
    if (fandomList == null)
    {
        initialize()
    }
    if (alphabetical)
    {
        alphabetDisplay.forEach((x) => x.style.display = "none");
        numberDisplay.style.display = "initial";
        switchButton.innerHTML = "Sort by Alphabet";
        alphabetical = false;
    }
    else
    {
        alphabetDisplay.forEach((x) => x.style.display = "initial");
        numberDisplay.style.display = "none";
        switchButton.innerHTML = "Sort by Size";
        alphabetical = true;
    }
}
