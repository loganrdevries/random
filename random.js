var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.

function createFirstScene() {
    makeImage("https://pbs.twimg.com/profile_images/716986458406424576/8AOacOOQ.jpg", 130, 23, 5, 0.6)
    document.body.style.backgroundColor = "DarkSlateBlue";
    
    makeRect(1, 0, 1000, 1000, "DarkSlateBlue", 1);
    makeCircle(21, 10, 5, "RoyalBlue", 0.5);
    makeCircle(50, 40, 2, "RoyalBlue", 0.5);
    makeCircle(20, 15, 5, "RoyalBlue", 0.5);
    makeCircle(60, 30, 4, "RoyalBlue", 0.5);
    makeCircle(30, 60, 5, "RoyalBlue", 0.5);
    makeCircle(90, 40, 3, "RoyalBlue", 0.5);
    makeCircle(80, 80, 2, "RoyalBlue", 0.5);
    makeCircle(150, 6, 4, "RoyalBlue", 0.5);
    makeCircle(175, 60, 4, "RoyalBlue", 0.5);
    
    makeRect(1, 90, 500, 100, "grey", 1);
    makeEllipse(30,80, 7, 10, "purple", 1);
    makeCircle(30, 73, 3, "dark purple", 1);
    makeEllipse(175,80, 7, 10, "purple", 1);
    makeCircle(175, 73, 3, "dark purple", 1);
    
    makeEllipse(140,25, 45, 15, "gold", 1);
    makeEllipse(170,25, 30, 10, "gold", 1);
    makeCircle(130, 23, 5, "Deepskyblue ", 0.6);
    makeRect(130, 0, 10, 12, "gold", 1);
    makeEllipse(135,2, 5, 2, "Deepskyblue", 0.6);

makeImage("https://pbs.twimg.com/profile_images/716986458406424576/8AOacOOQ.jpg", 120, 20, 20, 7,0.6)
 
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.                      DarkSlateBlue
function createSecondScene() {
        document.body.style.backgroundColor = "DarkSlateGray  ";

    makeRect(1, 0, 1000, 1000, "Black ", 1);
        makeCircle(130, 23, 5, "blue ", 1);
        makeCircle(90, 160, 100, "Gainsboro ", 1);
    
            makeCircle(100, 70, 7, "grey", 1);
            makeCircle(80, 90, 5, "grey", 1);
            makeCircle(110, 100, 6, "grey", 1);
            makeCircle(75, 80, 8, "grey", 1);
            makeCircle(60, 73, 6, "grey", 1);
            makeCircle(30, 95, 5, "grey", 1);
            makeCircle(130, 80, 7, "grey", 1);

    
    makeRect(130, 23, 3, 2, "ForestGreen ", 1);
    makeRect(129, 24, 3, 2, "ForestGreen ", 1);
    makeRect(128, 22, 3, 2, "ForestGreen ", 1);
    makeRect(129, 19, 3, 2, "ForestGreen ", 1);

    makeImage("http://vignette2.wikia.nocookie.net/muppet/images/1/1d/Ss20yrs2.jpg/revision/latest?cb=20100507024618", 50, 10, 50, 50, 0.2)

}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
        document.body.style.backgroundColor = "Khaki ";
makeRect(1, 0, 1000, 1000, "khaki ", 1);
        makeRect(1, 80,500, 100, "saddlebrown", 1);

       
makeRect(50, 50, 10, 30, "brown", 1)
    makeCircle(55, 45, 15, "crimson", 1)
    
    makeRect(90, 50, 10, 30, "brown", 1)
    makeCircle(95, 45, 15, "goldenrod", 1)
    
    makeRect(130, 50, 10, 30, "brown", 1)
    makeCircle(135, 45, 15, "orange", 1)
    
        makeCircle(175, 14, 14, "white", 1)
        makeCircle(175, 14, 12, "darkorange", 1)
        m

}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var rand1 = Math.random();
    // If the number is less than 0.33, call the function to create your first scene.
    if (rand1 < 0.33) {
        createFirstScene()
    }
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if (rand1 < 0.67) {
        createSecondScene()
    }
    // Else, call the function to create your third scene.
        else if (rand1 < 0.90) {
        createThirdScene()
        }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}