'use strict';

var chalk = require('chalk');
var discord_js = require('discord.js');
var mathjs = require('mathjs');

var wordList = [
	"ability",
	"able",
	"aboard",
	"about",
	"above",
	"accept",
	"accident",
	"according",
	"account",
	"accurate",
	"acres",
	"across",
	"act",
	"action",
	"active",
	"activity",
	"actual",
	"actually",
	"add",
	"addition",
	"additional",
	"adjective",
	"adult",
	"adventure",
	"advice",
	"affect",
	"afraid",
	"after",
	"afternoon",
	"again",
	"against",
	"age",
	"ago",
	"agree",
	"ahead",
	"aid",
	"air",
	"airplane",
	"alike",
	"alive",
	"all",
	"allow",
	"almost",
	"alone",
	"along",
	"aloud",
	"alphabet",
	"already",
	"also",
	"although",
	"am",
	"among",
	"amount",
	"ancient",
	"angle",
	"angry",
	"animal",
	"announced",
	"another",
	"answer",
	"ants",
	"any",
	"anybody",
	"anyone",
	"anything",
	"anyway",
	"anywhere",
	"apart",
	"apartment",
	"appearance",
	"apple",
	"applied",
	"appropriate",
	"are",
	"area",
	"arm",
	"army",
	"around",
	"arrange",
	"arrangement",
	"arrive",
	"arrow",
	"art",
	"article",
	"as",
	"aside",
	"ask",
	"asleep",
	"at",
	"ate",
	"atmosphere",
	"atom",
	"atomic",
	"attached",
	"attack",
	"attempt",
	"attention",
	"audience",
	"author",
	"automobile",
	"available",
	"average",
	"avoid",
	"aware",
	"away",
	"baby",
	"back",
	"bad",
	"badly",
	"bag",
	"balance",
	"ball",
	"balloon",
	"band",
	"bank",
	"bar",
	"bare",
	"bark",
	"barn",
	"base",
	"baseball",
	"basic",
	"basis",
	"basket",
	"bat",
	"battle",
	"be",
	"bean",
	"bear",
	"beat",
	"beautiful",
	"beauty",
	"became",
	"because",
	"become",
	"becoming",
	"bee",
	"been",
	"before",
	"began",
	"beginning",
	"begun",
	"behavior",
	"behind",
	"being",
	"believed",
	"bell",
	"belong",
	"below",
	"belt",
	"bend",
	"beneath",
	"bent",
	"beside",
	"best",
	"bet",
	"better",
	"between",
	"beyond",
	"bicycle",
	"bigger",
	"biggest",
	"bill",
	"birds",
	"birth",
	"birthday",
	"bit",
	"bite",
	"black",
	"blank",
	"blanket",
	"blew",
	"blind",
	"block",
	"blood",
	"blow",
	"blue",
	"board",
	"boat",
	"body",
	"bone",
	"book",
	"border",
	"born",
	"both",
	"bottle",
	"bottom",
	"bound",
	"bow",
	"bowl",
	"box",
	"boy",
	"brain",
	"branch",
	"brass",
	"brave",
	"bread",
	"break",
	"breakfast",
	"breath",
	"breathe",
	"breathing",
	"breeze",
	"brick",
	"bridge",
	"brief",
	"bright",
	"bring",
	"broad",
	"broke",
	"broken",
	"brother",
	"brought",
	"brown",
	"brush",
	"buffalo",
	"build",
	"building",
	"built",
	"buried",
	"burn",
	"burst",
	"bus",
	"bush",
	"business",
	"busy",
	"but",
	"butter",
	"buy",
	"by",
	"cabin",
	"cage",
	"cake",
	"call",
	"calm",
	"came",
	"camera",
	"camp",
	"can",
	"canal",
	"cannot",
	"cap",
	"capital",
	"captain",
	"captured",
	"car",
	"carbon",
	"card",
	"care",
	"careful",
	"carefully",
	"carried",
	"carry",
	"case",
	"cast",
	"castle",
	"cat",
	"catch",
	"cattle",
	"caught",
	"cause",
	"cave",
	"cell",
	"cent",
	"center",
	"central",
	"century",
	"certain",
	"certainly",
	"chain",
	"chair",
	"chamber",
	"chance",
	"change",
	"changing",
	"chapter",
	"character",
	"characteristic",
	"charge",
	"chart",
	"check",
	"cheese",
	"chemical",
	"chest",
	"chicken",
	"chief",
	"child",
	"children",
	"choice",
	"choose",
	"chose",
	"chosen",
	"church",
	"circle",
	"circus",
	"citizen",
	"city",
	"class",
	"classroom",
	"claws",
	"clay",
	"clean",
	"clear",
	"clearly",
	"climate",
	"climb",
	"clock",
	"close",
	"closely",
	"closer",
	"cloth",
	"clothes",
	"clothing",
	"cloud",
	"club",
	"coach",
	"coal",
	"coast",
	"coat",
	"coffee",
	"cold",
	"collect",
	"college",
	"colony",
	"color",
	"column",
	"combination",
	"combine",
	"come",
	"comfortable",
	"coming",
	"command",
	"common",
	"community",
	"company",
	"compare",
	"compass",
	"complete",
	"completely",
	"complex",
	"composed",
	"composition",
	"compound",
	"concerned",
	"condition",
	"congress",
	"connected",
	"consider",
	"consist",
	"consonant",
	"constantly",
	"construction",
	"contain",
	"continent",
	"continued",
	"contrast",
	"control",
	"conversation",
	"cook",
	"cookies",
	"cool",
	"copper",
	"copy",
	"corn",
	"corner",
	"correct",
	"correctly",
	"cost",
	"cotton",
	"could",
	"count",
	"country",
	"couple",
	"courage",
	"course",
	"court",
	"cover",
	"cow",
	"cowboy",
	"crack",
	"cream",
	"create",
	"creature",
	"crew",
	"crop",
	"cross",
	"crowd",
	"cry",
	"cup",
	"curious",
	"current",
	"curve",
	"customs",
	"cut",
	"cutting",
	"daily",
	"damage",
	"dance",
	"danger",
	"dangerous",
	"dark",
	"darkness",
	"date",
	"daughter",
	"dawn",
	"day",
	"dead",
	"deal",
	"dear",
	"death",
	"decide",
	"declared",
	"deep",
	"deeply",
	"deer",
	"definition",
	"degree",
	"depend",
	"depth",
	"describe",
	"desert",
	"design",
	"desk",
	"detail",
	"determine",
	"develop",
	"development",
	"diagram",
	"diameter",
	"did",
	"die",
	"differ",
	"difference",
	"different",
	"difficult",
	"difficulty",
	"dig",
	"dinner",
	"direct",
	"direction",
	"directly",
	"dirt",
	"dirty",
	"disappear",
	"discover",
	"discovery",
	"discuss",
	"discussion",
	"disease",
	"dish",
	"distance",
	"distant",
	"divide",
	"division",
	"do",
	"doctor",
	"does",
	"dog",
	"doing",
	"doll",
	"dollar",
	"done",
	"donkey",
	"door",
	"dot",
	"double",
	"doubt",
	"down",
	"dozen",
	"draw",
	"drawn",
	"dream",
	"dress",
	"drew",
	"dried",
	"drink",
	"drive",
	"driven",
	"driver",
	"driving",
	"drop",
	"dropped",
	"drove",
	"dry",
	"duck",
	"due",
	"dug",
	"dull",
	"during",
	"dust",
	"duty",
	"each",
	"eager",
	"ear",
	"earlier",
	"early",
	"earn",
	"earth",
	"easier",
	"easily",
	"east",
	"easy",
	"eat",
	"eaten",
	"edge",
	"education",
	"effect",
	"effort",
	"egg",
	"eight",
	"either",
	"electric",
	"electricity",
	"element",
	"elephant",
	"eleven",
	"else",
	"empty",
	"end",
	"enemy",
	"energy",
	"engine",
	"engineer",
	"enjoy",
	"enough",
	"enter",
	"entire",
	"entirely",
	"environment",
	"equal",
	"equally",
	"equator",
	"equipment",
	"escape",
	"especially",
	"essential",
	"establish",
	"even",
	"evening",
	"event",
	"eventually",
	"ever",
	"every",
	"everybody",
	"everyone",
	"everything",
	"everywhere",
	"evidence",
	"exact",
	"exactly",
	"examine",
	"example",
	"excellent",
	"except",
	"exchange",
	"excited",
	"excitement",
	"exciting",
	"exclaimed",
	"exercise",
	"exist",
	"expect",
	"experience",
	"experiment",
	"explain",
	"explanation",
	"explore",
	"express",
	"expression",
	"extra",
	"eye",
	"face",
	"facing",
	"fact",
	"factor",
	"factory",
	"failed",
	"fair",
	"fairly",
	"fall",
	"fallen",
	"familiar",
	"family",
	"famous",
	"far",
	"farm",
	"farmer",
	"farther",
	"fast",
	"fastened",
	"faster",
	"fat",
	"father",
	"favorite",
	"fear",
	"feathers",
	"feature",
	"fed",
	"feed",
	"feel",
	"feet",
	"fell",
	"fellow",
	"felt",
	"fence",
	"few",
	"fewer",
	"field",
	"fierce",
	"fifteen",
	"fifth",
	"fifty",
	"fight",
	"fighting",
	"figure",
	"fill",
	"film",
	"final",
	"finally",
	"find",
	"fine",
	"finest",
	"finger",
	"finish",
	"fire",
	"fireplace",
	"firm",
	"first",
	"fish",
	"five",
	"fix",
	"flag",
	"flame",
	"flat",
	"flew",
	"flies",
	"flight",
	"floating",
	"floor",
	"flow",
	"flower",
	"fly",
	"fog",
	"folks",
	"follow",
	"food",
	"foot",
	"football",
	"for",
	"force",
	"foreign",
	"forest",
	"forget",
	"forgot",
	"forgotten",
	"form",
	"former",
	"fort",
	"forth",
	"forty",
	"forward",
	"fought",
	"found",
	"four",
	"fourth",
	"fox",
	"frame",
	"free",
	"freedom",
	"frequently",
	"fresh",
	"friend",
	"friendly",
	"frighten",
	"frog",
	"from",
	"front",
	"frozen",
	"fruit",
	"fuel",
	"full",
	"fully",
	"fun",
	"function",
	"funny",
	"fur",
	"furniture",
	"further",
	"future",
	"gain",
	"game",
	"garage",
	"garden",
	"gas",
	"gasoline",
	"gate",
	"gather",
	"gave",
	"general",
	"generally",
	"gentle",
	"gently",
	"get",
	"getting",
	"giant",
	"gift",
	"girl",
	"give",
	"given",
	"giving",
	"glad",
	"glass",
	"globe",
	"go",
	"goes",
	"gold",
	"golden",
	"gone",
	"good",
	"goose",
	"got",
	"government",
	"grabbed",
	"grade",
	"gradually",
	"grain",
	"grandfather",
	"grandmother",
	"graph",
	"grass",
	"gravity",
	"gray",
	"great",
	"greater",
	"greatest",
	"greatly",
	"green",
	"grew",
	"ground",
	"group",
	"grow",
	"grown",
	"growth",
	"guard",
	"guess",
	"guide",
	"gulf",
	"gun",
	"habit",
	"had",
	"hair",
	"half",
	"halfway",
	"hall",
	"hand",
	"handle",
	"handsome",
	"hang",
	"happen",
	"happened",
	"happily",
	"happy",
	"harbor",
	"hard",
	"harder",
	"hardly",
	"has",
	"hat",
	"have",
	"having",
	"hay",
	"he",
	"headed",
	"heading",
	"health",
	"heard",
	"hearing",
	"heart",
	"heat",
	"heavy",
	"height",
	"held",
	"hello",
	"help",
	"helpful",
	"her",
	"herd",
	"here",
	"herself",
	"hidden",
	"hide",
	"high",
	"higher",
	"highest",
	"highway",
	"hill",
	"him",
	"himself",
	"his",
	"history",
	"hit",
	"hold",
	"hole",
	"hollow",
	"home",
	"honor",
	"hope",
	"horn",
	"horse",
	"hospital",
	"hot",
	"hour",
	"house",
	"how",
	"however",
	"huge",
	"human",
	"hundred",
	"hung",
	"hungry",
	"hunt",
	"hunter",
	"hurried",
	"hurry",
	"hurt",
	"husband",
	"ice",
	"idea",
	"identity",
	"if",
	"ill",
	"image",
	"imagine",
	"immediately",
	"importance",
	"important",
	"impossible",
	"improve",
	"in",
	"inch",
	"include",
	"including",
	"income",
	"increase",
	"indeed",
	"independent",
	"indicate",
	"individual",
	"industrial",
	"industry",
	"influence",
	"information",
	"inside",
	"instance",
	"instant",
	"instead",
	"instrument",
	"interest",
	"interior",
	"into",
	"introduced",
	"invented",
	"involved",
	"iron",
	"is",
	"island",
	"it",
	"its",
	"itself",
	"jack",
	"jar",
	"jet",
	"job",
	"join",
	"joined",
	"journey",
	"joy",
	"judge",
	"jump",
	"jungle",
	"just",
	"keep",
	"kept",
	"key",
	"kids",
	"kill",
	"kind",
	"kitchen",
	"knew",
	"knife",
	"know",
	"knowledge",
	"known",
	"label",
	"labor",
	"lack",
	"lady",
	"laid",
	"lake",
	"lamp",
	"land",
	"language",
	"large",
	"larger",
	"largest",
	"last",
	"late",
	"later",
	"laugh",
	"law",
	"lay",
	"layers",
	"lead",
	"leader",
	"leaf",
	"learn",
	"least",
	"leather",
	"leave",
	"leaving",
	"led",
	"left",
	"leg",
	"length",
	"lesson",
	"let",
	"letter",
	"level",
	"library",
	"lie",
	"life",
	"lift",
	"light",
	"like",
	"likely",
	"limited",
	"line",
	"lion",
	"lips",
	"liquid",
	"list",
	"listen",
	"little",
	"live",
	"living",
	"load",
	"local",
	"locate",
	"location",
	"log",
	"lonely",
	"long",
	"longer",
	"look",
	"loose",
	"lose",
	"loss",
	"lost",
	"lot",
	"loud",
	"love",
	"lovely",
	"low",
	"lower",
	"luck",
	"lucky",
	"lunch",
	"lungs",
	"lying",
	"machine",
	"machinery",
	"mad",
	"made",
	"magic",
	"magnet",
	"mail",
	"main",
	"mainly",
	"major",
	"make",
	"making",
	"man",
	"managed",
	"manner",
	"manufacturing",
	"many",
	"map",
	"mark",
	"market",
	"married",
	"mass",
	"massage",
	"master",
	"material",
	"mathematics",
	"matter",
	"may",
	"maybe",
	"me",
	"meal",
	"mean",
	"means",
	"meant",
	"measure",
	"meat",
	"medicine",
	"meet",
	"melted",
	"member",
	"memory",
	"men",
	"mental",
	"merely",
	"met",
	"metal",
	"method",
	"mice",
	"middle",
	"might",
	"mighty",
	"mile",
	"military",
	"milk",
	"mill",
	"mind",
	"mine",
	"minerals",
	"minute",
	"mirror",
	"missing",
	"mission",
	"mistake",
	"mix",
	"mixture",
	"model",
	"modern",
	"molecular",
	"moment",
	"money",
	"monkey",
	"month",
	"mood",
	"moon",
	"more",
	"morning",
	"most",
	"mostly",
	"mother",
	"motion",
	"motor",
	"mountain",
	"mouse",
	"mouth",
	"move",
	"movement",
	"movie",
	"moving",
	"mud",
	"muscle",
	"music",
	"musical",
	"must",
	"my",
	"myself",
	"mysterious",
	"nails",
	"name",
	"nation",
	"national",
	"native",
	"natural",
	"naturally",
	"nature",
	"near",
	"nearby",
	"nearer",
	"nearest",
	"nearly",
	"necessary",
	"neck",
	"needed",
	"needle",
	"needs",
	"negative",
	"neighbor",
	"neighborhood",
	"nervous",
	"nest",
	"never",
	"new",
	"news",
	"newspaper",
	"next",
	"nice",
	"night",
	"nine",
	"no",
	"nobody",
	"nodded",
	"noise",
	"none",
	"noon",
	"nor",
	"north",
	"nose",
	"not",
	"note",
	"noted",
	"nothing",
	"notice",
	"noun",
	"now",
	"number",
	"numeral",
	"nuts",
	"object",
	"observe",
	"obtain",
	"occasionally",
	"occur",
	"ocean",
	"of",
	"off",
	"offer",
	"office",
	"officer",
	"official",
	"oil",
	"old",
	"older",
	"oldest",
	"on",
	"once",
	"one",
	"only",
	"onto",
	"open",
	"operation",
	"opinion",
	"opportunity",
	"opposite",
	"or",
	"orange",
	"orbit",
	"order",
	"ordinary",
	"organization",
	"organized",
	"origin",
	"original",
	"other",
	"ought",
	"our",
	"ourselves",
	"out",
	"outer",
	"outline",
	"outside",
	"over",
	"own",
	"owner",
	"oxygen",
	"pack",
	"package",
	"page",
	"paid",
	"pain",
	"paint",
	"pair",
	"palace",
	"pale",
	"pan",
	"paper",
	"paragraph",
	"parallel",
	"parent",
	"park",
	"part",
	"particles",
	"particular",
	"particularly",
	"partly",
	"parts",
	"party",
	"pass",
	"passage",
	"past",
	"path",
	"pattern",
	"pay",
	"peace",
	"pen",
	"pencil",
	"people",
	"per",
	"percent",
	"perfect",
	"perfectly",
	"perhaps",
	"period",
	"person",
	"personal",
	"pet",
	"phrase",
	"physical",
	"piano",
	"pick",
	"picture",
	"pictured",
	"pie",
	"piece",
	"pig",
	"pile",
	"pilot",
	"pine",
	"pink",
	"pipe",
	"pitch",
	"place",
	"plain",
	"plan",
	"plane",
	"planet",
	"planned",
	"planning",
	"plant",
	"plastic",
	"plate",
	"plates",
	"play",
	"pleasant",
	"please",
	"pleasure",
	"plenty",
	"plural",
	"plus",
	"pocket",
	"poem",
	"poet",
	"poetry",
	"point",
	"pole",
	"police",
	"policeman",
	"political",
	"pond",
	"pony",
	"pool",
	"poor",
	"popular",
	"population",
	"porch",
	"port",
	"position",
	"positive",
	"possible",
	"possibly",
	"post",
	"pot",
	"potatoes",
	"pound",
	"pour",
	"powder",
	"power",
	"powerful",
	"practical",
	"practice",
	"prepare",
	"present",
	"president",
	"press",
	"pressure",
	"pretty",
	"prevent",
	"previous",
	"price",
	"pride",
	"primitive",
	"principal",
	"principle",
	"printed",
	"private",
	"prize",
	"probably",
	"problem",
	"process",
	"produce",
	"product",
	"production",
	"program",
	"progress",
	"promised",
	"proper",
	"properly",
	"property",
	"protection",
	"proud",
	"prove",
	"provide",
	"public",
	"pull",
	"pupil",
	"pure",
	"purple",
	"purpose",
	"push",
	"put",
	"putting",
	"quarter",
	"queen",
	"question",
	"quick",
	"quickly",
	"quiet",
	"quietly",
	"quite",
	"rabbit",
	"race",
	"radio",
	"railroad",
	"rain",
	"raise",
	"ran",
	"ranch",
	"range",
	"rapidly",
	"rate",
	"rather",
	"raw",
	"rays",
	"reach",
	"read",
	"reader",
	"ready",
	"real",
	"realize",
	"rear",
	"reason",
	"recall",
	"receive",
	"recent",
	"recently",
	"recognize",
	"record",
	"red",
	"refer",
	"refused",
	"region",
	"regular",
	"related",
	"relationship",
	"religious",
	"remain",
	"remarkable",
	"remember",
	"remove",
	"repeat",
	"replace",
	"replied",
	"report",
	"represent",
	"require",
	"research",
	"respect",
	"rest",
	"result",
	"return",
	"review",
	"rhyme",
	"rhythm",
	"rice",
	"rich",
	"ride",
	"riding",
	"right",
	"ring",
	"rise",
	"rising",
	"river",
	"road",
	"roar",
	"rock",
	"rocket",
	"rocky",
	"rod",
	"roll",
	"roof",
	"room",
	"root",
	"rope",
	"rose",
	"rough",
	"round",
	"route",
	"row",
	"rubbed",
	"rubber",
	"rule",
	"ruler",
	"run",
	"running",
	"rush",
	"sad",
	"saddle",
	"safe",
	"safety",
	"said",
	"sail",
	"sale",
	"salmon",
	"salt",
	"same",
	"sand",
	"sang",
	"sat",
	"satellites",
	"satisfied",
	"save",
	"saved",
	"saw",
	"say",
	"scale",
	"scared",
	"scene",
	"school",
	"science",
	"scientific",
	"scientist",
	"score",
	"screen",
	"sea",
	"search",
	"season",
	"seat",
	"second",
	"secret",
	"section",
	"see",
	"seed",
	"seeing",
	"seems",
	"seen",
	"seldom",
	"select",
	"selection",
	"sell",
	"send",
	"sense",
	"sent",
	"sentence",
	"separate",
	"series",
	"serious",
	"serve",
	"service",
	"sets",
	"setting",
	"settle",
	"settlers",
	"seven",
	"several",
	"shade",
	"shadow",
	"shake",
	"shaking",
	"shall",
	"shallow",
	"shape",
	"share",
	"sharp",
	"she",
	"sheep",
	"sheet",
	"shelf",
	"shells",
	"shelter",
	"shine",
	"shinning",
	"ship",
	"shirt",
	"shoe",
	"shoot",
	"shop",
	"shore",
	"short",
	"shorter",
	"shot",
	"should",
	"shoulder",
	"shout",
	"show",
	"shown",
	"shut",
	"sick",
	"sides",
	"sight",
	"sign",
	"signal",
	"silence",
	"silent",
	"silk",
	"silly",
	"silver",
	"similar",
	"simple",
	"simplest",
	"simply",
	"since",
	"sing",
	"single",
	"sink",
	"sister",
	"sit",
	"sitting",
	"situation",
	"six",
	"size",
	"skill",
	"skin",
	"sky",
	"slabs",
	"slave",
	"sleep",
	"slept",
	"slide",
	"slight",
	"slightly",
	"slip",
	"slipped",
	"slope",
	"slow",
	"slowly",
	"small",
	"smaller",
	"smallest",
	"smell",
	"smile",
	"smoke",
	"smooth",
	"snake",
	"snow",
	"so",
	"soap",
	"social",
	"society",
	"soft",
	"softly",
	"soil",
	"solar",
	"sold",
	"soldier",
	"solid",
	"solution",
	"solve",
	"some",
	"somebody",
	"somehow",
	"someone",
	"something",
	"sometime",
	"somewhere",
	"son",
	"song",
	"soon",
	"sort",
	"sound",
	"source",
	"south",
	"southern",
	"space",
	"speak",
	"special",
	"species",
	"specific",
	"speech",
	"speed",
	"spell",
	"spend",
	"spent",
	"spider",
	"spin",
	"spirit",
	"spite",
	"split",
	"spoken",
	"sport",
	"spread",
	"spring",
	"square",
	"stage",
	"stairs",
	"stand",
	"standard",
	"star",
	"stared",
	"start",
	"state",
	"statement",
	"station",
	"stay",
	"steady",
	"steam",
	"steel",
	"steep",
	"stems",
	"step",
	"stepped",
	"stick",
	"stiff",
	"still",
	"stock",
	"stomach",
	"stone",
	"stood",
	"stop",
	"stopped",
	"store",
	"storm",
	"story",
	"stove",
	"straight",
	"strange",
	"stranger",
	"straw",
	"stream",
	"street",
	"strength",
	"stretch",
	"strike",
	"string",
	"strip",
	"strong",
	"stronger",
	"struck",
	"structure",
	"struggle",
	"stuck",
	"student",
	"studied",
	"studying",
	"subject",
	"substance",
	"success",
	"successful",
	"such",
	"sudden",
	"suddenly",
	"sugar",
	"suggest",
	"suit",
	"sum",
	"summer",
	"sun",
	"sunlight",
	"supper",
	"supply",
	"support",
	"suppose",
	"sure",
	"surface",
	"surprise",
	"surrounded",
	"swam",
	"sweet",
	"swept",
	"swim",
	"swimming",
	"swing",
	"swung",
	"syllable",
	"symbol",
	"system",
	"table",
	"tail",
	"take",
	"taken",
	"tales",
	"talk",
	"tall",
	"tank",
	"tape",
	"task",
	"taste",
	"taught",
	"tax",
	"tea",
	"teach",
	"teacher",
	"team",
	"tears",
	"teeth",
	"telephone",
	"television",
	"tell",
	"temperature",
	"ten",
	"tent",
	"term",
	"terrible",
	"test",
	"than",
	"thank",
	"that",
	"thee",
	"them",
	"themselves",
	"then",
	"theory",
	"there",
	"therefore",
	"these",
	"they",
	"thick",
	"thin",
	"thing",
	"think",
	"third",
	"thirty",
	"this",
	"those",
	"thou",
	"though",
	"thought",
	"thousand",
	"thread",
	"three",
	"threw",
	"throat",
	"through",
	"throughout",
	"throw",
	"thrown",
	"thumb",
	"thus",
	"thy",
	"tide",
	"tie",
	"tight",
	"tightly",
	"till",
	"time",
	"tin",
	"tiny",
	"tip",
	"tired",
	"title",
	"to",
	"tobacco",
	"today",
	"together",
	"told",
	"tomorrow",
	"tone",
	"tongue",
	"tonight",
	"too",
	"took",
	"tool",
	"top",
	"topic",
	"torn",
	"total",
	"touch",
	"toward",
	"tower",
	"town",
	"toy",
	"trace",
	"track",
	"trade",
	"traffic",
	"trail",
	"train",
	"transportation",
	"trap",
	"travel",
	"treated",
	"tree",
	"triangle",
	"tribe",
	"trick",
	"tried",
	"trip",
	"troops",
	"tropical",
	"trouble",
	"truck",
	"trunk",
	"truth",
	"try",
	"tube",
	"tune",
	"turn",
	"twelve",
	"twenty",
	"twice",
	"two",
	"type",
	"typical",
	"uncle",
	"under",
	"underline",
	"understanding",
	"unhappy",
	"union",
	"unit",
	"universe",
	"unknown",
	"unless",
	"until",
	"unusual",
	"up",
	"upon",
	"upper",
	"upward",
	"us",
	"use",
	"useful",
	"using",
	"usual",
	"usually",
	"valley",
	"valuable",
	"value",
	"vapor",
	"variety",
	"various",
	"vast",
	"vegetable",
	"verb",
	"vertical",
	"very",
	"vessels",
	"victory",
	"view",
	"village",
	"visit",
	"visitor",
	"voice",
	"volume",
	"vote",
	"vowel",
	"voyage",
	"wagon",
	"wait",
	"walk",
	"wall",
	"want",
	"war",
	"warm",
	"warn",
	"was",
	"wash",
	"waste",
	"watch",
	"water",
	"wave",
	"way",
	"we",
	"weak",
	"wealth",
	"wear",
	"weather",
	"week",
	"weigh",
	"weight",
	"welcome",
	"well",
	"went",
	"were",
	"west",
	"western",
	"wet",
	"whale",
	"what",
	"whatever",
	"wheat",
	"wheel",
	"when",
	"whenever",
	"where",
	"wherever",
	"whether",
	"which",
	"while",
	"whispered",
	"whistle",
	"white",
	"who",
	"whole",
	"whom",
	"whose",
	"why",
	"wide",
	"widely",
	"wife",
	"wild",
	"will",
	"willing",
	"win",
	"wind",
	"window",
	"wing",
	"winter",
	"wire",
	"wise",
	"wish",
	"with",
	"within",
	"without",
	"wolf",
	"women",
	"won",
	"wonder",
	"wonderful",
	"wood",
	"wooden",
	"wool",
	"word",
	"wore",
	"work",
	"worker",
	"world",
	"worried",
	"worry",
	"worse",
	"worth",
	"would",
	"wrapped",
	"write",
	"writer",
	"writing",
	"written",
	"wrong",
	"wrote",
	"yard",
	"year",
	"yellow",
	"yes",
	"yesterday",
	"yet",
	"you",
	"young",
	"younger",
	"your",
	"yourself",
	"youth",
	"zero",
	"zebra",
	"zipper",
	"zoo",
	"zulu"
];

