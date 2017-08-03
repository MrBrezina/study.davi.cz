// sequences of triplets

var sequences = [

// courier new cyrillic: triplet combinations of ['de', 'el', 'es', 'ka', 'o', 'tse', 'ya', 'yu'], total: 56
['courier-new_cyrillic', 'https://www.getform.org/f/df488d48-8c0f-45d8-b4b5-a106cd75dc17', [['es', 'o', 'yu'], ['de', 'o', 'yu'], ['el', 'o', 'yu'], ['o', 'tse', 'yu'], ['ka', 'o', 'yu'], ['o', 'ya', 'yu'], ['de', 'es', 'yu'], ['el', 'es', 'yu'], ['es', 'tse', 'yu'], ['es', 'ka', 'yu'], ['es', 'ya', 'yu'], ['de', 'el', 'yu'], ['de', 'tse', 'yu'], ['de', 'ka', 'yu'], ['de', 'ya', 'yu'], ['el', 'tse', 'yu'], ['el', 'ka', 'yu'], ['el', 'ya', 'yu'], ['ka', 'tse', 'yu'], ['tse', 'ya', 'yu'], ['ka', 'ya', 'yu'], ['de', 'es', 'o'], ['el', 'es', 'o'], ['es', 'o', 'tse'], ['es', 'ka', 'o'], ['es', 'o', 'ya'], ['de', 'el', 'o'], ['de', 'o', 'tse'], ['de', 'ka', 'o'], ['de', 'o', 'ya'], ['el', 'o', 'tse'], ['el', 'ka', 'o'], ['el', 'o', 'ya'], ['ka', 'o', 'tse'], ['o', 'tse', 'ya'], ['ka', 'o', 'ya'], ['de', 'el', 'es'], ['de', 'es', 'tse'], ['de', 'es', 'ka'], ['de', 'es', 'ya'], ['el', 'es', 'tse'], ['el', 'es', 'ka'], ['el', 'es', 'ya'], ['es', 'ka', 'tse'], ['es', 'tse', 'ya'], ['es', 'ka', 'ya'], ['de', 'el', 'tse'], ['de', 'el', 'ka'], ['de', 'el', 'ya'], ['de', 'ka', 'tse'], ['de', 'tse', 'ya'], ['de', 'ka', 'ya'], ['el', 'ka', 'tse'], ['el', 'tse', 'ya'], ['el', 'ka', 'ya'], ['ka', 'tse', 'ya']]] ,

// verdana cyrillic: triplet combinations of ['a', 'che', 'ha', 'hard-sign', 'i', 'soft-sign', 've', 'yeru'], total: 56
['verdana_cyrillic', 'https://www.getform.org/f/0a2e2cc1-d965-4195-b26f-718ff2e37707', [['hard-sign', 'soft-sign', 'yeru'], ['a', 'hard-sign', 'yeru'], ['che', 'hard-sign', 'yeru'], ['hard-sign', 'i', 'yeru'], ['ha', 'hard-sign', 'yeru'], ['hard-sign', 've', 'yeru'], ['a', 'hard-sign', 'soft-sign'], ['che', 'hard-sign', 'soft-sign'], ['hard-sign', 'i', 'soft-sign'], ['ha', 'hard-sign', 'soft-sign'], ['hard-sign', 'soft-sign', 've'], ['a', 'che', 'hard-sign'], ['a', 'hard-sign', 'i'], ['a', 'ha', 'hard-sign'], ['a', 'hard-sign', 've'], ['che', 'hard-sign', 'i'], ['che', 'ha', 'hard-sign'], ['che', 'hard-sign', 've'], ['ha', 'hard-sign', 'i'], ['hard-sign', 'i', 've'], ['ha', 'hard-sign', 've'], ['a', 'soft-sign', 'yeru'], ['che', 'soft-sign', 'yeru'], ['i', 'soft-sign', 'yeru'], ['ha', 'soft-sign', 'yeru'], ['soft-sign', 've', 'yeru'], ['a', 'che', 'yeru'], ['a', 'i', 'yeru'], ['a', 'ha', 'yeru'], ['a', 've', 'yeru'], ['che', 'i', 'yeru'], ['che', 'ha', 'yeru'], ['che', 've', 'yeru'], ['ha', 'i', 'yeru'], ['i', 've', 'yeru'], ['ha', 've', 'yeru'], ['a', 'che', 'soft-sign'], ['a', 'i', 'soft-sign'], ['a', 'ha', 'soft-sign'], ['a', 'soft-sign', 've'], ['che', 'i', 'soft-sign'], ['che', 'ha', 'soft-sign'], ['che', 'soft-sign', 've'], ['ha', 'i', 'soft-sign'], ['i', 'soft-sign', 've'], ['ha', 'soft-sign', 've'], ['a', 'che', 'i'], ['a', 'che', 'ha'], ['a', 'che', 've'], ['a', 'ha', 'i'], ['a', 'i', 've'], ['a', 'ha', 've'], ['che', 'ha', 'i'], ['che', 'i', 've'], ['che', 'ha', 've'], ['ha', 'i', 've']]] ,

// pt serif cyrillic: triplet combinations of ['e', 'el', 'er', 'ha', 'te', 'u', 've', 'ze'], total: 56
['pt-serif_cyrillic', 'https://getform.org/f/2212f4af-2821-4557-938a-190799a27558', [['e', 've', 'ze'], ['ha', 've', 'ze'], ['te', 've', 'ze'], ['er', 've', 'ze'], ['el', 've', 'ze'], ['u', 've', 'ze'], ['e', 'ha', 've'], ['e', 'te', 've'], ['e', 'er', 've'], ['e', 'el', 've'], ['e', 'u', 've'], ['ha', 'te', 've'], ['er', 'ha', 've'], ['el', 'ha', 've'], ['ha', 'u', 've'], ['er', 'te', 've'], ['el', 'te', 've'], ['te', 'u', 've'], ['el', 'er', 've'], ['er', 'u', 've'], ['el', 'u', 've'], ['e', 'ha', 'ze'], ['e', 'te', 'ze'], ['e', 'er', 'ze'], ['e', 'el', 'ze'], ['e', 'u', 'ze'], ['ha', 'te', 'ze'], ['er', 'ha', 'ze'], ['el', 'ha', 'ze'], ['ha', 'u', 'ze'], ['er', 'te', 'ze'], ['el', 'te', 'ze'], ['te', 'u', 'ze'], ['el', 'er', 'ze'], ['er', 'u', 'ze'], ['el', 'u', 'ze'], ['e', 'ha', 'te'], ['e', 'er', 'ha'], ['e', 'el', 'ha'], ['e', 'ha', 'u'], ['e', 'er', 'te'], ['e', 'el', 'te'], ['e', 'te', 'u'], ['e', 'el', 'er'], ['e', 'er', 'u'], ['e', 'el', 'u'], ['er', 'ha', 'te'], ['el', 'ha', 'te'], ['ha', 'te', 'u'], ['el', 'er', 'ha'], ['er', 'ha', 'u'], ['el', 'ha', 'u'], ['el', 'er', 'te'], ['er', 'te', 'u'], ['el', 'te', 'u'], ['el', 'er', 'u']]] ,

// arial cyrillic: triplet combinations of ['ef', 'em', 'er', 'es', 'short-i', 'u', 'yu', 'zhe'], total: 56
['arial_cyrillic', 'https://www.getform.org/f/603fd18c-07cc-4b7c-9365-f12b3f9507fc', [['ef', 'er', 'u'], ['er', 'u', 'zhe'], ['er', 'u', 'yu'], ['er', 'short-i', 'u'], ['er', 'es', 'u'], ['em', 'er', 'u'], ['ef', 'er', 'zhe'], ['ef', 'er', 'yu'], ['ef', 'er', 'short-i'], ['ef', 'er', 'es'], ['ef', 'em', 'er'], ['er', 'yu', 'zhe'], ['er', 'short-i', 'zhe'], ['er', 'es', 'zhe'], ['em', 'er', 'zhe'], ['er', 'short-i', 'yu'], ['er', 'es', 'yu'], ['em', 'er', 'yu'], ['er', 'es', 'short-i'], ['em', 'er', 'short-i'], ['em', 'er', 'es'], ['ef', 'u', 'zhe'], ['ef', 'u', 'yu'], ['ef', 'short-i', 'u'], ['ef', 'es', 'u'], ['ef', 'em', 'u'], ['u', 'yu', 'zhe'], ['short-i', 'u', 'zhe'], ['es', 'u', 'zhe'], ['em', 'u', 'zhe'], ['short-i', 'u', 'yu'], ['es', 'u', 'yu'], ['em', 'u', 'yu'], ['es', 'short-i', 'u'], ['em', 'short-i', 'u'], ['em', 'es', 'u'], ['ef', 'yu', 'zhe'], ['ef', 'short-i', 'zhe'], ['ef', 'es', 'zhe'], ['ef', 'em', 'zhe'], ['ef', 'short-i', 'yu'], ['ef', 'es', 'yu'], ['ef', 'em', 'yu'], ['ef', 'es', 'short-i'], ['ef', 'em', 'short-i'], ['ef', 'em', 'es'], ['short-i', 'yu', 'zhe'], ['es', 'yu', 'zhe'], ['em', 'yu', 'zhe'], ['es', 'short-i', 'zhe'], ['em', 'short-i', 'zhe'], ['em', 'es', 'zhe'], ['es', 'short-i', 'yu'], ['em', 'short-i', 'yu'], ['em', 'es', 'yu'], ['em', 'es', 'short-i']]] ,

// pt sans cyrillic: triplet combinations of ['e', 'ghe', 'ha', 'ie', 'o', 'pe', 'shcha', 'te'], total: 56
['pt-sans_cyrillic', 'https://getform.org/f/1a7ac895-ac9e-4429-93a8-0141ef413775', [['ghe', 'pe', 'te'], ['o', 'pe', 'te'], ['ha', 'pe', 'te'], ['pe', 'shcha', 'te'], ['ie', 'pe', 'te'], ['e', 'pe', 'te'], ['ghe', 'o', 'pe'], ['ghe', 'ha', 'pe'], ['ghe', 'pe', 'shcha'], ['ghe', 'ie', 'pe'], ['e', 'ghe', 'pe'], ['ha', 'o', 'pe'], ['o', 'pe', 'shcha'], ['ie', 'o', 'pe'], ['e', 'o', 'pe'], ['ha', 'pe', 'shcha'], ['ha', 'ie', 'pe'], ['e', 'ha', 'pe'], ['ie', 'pe', 'shcha'], ['e', 'pe', 'shcha'], ['e', 'ie', 'pe'], ['ghe', 'o', 'te'], ['ghe', 'ha', 'te'], ['ghe', 'shcha', 'te'], ['ghe', 'ie', 'te'], ['e', 'ghe', 'te'], ['ha', 'o', 'te'], ['o', 'shcha', 'te'], ['ie', 'o', 'te'], ['e', 'o', 'te'], ['ha', 'shcha', 'te'], ['ha', 'ie', 'te'], ['e', 'ha', 'te'], ['ie', 'shcha', 'te'], ['e', 'shcha', 'te'], ['e', 'ie', 'te'], ['ghe', 'ha', 'o'], ['ghe', 'o', 'shcha'], ['ghe', 'ie', 'o'], ['e', 'ghe', 'o'], ['ghe', 'ha', 'shcha'], ['ghe', 'ha', 'ie'], ['e', 'ghe', 'ha'], ['ghe', 'ie', 'shcha'], ['e', 'ghe', 'shcha'], ['e', 'ghe', 'ie'], ['ha', 'o', 'shcha'], ['ha', 'ie', 'o'], ['e', 'ha', 'o'], ['ie', 'o', 'shcha'], ['e', 'o', 'shcha'], ['e', 'ie', 'o'], ['ha', 'ie', 'shcha'], ['e', 'ha', 'shcha'], ['e', 'ha', 'ie'], ['e', 'ie', 'shcha']]] ,

// georgia cyrillic: triplet combinations of ['be', 'che', 'ef', 'em', 'en', 'i', 'ie', 'ze'], total: 56
['georgia_cyrillic', 'https://www.getform.org/f/3cdf0dc6-451d-451e-98cd-50a47186730c', [['em', 'en', 'i'], ['ef', 'em', 'i'], ['em', 'i', 'ze'], ['che', 'em', 'i'], ['be', 'em', 'i'], ['em', 'i', 'ie'], ['ef', 'en', 'i'], ['en', 'i', 'ze'], ['che', 'en', 'i'], ['be', 'en', 'i'], ['en', 'i', 'ie'], ['ef', 'i', 'ze'], ['che', 'ef', 'i'], ['be', 'ef', 'i'], ['ef', 'i', 'ie'], ['che', 'i', 'ze'], ['be', 'i', 'ze'], ['i', 'ie', 'ze'], ['be', 'che', 'i'], ['che', 'i', 'ie'], ['be', 'i', 'ie'], ['ef', 'em', 'en'], ['em', 'en', 'ze'], ['che', 'em', 'en'], ['be', 'em', 'en'], ['em', 'en', 'ie'], ['ef', 'em', 'ze'], ['che', 'ef', 'em'], ['be', 'ef', 'em'], ['ef', 'em', 'ie'], ['che', 'em', 'ze'], ['be', 'em', 'ze'], ['em', 'ie', 'ze'], ['be', 'che', 'em'], ['che', 'em', 'ie'], ['be', 'em', 'ie'], ['ef', 'en', 'ze'], ['che', 'ef', 'en'], ['be', 'ef', 'en'], ['ef', 'en', 'ie'], ['che', 'en', 'ze'], ['be', 'en', 'ze'], ['en', 'ie', 'ze'], ['be', 'che', 'en'], ['che', 'en', 'ie'], ['be', 'en', 'ie'], ['che', 'ef', 'ze'], ['be', 'ef', 'ze'], ['ef', 'ie', 'ze'], ['be', 'che', 'ef'], ['che', 'ef', 'ie'], ['be', 'ef', 'ie'], ['be', 'che', 'ze'], ['che', 'ie', 'ze'], ['be', 'ie', 'ze'], ['be', 'che', 'ie']]] ,

// times new roman cyrillic: triplet combinations of ['a', 'be', 'hard-sign', 'io', 'sha', 'shcha', 'short-i', 'tse'], total: 56
['times-new-roman_cyrillic', 'https://getform.org/f/fed98d88-424d-471b-89bf-e85a69b103c8', [['sha', 'shcha', 'tse'], ['be', 'sha', 'shcha'], ['hard-sign', 'sha', 'shcha'], ['a', 'sha', 'shcha'], ['sha', 'shcha', 'short-i'], ['io', 'sha', 'shcha'], ['be', 'sha', 'tse'], ['hard-sign', 'sha', 'tse'], ['a', 'sha', 'tse'], ['sha', 'short-i', 'tse'], ['io', 'sha', 'tse'], ['be', 'hard-sign', 'sha'], ['a', 'be', 'sha'], ['be', 'sha', 'short-i'], ['be', 'io', 'sha'], ['a', 'hard-sign', 'sha'], ['hard-sign', 'sha', 'short-i'], ['hard-sign', 'io', 'sha'], ['a', 'sha', 'short-i'], ['a', 'io', 'sha'], ['io', 'sha', 'short-i'], ['be', 'shcha', 'tse'], ['hard-sign', 'shcha', 'tse'], ['a', 'shcha', 'tse'], ['shcha', 'short-i', 'tse'], ['io', 'shcha', 'tse'], ['be', 'hard-sign', 'shcha'], ['a', 'be', 'shcha'], ['be', 'shcha', 'short-i'], ['be', 'io', 'shcha'], ['a', 'hard-sign', 'shcha'], ['hard-sign', 'shcha', 'short-i'], ['hard-sign', 'io', 'shcha'], ['a', 'shcha', 'short-i'], ['a', 'io', 'shcha'], ['io', 'shcha', 'short-i'], ['be', 'hard-sign', 'tse'], ['a', 'be', 'tse'], ['be', 'short-i', 'tse'], ['be', 'io', 'tse'], ['a', 'hard-sign', 'tse'], ['hard-sign', 'short-i', 'tse'], ['hard-sign', 'io', 'tse'], ['a', 'short-i', 'tse'], ['a', 'io', 'tse'], ['io', 'short-i', 'tse'], ['a', 'be', 'hard-sign'], ['be', 'hard-sign', 'short-i'], ['be', 'hard-sign', 'io'], ['a', 'be', 'short-i'], ['a', 'be', 'io'], ['be', 'io', 'short-i'], ['a', 'hard-sign', 'short-i'], ['a', 'hard-sign', 'io'], ['hard-sign', 'io', 'short-i'], ['a', 'io', 'short-i']]] ,

// century schoolbook cyrillic: triplet combinations of ['a', 'de', 'ghe', 'io', 'ka', 'pe', 'ya', 'zhe'], total: 56
['century-schoolbook_cyrillic', 'https://www.getform.org/f/c6138b0e-31b2-4a0a-8ff2-299e5ef261e3', [['ka', 'ya', 'zhe'], ['de', 'ka', 'zhe'], ['io', 'ka', 'zhe'], ['ka', 'pe', 'zhe'], ['a', 'ka', 'zhe'], ['ghe', 'ka', 'zhe'], ['de', 'ya', 'zhe'], ['io', 'ya', 'zhe'], ['pe', 'ya', 'zhe'], ['a', 'ya', 'zhe'], ['ghe', 'ya', 'zhe'], ['de', 'io', 'zhe'], ['de', 'pe', 'zhe'], ['a', 'de', 'zhe'], ['de', 'ghe', 'zhe'], ['io', 'pe', 'zhe'], ['a', 'io', 'zhe'], ['ghe', 'io', 'zhe'], ['a', 'pe', 'zhe'], ['ghe', 'pe', 'zhe'], ['a', 'ghe', 'zhe'], ['de', 'ka', 'ya'], ['io', 'ka', 'ya'], ['ka', 'pe', 'ya'], ['a', 'ka', 'ya'], ['ghe', 'ka', 'ya'], ['de', 'io', 'ka'], ['de', 'ka', 'pe'], ['a', 'de', 'ka'], ['de', 'ghe', 'ka'], ['io', 'ka', 'pe'], ['a', 'io', 'ka'], ['ghe', 'io', 'ka'], ['a', 'ka', 'pe'], ['ghe', 'ka', 'pe'], ['a', 'ghe', 'ka'], ['de', 'io', 'ya'], ['de', 'pe', 'ya'], ['a', 'de', 'ya'], ['de', 'ghe', 'ya'], ['io', 'pe', 'ya'], ['a', 'io', 'ya'], ['ghe', 'io', 'ya'], ['a', 'pe', 'ya'], ['ghe', 'pe', 'ya'], ['a', 'ghe', 'ya'], ['de', 'io', 'pe'], ['a', 'de', 'io'], ['de', 'ghe', 'io'], ['a', 'de', 'pe'], ['de', 'ghe', 'pe'], ['a', 'de', 'ghe'], ['a', 'io', 'pe'], ['ghe', 'io', 'pe'], ['a', 'ghe', 'io'], ['a', 'ghe', 'pe']]] ,
];