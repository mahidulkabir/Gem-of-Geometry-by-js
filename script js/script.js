// triangle calculation part 
function calculateTriangleArea (){
    // get triangle base value 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);

    // get triangle length value 

const trianglelengthInput = document.getElementById('triangle-height');
const triangleHeightValue = trianglelengthInput.value;

const height = parseFloat(triangleHeightValue);
console.log(height);

// calculation of triangle area 

const ar= 0.5 * base * height;
const area = ar.toFixed(1)


// display triangle area 
const triangleAreaSpan = document.getElementById('area-output');
triangleAreaSpan.innerText = area
}


// rectangle area calculation part 


document.getElementById('btn-rectangle').addEventListener('click',function(){
 // get rectangle Width value 
 const rectangleWidthInput = document.getElementById('rectangle-width');
 const rectangleWidthValue = rectangleWidthInput.value;
 const width = parseFloat(rectangleWidthValue);
 

 // get rectangle Length value 

const rectangleLengthInput = document.getElementById('rectangle-length');
const rectangleLengthValue = rectangleLengthInput.value;

const length = parseFloat(rectangleLengthValue);


// calculation of triangle area 

const ar = width * length;
const area = ar.toFixed(1)


// display triangle area 
const AreaSpan = document.getElementById('area-output-rectangle');
AreaSpan.innerText = area
})


// parallelogram section 

document.getElementById('btn-para').addEventListener('click',function(){
    // get rectangle Width value 
    const rectangleWidthInput = document.getElementById('para-base');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);
    
   
    // get rectangle Length value 
   
   const rectangleLengthInput = document.getElementById('para-height');
   const rectangleLengthValue = rectangleLengthInput.value;
   
   const length = parseFloat(rectangleLengthValue);
   
   
   // calculation of triangle area 
   
   const ar = width * length;
   const area = ar.toFixed(1)
   
   
   // display triangle area 
   const AreaSpan = document.getElementById('area-output-pera');
   AreaSpan.innerText = area
   })

//    rhombus edit section 

document.getElementById('btn-rhom').addEventListener('click',function(){
    // get rectangle Width value 
    const rectangleWidthInput = document.getElementById('rhom-d1');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);
    
   
    // get rectangle Length value 
   
   const rectangleLengthInput = document.getElementById('rhom-d2');
   const rectangleLengthValue = rectangleLengthInput.value;
   
   const length = parseFloat(rectangleLengthValue);
   
   
   // calculation of triangle area 
   
   const ar = 0.5 * width * length;
   const area = ar.toFixed(1)
   
   
   // display triangle area 
   const AreaSpan = document.getElementById('area-output-rhom');
   AreaSpan.innerText = area
   })


// pentagon section edit 

document.getElementById('btn-penta').addEventListener('click',function(){
    // get rectangle Width value 
    const rectangleWidthInput = document.getElementById('penta-p');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);
    
   
    // get rectangle Length value 
   
   const rectangleLengthInput = document.getElementById('penta-b');
   const rectangleLengthValue = rectangleLengthInput.value;
   
   const length = parseFloat(rectangleLengthValue);
   
   
   // calculation of triangle area 
   
   const ar = 0.5 * width * length;
   const area = ar.toFixed(1)
   
   
   // display triangle area 
   const AreaSpan = document.getElementById('area-output-penta');
   AreaSpan.innerText = area
   })


//    ellipse section edit 
document.getElementById('btn-ellipse').addEventListener('click',function(){
    // get rectangle Width value 
    const rectangleWidthInput = document.getElementById('ellipse-a');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);
    
   
    // get rectangle Length value 
   
   const rectangleLengthInput = document.getElementById('ellipse-b');
   const rectangleLengthValue = rectangleLengthInput.value;
   
   const length = parseFloat(rectangleLengthValue);
   
   
   // calculation of triangle area 
   
   const ar = 3.1416 * width * length;
   const area = ar.toFixed(1)
   
   
   // display triangle area 
   const AreaSpan = document.getElementById('area-output-ellipse');
   AreaSpan.innerText = area
   })