const getRandomString = function (length) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};
const createButton = function (label, disabled) {
    let style = discord_js.ButtonStyle.Primary;
    if (label === 'AC' || label === 'DC' || label === '⌫') {
        style = discord_js.ButtonStyle.Success;
    }
    else if (label === '=') {
        style = discord_js.ButtonStyle.Danger;
    }
    else if (label === '(' ||
        label === ')' ||
        label === '^' ||
        label === '%' ||
        label === '÷' ||
        label === 'x' ||
        label === '-' ||
        label === '+' ||
        label === '.') {
        style = discord_js.ButtonStyle.Primary;
    }
    {
        const btn = new discord_js.ButtonBuilder().setLabel(label).setStyle(style);
        if (label === '\u200b') {
            btn.setDisabled();
            btn.setCustomId(getRandomString(10));
        }
        else {
            btn.setCustomId('cal' + label);
        }
        return btn;
    }
};
const addRow = function (btns) {
    const row = new discord_js.ActionRowBuilder();
    for (const btn of btns) {
        row.addComponents(btn);
    }
    return row;
};
const getRandomSentence = function (length) {
    const word = [];
    const words = wordList;
    for (let i = 0; i < length; i++) {
        word.push(words[Math.floor(Math.random() * words.length)]);
    }
    return word;
};
const convertTime = function (time) {
    const absoluteSeconds = Math.floor((time / 1000) % 60);
    const absoluteMinutes = Math.floor((time / (1000 * 60)) % 60);
    const absoluteHours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const absoluteDays = Math.floor((time / (1000 * 60 * 60 * 24)));
    const d = absoluteDays
        ? absoluteDays === 1
            ? '1 day'
            : `${absoluteDays} days`
        : null;
    const h = absoluteHours
        ? absoluteHours === 1
            ? '1 hour'
            : `${absoluteHours} hours`
        : null;
    const m = absoluteMinutes
        ? absoluteMinutes === 1
            ? '1 minute'
            : `${absoluteMinutes} minutes`
        : null;
    const s = absoluteSeconds
        ? absoluteSeconds === 1
            ? '1 second'
            : `${absoluteSeconds} seconds`
        : null;
    const absoluteTime = [];
    if (d)
        absoluteTime.push(d);
    if (h)
        absoluteTime.push(h);
    if (m)
        absoluteTime.push(m);
    if (s)
        absoluteTime.push(s);
    return absoluteTime.join(', ');
};

