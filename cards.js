// ── AFTER HOURS — CARD DATA ──
// Blanks: ___ in prompts are rendered as highlighted gaps
// Name tokens: {p1} and {p2} replaced with player names at runtime
// Mood tags: "fun" | "deep" | "spicy" | "mix"
// Grammar lanes: "np" | "gp" | "qf" | "ap"
// Prompts have "accepts" — which answer types they pair with
// Answers have "type" — their grammar lane

var PROMPTS = [
  // ── FUN PROMPTS ──
  { mood:"fun", accepts:["np","gp"], en:"If {p1} and {p2} got stranded at an airport for 6 hours, it would definitely involve ___", sv:"Om {p1} och {p2} fastnade på en flygplats i 6 timmar skulle det definitivt involvera ___" },
  { mood:"fun", accepts:["np","gp"], en:"The most ridiculous thing {p1} and {p2} have ever argued about is ___", sv:"Det mest absurda {p1} och {p2} någonsin bråkat om är ___" },
  { mood:"fun", accepts:["np","gp"], en:"If a reality show filmed us for a week, the highlight reel would include ___", sv:"Om ett reality-program filmade oss en vecka skulle höjdpunkterna inkludera ___" },
  { mood:"fun", accepts:["np","gp"], en:"Our perfect terrible night in always involves ___", sv:"Vår perfekta hemmakvalls-katastrof involverar alltid ___" },
  { mood:"fun", accepts:["np","gp"], en:"If {p1} and {p2} had to survive a week in the wilderness, we'd fail because of ___", sv:"Om {p1} och {p2} behövde överleva en vecka i vildmarken skulle vi misslyckas på grund av ___" },
  { mood:"fun", accepts:["np","gp"], en:"The most chaotic thing about us as a couple is ___", sv:"Det mest kaotiska med oss som par är ___" },
  { mood:"fun", accepts:["np","gp"], en:"We'd never survive a cooking show because of ___", sv:"Vi skulle aldrig överleva ett matlagningsprogram på grund av ___" },
  { mood:"fun", accepts:["np","gp"], en:"What makes our neighbors slightly suspicious is probably ___", sv:"Det som får våra grannar att bli misstänksamma är förmodligen ___" },
  { mood:"fun", accepts:["np","gp"], en:"On our last trip, things went sideways because of ___", sv:"På vår senaste resa spårade det ur på grund av ___" },
  { mood:"fun", accepts:["np","gp"], en:"If someone followed {p1} and {p2} around for a day, the weirdest part would be ___", sv:"Om någon följde {p1} och {p2} under en dag skulle det konstiga vara ___" },
  { mood:"fun", accepts:["np","gp","qf"], en:"{p1} getting angry at someone online would sound like ___", sv:"{p1} som blir arg på någon online skulle låta som ___" },
  { mood:"fun", accepts:["np","gp"], en:"The thing {p2} does that makes {p1} laugh despite everything is ___", sv:"Det som {p2} gör som får {p1} att skratta trots allt är ___" },
  { mood:"fun", accepts:["np","gp","qf"], en:"If {p1} had to explain why we're late to literally everything, they'd say ___", sv:"Om {p1} skulle förklara varför vi är sen överallt, skulle de säga ___" },
  { mood:"fun", accepts:["np","gp"], en:"The absolute worst decision we've made together as a couple is ___", sv:"Det absolut värsta beslutet vi har gjort tillsammans som par är ___" },
  { mood:"fun", accepts:["np","gp"], en:"After a few drinks, {p2} always wants to talk about ___", sv:"Efter några drinkar vill {p2} alltid prata om ___" },
  { mood:"fun", accepts:["np"], en:"If we made a couples playlist, the first song would be by artists doing ___", sv:"Om vi gjorde en pars-spellista skulle första låten vara av artister som gör ___" },

  // ── DEEP PROMPTS ──
  { mood:"deep", accepts:["np","gp"], en:"If {p1} and {p2} wrote a book together, the first chapter would be about ___", sv:"Om {p1} och {p2} skrev en bok tillsammans skulle första kapitlet handla om ___" },
  { mood:"deep", accepts:["np","gp"], en:"Our love language, if we're being truly honest, is ___", sv:"Vårt kärleksspråk, om vi är helt ärliga, är ___" },
  { mood:"deep", accepts:["np"], en:"If we made a documentary about this relationship, the tagline would be ___", sv:"Om vi gjorde en dokumentär om det här förhållandet skulle taglinjen vara ___" },
  { mood:"deep", accepts:["np","gp"], en:"If we had a couple's theme song, it would be about ___", sv:"Om vi hade en gemensam temalåt skulle den handla om ___" },
  { mood:"deep", accepts:["np","gp","qf"], en:"The most honest thing I could say about our morning routine is ___", sv:"Det mest ärliga jag kan säga om vår morgonrutin är ___" },
  { mood:"deep", accepts:["np","gp"], en:"If we explained our relationship to a therapist, we'd start with ___", sv:"Om vi förklarade vår relation för en terapeut skulle vi börja med ___" },
  { mood:"deep", accepts:["np","gp"], en:"The thing about {p1} and {p2} that I think will still be true in ten years is ___", sv:"Det med {p1} och {p2} som jag tror fortfarande stämmer om tio år är ___" },
  { mood:"deep", accepts:["np","gp","qf"], en:"The thing I noticed about {p2} first that I've never said out loud is ___", sv:"Det jag märkte hos {p2} först som jag aldrig sagt högt är ___" },
  { mood:"deep", accepts:["np","gp"], en:"If {p1} had to describe what makes us work in one sentence, they'd say ___", sv:"Om {p1} med en mening skulle beskriva vad som gör att vi fungerar, skulle de säga ___" },
  { mood:"deep", accepts:["np","gp"], en:"The fight that actually brought us closer was about ___", sv:"Bråket som faktiskt förenade oss var om ___" },

  // ── SPICY PROMPTS ──
  { mood:"spicy", accepts:["np","gp"], en:"If {p1} and {p2} had a whole evening with no plans and no phones, it would definitely involve ___", sv:"Om {p1} och {p2} hade en hel kväll utan planer och utan telefoner skulle det definitivt involvera ___" },
  { mood:"spicy", accepts:["np","gp"], en:"The thing {p1} does that {p2} finds impossible to resist is ___", sv:"Det som {p1} gör som {p2} omöjligt kan motstå är ___" },
  { mood:"spicy", accepts:["np","gp"], en:"The most unexpectedly good night {p1} and {p2} had together always started with ___", sv:"Den mest oväntat bra kvällen {p1} och {p2} haft tillsammans började alltid med ___" },
  { mood:"spicy", accepts:["np","gp"], en:"If {p1} and {p2} checked into a hotel right now with zero agenda, the first thing would be ___", sv:"Om {p1} och {p2} checkade in på ett hotell just nu utan plan, det första som skulle hända är ___" },
  { mood:"spicy", accepts:["np","gp"], en:"The thing {p1} and {p2} both think about more than they admit is ___", sv:"Det {p1} och {p2} båda tänker på mer än de erkänner är ___" },
  { mood:"spicy", accepts:["np","gp"], en:"The version of {p1} and {p2} that I like most always involves ___", sv:"Den version av {p1} och {p2} som jag gillar mest involverar alltid ___" },
  { mood:"spicy", accepts:["np","gp","qf"], en:"When we're alone and the door closes, {p2} becomes ___", sv:"När vi är ensamma och dörren stängs, blir {p2} ___" },
  { mood:"spicy", accepts:["np","gp"], en:"The most reckless thing {p1} wants to do with {p2} is ___", sv:"Det mest sorglösa {p1} vill göra med {p2} är ___" },
  { mood:"spicy", accepts:["np","gp"], en:"If nobody would ever find out, {p1} and {p2} would definitely ___", sv:"Om ingen någonsin skulle ta reda på det, skulle {p1} och {p2} definitivt ___" },

  // ── MIX PROMPTS ──
  { mood:"mix", accepts:["np","gp","qf"], en:"___ is weirdly romantic when it's us", sv:"___ är märkligt romantiskt när det är vi" },
  { mood:"mix", accepts:["np","gp"], en:"The thing about {p1} that {p2} pretends not to love is ___", sv:"Det med {p1} som {p2} låtsas inte älska är ___" },
  { mood:"mix", accepts:["np","gp"], en:"If we had to explain our vibe to someone new, we'd say it's like ___", sv:"Om vi skulle förklara vår energi för någon ny, skulle vi säga att det är som ___" },
  { mood:"mix", accepts:["np","gp","qf"], en:"{p1} gets that look when {p2} ___", sv:"{p1} får det där uttrycket när {p2} ___" },
  { mood:"mix", accepts:["np","gp"], en:"The weirdest inside joke between us is definitely ___", sv:"Det konstiga internsk\u00e4mtet mellan oss är definitivt ___" },
  { mood:"mix", accepts:["np","gp"], en:"If someone asked what we do all night, the honest answer is ___", sv:"Om någon frågade vad vi gör hela natten, skulle det ärliga svaret vara ___" },
  { mood:"mix", accepts:["np","gp"], en:"The time we were the worst version of ourselves together was when ___", sv:"Gången vi var den värsta versionen av oss tillsammans var när ___" },
  { mood:"mix", accepts:["np","gp"], en:"If we could go back and change one thing about us, it would be ___", sv:"Om vi kunde g\u00e5 tillbaka och \u00e4ndra n\u00e5got om oss skulle det vara ___" },

  // ── SCENE PROMPTS (embedded blanks) ──
  // fun scenes
  { mood:"fun", accepts:["np","gp"], en:"{p1}, I swear to God, if you bring home ___ one more time, we\u2019re done.", sv:"{p1}, jag sv\u00e4r, om du tar hem ___ en g\u00e5ng till s\u00e5 \u00e4r vi slut." },
  { mood:"fun", accepts:["np"], en:"Breaking news: local couple found guilty of ___ in broad daylight.", sv:"Extrainsatt: lokalt par bek\u00e4nde sig skyldiga till ___ mitt p\u00e5 ljusa dagen." },
  { mood:"fun", accepts:["np","gp"], en:"Hey Siri, why does {p2} keep ___ at 2am?", sv:"Hej Siri, varf\u00f6r h\u00e5ller {p2} p\u00e5 med ___ klockan tv\u00e5 p\u00e5 natten?" },
  { mood:"fun", accepts:["np","gp"], en:"Our therapist said we need to stop ___. We said no.", sv:"V\u00e5r terapeut sa att vi m\u00e5ste sluta med ___. Vi sa nej." },
  { mood:"fun", accepts:["np"], en:"Welcome to IKEA. Today\u2019s couple fight will be in the ___ department.", sv:"V\u00e4lkommen till IKEA. Dagens parbr\u00e5k utspelar sig p\u00e5 ___-avdelningen." },
  { mood:"fun", accepts:["np","gp"], en:"{p2} keeps a secret stash of ___ and thinks {p1} doesn\u2019t know.", sv:"{p2} har ett hemligt f\u00f6rr\u00e5d av ___ och tror att {p1} inte vet." },
  { mood:"fun", accepts:["qf"], en:"The last text {p1} sent before the argument was just \u201c___\u201d", sv:"Det sista meddelandet {p1} skickade f\u00f6re br\u00e5ket var bara \u201c___\u201d" },
  { mood:"fun", accepts:["np","gp"], en:"If we wrote a Yelp review of our relationship, the one-star part would be ___", sv:"Om vi skrev en Yelp-recension av v\u00e5rt f\u00f6rh\u00e5llande skulle enst\u00e4rn-delen vara ___" },
  // deep scenes
  { mood:"deep", accepts:["np","gp"], en:"The thing {p1} carries that nobody else sees is ___", sv:"Det {p1} b\u00e4r p\u00e5 som ingen annan ser \u00e4r ___" },
  { mood:"deep", accepts:["qf"], en:"The thing {p2} said that I\u2019ll never forget is \u201c___\u201d", sv:"Det {p2} sa som jag aldrig gl\u00f6mmer \u00e4r \u201c___\u201d" },
  { mood:"deep", accepts:["np","gp"], en:"At 3am when neither of us could sleep, we ended up ___ and it changed everything.", sv:"Klockan tre p\u00e5 natten n\u00e4r ingen av oss kunde sova, slutade vi med att ___ och det f\u00f6r\u00e4ndrade allt." },
  { mood:"deep", accepts:["np"], en:"If our love was a place, it would look like ___", sv:"Om v\u00e5r k\u00e4rlek var en plats, skulle den se ut som ___" },
  // spicy scenes
  { mood:"spicy", accepts:["np","gp"], en:"{p1} just whispered \u201ccome here\u201d and now the plan is ___ apparently.", sv:"{p1} viskade just \u201ckom hit\u201d och nu \u00e4r planen tydligen ___." },
  { mood:"spicy", accepts:["qf"], en:"The thing {p2} whispers when nobody\u2019s around is \u201c___\u201d", sv:"Det {p2} viskar n\u00e4r ingen \u00e4r i n\u00e4rheten \u00e4r \u201c___\u201d" },
  { mood:"spicy", accepts:["np","gp"], en:"That outfit {p1} wore last Saturday was basically ___", sv:"Den d\u00e4r outfiten {p1} hade p\u00e5 sig i l\u00f6rdags var i princip ___" },
  { mood:"spicy", accepts:["np","gp"], en:"{p2} says they\u2019re going to bed early but actually they mean ___", sv:"{p2} s\u00e4ger att de ska l\u00e4gga sig tidigt men menar egentligen ___" },
  // mix scenes
  { mood:"mix", accepts:["np","gp"], en:"Our friends think we\u2019re normal but behind closed doors it\u2019s all ___", sv:"V\u00e5ra v\u00e4nner tror vi \u00e4r normala men bakom st\u00e4ngda d\u00f6rrar \u00e4r det bara ___" },
  { mood:"mix", accepts:["qf"], en:"If our relationship had a tagline it would be \u201c___\u201d", sv:"Om v\u00e5rt f\u00f6rh\u00e5llande hade en tagline skulle det vara \u201c___\u201d" },
  { mood:"mix", accepts:["ap"], en:"After a long day, {p1} gets very ___", sv:"Efter en l\u00e5ng dag blir {p1} v\u00e4ldigt ___" },
  { mood:"mix", accepts:["ap"], en:"Our energy as a couple is best described as ___", sv:"V\u00e5r energi som par beskrivs b\u00e4st som ___" },
  { mood:"mix", accepts:["ap"], en:"When {p2} hasn\u2019t eaten in four hours, they become ___", sv:"N\u00e4r {p2} inte \u00e4tit p\u00e5 fyra timmar blir de ___" }
];

