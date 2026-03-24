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
  // ══════════════════════════════════════
  // FUN — noun phrases
  // ══════════════════════════════════════
  { mood:"fun", type:"np", en:"47 throw pillows", sv:"47 prydnadskuddar" },
  { mood:"fun", type:"np", en:"a passive-aggressive Post-it note", sv:"en passiv-aggressiv Post-it-lapp" },
  { mood:"fun", type:"np", en:"the thermostat", sv:"termostaten" },
  { mood:"fun", type:"np", en:"three bottles of ros\u00e9", sv:"tre flaskor ros\u00e9" },
  { mood:"fun", type:"np", en:"{p2}'s 400 unread emails", sv:"{p2}s 400 ol\u00e4sta mejl" },
  { mood:"fun", type:"np", en:"an IKEA bookshelf and a broken marriage", sv:"en IKEA-bokhylla och ett trasigt \u00e4ktenskap" },
  { mood:"fun", type:"np", en:"the Wi-Fi password argument", sv:"Wi-Fi-l\u00f6senordsbr\u00e5ket" },
  { mood:"fun", type:"np", en:"{p1}'s snoring", sv:"{p1}s snarkande" },
  { mood:"fun", type:"np", en:"a parking lot meltdown", sv:"ett parkeringsplatshaveri" },
  { mood:"fun", type:"np", en:"four different food delivery apps", sv:"fyra olika matleveransappar" },
  { mood:"fun", type:"np", en:"the duvet", sv:"t\u00e4cket" },
  { mood:"fun", type:"np", en:"a cart full of things we don't need", sv:"en vagn full med saker vi inte beh\u00f6ver" },
  { mood:"fun", type:"np", en:"{p2}'s screen time report", sv:"{p2}s sk\u00e4rmtidsrapport" },
  { mood:"fun", type:"np", en:"the wrong IKEA bag", sv:"fel IKEA-kasse" },
  { mood:"fun", type:"np", en:"{p1}'s Spotify Wrapped", sv:"{p1}s Spotify Wrapped" },
  { mood:"fun", type:"np", en:"another candle", sv:"\u00e4nnu ett ljus" },
  { mood:"fun", type:"np", en:"a very loud wrong opinion", sv:"en v\u00e4ldigt h\u00f6gljudd fel \u00e5sikt" },
  { mood:"fun", type:"np", en:"eleven Amazon packages", sv:"elva Amazon-paket" },
  { mood:"fun", type:"np", en:"the shared Netflix account", sv:"det delade Netflix-kontot" },
  { mood:"fun", type:"np", en:"a 90-minute parking job", sv:"en 90-minuters parkering" },
  { mood:"fun", type:"np", en:"{p2}'s mom calling at the worst moment", sv:"{p2}s mamma som ringer i v\u00e4rsta \u00f6gonblicket" },
  { mood:"fun", type:"np", en:"leftover pizza at 7am", sv:"kvargl\u00f6md pizza klockan sju" },
  { mood:"fun", type:"np", en:"a toilet seat left up", sv:"en toalettsits som l\u00e4mnats uppe" },
  { mood:"fun", type:"np", en:"matching Crocs", sv:"matchande Crocs" },
  { mood:"fun", type:"np", en:"a suspiciously specific Google search", sv:"en misstänkt specifik Google-sökning" },
  { mood:"fun", type:"np", en:"one shared brain cell", sv:"en delad hjärncell" },
  { mood:"fun", type:"np", en:"{p1}'s 'I'm fine' face", sv:"{p1}s 'det är lugnt'-ansikte" },
  { mood:"fun", type:"np", en:"the group chat screenshot", sv:"skärmdumpen från gruppchatten" },
  { mood:"fun", type:"np", en:"an extremely passive-aggressive playlist", sv:"en extremt passiv-aggressiv spellista" },
  { mood:"fun", type:"np", en:"{p2}'s 47 alarms that never work", sv:"{p2}s 47 alarm som aldrig fungerar" },
  { mood:"fun", type:"np", en:"a dramatic exit to the balcony", sv:"en dramatisk sorti till balkongen" },
  { mood:"fun", type:"np", en:"the world's longest grocery list", sv:"världens längsta inköpslista" },

  // ══════════════════════════════════════
  // FUN — gerund phrases
  // ══════════════════════════════════════
  { mood:"fun", type:"gp", en:"{p2} refusing to pick a restaurant", sv:"{p2} v\u00e4grar v\u00e4lja restaurang" },
  { mood:"fun", type:"gp", en:"googling symptoms at 3am", sv:"googla symptom klockan tre p\u00e5 natten" },
  { mood:"fun", type:"gp", en:"{p1} eating the last piece and denying it", sv:"{p1} \u00e4ter sista biten och f\u00f6rnekar det" },
  { mood:"fun", type:"gp", en:"ordering Uber Eats twice in one night", sv:"best\u00e4lla Uber Eats tv\u00e5 g\u00e5nger p\u00e5 en kv\u00e4ll" },
  { mood:"fun", type:"gp", en:"{p1} dramatically reading the receipt out loud", sv:"{p1} som dramatiskt l\u00e4ser kvittot h\u00f6gt" },
  { mood:"fun", type:"gp", en:"stress-buying candles", sv:"stressk\u00f6pa ljus" },
  { mood:"fun", type:"gp", en:"both blaming the GPS", sv:"b\u00e5da skyller p\u00e5 GPS:en" },
  { mood:"fun", type:"gp", en:"{p2} hiding shopping bags in the trunk", sv:"{p2} g\u00f6mmer shoppingkassar i bagaget" },
  { mood:"fun", type:"gp", en:"{p1} falling asleep during the movie", sv:"{p1} somnar under filmen" },
  { mood:"fun", type:"gp", en:"watching true crime and side-eyeing each other", sv:"titta p\u00e5 true crime och snegla p\u00e5 varandra" },
  { mood:"fun", type:"gp", en:"{p2} taking 45 minutes to get ready", sv:"{p2} tar 45 minuter att bli klar" },
  { mood:"fun", type:"gp", en:"arguing about whose turn it is to cook", sv:"br\u00e5ka om vems tur det \u00e4r att laga mat" },
  { mood:"fun", type:"gp", en:"{p1} assembling furniture without the manual", sv:"{p1} monterar m\u00f6bler utan manualen" },
  { mood:"fun", type:"gp", en:"drunk-texting each other from the same couch", sv:"fylletexa varandra fr\u00e5n samma soffa" },
  { mood:"fun", type:"gp", en:"fighting over the aux cord", sv:"slåss om aux-sladden" },
  { mood:"fun", type:"gp", en:"pretending to be asleep to avoid the conversation", sv:"låtsas sova för att slippa samtalet" },
  { mood:"fun", type:"gp", en:"{p2} narrating everything like a documentary", sv:"{p2} som kommenterar allt som en dokumentär" },
  { mood:"fun", type:"gp", en:"{p1} panic-cleaning before guests arrive", sv:"{p1} panikstädar innan gästerna kommer" },
  { mood:"fun", type:"gp", en:"blaming each other for the missing remote", sv:"skylla på varandra för den försvunna fjärrkontrollen" },
  { mood:"fun", type:"gp", en:"{p2} starting a new series without {p1}", sv:"{p2} börjar en ny serie utan {p1}" },
  { mood:"fun", type:"gp", en:"aggressively loading the dishwasher to prove a point", sv:"aggressivt ladda diskmaskinen för att bevisa en poäng" },

  // ══════════════════════════════════════
  // FUN — quote fragments
  // ══════════════════════════════════════
  { mood:"fun", type:"qf", en:"I'm almost ready", sv:"jag \u00e4r n\u00e4stan klar" },
  { mood:"fun", type:"qf", en:"we need to talk", sv:"vi beh\u00f6ver prata" },
  { mood:"fun", type:"qf", en:"it was on sale", sv:"det var p\u00e5 rea" },
  { mood:"fun", type:"qf", en:"I already told you this", sv:"jag har redan sagt det h\u00e4r" },
  { mood:"fun", type:"qf", en:"fine. do whatever you want.", sv:"okej. g\u00f6r vad du vill." },
  { mood:"fun", type:"qf", en:"that's not what happened", sv:"det \u00e4r inte vad som h\u00e4nde" },
  { mood:"fun", type:"qf", en:"I'm not the one who", sv:"det \u00e4r inte jag som" },
  { mood:"fun", type:"qf", en:"you always do this", sv:"du g\u00f6r alltid s\u00e5 h\u00e4r" },
  { mood:"fun", type:"qf", en:"I said I was sorry", sv:"jag sa att jag var ledsen" },
  { mood:"fun", type:"qf", en:"whatever. I'm going to bed.", sv:"skärsansen. jag går och lägger mig." },
  { mood:"fun", type:"qf", en:"I literally just said that", sv:"jag sa precis det" },
  { mood:"fun", type:"qf", en:"Google says I'm dying", sv:"Google säger att jag dör" },
  { mood:"fun", type:"qf", en:"are you even listening", sv:"lyssnar du ens" },
  { mood:"fun", type:"qf", en:"that's not how you load a dishwasher", sv:"det är inte så man laddar en diskmaskin" },
  { mood:"fun", type:"qf", en:"I'll do it tomorrow", sv:"jag gör det imorgon" },
  { mood:"fun", type:"qf", en:"we should probably talk about this", sv:"vi borde nog prata om det här" },

  // ══════════════════════════════════════
  // FUN — adjective phrases
  // ══════════════════════════════════════
  { mood:"fun", type:"ap", en:"suspiciously quiet", sv:"misst\u00e4nkt tyst" },
  { mood:"fun", type:"ap", en:"aggressively wrong", sv:"aggressivt fel" },
  { mood:"fun", type:"ap", en:"dangerously hangry", sv:"farligt hungrig" },
  { mood:"fun", type:"ap", en:"offensively late", sv:"kr\u00e4nkande sen" },
  { mood:"fun", type:"ap", en:"painfully stubborn", sv:"pinsamt envis" },
  { mood:"fun", type:"ap", en:"unreasonably competitive", sv:"orimligt t\u00e4vlingsinriktad" },
  { mood:"fun", type:"ap", en:"emotionally unavailable (about dinner plans)", sv:"emotionellt otillgänglig (om middagsplaner)" },
  { mood:"fun", type:"ap", en:"confidently incorrect", sv:"självsäkert felaktig" },
  { mood:"fun", type:"ap", en:"tragically overdressed", sv:"tragiskt överklädda" },
  { mood:"fun", type:"ap", en:"petty beyond repair", sv:"småaktig bortom räddning" },

  // ══════════════════════════════════════
  // DEEP — noun phrases
  // ══════════════════════════════════════
  { mood:"deep", type:"np", en:"the ugly cry on a Tuesday", sv:"fulb\u00f6let en tisdag" },
  { mood:"deep", type:"np", en:"the 3am kitchen conversation", sv:"k\u00f6kssamtalet klockan tre" },
  { mood:"deep", type:"np", en:"your voice when you're actually scared", sv:"din r\u00f6st n\u00e4r du \u00e4r p\u00e5 riktigt r\u00e4dd" },
  { mood:"deep", type:"np", en:"the apology that took a year", sv:"urs\u00e4kten som tog ett \u00e5r" },
  { mood:"deep", type:"np", en:"your parents' divorce", sv:"dina f\u00f6r\u00e4ldrars skilsm\u00e4ssa" },
  { mood:"deep", type:"np", en:"the first night you stayed over", sv:"f\u00f6rsta natten du sov \u00f6ver" },
  { mood:"deep", type:"np", en:"the fight in the car after the party", sv:"br\u00e5ket i bilen efter festen" },
  { mood:"deep", type:"np", en:"the voicemail I never deleted", sv:"r\u00f6stmeddelandet jag aldrig raderade" },
  { mood:"deep", type:"np", en:"the silence after the door closed", sv:"tystnaden efter att d\u00f6rren st\u00e4ngdes" },
  { mood:"deep", type:"np", en:"{p2}'s face when they think nobody's watching", sv:"{p2}s ansikte n\u00e4r de tror ingen ser" },
  { mood:"deep", type:"np", en:"that one photo from the first year", sv:"det d\u00e4r fotot fr\u00e5n f\u00f6rsta \u00e5ret" },
  { mood:"deep", type:"np", en:"the song that still hurts a little", sv:"l\u00e5ten som fortfarande g\u00f6r lite ont" },
  { mood:"deep", type:"np", en:"your toothbrush at my place", sv:"din tandborste hos mig" },
  { mood:"deep", type:"np", en:"{p1}'s hands when they're nervous", sv:"{p1}s h\u00e4nder n\u00e4r de \u00e4r nerv\u00f6sa" },

  // ══════════════════════════════════════
  // DEEP — gerund phrases
  // ══════════════════════════════════════
  { mood:"deep", type:"gp", en:"crying in the bathroom and pretending you didn't", sv:"gr\u00e5ta p\u00e5 badrummet och l\u00e5tsas att du inte gjorde det" },
  { mood:"deep", type:"gp", en:"sleeping on the couch after the fight", sv:"sova p\u00e5 soffan efter br\u00e5ket" },
  { mood:"deep", type:"gp", en:"holding hands at the hospital", sv:"h\u00e5lla h\u00e4nder p\u00e5 sjukhuset" },
  { mood:"deep", type:"gp", en:"reading each other's faces across the room", sv:"l\u00e4sa varandras ansikten \u00f6ver rummet" },
  { mood:"deep", type:"gp", en:"forgiving before they even ask", sv:"f\u00f6rl\u00e5ta innan de ens fr\u00e5gar" },
  { mood:"deep", type:"gp", en:"driving home in silence after a hard day", sv:"k\u00f6ra hem i tystnad efter en tung dag" },
  { mood:"deep", type:"gp", en:"choosing this even when it's hard", sv:"v\u00e4lja det h\u00e4r \u00e4ven n\u00e4r det \u00e4r sv\u00e5rt" },
  { mood:"deep", type:"gp", en:"letting {p2} see the worst version", sv:"l\u00e5ta {p2} se den v\u00e4rsta versionen" },
  { mood:"deep", type:"gp", en:"saying sorry and actually meaning it", sv:"s\u00e4ga f\u00f6rl\u00e5t och faktiskt mena det" },
  { mood:"deep", type:"gp", en:"building a life without a blueprint", sv:"bygga ett liv utan ritning" },
  { mood:"deep", type:"gp", en:"{p1} picking up {p2} from a bad night without asking questions", sv:"{p1} h\u00e4mtar {p2} efter en d\u00e5lig kv\u00e4ll utan fr\u00e5gor" },

  // ══════════════════════════════════════
  // DEEP — quote fragments
  // ══════════════════════════════════════
  { mood:"deep", type:"qf", en:"I didn't mean it", sv:"jag menade inte det" },
  { mood:"deep", type:"qf", en:"please don't leave", sv:"snälla gå inte" },
  { mood:"deep", type:"qf", en:"I'm trying my best", sv:"jag g\u00f6r s\u00e5 gott jag kan" },
  { mood:"deep", type:"qf", en:"I should have said something sooner", sv:"jag borde ha sagt n\u00e5got tidigare" },
  { mood:"deep", type:"qf", en:"you're the only one who knows", sv:"du \u00e4r den enda som vet" },
  { mood:"deep", type:"qf", en:"that's the nicest thing anyone's ever said", sv:"det \u00e4r det finaste n\u00e5gon n\u00e5gonsin sagt" },

  // ══════════════════════════════════════
  // DEEP — adjective phrases
  // ══════════════════════════════════════
  { mood:"deep", type:"ap", en:"terrifyingly honest", sv:"skr\u00e4mmande \u00e4rlig" },
  { mood:"deep", type:"ap", en:"quietly falling apart", sv:"tyst faller is\u00e4r" },
  { mood:"deep", type:"ap", en:"finally ready", sv:"\u00e4ntligen redo" },
  { mood:"deep", type:"ap", en:"annoyingly right", sv:"irriterande r\u00e4tt" },
  { mood:"deep", type:"ap", en:"stubbornly in love", sv:"envist k\u00e4r" },

  // ══════════════════════════════════════
  // SPICY — noun phrases
  // ══════════════════════════════════════
  { mood:"spicy", type:"np", en:"that one outfit from the third date", sv:"den d\u00e4r outfiten fr\u00e5n tredje dejten" },
  { mood:"spicy", type:"np", en:"a hotel minibar and no checkout time", sv:"en hotellminibar och ingen utcheckning" },
  { mood:"spicy", type:"np", en:"the shower with the good water pressure", sv:"duschen med bra vattentryck" },
  { mood:"spicy", type:"np", en:"{p2}'s neck", sv:"{p2}s nacke" },
  { mood:"spicy", type:"np", en:"two glasses of wine and no kids", sv:"tv\u00e5 glas vin och inga barn" },
  { mood:"spicy", type:"np", en:"the back seat of the car", sv:"baks\u00e4tet i bilen" },
  { mood:"spicy", type:"np", en:"the dress that caused the car accident", sv:"kl\u00e4nningen som orsakade bilolyckan" },
  { mood:"spicy", type:"np", en:"{p1}'s gym selfie", sv:"{p1}s gym-selfie" },
  { mood:"spicy", type:"np", en:"the 'do not disturb' sign", sv:"'st\u00f6r ej'-skylten" },
  { mood:"spicy", type:"np", en:"a bathtub for two", sv:"ett badkar f\u00f6r tv\u00e5" },
  { mood:"spicy", type:"np", en:"that message at 11:47pm", sv:"det d\u00e4r meddelandet klockan 23:47" },
  { mood:"spicy", type:"np", en:"an empty apartment and zero plans", sv:"en tom l\u00e4genhet och noll planer" },
  { mood:"spicy", type:"np", en:"{p2} in that white t-shirt", sv:"{p2} i den d\u00e4r vita t-shirten" },

  // ══════════════════════════════════════
  // SPICY — gerund phrases
  // ══════════════════════════════════════
  { mood:"spicy", type:"gp", en:"{p2} biting their lip like that", sv:"{p2} som biter sig i l\u00e4ppen s\u00e5 d\u00e4r" },
  { mood:"spicy", type:"gp", en:"skipping dessert and going straight home", sv:"skippa desserten och \u00e5ka rakt hem" },
  { mood:"spicy", type:"gp", en:"texting 'come over' at midnight", sv:"sms:a 'kom \u00f6ver' vid midnatt" },
  { mood:"spicy", type:"gp", en:"{p1} cooking shirtless", sv:"{p1} lagar mat utan tr\u00f6ja" },
  { mood:"spicy", type:"gp", en:"making eye contact a little too long", sv:"ha \u00f6gonkontakt lite f\u00f6r l\u00e4nge" },
  { mood:"spicy", type:"gp", en:"forgetting to close the blinds", sv:"gl\u00f6mma att st\u00e4nga persiennerna" },
  { mood:"spicy", type:"gp", en:"whispering something at the dinner party", sv:"viska n\u00e5got p\u00e5 middagsfesten" },
  { mood:"spicy", type:"gp", en:"staying in bed until checkout", sv:"stanna i s\u00e4ngen till utcheckning" },
  { mood:"spicy", type:"gp", en:"{p2} walking out of the bathroom in just a towel", sv:"{p2} som g\u00e5r ut fr\u00e5n badrummet i bara en handduk" },
  { mood:"spicy", type:"gp", en:"playing footsie under the table at {p2}'s parents' house", sv:"leka fotleken under bordet hos {p2}s f\u00f6r\u00e4ldrar" },
  { mood:"spicy", type:"gp", en:"booking a hotel room for no reason", sv:"boka ett hotellrum utan anledning" },

  // ══════════════════════════════════════
  // SPICY — quote fragments
  // ══════════════════════════════════════
  { mood:"spicy", type:"qf", en:"do that again", sv:"g\u00f6r det igen" },
  { mood:"spicy", type:"qf", en:"don't stop", sv:"sluta inte" },
  { mood:"spicy", type:"qf", en:"we have ten minutes", sv:"vi har tio minuter" },
  { mood:"spicy", type:"qf", en:"lock the door", sv:"l\u00e5s d\u00f6rren" },
  { mood:"spicy", type:"qf", en:"what are you wearing", sv:"vad har du p\u00e5 dig" },
  { mood:"spicy", type:"qf", en:"get over here", sv:"kom hit" },
  { mood:"spicy", type:"qf", en:"I was thinking about last Tuesday", sv:"jag tänkte på i tisdags" },
  { mood:"spicy", type:"qf", en:"the kids are asleep", sv:"barnen sover" },
  { mood:"spicy", type:"qf", en:"leave the lights on", sv:"låt lamporna vara på" },

  // ══════════════════════════════════════
  // SPICY — adjective phrases
  // ══════════════════════════════════════
  { mood:"spicy", type:"ap", en:"dangerously attractive", sv:"farligt attraktiv" },
  { mood:"spicy", type:"ap", en:"deliberately slow", sv:"avsiktligt l\u00e5ngsam" },
  { mood:"spicy", type:"ap", en:"barely dressed", sv:"knappt kl\u00e4dd" },
  { mood:"spicy", type:"ap", en:"extremely distracting", sv:"extremt distraherande" },

  // ══════════════════════════════════════
  // MIX — noun phrases
  // ══════════════════════════════════════
  { mood:"mix", type:"np", en:"cheese and wine at 11pm", sv:"ost och vin klockan 23" },
  { mood:"mix", type:"np", en:"a takeaway on the kitchen floor", sv:"takeaway p\u00e5 k\u00f6ksgolvet" },
  { mood:"mix", type:"np", en:"that one song in the car", sv:"den d\u00e4r l\u00e5ten i bilen" },
  { mood:"mix", type:"np", en:"the couch, a blanket, and silence", sv:"soffan, en filt, och tystnad" },
  { mood:"mix", type:"np", en:"a plan that went perfectly wrong", sv:"en plan som gick perfekt fel" },
  { mood:"mix", type:"np", en:"{p2}'s cold feet at 3am", sv:"{p2}s kalla f\u00f6tter klockan tre" },
  { mood:"mix", type:"np", en:"the grocery store on a Sunday", sv:"matbutiken p\u00e5 en s\u00f6ndag" },
  { mood:"mix", type:"np", en:"{p1}'s terrible cooking", sv:"{p1}s hemska matlagning" },
  { mood:"mix", type:"np", en:"the wrong exit on the highway", sv:"fel avfart p\u00e5 motorv\u00e4gen" },
  { mood:"mix", type:"np", en:"a shared Spotify queue", sv:"en delad Spotify-kö" },
  { mood:"mix", type:"np", en:"the 'we should try something new' conversation", sv:"'vi borde testa något nytt'-samtalet" },
  { mood:"mix", type:"np", en:"a two-person blanket burrito", sv:"en tvåpersons-filtburrito" },
  { mood:"mix", type:"np", en:"{p1}'s face during family dinners", sv:"{p1}s ansikte under familjemiddagar" },
  { mood:"mix", type:"np", en:"the bathroom door that doesn't lock", sv:"badrumsdörren som inte låser" },
  { mood:"mix", type:"np", en:"a midnight kebab run", sv:"en midnatts-kebabrunda" },

  // ══════════════════════════════════════
  // MIX — gerund phrases
  // ══════════════════════════════════════
  { mood:"mix", type:"gp", en:"laughing until one of us can't breathe", sv:"skratta tills en av oss inte kan andas" },
  { mood:"mix", type:"gp", en:"arguing about where to eat (again)", sv:"br\u00e5ka om var vi ska \u00e4ta (igen)" },
  { mood:"mix", type:"gp", en:"being embarrassing in public together", sv:"vara pinsamma offentligt ihop" },
  { mood:"mix", type:"gp", en:"falling asleep on the couch mid-sentence", sv:"somna p\u00e5 soffan mitt i en mening" },
  { mood:"mix", type:"gp", en:"{p1} making {p2} laugh at the worst time", sv:"{p1} f\u00e5r {p2} att skratta vid v\u00e4rsta tillf\u00e4llet" },
  { mood:"mix", type:"gp", en:"slow-dancing in the kitchen to nothing", sv:"dansa l\u00e5ngsamt i k\u00f6ket utan musik" },
  { mood:"mix", type:"gp", en:"sharing a toothbrush and pretending it's fine", sv:"dela tandborste och låtsas att det är ok" },
  { mood:"mix", type:"gp", en:"holding hands in the supermarket like teenagers", sv:"hålla hand i mataffären som tonåringar" },
  { mood:"mix", type:"gp", en:"{p2} stealing all the covers and denying it", sv:"{p2} som stjäl hela täcket och förnekar det" },
  { mood:"mix", type:"gp", en:"ugly-laughing at something nobody else finds funny", sv:"fulskratta åt något ingen annan tycker är roligt" },

  // ══════════════════════════════════════
  // MIX — quote fragments
  // ══════════════════════════════════════
  { mood:"mix", type:"qf", en:"you're stuck with me", sv:"du \u00e4r fast med mig" },
  { mood:"mix", type:"qf", en:"whose turn is it", sv:"vems tur \u00e4r det" },
  { mood:"mix", type:"qf", en:"just five more minutes", sv:"bara fem minuter till" },
  { mood:"mix", type:"qf", en:"I can explain", sv:"jag kan f\u00f6rklara" },
  { mood:"mix", type:"qf", en:"that was your idea", sv:"det var din idé" },
  { mood:"mix", type:"qf", en:"we're not doing this again", sv:"vi gör inte det här igen" },
  { mood:"mix", type:"qf", en:"I love you but absolutely not", sv:"jag älskar dig men absolut inte" },

  // ══════════════════════════════════════
  // MIX — adjective phrases
  // ══════════════════════════════════════
  { mood:"mix", type:"ap", en:"weirdly compatible", sv:"m\u00e4rkligt kompatibla" },
  { mood:"mix", type:"ap", en:"chaotically wholesome", sv:"kaotiskt gulliga" },
  { mood:"mix", type:"ap", en:"completely unhinged together", sv:"helt galna ihop" },
  { mood:"mix", type:"ap", en:"disgustingly cute", sv:"vedervärdigt söta" },
  { mood:"mix", type:"ap", en:"absolutely feral at home", sv:"helt vilda hemma" },
  { mood:"mix", type:"ap", en:"suspiciously synchronized", sv:"misstänkt synkade" }
];