const Calculator = async (options) => {
    if (!options)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No options provided.");
    if (typeof options !== "object")
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Options must be an object.");
    let interaction;
    if (!options.interaction)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No interaction provided.");
    if (typeof options.interaction !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Interaction must be an object.");
    }
    if (options.interaction instanceof discord_js.Message) {
        interaction = options.interaction;
    }
    else if (options.interaction instanceof discord_js.ChatInputCommandInteraction) {
        interaction = options.interaction;
    }
    if (!interaction)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No interaction provided.");
    if (!options.client)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No client provided.");
    if (typeof options.client !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Client must be an object.");
    }
    let client = options.client;
    if (!options.embed)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No embed options provided.");
    if (typeof options.embed !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed options must be an object.");
    }
    if (!options.embed.color)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No embed color provided.");
    if (!options.embed.title)
        throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No embed title provided.");
    if (options.embed.url && typeof options.embed.url !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed URL must be a string.");
    }
    if (options.embed.author) {
        if (typeof options.embed.author !== "object") {
            throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed author must be an object.");
        }
        if (!options.embed.author.name)
            throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No embed author name provided.");
        if (options.embed.author.icon_url && typeof options.embed.author.icon_url !== "string") {
            throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed author icon URL must be a string.");
        }
        if (options.embed.author.url && typeof options.embed.author.url !== "string") {
            throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed author URL must be a string.");
        }
    }
    if (options.embed.description && typeof options.embed.description !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed description must be a string.");
    }
    if (options.embed.fields) {
        if (!Array.isArray(options.embed.fields)) {
            throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed fields must be an array.");
        }
        for (const field of options.embed.fields) {
            if (typeof field !== "object") {
                throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed field must be an object.");
            }
            if (!field.name)
                throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No embed field name provided.");
            if (!field.value)
                throw new Error(chalk.red("[@m3rcena/weky] Calculator Error:") + " No embed field value provided.");
            if (field.inline && typeof field.inline !== "boolean") {
                throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed field inline must be a boolean.");
            }
        }
    }
    if (options.embed.image && typeof options.embed.image !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed image must be a string.");
    }
    if (options.embed.timestamp && !(options.embed.timestamp instanceof Date)) {
        throw new Error(chalk.red("[@m3rcena/weky] Calculator TypeError:") + " Embed timestamp must be a date.");
    }
    let str = ' ';
    let stringify = '```\n' + str + '\n```';
    const row = [];
    const button = new Array([], [], [], [], []);
    new Array([], [], [], [], []);
    const text = [
        '(',
        ')',
        '^',
        '%',
        'AC',
        '7',
        '8',
        '9',
        '÷',
        'DC',
        '4',
        '5',
        '6',
        'x',
        '⌫',
        '1',
        '2',
        '3',
        ' - ',
        'LOG',
        '.',
        '0',
        '=',
        ' + ',
        'SQRT',
    ];
    let current = 0;
    for (let i = 0; i < text.length; i++) {
        if (button[current].length === 5)
            current++;
        button[current].push(createButton(text[i]));
        if (i === text.length - 1) {
            for (const btn of button)
                row.push(addRow(btn));
        }
    }
    const iconURL = options.embed.footer ? options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined : undefined;
    let embed = new discord_js.EmbedBuilder()
        .setTitle(options.embed.title)
        .setDescription(stringify)
        .setColor(options.embed.color)
        .setURL(options.embed.url ? options.embed.url : null)
        .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
        .addFields(options.embed.fields ? options.embed.fields : [])
        .setImage(options.embed.image ? options.embed.image : null)
        .setTimestamp(options.embed.timestamp ? options.embed.timestamp : null);
    if (options.embed.author) {
        const author = ({
            name: options.embed.author.name,
            iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
            url: options.embed.author.url ? options.embed.author.url : undefined
        });
        embed.setAuthor(author);
    }
    if (options.embed.footer) {
        const footer = ({
            text: options.embed.footer.text,
            iconURL: iconURL ? iconURL : undefined
        });
        embed.setFooter(footer);
    }
    options.interaction.reply({
        embeds: [embed],
        components: row,
    }).then(async (msg) => {
        async function edit() {
            let _embed = new discord_js.EmbedBuilder()
                .setTitle(options.embed.title)
                .setDescription(stringify)
                .setColor(options.embed.color)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .addFields(options.embed.fields ? options.embed.fields : [])
                .setImage(options.embed.image ? options.embed.image : null)
                .setTimestamp(new Date());
            if (options.embed.author) {
                const author = ({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
                _embed.setAuthor(author);
            }
            if (options.embed.footer) {
                const footer = ({
                    text: options.embed.footer.text,
                    iconURL: iconURL ? iconURL : undefined
                });
                _embed.setFooter(footer);
            }
            msg.edit({
                embeds: [_embed],
                components: row,
            });
        }
        async function lock(disabled) {
            let _embed = new discord_js.EmbedBuilder()
                .setTitle(options.embed.title)
                .setDescription(stringify)
                .setColor(options.embed.color)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .addFields(options.embed.fields ? options.embed.fields : [])
                .setImage(options.embed.image ? options.embed.image : null)
                .setTimestamp(new Date());
            if (options.embed.author) {
                const author = ({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
                _embed.setAuthor(author);
            }
            if (options.embed.footer) {
                const footer = ({
                    text: options.embed.footer.text,
                    iconURL: iconURL ? iconURL : undefined
                });
                _embed.setFooter(footer);
            }
            msg.edit({
                embeds: [_embed],
                components: [],
            });
        }
        let id;
        if (interaction instanceof discord_js.Message) {
            id = interaction.author.id;
        }
        else if (interaction instanceof discord_js.ChatInputCommandInteraction) {
            id = interaction.user.id;
        }
        const calc = msg.createMessageComponentCollector({
            componentType: discord_js.ComponentType.Button,
            time: 300000,
        });
        calc.on('collect', async (interact) => {
            if (interact.user.id !== id) {
                return interact.reply({
                    embeds: [
                        new discord_js.EmbedBuilder()
                            .setTitle(options.embed.title ? options.embed.title : 'Error | Weky Calculator')
                            .setDescription(`You are not allowed to interact with this calculator as you are not the user who initiated the command.\n\n**Note:** This calculator is only for the user <@${id}>`)
                            .setColor('Red')
                            .setTimestamp(new Date())
                    ],
                    ephemeral: true
                });
            }
            if (interact.customId !== 'calLOG' && interact.customId !== 'calSQRT')
                await interact.deferUpdate();
            if (interact.customId === 'calAC') {
                str = ' ';
                stringify = '```\n' + str + '\n```';
                edit();
            }
            else if (interact.customId === 'calx') {
                str += ' * ';
                stringify = '```\n' + str + '\n```';
                edit();
            }
            else if (interact.customId === 'cal÷') {
                str += ' / ';
                stringify = '```\n' + str + '\n```';
                edit();
            }
            else if (interact.customId === 'cal⌫') {
                if (str === ' ' || str === '' || str === null || str === undefined) {
                    return;
                }
                else {
                    str.slice(0, -1);
                    stringify = '```\n' + str + '\n```';
                    edit();
                }
            }
            else if (interact.customId === 'cal=') {
                if (str === ' ' || str === '' || str === null || str === undefined) {
                    return;
                }
                else {
                    try {
                        str += ' = ' + mathjs.evaluate(str);
                        stringify = '```\n' + str + '\n```';
                        edit();
                        str = ' ';
                        stringify = '```\n' + str + '\n```';
                    }
                    catch (e) {
                        if (options.invalidQuery === undefined) {
                            return;
                        }
                        else {
                            str = options.invalidQuery;
                            stringify = '```\n' + str + '\n```';
                            edit();
                            str = ' ';
                            stringify = '```\n' + str + '\n```';
                        }
                    }
                }
            }
            else if (interact.customId === 'calDC') {
                str = "Disabled Calculator";
                stringify = '```\n' + str + '\n```';
                edit();
                calc.stop();
            }
            else if (interact.customId === 'calLOG') {
                const modal = new discord_js.ModalBuilder()
                    .setTitle('Logarithm')
                    .setCustomId('mdLog');
                const input = new discord_js.TextInputBuilder()
                    .setCustomId('numberLog')
                    .setLabel('Enter the number to log')
                    .setStyle(discord_js.TextInputStyle.Short)
                    .setRequired(true);
                const actionRow = new discord_js.ActionRowBuilder().addComponents(input);
                modal.addComponents(actionRow);
                await interact.showModal(modal);
                client.on('interactionCreate', async (modal) => {
                    if (!modal.isModalSubmit())
                        return;
                    if (modal.customId === 'mdLog') {
                        modal.deferUpdate();
                        const number = modal.fields.getTextInputValue('numberLog');
                        try {
                            str += 'log(' + number + ')';
                            stringify = '```\n' + str + '\n```';
                            edit();
                        }
                        catch (e) {
                            str = 'Invalid Number';
                            stringify = '```\n' + str + '\n```';
                            edit();
                        }
                    }
                });
            }
            else if (interact.customId === 'calSQRT') {
                const modal = new discord_js.ModalBuilder()
                    .setTitle('Square Root')
                    .setCustomId('mdSqrt');
                const input = new discord_js.TextInputBuilder()
                    .setCustomId('numberSqrt')
                    .setLabel('Enter the number to square root')
                    .setStyle(discord_js.TextInputStyle.Short)
                    .setRequired(true);
                const actionRow = new discord_js.ActionRowBuilder().addComponents(input);
                modal.addComponents(actionRow);
                await interact.showModal(modal);
                client.on('interactionCreate', async (modal) => {
                    if (!modal.isModalSubmit())
                        return;
                    if (modal.customId === 'mdSqrt') {
                        modal.deferUpdate();
                        const number = modal.fields.getTextInputValue('numberSqrt');
                        try {
                            str += 'sqrt(' + number + ')';
                            stringify = '```\n' + str + '\n```';
                            edit();
                        }
                        catch (e) {
                            str = 'Invalid Number';
                            stringify = '```\n' + str + '\n```';
                            edit();
                        }
                    }
                });
            }
            else {
                str += interact.customId.replace('cal', '');
                stringify = '```\n' + str + '\n```';
                edit();
            }
        });
        calc.on('end', async () => {
            str = 'Calculator has been stopped';
            stringify = '```\n' + str + '\n```';
            edit();
            lock();
        });
    });
};

const data$1 = new Set();
const ChaosWords = async (options) => {
    if (!options)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No options provided.");
    if (typeof options !== "object")
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Options must be an object.");
    let interaction;
    if (!options.interaction)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No interaction provided.");
    if (typeof options.interaction !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Interaction must be an object.");
    }
    if (options.interaction instanceof discord_js.Message) {
        interaction = options.interaction;
    }
    else if (options.interaction instanceof discord_js.ChatInputCommandInteraction) {
        interaction = options.interaction;
    }
    if (!interaction)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No interaction provided.");
    if (!options.client)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No client provided.");
    if (typeof options.client !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Client must be an object.");
    }
    options.client;
    if (!options.embed)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed options provided.");
    if (typeof options.embed !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed options must be an object.");
    }
    if (!options.embed.color)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed color provided.");
    if (!options.embed.title)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed title provided.");
    if (options.embed.url && typeof options.embed.url !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed URL must be a string.");
    }
    if (options.embed.author) {
        if (typeof options.embed.author !== "object") {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed author must be an object.");
        }
        if (!options.embed.author.name)
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed author name provided.");
        if (options.embed.author.icon_url && typeof options.embed.author.icon_url !== "string") {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed author icon URL must be a string.");
        }
        if (options.embed.author.url && typeof options.embed.author.url !== "string") {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed author URL must be a string.");
        }
    }
    if (options.embed.description && typeof options.embed.description !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed description must be a string.");
    }
    if (options.embed.fields) {
        if (!Array.isArray(options.embed.fields)) {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed fields must be an array.");
        }
        for (const field of options.embed.fields) {
            if (typeof field !== "object") {
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed field must be an object.");
            }
            if (!field.name)
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed field name provided.");
            if (!field.value)
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed field value provided.");
            if (field.inline && typeof field.inline !== "boolean") {
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed field inline must be a boolean.");
            }
        }
    }
    if (options.embed.image && typeof options.embed.image !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed image must be a string.");
    }
    if (options.embed.timestamp && !(options.embed.timestamp instanceof Date)) {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed timestamp must be a date.");
    }
    let id = "";
    if (options.interaction instanceof discord_js.Message) {
        id = options.interaction.author.id;
    }
    else if (options.interaction instanceof discord_js.ChatInputCommandInteraction) {
        id = options.interaction.user.id;
    }
    if (data$1.has(id))
        return;
    data$1.add(id);
    const ids = getRandomString(20) +
        '-' +
        getRandomString(20) +
        '-' +
        getRandomString(20) +
        '-' +
        getRandomString(20);
    let tries = 0;
    const array = [];
    let remaining = 0;
    const guessed = [];
    let words = options.words ? options.words : getRandomSentence(Math.floor(Math.random() * 6) + 2);
    let charGenerated = options.charGenerated ? options.charGenerated : options.words ? options.words.join('').length - 1 : 0;
    if (words.join('').length > charGenerated) {
        charGenerated = words.join('').length - 1;
    }
    for (let i = 0; i < charGenerated; i++) {
        array.push('abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 'abcdefghijklmnopqrstuvwxyz'.length)));
    }
    words.forEach((e) => {
        array.splice(Math.floor(Math.random() * array.length), 0, e);
    });
    let fields = [];
    if (!options.embed.fields) {
        fields = [
            {
                name: 'Sentence:',
                value: array.join('')
            },
            {
                name: 'Words Founds:',
                value: `${remaining} / ${words.length}`
            },
            {
                name: 'Words Found / Remaining:',
                value: `${guessed.join(', ')}`
            },
            {
                name: 'Words:',
                value: words.join(', ')
            }
        ];
    }
    let embed = new discord_js.EmbedBuilder()
        .setTitle(options.embed.title)
        .setDescription(options.embed.description ?
        options.embed.description.replace('{{time}}', convertTime(options.time ? options.time : 60000)) :
        `You have **${convertTime(options.time ? options.time : 60000)}** to find the correct words in the chaos above.`)
        .setColor(options.embed.color)
        .setTimestamp(options.embed.timestamp ? options.embed.timestamp : null)
        .setURL(options.embed.url ? options.embed.url : null)
        .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
        .setImage(options.embed.image ? options.embed.image : null);
    if (options.embed.author) {
        embed.setAuthor({
            name: options.embed.author.name,
            iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
            url: options.embed.author.url ? options.embed.author.url : undefined
        });
    }
    if (options.embed.footer) {
        embed.setFooter({
            text: options.embed.footer.text,
            iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
        });
    }
    if (options.embed.fields) {
        embed.setFields(options.embed.fields);
    }
    if (!options.embed.fields) {
        fields = [
            {
                name: 'Sentence:',
                value: array.join('')
            },
            {
                name: 'Words Founds:',
                value: `${remaining} / ${words.length}`
            },
            {
                name: 'Words Found / Remaining:',
                value: `${guessed.join(', ')}`
            },
            {
                name: 'Words:',
                value: words.join(', ')
            }
        ];
        let _field = [];
        fields.map((field, index) => {
            if (index < 2) {
                _field.push({
                    name: `${field.name}`,
                    value: `${field.value}`
                });
            }
        });
        embed.setFields(_field);
    }
    let btn1 = new discord_js.ButtonBuilder()
        .setStyle(discord_js.ButtonStyle.Danger)
        .setLabel(options.buttonText ? options.buttonText : "Cancel")
        .setCustomId(ids);
    const msg = await interaction.reply({
        embeds: [embed],
        components: [{ type: 1, components: [btn1] }]
    });
    const gameCreatedAt = Date.now();
    const filter = (m) => m.author.id === id;
    let game;
    if (interaction instanceof discord_js.Message) {
        game = await interaction.channel.createMessageCollector({
            filter,
            time: options.time ? options.time : 60000
        });
    }
    else {
        if (!interaction.channel || !interaction.channel.isTextBased())
            return;
        game = interaction.channel.createMessageCollector({
            filter,
            time: options.time ? options.time : 60000
        });
    }
    game.on('collect', async (mes) => {
        if (words === undefined)
            return;
        const condition = words.includes(mes.content.toLowerCase()) &&
            !guessed.includes(mes.content.toLowerCase());
        if (condition) {
            remaining++;
            array.splice(array.indexOf(mes.content.toLowerCase()), 1);
            guessed.push(mes.content.toLowerCase());
            let _embed = new discord_js.EmbedBuilder()
                .setTitle(options.embed.title)
                .setDescription(options.embed.description ?
                options.embed.description.replace('{{time}}', convertTime(options.time ? options.time : 60000)) :
                `You have **${convertTime(options.time ? options.time : 60000)}** to find the correct words in the chaos above.`)
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .setImage(options.embed.image ? options.embed.image : null);
            if (options.embed.author) {
                _embed.setAuthor({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
            }
            if (options.embed.footer) {
                _embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            if (options.embed.fields) {
                _embed.setFields(options.embed.fields);
            }
            else {
                fields = [
                    {
                        name: 'Sentence:',
                        value: array.join('')
                    },
                    {
                        name: 'Words Founds:',
                        value: `${remaining} / ${words.length}`
                    },
                    {
                        name: 'Words Found / Remaining:',
                        value: `${guessed.join(', ')}`
                    },
                    {
                        name: 'Words:',
                        value: words.join(', ')
                    }
                ];
                let _field = [];
                fields.map((field, index) => {
                    if (index < 3) {
                        _field.push({
                            name: `${field.name}`,
                            value: `${field.value}`
                        });
                    }
                });
                _embed.setFields(_field);
            }
            btn1 = new discord_js.ButtonBuilder()
                .setStyle(discord_js.ButtonStyle.Danger)
                .setLabel(options.buttonText ? options.buttonText : "Cancel")
                .setCustomId(ids);
            msg.edit({
                embeds: [_embed],
                components: [{ type: 1, components: [btn1] }]
            });
            if (remaining === words.length) {
                btn1 = new discord_js.ButtonBuilder()
                    .setStyle(discord_js.ButtonStyle.Danger)
                    .setLabel(options.buttonText ? options.buttonText : "Cancel")
                    .setDisabled()
                    .setCustomId(ids);
                msg.edit({
                    embeds: [embed],
                    components: [{
                            type: 1,
                            components: [btn1]
                        }]
                });
                const time = convertTime(Date.now() - gameCreatedAt);
                let __embed = new discord_js.EmbedBuilder()
                    .setTitle(options.embed.title)
                    .setDescription(options.winMessage ? options.winMessage.replace('{{time}}', time) : `You found all the words in **${time}**`)
                    .setColor(options.embed.color)
                    .setTimestamp(options.embed.timestamp ? new Date() : null)
                    .setURL(options.embed.url ? options.embed.url : null)
                    .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                    .setImage(options.embed.image ? options.embed.image : null);
                if (options.embed.author) {
                    __embed.setAuthor({
                        name: options.embed.author.name,
                        iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                        url: options.embed.author.url ? options.embed.author.url : undefined
                    });
                }
                if (options.embed.footer) {
                    __embed.setFooter({
                        text: options.embed.footer.text,
                        iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                    });
                }
                if (options.embed.fields) {
                    __embed.setFields(options.embed.fields);
                }
                else {
                    fields = [
                        {
                            name: 'Sentence:',
                            value: array.join('')
                        },
                        {
                            name: 'Words Founds:',
                            value: `${remaining} / ${words.length}`
                        },
                        {
                            name: 'Words Found / Remaining:',
                            value: `${guessed.join(', ')}`
                        },
                        {
                            name: 'Words:',
                            value: words.join(', ')
                        }
                    ];
                    let _field = [];
                    fields.map((field, index) => {
                        if (index === 0) {
                            _field.push({
                                name: `${field.name}`,
                                value: `${field.value}`
                            });
                        }
                        else if (index === 3) {
                            _field.push({
                                name: `${field.name}`,
                                value: `${field.value}`
                            });
                        }
                    });
                    __embed.setFields(_field);
                }
                msg.edit({
                    embeds: [__embed],
                    components: []
                });
                interaction.reply({
                    embeds: [__embed],
                });
                data$1.delete(id);
                return game.stop();
            }
            const __embed = new discord_js.EmbedBuilder()
                .setDescription(`
                    ${options.correctWord ?
                options.correctWord
                    .replace('{{word}}', mes.content.toLowerCase())
                    .replace('{{remaining}}', `${words.length - remaining}`)
                : `GG, **${mes.content.toLowerCase()}** was correct! You have to find **${words.length - remaining}** more word(s).`}
                    `)
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null);
            if (options.embed.footer) {
                __embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            mes.reply({
                embeds: [__embed],
            });
        }
        else {
            tries++;
            if (tries === (options.maxTries ? options.maxTries : 10)) {
                const _embed = new discord_js.EmbedBuilder()
                    .setTitle(options.embed.title)
                    .setDescription(options.loseMessage ? options.loseMessage : `You failed to find all the words in time.`)
                    .setColor(options.embed.color)
                    .setTimestamp(options.embed.timestamp ? new Date() : null)
                    .setURL(options.embed.url ? options.embed.url : null)
                    .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                    .setImage(options.embed.image ? options.embed.image : null);
                if (options.embed.author) {
                    _embed.setAuthor({
                        name: options.embed.author.name,
                        iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                        url: options.embed.author.url ? options.embed.author.url : undefined
                    });
                }
                if (options.embed.footer) {
                    _embed.setFooter({
                        text: options.embed.footer.text,
                        iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                    });
                }
                if (options.embed.fields) {
                    _embed.setFields(options.embed.fields);
                }
                else {
                    fields = [
                        {
                            name: 'Sentence:',
                            value: array.join('')
                        },
                        {
                            name: 'Words Founds:',
                            value: `${remaining} / ${words.length}`
                        },
                        {
                            name: 'Words Found / Remaining:',
                            value: `${guessed.join(', ')}`
                        },
                        {
                            name: 'Words:',
                            value: words.join(', ')
                        }
                    ];
                    let _fields = [];
                    fields.map((field, index) => {
                        if (index === 0) {
                            _fields.push({
                                name: `${field.name}`,
                                value: `${field.value}`
                            });
                        }
                        else if (index === 3) {
                            _fields.push({
                                name: `${field.name}`,
                                value: `${field.value}`
                            });
                        }
                    });
                    _embed.setFields(_fields);
                }
                btn1 = new discord_js.ButtonBuilder()
                    .setStyle(discord_js.ButtonStyle.Danger)
                    .setLabel(options.buttonText ? options.buttonText : "Cancel")
                    .setDisabled()
                    .setCustomId(ids);
                msg.edit({
                    embeds: [_embed],
                    components: [{ type: 1, components: [btn1] }]
                });
                interaction.reply({
                    embeds: [_embed],
                });
                data$1.delete(id);
                return game.stop();
            }
            const _embed = new discord_js.EmbedBuilder()
                .setDescription(`
                    ${options.wrongWord ?
                options.wrongWord.replace(`{{remaining_tries}}`, `${options.maxTries ? options.maxTries : 10 - tries}`) :
                `**${mes.content.toLowerCase()}** is not the correct word. You have **${options.maxTries ? options.maxTries : 10 - tries}** tries left.`}
                    `)
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null);
            if (options.embed.footer) {
                _embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            mes.reply({
                embeds: [_embed],
            });
        }
    });
    game.on('end', (mes, reason) => {
        if (reason === 'time') {
            const _embed = new discord_js.EmbedBuilder()
                .setTitle(options.embed.title)
                .setDescription(options.loseMessage ? options.loseMessage : `You failed to find all the words in time.`)
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .setImage(options.embed.image ? options.embed.image : null);
            if (options.embed.author) {
                _embed.setAuthor({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
            }
            if (options.embed.footer) {
                _embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            if (options.embed.fields) {
                _embed.setFields(options.embed.fields);
            }
            else {
                fields = [
                    {
                        name: 'Sentence:',
                        value: array.join('')
                    },
                    {
                        name: 'Words Founds:',
                        value: `${remaining} / ${words.length}`
                    },
                    {
                        name: 'Words Found / Remaining:',
                        value: `${guessed.join(', ')}`
                    },
                    {
                        name: 'Words:',
                        value: words.join(', ')
                    }
                ];
                let _fields = [];
                fields.map((field, index) => {
                    if (index === 0) {
                        _fields.push({
                            name: `${field.name}`,
                            value: `${field.value}`
                        });
                    }
                    else if (index === 3) {
                        _fields.push({
                            name: `${field.name}`,
                            value: `${field.value}`
                        });
                    }
                });
                _embed.setFields(_fields);
                let __fields = [];
                fields.map((field, index) => {
                    if (index < 2) {
                        __fields.push({
                            name: `${field.name}`,
                            value: `${field.value}`
                        });
                    }
                });
                embed.setFields(__fields);
            }
            btn1 = new discord_js.ButtonBuilder()
                .setStyle(discord_js.ButtonStyle.Danger)
                .setLabel(options.buttonText ? options.buttonText : "Cancel")
                .setDisabled()
                .setCustomId(ids);
            msg.edit({
                embeds: [embed],
                components: [{ type: 1, components: [btn1] }]
            });
            data$1.delete(id);
            interaction.reply({
                embeds: [_embed],
            });
        }
    });
    const gameCollector = msg.createMessageComponentCollector({
        componentType: discord_js.ComponentType.Button,
    });
    gameCollector.on('collect', async (button) => {
        await button.deferUpdate();
        btn1 = new discord_js.ButtonBuilder()
            .setStyle(discord_js.ButtonStyle.Danger)
            .setLabel(options.buttonText ? options.buttonText : "Cancel")
            .setDisabled()
            .setCustomId(ids);
        if (options.embed.fields) {
            embed.setFields(options.embed.fields);
        }
        else {
            fields = [
                {
                    name: 'Sentence:',
                    value: array.join('')
                },
                {
                    name: 'Words Founds:',
                    value: `${remaining} / ${words.length}`
                },
                {
                    name: 'Words Found / Remaining:',
                    value: `${guessed.join(', ')}`
                },
                {
                    name: 'Words:',
                    value: words.join(', ')
                }
            ];
            let _fields = [];
            fields.map((field, index) => {
                if (index < 2) {
                    _fields.push({
                        name: `${field.name}`,
                        value: `${field.value}`
                    });
                }
            });
            embed.setFields(_fields);
        }
        msg.edit({
            embeds: [embed],
            components: [{ type: 1, components: [btn1] }]
        });
        const _embed = new discord_js.EmbedBuilder()
            .setTitle(options.embed.title)
            .setDescription(options.loseMessage ? options.loseMessage : `The game has been stopped by <@${id}>`)
            .setColor(options.embed.color)
            .setTimestamp(options.embed.timestamp ? new Date() : null)
            .setURL(options.embed.url ? options.embed.url : null)
            .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
            .setImage(options.embed.image ? options.embed.image : null);
        if (options.embed.author) {
            _embed.setAuthor({
                name: options.embed.author.name,
                iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                url: options.embed.author.url ? options.embed.author.url : undefined
            });
        }
        if (options.embed.footer) {
            _embed.setFooter({
                text: options.embed.footer.text,
                iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
            });
        }
        interaction.reply({
            embeds: [_embed],
        });
        data$1.delete(id);
        gameCollector.stop();
        return game.stop();
    });
};

const data = new Set();
const FastType = async (options) => {
    if (!options)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No options provided.");
    if (typeof options !== "object")
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Options must be an object.");
    let interaction;
    if (!options.interaction)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No interaction provided.");
    if (typeof options.interaction !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Interaction must be an object.");
    }
    if (options.interaction instanceof discord_js.Message) {
        interaction = options.interaction;
    }
    else if (options.interaction instanceof discord_js.ChatInputCommandInteraction) {
        interaction = options.interaction;
    }
    if (!interaction)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No interaction provided.");
    if (!options.client)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No client provided.");
    if (typeof options.client !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Client must be an object.");
    }
    options.client;
    if (!options.embed)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed options provided.");
    if (typeof options.embed !== "object") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed options must be an object.");
    }
    if (!options.embed.color)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed color provided.");
    if (!options.embed.title)
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed title provided.");
    if (options.embed.url && typeof options.embed.url !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed URL must be a string.");
    }
    if (options.embed.author) {
        if (typeof options.embed.author !== "object") {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed author must be an object.");
        }
        if (!options.embed.author.name)
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed author name provided.");
        if (options.embed.author.icon_url && typeof options.embed.author.icon_url !== "string") {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed author icon URL must be a string.");
        }
        if (options.embed.author.url && typeof options.embed.author.url !== "string") {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed author URL must be a string.");
        }
    }
    if (options.embed.description && typeof options.embed.description !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed description must be a string.");
    }
    if (options.embed.fields) {
        if (!Array.isArray(options.embed.fields)) {
            throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed fields must be an array.");
        }
        for (const field of options.embed.fields) {
            if (typeof field !== "object") {
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed field must be an object.");
            }
            if (!field.name)
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed field name provided.");
            if (!field.value)
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords Error:") + " No embed field value provided.");
            if (field.inline && typeof field.inline !== "boolean") {
                throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed field inline must be a boolean.");
            }
        }
    }
    if (options.embed.image && typeof options.embed.image !== "string") {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed image must be a string.");
    }
    if (options.embed.timestamp && !(options.embed.timestamp instanceof Date)) {
        throw new Error(chalk.red("[@m3rcena/weky] ChaosWords TypeError:") + " Embed timestamp must be a date.");
    }
    let id = "";
    if (options.interaction instanceof discord_js.Message) {
        id = options.interaction.author.id;
    }
    else if (options.interaction instanceof discord_js.ChatInputCommandInteraction) {
        id = options.interaction.user.id;
    }
    if (data.has(id))
        return;
    data.add(id);
    const ids = getRandomString(20) +
        "-" +
        getRandomString(20) +
        "-" +
        getRandomString(20) +
        "-" +
        getRandomString(20);
    if (!options.sentence) {
        options.sentence = getRandomSentence(Math.floor(Math.random() * 20) + 3)
            .toString()
            .split(',').join(' ');
    }
    const sentence = options.sentence;
    const gameCreatedAt = Date.now();
    let btn1 = new discord_js.ButtonBuilder()
        .setStyle(discord_js.ButtonStyle.Danger)
        .setLabel(options.buttonText ? options.buttonText : "Cancel")
        .setCustomId(ids);
    const embed = new discord_js.EmbedBuilder()
        .setTitle(options.embed.title)
        .setDescription(`${options.embed.description ?
        options.embed.description.replace('{{time}}', convertTime(options.time ? options.time : 60000)) :
        `You have **${convertTime(options.time ? options.time : 60000)}** to type the sentence below.`}`)
        .setColor(options.embed.color)
        .setTimestamp(options.embed.timestamp ? options.embed.timestamp : null)
        .setURL(options.embed.url ? options.embed.url : null)
        .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
        .setImage(options.embed.image ? options.embed.image : null);
    if (options.embed.author) {
        embed.setAuthor({
            name: options.embed.author.name,
            iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
            url: options.embed.author.url ? options.embed.author.url : undefined
        });
    }
    if (options.embed.footer) {
        embed.setFooter({
            text: options.embed.footer.text,
            iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
        });
    }
    if (options.embed.fields) {
        embed.setFields(options.embed.fields);
    }
    else {
        embed.addFields({ name: 'Sentence:', value: `${sentence}` });
    }
    const msg = await interaction.reply({
        embeds: [embed],
        components: [{ type: 1, components: [btn1] }],
    });
    if (!interaction.channel || !interaction.channel.isTextBased()) {
        throw new Error(chalk.red("[@m3rcena/weky] FastTyoe Error: ") + "Interaction channel is not a text channel.");
    }
    const collector = await interaction.channel.createMessageCollector({
        filter: (m) => !m.author.bot && m.author.id === id,
        time: options.time ? options.time : 60000
    });
    collector.on("collect", async (mes) => {
        if (mes.content.toLowerCase().trim() === sentence.toLowerCase()) {
            const time = Date.now() - gameCreatedAt;
            const minute = (time / 1000 / 60) % 60;
            const wpm = mes.content.toLowerCase().trim().length / 5 / minute;
            const _embed = new discord_js.EmbedBuilder()
                .setDescription(options.winMessage ?
                options.winMessage
                    .replace('time', convertTime(time))
                    .replace('wpm', wpm.toFixed(2))
                : `You have typed the sentence correctly in **${convertTime(time)}** with **${wpm.toFixed(2)}** WPM.`)
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .setImage(options.embed.image ? options.embed.image : null);
            if (options.embed.author) {
                _embed.setAuthor({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
            }
            if (options.embed.footer) {
                _embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            embed.setTimestamp(options.embed.timestamp ? new Date() : null);
            interaction.reply({ embeds: [_embed] });
            btn1 = new discord_js.ButtonBuilder()
                .setStyle(discord_js.ButtonStyle.Danger)
                .setLabel(options.buttonText ? options.buttonText : "Cancel")
                .setDisabled()
                .setCustomId(ids);
            await msg.edit({
                embeds: [embed],
                components: [{ type: 1, components: [btn1] }],
            });
            collector.stop(mes.author.username);
            data.delete(id);
        }
        else {
            const _embed = new discord_js.EmbedBuilder()
                .setDescription(options.loseMessage ? options.loseMessage : "Better Luck Next Time!")
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .setImage(options.embed.image ? options.embed.image : null);
            if (options.embed.author) {
                _embed.setAuthor({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
            }
            if (options.embed.footer) {
                _embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            embed.setTimestamp(options.embed.timestamp ? new Date() : null);
            interaction.reply({ embeds: [_embed] });
            collector.stop(mes.author.username);
            data.delete(id);
            btn1 = new discord_js.ButtonBuilder()
                .setStyle(discord_js.ButtonStyle.Danger)
                .setLabel(options.buttonText ? options.buttonText : "Cancel")
                .setDisabled()
                .setCustomId(ids);
            await msg.edit({
                embeds: [embed],
                components: [{ type: 1, components: [btn1] }],
            });
        }
    });
    collector.on('end', async (_collected, reason) => {
        if (reason === 'time') {
            const _embed = new discord_js.EmbedBuilder()
                .setDescription(options.loseMessage ? options.loseMessage : "Better Luck Next Time!")
                .setColor(options.embed.color)
                .setTimestamp(options.embed.timestamp ? new Date() : null)
                .setURL(options.embed.url ? options.embed.url : null)
                .setThumbnail(options.embed.thumbnail ? options.embed.thumbnail : null)
                .setImage(options.embed.image ? options.embed.image : null);
            if (options.embed.author) {
                _embed.setAuthor({
                    name: options.embed.author.name,
                    iconURL: options.embed.author.icon_url ? options.embed.author.icon_url : undefined,
                    url: options.embed.author.url ? options.embed.author.url : undefined
                });
            }
            if (options.embed.footer) {
                _embed.setFooter({
                    text: options.embed.footer.text,
                    iconURL: options.embed.footer.icon_url ? options.embed.footer.icon_url : undefined
                });
            }
            embed.setTimestamp(options.embed.timestamp ? new Date() : null);
            interaction.reply({ embeds: [_embed] });
            btn1 = new discord_js.ButtonBuilder()
                .setStyle(discord_js.ButtonStyle.Danger)
                .setLabel(options.buttonText ? options.buttonText : "Cancel")
                .setDisabled()
                .setCustomId(ids);
            await msg.edit({
                embeds: [embed],
                components: [{ type: 1, components: [btn1] }],
            });
            data.delete(id);
        }
    });
    const gameCollector = msg.createMessageComponentCollector({
        componentType: discord_js.ComponentType.Button,
    });
    gameCollector.on("collect", async (button) => {
        if (button.user.id !== id) {
            return button.reply({
                content: options.othersMessage ? options.othersMessage.replace('{{author}}', id) : `This button is for <@${id}>`,
                ephemeral: true
            });
        }
        btn1 = new discord_js.ButtonBuilder()
            .setStyle(discord_js.ButtonStyle.Danger)
            .setLabel(options.buttonText ? options.buttonText : "Cancel")
            .setDisabled()
            .setCustomId(ids);
        embed.setTimestamp(options.embed.timestamp ? new Date() : null);
        await msg.edit({
            embeds: [embed],
            components: [{ type: 1, components: [btn1] }],
        });
        button.reply({
            content: options.cancelMessage ? options.cancelMessage : "Game has been cancelled.",
            ephemeral: true
        });
        gameCollector.stop();
        data.delete(id);
        return collector.stop();
    });
};

exports.Calculator = Calculator;
exports.ChaosWords = ChaosWords;
exports.FastType = FastType;
