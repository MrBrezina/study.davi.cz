// sequences of triplets

var sequences = [

// pt serif latin: triplet combinations of ['g', 'h', 'm', 'n', 'q', 'r', 'y', 'z'], total: 56
//['pt-serif_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['h', 'm', 'n'], ['h', 'm', 'y'], ['h', 'm', 'z'], ['g', 'h', 'm'], ['h', 'm', 'q'], ['h', 'm', 'r'], ['h', 'n', 'y'], ['h', 'n', 'z'], ['g', 'h', 'n'], ['h', 'n', 'q'], ['h', 'n', 'r'], ['h', 'y', 'z'], ['g', 'h', 'y'], ['h', 'q', 'y'], ['h', 'r', 'y'], ['g', 'h', 'z'], ['h', 'q', 'z'], ['h', 'r', 'z'], ['g', 'h', 'q'], ['g', 'h', 'r'], ['h', 'q', 'r'], ['m', 'n', 'y'], ['m', 'n', 'z'], ['g', 'm', 'n'], ['m', 'n', 'q'], ['m', 'n', 'r'], ['m', 'y', 'z'], ['g', 'm', 'y'], ['m', 'q', 'y'], ['m', 'r', 'y'], ['g', 'm', 'z'], ['m', 'q', 'z'], ['m', 'r', 'z'], ['g', 'm', 'q'], ['g', 'm', 'r'], ['m', 'q', 'r'], ['n', 'y', 'z'], ['g', 'n', 'y'], ['n', 'q', 'y'], ['n', 'r', 'y'], ['g', 'n', 'z'], ['n', 'q', 'z'], ['n', 'r', 'z'], ['g', 'n', 'q'], ['g', 'n', 'r'], ['n', 'q', 'r'], ['g', 'y', 'z'], ['q', 'y', 'z'], ['r', 'y', 'z'], ['g', 'q', 'y'], ['g', 'r', 'y'], ['q', 'r', 'y'], ['g', 'q', 'z'], ['g', 'r', 'z'], ['q', 'r', 'z'], ['g', 'q', 'r']]] ,

// verdana latin: triplet combinations of ['d', 'g', 'h', 'o', 's', 'u', 'w', 'x'], total: 56
['verdana_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['u', 'w', 'x'], ['o', 'u', 'w'], ['g', 'u', 'w'], ['d', 'u', 'w'], ['h', 'u', 'w'], ['s', 'u', 'w'], ['o', 'u', 'x'], ['g', 'u', 'x'], ['d', 'u', 'x'], ['h', 'u', 'x'], ['s', 'u', 'x'], ['g', 'o', 'u'], ['d', 'o', 'u'], ['h', 'o', 'u'], ['o', 's', 'u'], ['d', 'g', 'u'], ['g', 'h', 'u'], ['g', 's', 'u'], ['d', 'h', 'u'], ['d', 's', 'u'], ['h', 's', 'u'], ['o', 'w', 'x'], ['g', 'w', 'x'], ['d', 'w', 'x'], ['h', 'w', 'x'], ['s', 'w', 'x'], ['g', 'o', 'w'], ['d', 'o', 'w'], ['h', 'o', 'w'], ['o', 's', 'w'], ['d', 'g', 'w'], ['g', 'h', 'w'], ['g', 's', 'w'], ['d', 'h', 'w'], ['d', 's', 'w'], ['h', 's', 'w'], ['g', 'o', 'x'], ['d', 'o', 'x'], ['h', 'o', 'x'], ['o', 's', 'x'], ['d', 'g', 'x'], ['g', 'h', 'x'], ['g', 's', 'x'], ['d', 'h', 'x'], ['d', 's', 'x'], ['h', 's', 'x'], ['d', 'g', 'o'], ['g', 'h', 'o'], ['g', 'o', 's'], ['d', 'h', 'o'], ['d', 'o', 's'], ['h', 'o', 's'], ['d', 'g', 'h'], ['d', 'g', 's'], ['g', 'h', 's'], ['d', 'h', 's']]] ,

// pt sans latin: triplet combinations of ['b', 'f', 'i', 'w', 'n', 'p', 'q', 'z'], total: 56
//['pt-sans_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['b', 'p', 'q'], ['b', 'w', 'p'], ['b', 'n', 'p'], ['b', 'f', 'p'], ['b', 'i', 'p'], ['b', 'p', 'z'], ['b', 'w', 'q'], ['b', 'n', 'q'], ['b', 'f', 'q'], ['b', 'i', 'q'], ['b', 'q', 'z'], ['b', 'w', 'n'], ['b', 'f', 'w'], ['b', 'i', 'w'], ['b', 'w', 'z'], ['b', 'f', 'n'], ['b', 'i', 'n'], ['b', 'n', 'z'], ['b', 'f', 'i'], ['b', 'f', 'z'], ['b', 'i', 'z'], ['w', 'p', 'q'], ['n', 'p', 'q'], ['f', 'p', 'q'], ['i', 'p', 'q'], ['p', 'q', 'z'], ['w', 'n', 'p'], ['f', 'w', 'p'], ['i', 'w', 'p'], ['w', 'p', 'z'], ['f', 'n', 'p'], ['i', 'n', 'p'], ['n', 'p', 'z'], ['f', 'i', 'p'], ['f', 'p', 'z'], ['i', 'p', 'z'], ['w', 'n', 'q'], ['f', 'w', 'q'], ['i', 'w', 'q'], ['w', 'q', 'z'], ['f', 'n', 'q'], ['i', 'n', 'q'], ['n', 'q', 'z'], ['f', 'i', 'q'], ['f', 'q', 'z'], ['i', 'q', 'z'], ['f', 'w', 'n'], ['i', 'w', 'n'], ['w', 'n', 'z'], ['f', 'i', 'w'], ['f', 'w', 'z'], ['i', 'w', 'z'], ['f', 'i', 'n'], ['f', 'n', 'z'], ['i', 'n', 'z'], ['f', 'i', 'z']]] ,

// arial latin: triplet combinations of ['a', 'e', 'l', 'p', 's', 't', 'y', 'z'], total: 56
['arial_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['a', 's', 'z'], ['a', 'l', 's'], ['a', 's', 't'], ['a', 'p', 's'], ['a', 'e', 's'], ['a', 's', 'y'], ['l', 's', 'z'], ['s', 't', 'z'], ['p', 's', 'z'], ['e', 's', 'z'], ['s', 'y', 'z'], ['l', 's', 't'], ['l', 'p', 's'], ['e', 'l', 's'], ['l', 's', 'y'], ['p', 's', 't'], ['e', 's', 't'], ['s', 't', 'y'], ['e', 'p', 's'], ['p', 's', 'y'], ['e', 's', 'y'], ['a', 'l', 'z'], ['a', 't', 'z'], ['a', 'p', 'z'], ['a', 'e', 'z'], ['a', 'y', 'z'], ['a', 'l', 't'], ['a', 'l', 'p'], ['a', 'e', 'l'], ['a', 'l', 'y'], ['a', 'p', 't'], ['a', 'e', 't'], ['a', 't', 'y'], ['a', 'e', 'p'], ['a', 'p', 'y'], ['a', 'e', 'y'], ['l', 't', 'z'], ['l', 'p', 'z'], ['e', 'l', 'z'], ['l', 'y', 'z'], ['p', 't', 'z'], ['e', 't', 'z'], ['t', 'y', 'z'], ['e', 'p', 'z'], ['p', 'y', 'z'], ['e', 'y', 'z'], ['l', 'p', 't'], ['e', 'l', 't'], ['l', 't', 'y'], ['e', 'l', 'p'], ['l', 'p', 'y'], ['e', 'l', 'y'], ['e', 'p', 't'], ['p', 't', 'y'], ['e', 't', 'y'], ['e', 'p', 'y']]] ,

// georgia latin: triplet combinations of ['b', 'd', 'i', 'j', 'k', 'l', 'v', 'y'], total: 56
['georgia_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['k', 'v', 'y'], ['i', 'k', 'v'], ['j', 'k', 'v'], ['k', 'l', 'v'], ['b', 'k', 'v'], ['d', 'k', 'v'], ['i', 'k', 'y'], ['j', 'k', 'y'], ['k', 'l', 'y'], ['b', 'k', 'y'], ['d', 'k', 'y'], ['i', 'j', 'k'], ['i', 'k', 'l'], ['b', 'i', 'k'], ['d', 'i', 'k'], ['j', 'k', 'l'], ['b', 'j', 'k'], ['d', 'j', 'k'], ['b', 'k', 'l'], ['d', 'k', 'l'], ['b', 'd', 'k'], ['i', 'v', 'y'], ['j', 'v', 'y'], ['l', 'v', 'y'], ['b', 'v', 'y'], ['d', 'v', 'y'], ['i', 'j', 'v'], ['i', 'l', 'v'], ['b', 'i', 'v'], ['d', 'i', 'v'], ['j', 'l', 'v'], ['b', 'j', 'v'], ['d', 'j', 'v'], ['b', 'l', 'v'], ['d', 'l', 'v'], ['b', 'd', 'v'], ['i', 'j', 'y'], ['i', 'l', 'y'], ['b', 'i', 'y'], ['d', 'i', 'y'], ['j', 'l', 'y'], ['b', 'j', 'y'], ['d', 'j', 'y'], ['b', 'l', 'y'], ['d', 'l', 'y'], ['b', 'd', 'y'], ['i', 'j', 'l'], ['b', 'i', 'j'], ['d', 'i', 'j'], ['b', 'i', 'l'], ['d', 'i', 'l'], ['b', 'd', 'i'], ['b', 'j', 'l'], ['d', 'j', 'l'], ['b', 'd', 'j'], ['b', 'd', 'l']]] ,

// courier latin: triplet combinations of ['c', 'e', 'f', 'h', 'k', 'o', 'w', 'y'], total: 56
['courier_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['c', 'e', 'o'], ['c', 'e', 'k'], ['c', 'e', 'y'], ['c', 'e', 'h'], ['c', 'e', 'w'], ['c', 'e', 'f'], ['c', 'k', 'o'], ['c', 'o', 'y'], ['c', 'h', 'o'], ['c', 'o', 'w'], ['c', 'f', 'o'], ['c', 'k', 'y'], ['c', 'h', 'k'], ['c', 'k', 'w'], ['c', 'f', 'k'], ['c', 'h', 'y'], ['c', 'w', 'y'], ['c', 'f', 'y'], ['c', 'h', 'w'], ['c', 'f', 'h'], ['c', 'f', 'w'], ['e', 'k', 'o'], ['e', 'o', 'y'], ['e', 'h', 'o'], ['e', 'o', 'w'], ['e', 'f', 'o'], ['e', 'k', 'y'], ['e', 'h', 'k'], ['e', 'k', 'w'], ['e', 'f', 'k'], ['e', 'h', 'y'], ['e', 'w', 'y'], ['e', 'f', 'y'], ['e', 'h', 'w'], ['e', 'f', 'h'], ['e', 'f', 'w'], ['k', 'o', 'y'], ['h', 'k', 'o'], ['k', 'o', 'w'], ['f', 'k', 'o'], ['h', 'o', 'y'], ['o', 'w', 'y'], ['f', 'o', 'y'], ['h', 'o', 'w'], ['f', 'h', 'o'], ['f', 'o', 'w'], ['h', 'k', 'y'], ['k', 'w', 'y'], ['f', 'k', 'y'], ['h', 'k', 'w'], ['f', 'h', 'k'], ['f', 'k', 'w'], ['h', 'w', 'y'], ['f', 'h', 'y'], ['f', 'w', 'y'], ['f', 'h', 'w']]] ,

// century schoolbook latin: triplet combinations of ['d', 'i', 'j', 'o', 'p', 'r', 'v', 'x'], total: 56
['century-schoolbook_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['i', 'j', 'r'], ['i', 'j', 'o'], ['i', 'j', 'p'], ['d', 'i', 'j'], ['i', 'j', 'x'], ['i', 'j', 'v'], ['j', 'o', 'r'], ['j', 'p', 'r'], ['d', 'j', 'r'], ['j', 'r', 'x'], ['j', 'r', 'v'], ['j', 'o', 'p'], ['d', 'j', 'o'], ['j', 'o', 'x'], ['j', 'o', 'v'], ['d', 'j', 'p'], ['j', 'p', 'x'], ['j', 'p', 'v'], ['d', 'j', 'x'], ['d', 'j', 'v'], ['j', 'v', 'x'], ['i', 'o', 'r'], ['i', 'p', 'r'], ['d', 'i', 'r'], ['i', 'r', 'x'], ['i', 'r', 'v'], ['i', 'o', 'p'], ['d', 'i', 'o'], ['i', 'o', 'x'], ['i', 'o', 'v'], ['d', 'i', 'p'], ['i', 'p', 'x'], ['i', 'p', 'v'], ['d', 'i', 'x'], ['d', 'i', 'v'], ['i', 'v', 'x'], ['o', 'p', 'r'], ['d', 'o', 'r'], ['o', 'r', 'x'], ['o', 'r', 'v'], ['d', 'p', 'r'], ['p', 'r', 'x'], ['p', 'r', 'v'], ['d', 'r', 'x'], ['d', 'r', 'v'], ['r', 'v', 'x'], ['d', 'o', 'p'], ['o', 'p', 'x'], ['o', 'p', 'v'], ['d', 'o', 'x'], ['d', 'o', 'v'], ['o', 'v', 'x'], ['d', 'p', 'x'], ['d', 'p', 'v'], ['p', 'v', 'x'], ['d', 'v', 'x']]] ,

// times new roman latin: triplet combinations of ['a', 'c', 'f', 'l', 'm', 'n', 't', 'u'], total: 56
['times-new-roman_latin', 'https://www.getform.org/f/bbf7535d-b96d-4a02-a459-a751f9a7335f', [['f', 'l', 't'], ['f', 'l', 'm'], ['f', 'l', 'n'], ['c', 'f', 'l'], ['a', 'f', 'l'], ['f', 'l', 'u'], ['l', 'm', 't'], ['l', 'n', 't'], ['c', 'l', 't'], ['a', 'l', 't'], ['l', 't', 'u'], ['l', 'm', 'n'], ['c', 'l', 'm'], ['a', 'l', 'm'], ['l', 'm', 'u'], ['c', 'l', 'n'], ['a', 'l', 'n'], ['l', 'n', 'u'], ['a', 'c', 'l'], ['c', 'l', 'u'], ['a', 'l', 'u'], ['f', 'm', 't'], ['f', 'n', 't'], ['c', 'f', 't'], ['a', 'f', 't'], ['f', 't', 'u'], ['f', 'm', 'n'], ['c', 'f', 'm'], ['a', 'f', 'm'], ['f', 'm', 'u'], ['c', 'f', 'n'], ['a', 'f', 'n'], ['f', 'n', 'u'], ['a', 'c', 'f'], ['c', 'f', 'u'], ['a', 'f', 'u'], ['m', 'n', 't'], ['c', 'm', 't'], ['a', 'm', 't'], ['m', 't', 'u'], ['c', 'n', 't'], ['a', 'n', 't'], ['n', 't', 'u'], ['a', 'c', 't'], ['c', 't', 'u'], ['a', 't', 'u'], ['c', 'm', 'n'], ['a', 'm', 'n'], ['m', 'n', 'u'], ['a', 'c', 'm'], ['c', 'm', 'u'], ['a', 'm', 'u'], ['a', 'c', 'n'], ['c', 'n', 'u'], ['a', 'n', 'u'], ['a', 'c', 'u']]] ,
];