// sequences of triplets

var sequences = [
// PT Serif: triplet combinations of ['h', 'n', 'm', 'z', 'g', 'q', 'r', 'y']
['pt-serif', [['h', 'm', 'n'], ['h', 'n', 'z'], ['g', 'h', 'n'], ['h', 'n', 'q'], ['h', 'n', 'r'], ['h', 'n', 'y'], ['h', 'm', 'z'], ['g', 'h', 'm'], ['h', 'm', 'q'], ['h', 'm', 'r'], ['h', 'm', 'y'], ['g', 'h', 'z'], ['h', 'q', 'z'], ['h', 'r', 'z'], ['h', 'y', 'z'], ['g', 'h', 'q'], ['g', 'h', 'r'], ['g', 'h', 'y'], ['h', 'q', 'r'], ['h', 'q', 'y'], ['h', 'r', 'y'], ['m', 'n', 'z'], ['g', 'm', 'n'], ['m', 'n', 'q'], ['m', 'n', 'r'], ['m', 'n', 'y'], ['g', 'n', 'z'], ['n', 'q', 'z'], ['n', 'r', 'z'], ['n', 'y', 'z'], ['g', 'n', 'q'], ['g', 'n', 'r'], ['g', 'n', 'y'], ['n', 'q', 'r'], ['n', 'q', 'y'], ['n', 'r', 'y'], ['g', 'm', 'z'], ['m', 'q', 'z'], ['m', 'r', 'z'], ['m', 'y', 'z'], ['g', 'm', 'q'], ['g', 'm', 'r'], ['g', 'm', 'y'], ['m', 'q', 'r'], ['m', 'q', 'y'], ['m', 'r', 'y'], ['g', 'q', 'z'], ['g', 'r', 'z'], ['g', 'y', 'z'], ['q', 'r', 'z'], ['q', 'y', 'z'], ['r', 'y', 'z'], ['g', 'q', 'r'], ['g', 'q', 'y'], ['g', 'r', 'y'], ['q', 'r', 'y']]]
,
// PT Sans: triplet combinations of ['q', 'p', 'b', 'z', 'w', 'f', 'n', 'i']
['pt-sans', [['b', 'p', 'q'], ['p', 'q', 'z'], ['p', 'q', 'w'], ['f', 'p', 'q'], ['n', 'p', 'q'], ['i', 'p', 'q'], ['b', 'q', 'z'], ['b', 'q', 'w'], ['b', 'f', 'q'], ['b', 'n', 'q'], ['b', 'i', 'q'], ['q', 'w', 'z'], ['f', 'q', 'z'], ['n', 'q', 'z'], ['i', 'q', 'z'], ['f', 'q', 'w'], ['n', 'q', 'w'], ['i', 'q', 'w'], ['f', 'n', 'q'], ['f', 'i', 'q'], ['i', 'n', 'q'], ['b', 'p', 'z'], ['b', 'p', 'w'], ['b', 'f', 'p'], ['b', 'n', 'p'], ['b', 'i', 'p'], ['p', 'w', 'z'], ['f', 'p', 'z'], ['n', 'p', 'z'], ['i', 'p', 'z'], ['f', 'p', 'w'], ['n', 'p', 'w'], ['i', 'p', 'w'], ['f', 'n', 'p'], ['f', 'i', 'p'], ['i', 'n', 'p'], ['b', 'w', 'z'], ['b', 'f', 'z'], ['b', 'n', 'z'], ['b', 'i', 'z'], ['b', 'f', 'w'], ['b', 'n', 'w'], ['b', 'i', 'w'], ['b', 'f', 'n'], ['b', 'f', 'i'], ['b', 'i', 'n'], ['f', 'w', 'z'], ['n', 'w', 'z'], ['i', 'w', 'z'], ['f', 'n', 'z'], ['f', 'i', 'z'], ['i', 'n', 'z'], ['f', 'n', 'w'], ['f', 'i', 'w'], ['i', 'n', 'w'], ['f', 'i', 'n']]]
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
  naturalIndex = index + 1;
  if (index > 0) {
    another = "another "
  } else {
    another = ""
  }

  shuffle(triplets);

  // create sequence intro fieldset
  // add hidden input to record the order of typeface sequences
  $("#final").before('<fieldset id="' + typeface + '" class="text"></fieldset>');
  $("#"+typeface).prepend('<h2>Letter-groups sequence ' + naturalIndex + '/' + totalSequences + '</h2>');
  $("#"+typeface).append('<p>In this part, '+another+triplets.length+' groups of three letters will be shown one by one. For each group, quickly click on the most different letter. When doing so, please consider only the shapes, not the meaning of the letters or letter groups.</p>');
  $("#"+typeface).append('<input type="hidden" name="Order (' + typeface + ')" value="' + naturalIndex + '">');
  $("#"+typeface).append('<input type="button" name="next" class="next action-button" value="Start">');

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

$(".next").click(nextSection);

