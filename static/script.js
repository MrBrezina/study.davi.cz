// sequences of triplets

var sequences = [
["pt-serif", [
  ["a","b","c"],
  ["a","h","v"],
  ["x","y","z"]
  ]],
["pt-sans", [
  ["a","b","c"],
  ["a","h","v"],
  ["x","y","z"]
  ]]
];
var tripletIndex = 0;
var totalTriplets = 0;
var totalSequences;
totalSequences = sequences.length;
sequences.forEach(function (item, index, array) {
  totalTriplets += item[1].length;
});

// shuffle array in place

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

shuffle(sequences);
sequences.forEach(function (item, index, array) {
  typeface = item[0];
  triplets = item[1];

  shuffle(triplets);
  // create sequence intro fieldset
  $("#final").before('<fieldset id="' + typeface + '" class="text"></fieldset>');
  $("#"+typeface).html($(".sequence-intro").html());
  $("#"+typeface+" h2").html("Letter-groups sequence "+(index+1)+"/"+totalSequences)
  triplets.forEach(function (triplet, index, array) {
    tripletID =  typeface + "_" + triplet[0] + "-" + triplet[1] + "-" + triplet[2];
    shuffle(triplet);
    // create triplet fieldset
    $("#final").before('<fieldset class="triplet" id="fs_' + tripletID + '"><h2 class="fs-title">Click on the most different letter shape</h2></fieldset>');
    fs = $("#fs_"+tripletID)
    // add letters
    triplet.forEach(function (letter, index, array) {
      letterSVGURL = "static/" + typeface + "_" + letter + ".svg";
      letterID =  tripletID + "_" + letter;
      fs.append('<img src="' +  letterSVGURL + '" alt="' + letter + '" class="next letter-button">');
    });
    fs.append('<h4>Progress</h4><div class="bar"><div class="progressbar" style="width:'+Math.floor(tripletIndex/totalTriplets*100)+'%"></div></div>');
    fs.append('<input type="hidden" name="'+tripletID+'" id="'+tripletID+'" value="" class="hidden">');
    tripletIndex += 1;
  });
});

// passing through the fieldsets

var current_fs, next_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

function nextSection() {
  if (animating) return false;
  if ($(this).hasClass("inactive-button")) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  if (current_fs.attr("class") == "triplet") {
    letter = $(this).attr("alt");
    current_fs.children(".hidden").val(letter);
  }
  /*if (current_fs.attr("class") == "validate") {
    if (!validate()) return false;
  }*/
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
  // submit when clicking on a button in the penultimate group
  if (next_fs.attr("id") != "final") {
    return false;
  } else {
    $("form").submit();
  }
}

function validate() {
  var form = $("form");
  button = $(this).siblings(".next");
  form.validate();
  if(form.valid()) {
    button.removeClass("inactive-button");
  } else {
    button.addClass("inactive-button");
  }
}

jQuery.validator.setDefaults({
  errorPlacement: function(error, element) {
    element.before(error);
  }
});

$(".next").click(nextSection);
$("fieldset.validate input.required").change(validate);