var ANSWERS = [
  // ── FUN: noun phrases ──
  { mood:"fun", type:"np", en:"a shopping cart full of snacks", sv:"en kundvagn full med snacks" },
  { mood:"fun", type:"np", en:"passive-aggressive IKEA assembly", sv:"passiv-aggressivt IKEA-bygge" },
  { mood:"fun", type:"np", en:"the thermostat war", sv:"termostat-kriget" },
  { mood:"fun", type:"np", en:"a three-hour movie debate", sv:"en tre timmar lång filmdebatt" },
  { mood:"fun", type:"np", en:"drunk online shopping at 1am", sv:"fylleshoppande online klockan ett" },
  { mood:"fun", type:"np", en:"a nap that ruined all plans", sv:"en tupplur som förstörde alla planer" },
  { mood:"fun", type:"np", en:"a very loud wrong opinion", sv:"en väldigt högljudd fel åsikt" },
  { mood:"fun", type:"np", en:"a parking lot argument", sv:"ett parkeringsplatsbråk" },
  { mood:"fun", type:"np", en:"wine on a Tuesday for no reason", sv:"vin på en tisdag utan anledning" },
  { mood:"fun", type:"np", en:"an IKEA trip that tested us", sv:"ett IKEA-besök som testade oss" },
  { mood:"fun", type:"np", en:"one blanket and zero compromise", sv:"en filt och noll kompromisser" },
  { mood:"fun", type:"np", en:"a grocery list gone off the rails", sv:"en inhandlingslista som spårade ur" },
  { mood:"fun", type:"np", en:"accidental matching outfits", sv:"oavsiktligt matchande kläder" },
  { mood:"fun", type:"np", en:"the IKEA shark we keep meaning to return", sv:"IKEA-hajlen vi aldrig returnerar" },
  { mood:"fun", type:"np", en:"a debate about the correct thermostat setting", sv:"en debatt om rätt temperaturinställning" },
  { mood:"fun", type:"np", en:"someone's judgy facial expression", sv:"någons dömande ansiktsuttryck" },
  { mood:"fun", type:"np", en:"a remote control war", sv:"ett krig om fjärrkontrollen" },
  { mood:"fun", type:"np", en:"your secret Pinterest board", sv:"din hemliga Pinterest-tavla" },
  { mood:"fun", type:"np", en:"three bottles of rosé", sv:"tre flaskor rosé" },
  { mood:"fun", type:"np", en:"a very petty fight about loading the dishwasher", sv:"ett mycket småkårt bråk om diskmaskinen" },
  { mood:"fun", type:"np", en:"spontaneous midnight tacos", sv:"spontana midnatstagos" },
  { mood:"fun", type:"np", en:"a terrible karaoke choice", sv:"ett dåligt karaoke-val" },
  { mood:"fun", type:"np", en:"someone's refusal to ask for directions", sv:"någons vägran att fråga efter vägen" },
  { mood:"fun", type:"np", en:"competitive board game energy", sv:"konkurrenskraftig brädspelsenergi" },

  // ── FUN: gerund phrases ──
  { mood:"fun", type:"gp", en:"{p2} refusing to pick a restaurant", sv:"{p2} vägrar välja restaurang" },
  { mood:"fun", type:"gp", en:"googling it mid-argument", sv:"googla det mitt i bråket" },
  { mood:"fun", type:"gp", en:"{p1} saying 'I told you so'", sv:"{p1} som säger 'vad sa jag'" },
  { mood:"fun", type:"gp", en:"ordering food twice in one night", sv:"beställa mat två gånger på en kväll" },
  { mood:"fun", type:"gp", en:"{p1} dramatically reading the receipt", sv:"{p1} som dramatiskt läser kvittot" },
  { mood:"fun", type:"gp", en:"{p1} turning everything into a race", sv:"{p1} gör allt till en tävling" },
  { mood:"fun", type:"gp", en:"both blaming the GPS", sv:"båda skyller på GPS:en" },
  { mood:"fun", type:"gp", en:"{p2} buying it and hiding the bag", sv:"{p2} köper det och gömmer påsen" },
  { mood:"fun", type:"gp", en:"{p1} being 20 minutes late, again", sv:"{p1} som är 20 minuter sen, igen" },
  { mood:"fun", type:"gp", en:"{p2} pretending not to be hangry", sv:"{p2} som låtsas inte vara hungrig-arg" },
  { mood:"fun", type:"gp", en:"taking someone's shortcut and adding 40 minutes", sv:"ta någons genvag och lägga till 40 minuter" },
  { mood:"fun", type:"gp", en:"sharing a dessert and pretending it's fine", sv:"dela en dessert och låtsas att det är ok" },
  { mood:"fun", type:"gp", en:"{p1} trying to parallel park with an audience", sv:"{p1} försöker parkera snett med publik" },
  { mood:"fun", type:"gp", en:"{p2} insisting we don't need a map", sv:"{p2} insisterar att vi inte behöver en karta" },
  { mood:"fun", type:"gp", en:"both doing the dishes and blaming each other", sv:"båda tvättar disken och skyller på varandra" },
  { mood:"fun", type:"gp", en:"{p1} rewinding the show because we missed something", sv:"{p1} spolar tillbaka serien för att vi missade något" },
  { mood:"fun", type:"gp", en:"{p2} claiming they didn't eat the last piece", sv:"{p2} påstår att de inte åt sista biten" },
  { mood:"fun", type:"gp", en:"both trying to sleep while disagreeing about the window", sv:"båda försöker sova medan de oeniga om fönstret" },
  { mood:"fun", type:"gp", en:"{p1} making a stupid joke at the worst time", sv:"{p1} gör ett dumt skämt vid värsta tiden" },
  { mood:"fun", type:"gp", en:"{p2} fake-laughing at something nobody said", sv:"{p2} låtsas-skrattar åt något ingen sa" },

  // ── FUN: quote fragments ──
  { mood:"fun", type:"qf", en:"is this fight even about the dishes anymore", sv:"är det här bråket ens om disken längre" },
  { mood:"fun", type:"qf", en:"I'm not even mad, just disappointed", sv:"jag är inte ens arg, bara besviken" },
  { mood:"fun", type:"qf", en:"how did we get here from pizza", sv:"hur hamnade vi här från pizza" },
  { mood:"fun", type:"qf", en:"you're right, and I hate it", sv:"du har rätt, och jag hatar det" },
  { mood:"fun", type:"qf", en:"sure, whatever you want", sv:"ja, vad du än vill" },
  { mood:"fun", type:"qf", en:"I literally cannot believe you did that", sv:"jag kan faktiskt inte tro att du gjorde det" },
  { mood:"fun", type:"qf", en:"never going to let you forget this", sv:"kommer aldrig låta dig glömma detta" },

  // ── FUN: adjective phrases ──
  { mood:"fun", type:"ap", en:"suspiciously quiet", sv:"misstänkt tyst" },
  { mood:"fun", type:"ap", en:"aggressively wrong", sv:"aggressivt fel" },
  { mood:"fun", type:"ap", en:"weirdly competent", sv:"märkligt kompetent" },
  { mood:"fun", type:"ap", en:"dangerously tired", sv:"farligt trött" },
  { mood:"fun", type:"ap", en:"offensively late", sv:"kränkande sen" },
  { mood:"fun", type:"ap", en:"painfully obvious", sv:"pinsamt uppenbart" },
  { mood:"fun", type:"ap", en:"hilariously stubborn", sv:"skrattretande envis" },

  // ── DEEP: noun phrases ──
  { mood:"deep", type:"np", en:"the version of me only you see", sv:"versionen av mig bara du ser" },
  { mood:"deep", type:"np", en:"a silence that actually felt safe", sv:"en tystnad som kändes trygg" },
  { mood:"deep", type:"np", en:"the Sunday routine nobody planned", sv:"söndagsrutinen ingen planerade" },
  { mood:"deep", type:"np", en:"your real laugh, not the polite one", sv:"ditt riktiga skratt, inte det artiga" },
  { mood:"deep", type:"np", en:"the 2am conversation that changed things", sv:"samtalet klockan två som förändrade allt" },
  { mood:"deep", type:"np", en:"a fear I only told you", sv:"en rädsla jag bara berättade för dig" },
  { mood:"deep", type:"np", en:"the fight we needed to have", sv:"bråket vi behövde ha" },
  { mood:"deep", type:"np", en:"a promise that didn't need words", sv:"ett löfte som inte behövde ord" },
  { mood:"deep", type:"np", en:"the inside joke nobody else gets", sv:"internsk\u00e4mtet ingen annan fattar" },
  { mood:"deep", type:"np", en:"the way you look at me when you think I'm not watching", sv:"hur du tittar på mig när du tror jag inte ser" },
  { mood:"deep", type:"np", en:"a moment we never talk about but both remember", sv:"ett moment vi aldrig pratar om men båda minns" },
  { mood:"deep", type:"np", en:"the scar from the hurt we've both healed from", sv:"ärret från det lidande vi båda läkt från" },
  { mood:"deep", type:"np", en:"knowing exactly what you need without words", sv:"veta exakt vad du behöver utan ord" },
  { mood:"deep", type:"np", en:"the version of home that's your arm around me", sv:"versionen av hemma som är din arm omkring mig" },
  { mood:"deep", type:"np", en:"how you show up on my worst days", sv:"hur du dyker upp på mina värsta dagar" },
  { mood:"deep", type:"np", en:"the thing you sacrificed that I only recently understood", sv:"det du offrade som jag nyss förstod" },

  // ── DEEP: gerund phrases ──
  { mood:"deep", type:"gp", en:"learning to fight better", sv:"lära sig bråka bättre" },
  { mood:"deep", type:"gp", en:"knowing without having to ask", sv:"veta utan att behöva fråga" },
  { mood:"deep", type:"gp", en:"choosing each other on the hard days", sv:"välja varandra på tunga dagar" },
  { mood:"deep", type:"gp", en:"letting {p2} see the ugly cry", sv:"låta {p2} se fulböljet" },
  { mood:"deep", type:"gp", en:"being weird in the exact same way", sv:"vara konstiga på exakt samma sätt" },
  { mood:"deep", type:"gp", en:"feeling at home in the car together", sv:"känna sig hemma i bilen ihop" },
  { mood:"deep", type:"gp", en:"admitting I was wrong (finally)", sv:"erkänna att jag hade fel (till slut)" },
  { mood:"deep", type:"gp", en:"forgiving faster than expected", sv:"förlåta snabbare än väntat" },
  { mood:"deep", type:"gp", en:"holding hands and saying nothing", sv:"hålla händer och inte säga något" },
  { mood:"deep", type:"gp", en:"staying when most people would leave", sv:"stanna när de flesta skulle gå" },
  { mood:"deep", type:"gp", en:"understanding your pain like it's my own", sv:"förstå din smärta som om det var min egen" },
  { mood:"deep", type:"gp", en:"building something together that neither of us expected", sv:"bygga något tillsammans som ingen av oss förväntade" },
  { mood:"deep", type:"gp", en:"becoming more ourselves because you're here", sv:"bli mer vi själva för att du är här" },
  { mood:"deep", type:"gp", en:"trusting you with the parts I hide from everyone else", sv:"lita på dig med de delar jag gömmer för alla andra" },

  // ── DEEP: quote fragments ──
  { mood:"deep", type:"qf", en:"I was waiting for you without knowing it", sv:"jag väntade på dig utan att veta det" },
  { mood:"deep", type:"qf", en:"you make me want to be better", sv:"du får mig att vilja vara bättre" },
  { mood:"deep", type:"qf", en:"I've never felt this safe with anyone", sv:"jag har aldrig känt mig så trygg med någon" },
  { mood:"deep", type:"qf", en:"you know me, the real me", sv:"du känner mig, den riktiga mig" },
  { mood:"deep", type:"qf", en:"I don't know what I'd do without you", sv:"jag vet inte vad jag skulle göra utan dig" },

  // ── DEEP: adjective phrases ──
  { mood:"deep", type:"ap", en:"achingly beautiful", sv:"smärtligt vacker" },
  { mood:"deep", type:"ap", en:"quietly strong", sv:"tyst stark" },
  { mood:"deep", type:"ap", en:"bravely vulnerable", sv:"modig sårbar" },
  { mood:"deep", type:"ap", en:"deeply rooted", sv:"djupt rotad" },
  { mood:"deep", type:"ap", en:"softly fierce", sv:"mjukt vild" },

  // ── SPICY: noun phrases ──
  { mood:"spicy", type:"np", en:"a locked door and zero agenda", sv:"en låst dörr och noll agenda" },
  { mood:"spicy", type:"np", en:"that look across the dinner table", sv:"den där blicken över middagsbordet" },
  { mood:"spicy", type:"np", en:"a dare nobody backed down from", sv:"en utmaning ingen backade från" },
  { mood:"spicy", type:"np", en:"a very long shower for two", sv:"en väldigt lång dusch för två" },
  { mood:"spicy", type:"np", en:"a hotel room and room service", sv:"ett hotellrum och rumsservice" },
  { mood:"spicy", type:"np", en:"the text that started everything", sv:"meddelandet som startade allt" },
  { mood:"spicy", type:"np", en:"a playlist and a very late night", sv:"en spellista och en väldigt sen kväll" },
  { mood:"spicy", type:"np", en:"an innocent massage that wasn't", sv:"en oskyldig massage som inte var det" },
  { mood:"spicy", type:"np", en:"skin that smells like us", sv:"hud som luktar som oss" },
  { mood:"spicy", type:"np", en:"the way your mouth moves when you're thinking about me", sv:"hur din mun rör sig när du tänker på mig" },
  { mood:"spicy", type:"np", en:"a very deliberate 'accident'", sv:"en väldigt avsiktlig 'olycka'" },
  { mood:"spicy", type:"np", en:"exactly the right amount of tension", sv:"exakt rätt mängd spänning" },
  { mood:"spicy", type:"np", en:"the moment before everything changes", sv:"ögonblicket innan allt förändras" },
  { mood:"spicy", type:"np", en:"whatever's about to happen next", sv:"vad som än kommer hända härnäst" },
  { mood:"spicy", type:"np", en:"your hand finding mine in the dark", sv:"din hand som hittar min i mörkret" },

  // ── SPICY: gerund phrases ──
  { mood:"spicy", type:"gp", en:"whispering something very inappropriate", sv:"viska något väldigt olämpligt" },
  { mood:"spicy", type:"gp", en:"cancelling plans and not being sorry", sv:"ställa in planer utan ånger" },
  { mood:"spicy", type:"gp", en:"{p1} wearing that outfit on purpose", sv:"{p1} som bar den klädsel med flit" },
  { mood:"spicy", type:"gp", en:"blaming it on the wine", sv:"skylla på vinet" },
  { mood:"spicy", type:"gp", en:"{p2} biting their lip like that", sv:"{p2} som biter sig i läppen så där" },
  { mood:"spicy", type:"gp", en:"making up very slowly after the argument", sv:"försonas väldigt långsamt efter bråket" },
  { mood:"spicy", type:"gp", en:"staying in bed until embarrassingly late", sv:"stanna i sängen pinsamt länge" },
  { mood:"spicy", type:"gp", en:"saying 'one more' and meaning it", sv:"säga 'en till' och mena det" },
  { mood:"spicy", type:"gp", en:"{p1} catching {p2} looking at them", sv:"{p1} som ertappas {p2} titta på" },
  { mood:"spicy", type:"gp", en:"finding excuses to be in the same room", sv:"hitta ursäkter för att vara i samma rum" },
  { mood:"spicy", type:"gp", en:"{p2} undressing with the lights on", sv:"{p2} som klär av sig med ljusen på" },
  { mood:"spicy", type:"gp", en:"taking our time when we have all night", sv:"ta vår tid när vi har hela natten" },
  { mood:"spicy", type:"gp", en:"{p1} touching your neck in that way", sv:"{p1} som rör din nacke på det sättet" },
  { mood:"spicy", type:"gp", en:"forgetting to close the bedroom door", sv:"glömma att stänga sovrumsdörren" },

  // ── SPICY: quote fragments ──
  { mood:"spicy", type:"qf", en:"do that again", sv:"gör det igen" },
  { mood:"spicy", type:"qf", en:"not yet", sv:"inte än" },
  { mood:"spicy", type:"qf", en:"I want you right now", sv:"jag vill ha dig just nu" },
  { mood:"spicy", type:"qf", en:"tell me you want this", sv:"säg att du vill detta" },
  { mood:"spicy", type:"qf", en:"take your time", sv:"ta din tid" },
  { mood:"spicy", type:"qf", en:"I've been thinking about you all day", sv:"jag har tänkt på dig hela dagen" },

  // ── SPICY: adjective phrases ──
  { mood:"spicy", type:"ap", en:"dangerously attractive", sv:"farligt attraktiv" },
  { mood:"spicy", type:"ap", en:"impossibly close", sv:"omöjligt nära" },
  { mood:"spicy", type:"ap", en:"deliberately slow", sv:"avsiktligt långsam" },
  { mood:"spicy", type:"ap", en:"achingly obvious", sv:"smärtligt uppenbart" },

  // ── MIX: noun phrases ──
  { mood:"mix", type:"np", en:"a shared look that said everything", sv:"en blick som sa allt" },
  { mood:"mix", type:"np", en:"cheese and wine at 11pm", sv:"ost och vin klockan 23" },
  { mood:"mix", type:"np", en:"our weird little ritual", sv:"vår konstiga lilla ritual" },
  { mood:"mix", type:"np", en:"a road trip playlist argument", sv:"ett bråk om bilspellistan" },
  { mood:"mix", type:"np", en:"a takeaway on the kitchen floor", sv:"takeaway på köksgolvet" },
  { mood:"mix", type:"np", en:"a secret we'll never tell anyone", sv:"en hemlighet vi aldrig berättar" },
  { mood:"mix", type:"np", en:"the couch, a blanket, and zero words", sv:"soffan, en filt, och noll ord" },
  { mood:"mix", type:"np", en:"a plan that went perfectly wrong", sv:"en plan som gick perfekt fel" },
  { mood:"mix", type:"np", en:"the way we fit together without trying", sv:"hur vi passar ihop utan att försöka" },
  { mood:"mix", type:"np", en:"moments nobody else gets to see", sv:"moment som ingen annan får se" },
  { mood:"mix", type:"np", en:"the smell of your skin and the sound of my name", sv:"lukten av din hud och ljudet av mitt namn" },
  { mood:"mix", type:"np", en:"being completely ourselves and completely accepted", sv:"vara helt oss själva och helt accepterade" },

  // ── MIX: gerund phrases ──
  { mood:"mix", type:"gp", en:"both thinking the exact same thing", sv:"båda tänker exakt samma sak" },
  { mood:"mix", type:"gp", en:"one of us caving first", sv:"en av oss som ger efter först" },
  { mood:"mix", type:"gp", en:"laughing so hard we couldn't stop", sv:"skratta så vi inte kunde sluta" },
  { mood:"mix", type:"gp", en:"being embarrassing together in public", sv:"vara pinsamma ihop offentligt" },
  { mood:"mix", type:"gp", en:"knowing exactly when the other person needs space", sv:"veta exakt när den andra behöver utrymme" },
  { mood:"mix", type:"gp", en:"dancing in the kitchen without a song", sv:"dansa i köket utan en låt" },
  { mood:"mix", type:"gp", en:"{p1} making {p2} feel like they're the only person in the world", sv:"{p1} gör {p2} känna sig som den enda personen i världen" },
  { mood:"mix", type:"gp", en:"stealing kisses between the mundane", sv:"stjäla kyssar mellan det vardagliga" },

  // ── MIX: quote fragments ──
  { mood:"mix", type:"qf", en:"you're stuck with me", sv:"du är fast med mig" },
  { mood:"mix", type:"qf", en:"come here", sv:"kom hit" },
  { mood:"mix", type:"qf", en:"let's just stay like this", sv:"låt oss bara stanna så här" },
  { mood:"mix", type:"qf", en:"you're my favorite", sv:"du är min favorit" },
  { mood:"mix", type:"qf", en:"I'm exactly where I want to be", sv:"jag är precis där jag vill vara" },

  // ── MIX: adjective phrases ──
  { mood:"mix", type:"ap", en:"perfectly imperfect", sv:"perfekt operfekt" },
  { mood:"mix", type:"ap", en:"completely crazy together", sv:"helt galen tillsammans" },
  { mood:"mix", type:"ap", en:"weirdly compatible", sv:"märkligt kompatibel" },
  { mood:"mix", type:"ap", en:"beautifully broken in", sv:"vackert invald" }
];
