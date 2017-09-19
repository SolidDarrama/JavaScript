// enter code here
function calculate(){
	
    /*
    Get a reference to the HTML element with the ID of 'length'.
    Please note, this is a reference to the HTML element, NOT WHAT YOU TYPED IN THE BOX!
    If you need to get what you typed in the box you will nedd to access the element's 'value' 
	attribute, then convert it to a float.
    */
	
	//LENGTH
    var length_element = document.getElementById('length');
    var length = parseFloat(length_element.value);
	//to check if the input number is positive
	if(length < 0)
	{
		//display error to the user of an incorrent input
		alert('Error: The length ' + length + " is not a positive number, please try again");
		//reloads or refresh page
		location.reload();
		//prevents the continuation of the code
		throw new Error();
	}

	//WIDTH
    var width_element = document.getElementById('width');
    var width = parseFloat(width_element.value);
	//to check if the input number is positive
	if(width < 0)
	{
		//display error to the user of an incorrent input
		alert('Error: The width ' + width + " is not a positive number, please try again");
		//reloads or refresh page
		location.reload();
		//prevents the continuation of the code
		throw new Error();
	}
	
	//AREA
    var area_element = document.getElementById('area');
	//calculations, rounded 2 decimal
	var area = (width * length).toFixed(2);
	//assigning variable element to area-value, GUI display
    area_element.value = area;

	//PERIMETER
	var perimeter_element = document.getElementById('perimeter');
	//calculations, rounded 2 decimal
	var perimeter = ((2 * width) + (2 * length)).toFixed(2);
	//assigning variable element to perimeter-value, GUI display
    perimeter_element.value = perimeter;
	
}