$(document).ready(function(){
  var addButtonControl = $('#add-control-button');
  var addSliderControl = $('#add-control-slider');
  var addSelectControl = $('#add-control-select');
  var deviceTypeForm = $('#device-type-form');
  var submitButton = $('#submit-button');
  var deviceTypeName = $('#device-type-name');
  var deviceTypeAPI = $('#device-type-api')

  var amountOfButtons = 0;
  var amountOfSliders = 0;
  var amountOfSelects = 0;

  var controlsNameStore = [];
  var controlObject = [];


  var buttonBrain = function () {
    amountOfButtons++;
    var thisButtonName = "button-"+amountOfButtons; //pre-fix before names
    var thisButtonDiv = $('<div>');
    var buttonSetupHeading = $('<h5>');
    buttonSetupHeading.html(thisButtonName);
    thisButtonDiv.append(buttonSetupHeading);
    controlsNameStore.push(thisButtonName);


    //name label
    var thisButtonNameLabel = $('<label>');
    thisButtonNameLabel.attr('for', thisButtonName+"-name");
    thisButtonNameLabel.html('Name: ')

    //name input type
    var thisButtonNameInput = $('<input>');
    thisButtonNameInput.attr('type', 'text');
    thisButtonNameInput.attr('placeholder', 'type button name here');
    thisButtonNameInput.attr('id', thisButtonName+"-name");

    //HTTP verb label
    var thisButtonHTTPVerbLabel = $('<label>');
    thisButtonHTTPVerbLabel.attr('for', thisButtonName+"-http-verb");
    thisButtonHTTPVerbLabel.html('HTTP Verb: ')

    //HTTP verb input type
    var thisButtonHTTPVerbInput = $('<input>');
    thisButtonHTTPVerbInput.attr('type', 'text');
    thisButtonHTTPVerbInput.attr('placeholder', 'type HTTP verb here');
    thisButtonHTTPVerbInput.attr('id', thisButtonName+"-http-verb");

    //http url label
    var thisButtonHTTPURLLabel = $('<label>');
    thisButtonHTTPURLLabel.attr('for', thisButtonName+"-http-url");
    thisButtonHTTPURLLabel.html('HTTP URL: ')

    //http url input type
    var thisButtonHTTPURLInput = $('<input>');
    thisButtonHTTPURLInput.attr('type', 'text');
    thisButtonHTTPURLInput.attr('placeholder', 'type HTTP url here');
    thisButtonHTTPURLInput.attr('id', thisButtonName+"-http-url");

    //put it all together
    thisButtonDiv.append(thisButtonNameLabel);
    thisButtonDiv.append(thisButtonNameInput);
    thisButtonDiv.append(thisButtonHTTPVerbLabel);
    thisButtonDiv.append(thisButtonHTTPVerbInput);
    thisButtonDiv.append(thisButtonHTTPURLLabel);
    thisButtonDiv.append(thisButtonHTTPURLInput);

    deviceTypeForm.append(thisButtonDiv);
  }

  var sliderBrain = function () {
    // deviceTypeForm.append(inputField);
  }
  var selectBrain = function () {
    // deviceTypeForm.append(inputField);
  }

  var thisObjectName = '';
  var thisObjectAPI = '';

  var createControlsObject = function() {
    for (var x = 0; x < controlsNameStore.length; x++) {
      thisObjectName = deviceTypeName.val();
      thisObjectAPI = deviceTypeAPI.val()
      var controlName = controlsNameStore[x];
      nameOfButton = $('#'+controlName+'-name').val();
      verbOfButton = $('#'+controlName+'-http-verb').val();
      urlOfButton = $('#'+controlName+'-http-url').val();
      var newItem = {
        type: 'button',
        name: nameOfButton,
        verb: verbOfButton,
        url: urlOfButton,
      };
      controlObject.push(newItem);
      console.log(thisObjectName);
    }
  };

  var data= {
    name: thisObjectName,
    api: thisObjectAPI,
    controls: controlObject,
  }

  var addDeviceType = function(event) {
    event.preventDefault();
    createControlsObject();
    $.ajax({
      url: '/device_types/new',
      dataType: 'JSON',
      contentType: 'application/json; charset=UTF-8',
      type: 'POST',
      data: JSON.stringify(data),
    });
    window.location.replace('/device_types')
  };


  addButtonControl.on('click', buttonBrain);
  addSliderControl.on('click', sliderBrain);
  addSelectControl.on('click', selectBrain);
  submitButton.on('click', addDeviceType);
});
