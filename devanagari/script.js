// function to shuffle array in place
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

// randomize the order of sequences
shuffle(sequences);

// select just one sequence (this was not used in the first run)
sequences = [sequences[0]]

var tripletIndex = 0;
var totalTriplets = 0;
var totalSequences;
sequences.forEach(function (item, index, array) {
  totalTriplets += item[1].length;
});
totalSequences = sequences.length;

sequences.forEach(function (item, index, array) {
  typeface = item[0];
  form_url = item[1];
  triplets = item[2];
  naturalIndex = index + 1;
  if (index > 0) {
    another = "ओर "
  } else {
    another = ""
  }

  // randomize the order of triplets
  shuffle(triplets);

  // set url of the form to submit to
  $("#msform").attr("action", form_url)

  // create sequence intro fieldset
  // add hidden input to record the order of typeface sequences
  $("#final").before('<fieldset id="' + typeface + '" class="text"></fieldset>');
  if (totalSequences != 1) {
    $("#"+typeface).prepend('<h2>अक्षर-समूह अनुक्रम ' + naturalIndex + '/' + totalSequences + '</h2>');
  } else {
    $("#"+typeface).prepend('<h2>अक्षर-समूह अनुक्रम</h2>');
  }
  $("#"+typeface).append('<p>इस भाग में, तीन अक्षरों के '+another+triplets.length+' समूह आपको एक एक करके दिखाया जाएगा। प्रत्येक समूह के लिए, जल्द से जल्द, सबसे अलग अक्षर पर क्लिक करें। केवल अक्षर के आकार के आधार पर चुने । अक्षर या अक्षर समूहों के अर्थ पर विचार न करें। तय करना मुश्किल होने पर कृपया अपना सर्वश्रेष्ठ जवाब दे । इसमें कोई गलत जवाब हैं।</p>');
  $("#"+typeface).append('<input type="hidden" name="Order (' + typeface + ')" value="' + naturalIndex + '">');
  $("#"+typeface).append('<input type="button" name="next" class="next action-button" value="प्रारंभ">');

  triplets.forEach(function (triplet, index, array) {
    tripletID =  typeface + "_" + triplet[0] + "-" + triplet[1] + "-" + triplet[2];
    // randomize the order of characters
    shuffle(triplet);
    // create triplet fieldset
    $("#final").before('<fieldset class="triplet" id="fs_' + tripletID + '"><h2 class="fs-title">त्रिगुट में से सबसे भिन्न अक्षर को चुने</h2></fieldset>');
    fs = $("#fs_"+tripletID)
    // add letters
    triplet.forEach(function (letter, index, array) {
      letterSVGURL = "characters/" + typeface + "_" + letter + ".svg";
      letterID =  tripletID + "_" + letter;
      fs.append('<img src="' +  letterSVGURL + '" alt="' + letter + '" class="next letter-button">');
    });
    fs.append('<h4>प्रगति</h4><div class="bar"><div class="progressbar" style="width:'+Math.floor(tripletIndex/totalTriplets*100)+'%"></div></div>');
    fs.append('<input type="hidden" name="'+tripletID+'" id="'+tripletID+'" value="" class="hidden">');
    tripletIndex += 1;
  });
});

// passing through the fieldsets

var current_fs, next_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var form = $("form");

function nextSection() {
  if (animating) return false;
  form.validate();
  if(!form.valid()) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  if (current_fs.attr("class") == "triplet") {
    letter = $(this).attr("alt");
    current_fs.children(".hidden").val(letter);
  }
  
  if (next_fs.attr("id") == "final") {
    // submit when clicking on a button in the penultimate group
    $("form").submit();
  } else {
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
      }, {
      step: function(now, mx) {
        opacity = 1 - now;
        current_fs.css("position", "absolute");
        next_fs.css("opacity", opacity);
      },
      duration: 400,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
    });
    return false;
  }
}

jQuery.validator.setDefaults({
  errorPlacement: function(error, element) {
    element.before(error);
  }
});

jQuery.extend(jQuery.validator.messages, {
    required: "यह क्षेत्र आवश्यक है।",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

$(".next").click(nextSection);

