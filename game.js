var startScreen
var gameScreen
var choiceBox
var nextBox
var nextButton
var lbtext
var lbname
var imgSprite
var imgBackground
var Namebox
var volume
var textSpeed
var b1
var b2
var b3
var b4
var choicebuttons
var inventory


//#classes
class character {
    constructor(name, sprite, voice) {
        this.sprite = sprite;
        this.name = name;
        this.voice = voice;
    }
}

class dialog {
    constructor(character, text) {
        this.character = character;
        this.text = text;
    }
}

class Background {
    constructor(img) {
        this.img = img
    }
}

class Scene {
    constructor(conversation) {
        this.conversation = conversation;
    }
}

class Conv {
    constructor(events) {
        this.events = events;
    }
}

class ChangeScene {
    constructor(scene) {
        this.scene = scene;
    }
}

class ChangeConv {
    constructor(conv) {
        this.conv = conv
    }
}

class Choice {
    constructor(action, text) {
        this.action = action;
        this.text = text;
    }
}

class ChoiceArray {
    constructor(choices) {
        this.choices = choices;
    }
}

//#functions (1)
window.onload = () => {
    startScreen = document.getElementById("startScreen");
    gameScreen = document.getElementById("gameScreen");
    choiceBox = document.getElementById("choiceBox");
    nextBox = document.getElementById("nextBox");
    lbtext = document.getElementById("lbtext");
    lbname = document.getElementById("lbname");
    imgSprite = document.getElementById("imgSprite");
    imgBackground = document.getElementById("imgBackground");
    nextButton = document.getElementById("nextbtn");
    Namebox = document.getElementById("nameBox");
    textSpeed = document.getElementById("textSpeed");
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    choicebuttons = [b1, b2, b3, b4];
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    choiceBox.style.display = "none";
    nextBox.style.display = "block";
}

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    volume = document.getElementById('volume').value;
    inventory = [];
    Next();
}

function Nameboxoff() {
    Namebox.style.display = "none";
}

function NameboxOn() {
    Namebox.style.display = "block";
}

function playSqueek() {
    var hiss = new Audio(getAudioURL("Cdialog1"));
    hiss.play();
}
//#functions (1) END

//#characters
var Thalea = new character("Thaléa", getSpriteURL("1"), new Audio(getAudioURL("bleepfemale")));
var Bjorn = new character("Björn", getSpriteURL("3"), new Audio(getAudioURL("boopgrave")));
var Beret = new character("Captain Béret", getSpriteURL("2"), new Audio(getAudioURL("bleepgrave")));
var Coati = new character("Lieutenant Coati", getSpriteURL("4"), new Audio(getAudioURL("Cdialog1")));
var Lussie = new character("Lussie", getSpriteURL("5"), new Audio(getAudioURL("sneakysound")));
var Rasmus = new character("Rasmus", getSpriteURL("6"), new Audio(getAudioURL("plop")));
var Narrator = new character("", getSpriteURL("narrator"), new Audio(getAudioURL("typewriterveryshort")));
var NarratorBeret = new character("", getSpriteURL("narrator"), new Audio(getAudioURL("bleepgrave")));
var NarratorBeretCoati = new character("", getSpriteURL("4"), new Audio(getAudioURL("bleepgrave")));
var NarratorBeretBjorn = new character("", getSpriteURL("3"), new Audio(getAudioURL("bleepgrave")));
var MysteryThalea = new character("???", getSpriteURL("narrator"), new Audio(getAudioURL("bleepfemale")));
var NarratorBeretThalea = new character("", getSpriteURL("1"), new Audio(getAudioURL("bleepgrave")));
var NarratorBeretLussie = new character("", getSpriteURL("5"), new Audio(getAudioURL("bleepgrave")));
var NarratorBjorn = new character ("", getSpriteURL("narrator"), new Audio(getAudioURL("boopgrave")));
var NarratorBjornLussie = new character ("", getSpriteURL("5"), new Audio(getAudioURL("boopgrave")));
var NarratorBjornThalea = new character ("", getSpriteURL("1"), new Audio(getAudioURL("boopgrave")));
var Zhuraid = new character ("Zhuraid", getSpriteURL("narrator"), new Audio(getAudioURL("retrobleep")));
//#characters END

//ACT 3 
// SCENE 3 : CONCLUSION 
var A3S3 = new Scene([
    new Conv([
        new Background(getBackgroundURL("maindeck")),
        new dialog(NarratorBeretBjorn, "Bjorn and Thaléa were the last crew members we were waiting for."),
        new dialog(NarratorBeretThalea, "As both of them stepped on the main deck, I could feel that they had somehow become a little bit closer."),
        new dialog(Beret, "So... Let's talk about this weapon..."),
new Background(getBackgroundURL("outsideview2")),
        new dialog(Narrator, "Starlog, end. After a long and productive meeting on the main deck, we came to the conclusion that both anthropological and chemical analysis of the vial and its background point to the liquid inside being a truth serum."),
        new dialog(Narrator, "This technology has never been attained by our civilization, and was thought to be science-fiction. The substance can be easily replicated."),
        new dialog(Narrator, "Our mission is now to take the truth serum to the nearest safest starbase so that it can be kept away from the Danish."),
        new dialog(Narrator, "The trip should be uneventful..."),
        new dialog(Narrator, "Yet, for some reason I cannot explain, I feel like it might be more complicated than expected."),
        new dialog(Narrator, "What challenges are we to face? Can we trust everyone on board to keep the truth serum safe?"),
        new dialog(Narrator, "Only time will tell."),
        new Background(getBackgroundURL("black")),
        new dialog(Narrator, "-- END OF EPISODE 1 --"),
    ]),
]);
//SCENE 3 END

//SCENE 2 : ANTHROPOLOGIST'S OFFICE
//SCENE 2 CHOICES
var A3expedition = new Choice(function(){changeConv (1)}, "About the expedition...");
var A3thalea = new Choice(function(){changeConv (2)}, "About you...");

var A3necralis = new Choice(function(){changeConv (4)}, "About Necralis and Terra...");
var A3weapon = new Choice(function(){changeConv (7)}, "About you...");
var A3thatsall = new Choice(function(){if(checkInventory("TruthWeapon")){
    changeConv(5);}
    else{
    changeConv(3);
    }}, "I think we've said it all.");

var A3room = new Choice(function(){changeConv (6)}, "What is all of this in your room?");
var A3anthropologist = new Choice(function(){changeConv (8)}, "Why did you become an anthropologist?"); 

var A3pray = new Choice(function(){if(checkInventory("Love")){
    changeConv(13);}
    else{
    changeConv(14);
    }}, "Have you ever prayed?");

var A3author1 = new Choice(function(){changeConv (9)}, "Pär Lagerkvist.");
var A3author2 = new Choice(function(){changeConv (9)}, "Selma Lagerlöf.");
var A3author3 = new Choice(function(){changeConv (10)}, "Karin Boye.");

var A3poison = new Choice(function(){changeConv (11)}, "A poison.");
var A3hallu = new Choice(function(){changeConv (11)}, "A hallucinogenic substance.");
var A3truthserum = new Choice(function(){addToInventory("TruthWeapon"); changeConv (12)}, "A truth serum.");

var A3definitely = new Choice(function(){changeConv (15)}, "Definitely.");
var A3tooearly = new Choice(function(){changeConv (16)}, "It's too early to say.");

var A3friends = new Choice(function(){changeConv (17)}, "We were friends.");
var A3lovers = new Choice(function(){changeConv (18)}, "We were lovers.");

var A3fine = new Choice(function(){changeConv (15)}, "I think it's fine.");
var A3go = new Choice(function(){changeConv (20)}, "I should go.");

var A3hug = new Choice(function(){changeConv (22)}, "Go for a hug.");
var A3wait = new Choice(function(){changeConv (21)}, "Wait.");
var A3soft = new Choice(function(){changeConv (19)}, "I look?...");

//SCENE 2 CHOICES END
var A3S2 = new Scene([
new Conv([
new Background(getBackgroundURL("black")),
new dialog(NarratorBjorn, "Upon leaving the main deck, I headed directly for the anthropologist's office."),
new dialog(NarratorBjorn, "Although I never spent too much time in that office before, I found it rapidly, thanks to my outstanding sense of direction."),
new dialog(Bjorn, "Hello. This is Björn, the Chief of Security. We are back from our expedition, and I have some things to discuss with you."),
new dialog(Bjorn, "Can I enter?"),
new dialog(Thalea, "Ah. Hello, Björn. Of course-- Door, open."),
new Background(getBackgroundURL("Anthropologist")),
new dialog(NarratorBjorn, "When I entered the room, it seemed quite obvious to me that this anthropologist had just gotten settled in. The room was somewhat impersonal."),
new dialog(NarratorBjorn, "However, upon looking around, I noticed certain personal items scattered around."),
new dialog(Bjorn, "What a nice view you have, from this office."),
new dialog(Thalea, "Yes. I would even say it is quite charming right now."),
new dialog(Bjorn, "Agreed. The stars are nice."),
new dialog(NarratorBjornThalea, "Upon hearing my answer, I sensed the finch's gaze lingering on me. No idea why, though."),
new dialog(Thalea, "What did you want to talk about?"),
new ChoiceArray([A3expedition, A3thalea]),
]),

new Conv([
    new dialog(Bjorn, "I thought the place we visited was quite interesting. I think some of the things we found might be of interest to you."),
    new dialog(Thalea, "Did you bring any items except the weapon?"),
    new dialog(Bjorn, "Unfortunately, no. We are told to interfere as little as possible with alien findings."),
    new dialog(Thalea, "Like urbex."),
    new dialog(Bjorn, "What?"),
    new dialog(Thalea, "Nevermind."),
    new dialog(Bjorn, "Anyway... I also have orders to determine the nature of the weapon we recovered as soon as possible. The Captain thought you might be able to help me."),
    new dialog(Thalea, "Now that's interesting."),
    new ChoiceArray([A3necralis, A3weapon, A3thalea, A3thatsall]),
]),

new Conv([
    new dialog(Thalea, "About me? What is it you want to know about me?"),
    new ChoiceArray([A3room, A3anthropologist, A3expedition, A3thatsall]),
]),

new Conv([
    new dialog(Thalea, "I don't know... I feel like we're missing a crucial information. Are you sure you've told me everything?"),
    new dialog(Bjorn, "Come to think of it... Let's talk a bit more."),
    new dialog(Thalea, "Lay it on me!"),
    new dialog(Bjorn, "Later."),
    new dialog(Thalea, "What did you say?"),
    new dialog(Bjorn, "Nothing. (Damn it. What did it come out so naturally?)"),
    new ChoiceArray([A3thalea, A3expedition]),
]),

new Conv([
    new dialog(NarratorBjornThalea, "I explained to the anthropologist the obsession of Zhuraid with Terra, formerly called Earth."),
    new dialog(NarratorBjornThalea, "It seems to pique her interest, as she kept asking for more details. As I was trying to remember those events as accurately as possible, her small, round eyes kept on widening."),
    new dialog(Bjorn, "... I think that's about it."),
    new dialog(Thalea, "That's absolutely fascinating!"),
    new dialog(Thalea, "Björn, that is a very big breakthrough!"),
    new dialog(Bjorn, "Is it?"),
    new dialog(Thalea, "Of course! We had no idea Necralis had any kind of contact with our civilization. This is the first I hear about this."),
    new dialog(Thalea, "We need to go back so I can take a look at all of this!"),
    new dialog(Bjorn, "I... I think we're too far away now, though."),
    new dialog(Thalea, "Make the ship go back!"),
    new dialog(Bjorn, "I can--"),
    new dialog(Thalea, "Make the ship go back!!!"),
    new dialog(Bjorn, "You--"),
    new dialog(Thalea, "NOW!"),
    new dialog(Bjorn, "YOU HAVE TO TALK TO THE CAPTAIN!"),
    new dialog(Thalea, "... Ah, really?"),
    new dialog(Bjorn, "Yes. Sheesh."),
    new dialog(Thalea, "Ah. I guess I will, then."),
    new dialog(Bjorn, "..."),
    new dialog(Thalea, "Anyway, anything else you wanted to ask?"),
    new ChoiceArray([A3weapon, A3thalea, A3thatsall]),
]),

new Conv([
    new dialog(Thalea, "I agree. I think... You should report back to your Captain now."),
    new dialog(NarratorBjornThalea, "Although she said that, I could see her eyes lingering on me... Again."),
    new dialog(NarratorBjornThalea, "To be honest, something in me made me want to stay a little bit more."),
    new ChoiceArray([A3pray]),
]),

new Conv([
    new dialog(Thalea, "Ah... Those are just some belongings I care about a lot."),
    new dialog(Thalea, "Things I like."),
    new dialog(Bjorn, "So you like..."),
    new dialog(Bjorn, "Plushes..."),
    new dialog(Bjorn, "And books."),
    new dialog(Thalea, "... Yes. That's about it."),
    new dialog(Bjorn, "I see."),
    new dialog(Bjorn, "What is that thing next to your computer?"),
    new dialog(Thalea, "... A book?"),
    new dialog(Bjorn, "... Haha. Very funny."),
    new dialog(Thalea, "I know."),
    new dialog(Thalea, "It's a guampa. It comes from south american culture. There's some teréré in it."),
    new dialog(Bjorn, "What's teréré? It sounds a bit familiar, somehow."),
    new dialog(Thalea, "It's caffeine. Basically."),
    new dialog(Bjorn, "So, it is inferior coffee."),
    new dialog(Thalea, "I-- It's not--"),
    new dialog(Bjorn, "I see."),
    new ChoiceArray([A3anthropologist, A3expedition, A3thatsall]),
]),

new Conv([
    new dialog(Thalea, "What is it exactly that you found?"),
    new dialog(Bjorn, "It was a small vial. With some kind of liquid inside."),
    new dialog(NarratorBjornThalea, "I then proceeded to explain to Thaléa what the diary said about that weapon."),
    new dialog(Thalea, "So it is a substance that is meant to be replicated, and it is meant to help preserve peace. Mmh."),
    new dialog(Thalea, "I have to admit that it is a very curious thing to me, because Necralians really don't have malevolent minds, from what we know. I can't imagine that they would create a substance that could explicitly harm people."),
    new dialog(Bjorn, "Could it be something more subtle?"),
    new dialog(Thalea, "Maybe. But without any other clue..."),
    new dialog(Bjorn, "Actually... There is another clue that could help us."),
    new dialog(Thalea, "Ah! Pray tell."),
    new dialog(Bjorn, "It was an excerpt from a swedish novel."),
    new dialog(Thalea, "Svenska!"),
    new dialog(Bjorn, "... Do you speak Swedish?"),
    new dialog(Thalea, "Of course."),
    new dialog(NarratorBjornThalea, "Come to think of it, there WAS a Swedish flag in the corner of her office."),
    new dialog(Bjorn, "But why?"),
    new dialog(Thalea, "I don't have the faintest idea."),
    new dialog(Bjorn, "... Whatever. I think I know where that quote came from, or at least I've got an inkling about it..."),
    new dialog(Thalea, "What was the quote?"),
    new dialog(Bjorn, "I remember some of it. It went..."),
    new dialog(Bjorn, "Är det inte underligt att allting mister sitt värde så fort det upphör att vara en gåva - till och med sanningen?"),
    new dialog(Thalea, "... !"),
    new dialog(Bjorn, "I think it was written by..."),
    new ChoiceArray([A3author1, A3author2, A3author3]),
]),

new Conv([
    new dialog(Thalea, "I've always been fascinated by foreign cultures. It started out with languages."),
    new dialog(Thalea, "Then, I found out that if I became an anthropologist, I could fly away from Terra."),
    new dialog(Bjorn, "Do you have something against Terra?"),
    new dialog(Thalea, "No... Not really. I just like moving around. Feeling free."),
    new dialog(Bjorn, "I see. You are a bird after all."),
    new dialog(Bjorn, "How did you get into languages in the first place?"),
    new dialog(Thalea, "Sweden."),
    new dialog(Bjorn, "Sweden? Interesting. I'm Swedish."),
    new dialog(Thalea, "No kidding. I would never have guessed..."),
    new dialog(Thalea, "Björn."),
    new dialog(Bjorn, "... I could be norwegian."),
    new dialog(Thalea, "Too discreet."),
    new dialog(Bjorn, "... Danish..."),
    new dialog(Thalea, "Don't see any beer can in your hand."),
    new dialog(Bjorn, "True."),
    new dialog(Bjorn, "Did you know that danish kids..."),
    new dialog(Thalea, "No Björn. I'm stopping you right there. No."),
    new dialog(Bjorn, "... have trouble pronounc-"),
    new dialog(Thalea, "This is my office and I can expel you from it at any time."),
    new dialog(Bjorn, "(I'd like to see you try.)"),
    new dialog(Thalea, "Jokes aside, I've known even before learning your name... For some reason."),
    new dialog(Bjorn, "(And I have a feeling you're French, although I couldn't explain why.)"),
    new ChoiceArray([A3room, A3expedition, A3thatsall]),
]),

new Conv([
    new dialog(Thalea, "That doesn't sound right, I'm sorry to say."),
    new dialog(Bjorn, "Ah, well then, it has to be..."),
    new ChoiceArray([A3author1, A3author2, A3author3]),
]),

new Conv([
    new dialog(Thalea, "Yes! That's it! Karin Boye."),
    new dialog(Bjorn, "You know about her?"),
    new dialog(Thalea, "Of course. She is my favourite swedish author."),
    new dialog(Bjorn, "Wow. So young people can like classic swedish literature."),
    new dialog(Thalea, "It a quote from the book Kallocain."),
    new dialog(Bjorn, "I see. Yes, that vaguely rings a bell."),
    new dialog(Thalea, "You should read it."),
    new dialog(Bjorn, "I should!"),
    new dialog(Bjorn, "It would be a good call. Cain-d of me to do so."),
    new dialog(Thalea, "Yes it would indeed."),
    new dialog(Bjorn, "(She missed the pun. Ah, it was an awful one anyway.)"),
    new dialog(Thalea, "Indeed, with this hint, the nature of that vial becomes very clear."),
    new dialog(Bjorn, "If you think about it, I guess it does."),
    new dialog(Thalea, "It is actually genius, because it cannot really harm, yet it can turn the tide around in any kind of conflict-- especially against oppression."),
    new dialog(Bjorn, "Yes. It has to be..."),
    new ChoiceArray([A3poison, A3hallu, A3truthserum]),
]),

new Conv([
    new dialog(Thalea, "No... I don't think that's it. It's a bit too much of a violent invention for Necralians."),
    new dialog(Thalea, "Come on Björn. You can do it."),
    new ChoiceArray([A3poison, A3hallu, A3truthserum]),
]),

new Conv([
    new dialog(Thalea, "Yes! That's exactly it! It has to be a truth serum!"),
    new dialog(Bjorn, "Mh. It could have indeed turned the tide if the Danish had put their dirty hands on it."),
    new dialog(Thalea, "Yes. Say goodbye to your spies, and to your war secrets."),
    new dialog(Bjorn, "It makes me worried, though-- I hope it won't get out of hand. As soon as we're done here, I will report back to the Captain."),
    new dialog(Thalea, "It's a good idea."),
    new dialog(Thalea, "What an exciting discovery. There are many uses for a truth serum, but it really is a poisonous apple."),
    new dialog(Bjorn, "I agree."),
    new dialog(Thalea, "Phew. Now that we've shed some light on that vial, is there anything else you wanted to ask about?"),
    new ChoiceArray([A3necralis, A3thalea, A3thatsall]),
]),

new Conv([
    new dialog(Thalea, "Praying? Why? That is a very old practice."),
    new dialog(Bjorn, "I've told you, there was a church. In the crypt."),
    new dialog(Thalea, "Yes?"),
    new dialog(Bjorn, "Well, I prayed there."),
    new dialog(Thalea, "You prayed to what?"),
    new dialog(Bjorn, "It's a bit embarrassing."),
    new dialog(Bjorn, "(I don't know why I'm so willing to share this. I feel somehow compelled to do it.)"),
    new dialog(Bjorn, "I prayed... to find love."),
    new dialog(Thalea, "...!"),
    new dialog(Thalea, "To find love. I see. Did you have anyone in mind?"),
    new dialog(Bjorn, "Not really. But images flashed through my mind."),
    new dialog(Thalea, "What were the images about?"),
    new dialog(Bjorn, "It was finches flying accross a stormy sky."),
    new dialog(Thalea, "Finches..."),
    new dialog(NarratorBjornThalea, "Silence fell on the office, for a short while. But for some reason, it didn't feel awkward."),
    new dialog(Thalea, "You know, Björn..."),
    new dialog(Bjorn, "Yes?"),
    new dialog(Thalea, "I feel like I've already met you before. Although it is a bit silly to say."),
    new dialog(Bjorn, "I do have the same impression."),
    new dialog(Thalea, "Do you think it is a good thing?"),
    new dialog(NarratorBjornThalea, "It was strange to have this conversation with a stranger, but it somehow felt right."),
    new ChoiceArray([A3definitely, A3tooearly]),
]),

new Conv([
    new dialog(Thalea, "Praying? Why? That is a very old practice."),
    new dialog(Bjorn, "I've told you, there was a church. In the crypt."),
    new dialog(Thalea, "Yes?"),
    new dialog(Bjorn, "Well, I prayed there."),
    new dialog(Thalea, "You prayed to what?"),
    new dialog(Bjorn, "I prayed... For gurka."),
    new dialog(Thalea, "For... Gurka..."),
    new dialog(Bjorn, "Yes. Don't you like gurka?"),
    new dialog(Thalea, "I do, but..."),
    new dialog(Bjorn, "Well, the prices have risen a lot recently. So I prayed to get gurka back."),
    new dialog(Thalea, "I see."),
    new dialog(NarratorBjornThalea, "I saw Thaléa gesture towards the holographic receiver. She typed a number in, and..."),
    new dialog(Beret, "Captain Béret here. What is it, Thaléa?"),
    new dialog(Thalea, "... We've uncovered the secret of the weapon, most probably. I'm sending you Björn back immediately for a report."),
    new dialog(Beret, "Understood."),
    new dialog(Bjorn, "I suppose I'll take my leave now, then."),
    new dialog(Thalea, "Yes. Go ahead. I hope we'll get another chance to talk!"),
    new dialog(Bjorn, "Me too. Thank you for receiving me in your office."),
    new dialog(NarratorBjornThalea, "On those words, I left Thaléa's office. The goodbyes were quite abrupt, but I couldn't put my finger on as to why. Maybe she didn't like the turn the conversation had taken?"),
    new dialog(NarratorBjorn, "In any case, I returned quickly to the main deck."),
    new ChangeScene(A3S3, 0),
]),

new Conv([
    new dialog(Bjorn, "I don't have any bad feelings about this, at least."),
    new dialog(Thalea, "... What could this mean, though?"),
    new dialog(Bjorn, "Lussie..."),
    new dialog(Bjorn, "(I can't believe I'm quoting Lussie.)"),
    new dialog(Bjorn, "Lussie said that maybe those strong deja-vu impressions come from former lives."),
    new dialog(Thalea, "I don't believe in reincarnation, though."),
    new dialog(Bjorn, "Me neither. But, maybe..."),
    new dialog(NarratorBjornThalea, "She was looking at me with a mysterious expression in her eyes."),
    new ChoiceArray([A3friends, A3lovers]),
]),

new Conv([
    new dialog(Thalea, "Is it?"),
    new dialog(Bjorn, "Yes. After all, I don't know you that much."),
    new dialog(Thalea, "I see. I guess not."),
    new dialog(NarratorBjornThalea, "I felt a little bit more distance between us."),
    new dialog(Bjorn, "But, anyway..."),
    new ChoiceArray([A3fine, A3go]),
]),

new Conv([
    new dialog(Thalea, "You're right, maybe we were!"),
    new dialog(Thalea, "Maybe we traveled around together."),
    new dialog(Thalea, "Let's say you were Swedish and I was French..."),
    new dialog(Thalea, "It would be a big coincidence to have met you."),
    new dialog(Bjorn, "Agreed."),
    new dialog(NarratorBjornThalea, "The silence that fell upon us was filled with some kind of warmth."),
    new ChoiceArray([A3hug, A3go]),
]),

new Conv([
    new dialog(Bjorn, "Maybe we were lovers."),
    new dialog(NarratorBjornThalea, "It seemed to me that she had stiffened a little bit. Then, she relaxed."),
    new dialog(Thalea, "I do feel an unexplainable bond between us."),
    new dialog(Bjorn, "Me too. It is strange."),
    new dialog(Thalea, "You look..."),
    new dialog(NarratorBjornThalea, "She stopped there. Should I insist?"),
    new ChoiceArray([A3soft, A3go]),
]),

new Conv([
    new dialog(Thalea, "That's awkward..."),
    new dialog(Thalea, "You look very soft."),
    new dialog(Bjorn, "..."),
    new dialog(NarratorBjornThalea, "I didn't know what to think."),
    new dialog(NarratorBjornThalea, "So I answered honestly."),
    new dialog(Bjorn, "So do you."),
    new dialog(Thalea, "..."),
    new ChoiceArray([A3hug, A3wait]),
]),

new Conv([
    new dialog(NarratorBjornThalea, "This felt maybe a little bit awkward."),
    new dialog(Thalea, "Ah... You're going to report back, aren't you?"),
    new dialog(Bjorn, "Yes. There is no time to lose."),
    new dialog(Thalea, "Perfect, I--"),
    new dialog(NarratorBjornThalea, "Suddenly, the holographic receiver rang."),
    new dialog(Thalea, "... Yes?"),
    new dialog(Beret, "This is Captain Béret. We have the results of the vial's analysis. I think everyone should come to the main deck so that we can all report on our findings."),
    new dialog(Bjorn, "Ah, roger that. We'll be on our way."),
    new dialog(NarratorBjornThalea, "Thaléa first exited the room."),
    new dialog(NarratorBjorn, "And I soon went after her, to the main deck."),
    new ChangeScene(A3S3, 0),
]),

new Conv([
    new dialog(Thalea, "How strange. I never felt like this before."),
    new dialog(Bjorn, "Mmh. It is quite curious. I'm sorry if I overstepped boundaries."),
    new dialog(NarratorBjornThalea, "She stared at me and chuckled. It felt like being in a bubble, out of time and space, for a short moment. When suddenly, the holographic receiver rang."),
    new dialog(Thalea, "... Yes?"),
    new dialog(Beret, "This is Captain Béret. We have the results of the vial's analysis. I think everyone should come to the main deck so that we can all report on our findings."),
    new dialog(Bjorn, "Ah, roger that. We'll be on our way."),
    new dialog(NarratorBjornThalea, "The interruption breaking the momentum we had going on, we somehow both felt a tiny bit awkward. However, I could feel we had bridged a first gap."),
    new Background(getBackgroundURL("black")),
    new dialog(NarratorBjornThalea, "As Thaléa exited the room, my eyes lingered on her..."),
    new dialog(NarratorBjornThalea, "Completely unnoticed."),
    new ChangeScene(A3S3, 0),
]),

new Conv([
    new dialog(NarratorBjornThalea, "Somehow shyly, I gestured towards the anthropologist, arms open."),
    new dialog(NarratorBjornThalea, "I felt like giving her some sort of greeting hug."),
    new dialog(Bjorn, "(It feels like meeting a friend again after a very long time.)"),
    new dialog(NarratorBjornThalea, "She took a step towards me, smiling. But suddenly, the holographic receiver rang."),
    new dialog(Thalea, "... Yes?"),
    new dialog(Beret, "This is Captain Béret. We have the results of the vial's analysis. I think everyone should come to the main deck so that we can all report on our findings."),
    new dialog(Bjorn, "Ah, roger that. We'll be on our way."),
    new dialog(NarratorBjornThalea, "The moment was gone. However, I could feel we had bridged a first gap. It didn't feel uncomfortable-- We looked at each other briefly and smiled."),
    new Background(getBackgroundURL("black")),
    new dialog(NarratorBjornThalea, "As Thaléa exited the room, my eyes lingered on her..."),
    new dialog(NarratorBjornThalea, "Completely unnoticed."),
    new ChangeScene(A3S3, 0),
]),
]);
//SCENE 2 END

//SCENE 1 : MAIN DECK
var A3S1 = new Scene([
    new Conv ([
        new Background(getBackgroundURL("outsideview2")),
        new dialog(Narrator, "Captain's log, supplemental."),
        new dialog(Narrator, "The small away-team I sent to retrieve the weapon the Danish are after is finally back. But they brought something unexpected."),
        new dialog(Narrator, "Indeed, instead of the heavy weaponry we were expecting, they brought instead some sort of small vial."),
        new Background(getBackgroundURL("maindeck")),
        new dialog(Beret, "Björn, Lussie, welcome back, and congratulations."),
        new dialog(Bjorn, "The pleasure was ours. It was quite the interesting outing."),
        new dialog(Coati, "Did you face any troubles getting your hands on the weapon?"),
        new dialog(Lussie, "Sssss. No. The chapel, the crypt, however you may call it-- it was enigmatic, but harmlessss."),
        new dialog(Coati, "Can I see the weapon?"),
        new dialog(Lussie, "There you go."),
        new dialog(NarratorBeret, "Lussie took out the small, mysterious vial and presented it to Lieutenant Coati. I joined him to take a look at the item."),
        new dialog(NarratorBeret, "In the vial was some sort of light blue, transparent liquid. It looked harmless."),
        new dialog(Bjorn, "We have been warned not to drink that liquid at any time."),
        new dialog(Beret, "Do you know what is the purpose of that weapon?"),
        new dialog(Bjorn, "I might have an answer to this, but I need to think about it a bit more."),
        new dialog(Lussie, "Ssssss. The only clue we have is related to... Swedish culture."),
        new dialog(Coati, "Swe-- Swedish culture?!"),
        new dialog(NarratorBeretCoati, "I couldn't help but get frightened at the sudden outburst of the Lieutenant. It was so sudden!"),
        new dialog(Beret, "What's wrong, Lieutenant Coati? Something's the matter?"),
        new dialog(Coati, ".... No."),
        new dialog(Lussie, "To his defensssse, it is a sssurprising link that we have found between Terra and Necralisss."),
        new dialog(Beret, "I agree. Excellent work. I can only vaguely grasp the importance of such a discovery, but I am sure that our new anthropologist would be thrilled to talk about it."),
        new dialog(Bjorn, "Why isn't she on the bridge with us?"),
        new dialog(Beret, "She is taking care of other matters in her office."),
        new dialog(Beret, "But, I do think it would be a good idea to talk to her."),
        new dialog(Coati, "Although we can relax a little bit now that we got our hands on this weapon, we have to discover what it is exactly."),
        new dialog(Lussie, "I agree. Sssss. I can take it to the lab for further analysssissss."),
        new dialog(NarratorBeretLussie, "Lussie came out on top of her class in Starfleet Academy. For that reason, she was able to get specialized early-on -- she often takes care of substance analysis and even assists with some of the medical care on the 3MP4-NADA."),
        new dialog(Beret, "Good idea. Then, here are my orders: Lussie, take the vial to the laboratory to analyse its contents. Björn, head to Thaléa's office to share your discoveries with her and see if anything could be useful to uncover the secrets of this vial."),
        new dialog(Bjorn, "Roger that. On my way."),
        new dialog(NarratorBeret, "With Björn and Lussie gone to their respective missions, I let out a deep sigh."),
        new dialog(Coati, "Something's the matter, Captain?"),
        new dialog(Beret, "No, Lieutenant. I am just relieved we got our hands on this weapon first."),
        new dialog(Coati, "Indeed, indeed. I am happy it is to stay on board."),
        new dialog(Beret, "This weapon? On my ship? Oh, no. We are heading right now to the nearest safe Star Base to drop it to them. This is too much of a responsibility for the 3MP4-NADA-- we would be immediate targets."),
        new dialog(Coati, "The weapon will stay at the Star Base?..."),
        new dialog(Beret, "I would assume that they would keep on changing the weapon's location to make sure it never gets into the enemy's hands."),
        new dialog(Coati, "Mmh... I see."),
        new dialog(Beret, "So... We will just have to keep it safe until we arrive."),
        new dialog(Coati, "... It will have to be well protected indeed."),
        new ChangeScene(A3S2, 0),
    ]),
]);
//SCENE 1 END


//ACT 2
//SCENE 5 : AI
// SCENE 5 CHOICES
var A2S511 = new Choice(function(){changeConv (2)}, "We need the weapon.");
var A2S512 = new Choice(function(){changeConv (3)}, "Aren't you supposed to be dead?");
var A2S513 = new Choice(function(){changeScene(A2S2, 1)}, "I'll be back.");

var A2S521 = new Choice(function(){changeConv (5)}, "I have read many things about you.");
var A2S522 = new Choice(function(){changeConv (1)}, "I need to think about it.");

var A2S531 = new Choice(function(){changeConv (4)}, "You were all about your work.");
var A2S532 = new Choice(function(){changeConv (6)}, "Family was important to you.");
var A2S533 = new Choice(function(){changeConv (4)}, "Traveling was your purpose.");

var A2S541 = new Choice(function(){changeConv (4)}, "Five.");
var A2S542 = new Choice(function(){changeConv (4)}, "Two.");
var A2S543 = new Choice(function(){changeConv (7)}, "Nine.");

var A2S551 = new Choice(function(){changeConv (8)}, "Talk about Necralis.");
var A2S552 = new Choice(function(){changeConv (9)}, "Talk about Terra.");
var A2S553 = new Choice(function(){changeConv (10)}, "Talk about war.");

var A2S561 = new Choice(function(){changeConv (11)}, "The mbeju.");
var A2S562 = new Choice(function(){changeConv (4)}, "The teréré.");

var A2S571 = new Choice(function(){changeConv (4)}, "It would be used to attain peace.");
var A2S572 = new Choice(function(){changeConv (4)}, "It would be used to ascertain our safety.");
var A2S573 = new Choice(function(){addToInventory("serum"); changeConv (12)}, "Ideally, it would not be used.");

var A2S581 = new Choice(function(){changeScene (A2S2, 1)}, "Let's go back to the corridor.");
var A2S582 = new Choice(function(){changeScene (A2S1, 1)}, "Let's go back to the entrance.");
// SCENE 5 CHOICES END

var A2S5 = new Scene([

new Conv([
    new Background(getBackgroundURL("cryptAI")),
    new dialog(NarratorBjorn, "As we entered the room behind the heavy metal door, we both flinched. The room was so brightly lit, even compared to the neon lights in the corridor, that we had both gotten blindsinded for a moment."),
    new dialog(NarratorBjorn, "Recovering our senses, we realized that the room was quite cold. As if it were a fridge of some sort. What needed such efficient cooling down?"),
    new dialog(NarratorBjorn, "The floor, the ceiling, the walls-- Everything was made out of a metal that I couldn't really identify. It looked like iron but somewhat different. Although it was difficult to explain, it smelled different-- If I felt Terran in the other rooms, in that room I felt alien."),
    new dialog(NarratorBjorn, "At the very back of the room was what looked like a bright, round gate. I could hear from it the faint sound of flickering electricity, of a soaring fireplace. But also the sound of swirling waves of water, of cascading landslides."),
    new dialog(NarratorBjorn, "Shouting at protests, trees falling down. Roaring tornadoes."),
    new dialog(NarratorBjorn, "Accelerating beeping. Gunshot. The buzz of a taser. Languages I'd never heard."),
    new dialog(NarratorBjorn, "Although I knew it was only soundwaves, it conjured images in my head that conveyed a very clear message: keep out."),
    new dialog(NarratorBjorn, "Lussie could hear it too. So we only kept looking at it from a distance."),
    new dialog(NarratorBjorn, "When all of a sudden, over the noise, all around us-- a voice spoke out from nowhere."),
    new dialog(Zhuraid, "Welcome, dear guests."),
    new dialog(Zhuraid, "Welcome to my humble tomb."),
    new dialog(Lussie, "That cannot be..."),
    new dialog(Zhuraid, "My name is Zhuraid Uv'air."),
    new dialog(Bjorn, "... Nice to meet you, Zhuraid. My name is Björn."),
    new dialog(Lussie, "Ssssss."),
    new dialog(Bjorn, "Her name is Lussie."),
    new dialog(Bjorn, "I think we should talk."),
    new dialog(Zhuraid, "I am all ears, dear guests."),
    new ChangeConv(1),
]),

new Conv([
    new Background(getBackgroundURL("cryptAI")),
    new dialog(NarratorBjorn, "This bright, ominous room was making us feel on edge. Without exchanging a word, we both knew we wanted out as soon as possible."),
    new dialog(Zhuraid, "What can I help you with?"),
    new ChoiceArray([A2S511, A2S512, A2S513]),
]),

new Conv([
    new dialog(Zhuraid, "Not losing any time, I see."),
    new dialog(Bjorn, "We're in quite the rush."),
    new dialog(Zhuraid, "What is happening to you?"),
    new dialog(Bjorn, "We are fighting a war. Our enemies are headed this way too."),
    new dialog(Zhuraid, "So it's over then. My resting place is on the map for good."),
    new dialog(Bjorn, "Yes."),
    new dialog(Zhuraid, "My secret will be taken out by force, and I would rather give it out to whoever is fit to keep it safe. But I'm not sure I can trust you. How can you prove me that you are worthy?"),
    new ChoiceArray([A2S521, A2S522]),
]),

new Conv([
    new dialog(Zhuraid, "Oh, I am dead. Dead and buried, the old-fashioned way."),
    new dialog(Lussie, "How is it that you can talk to usss then?"),
    new dialog(Bjorn, "Wait... Have you..."),
    new dialog(Bjorn, "Have you transferred your consciousness to this machine?!"),
    new dialog(Zhuraid, "I beg your pardon?"),
    new dialog(Zhuraid, "I think you might have read to much science-fiction, dear friend. How would you even do that?"),
    new dialog(Bjorn, "I was just taking a guess... Sorry."),
    new dialog(Lussie, "Yeah, Björn, what a sssstupid guesssss."),
    new dialog(Bjorn, "What? You didn't even guess anything!"),
    new dialog(Lussie, "Ssssss."),
    new dialog(Zhuraid, "I am nothing but an artificial intelligence infused with the knowledge of my creator. I am speaking on his behalf as he ordered me to-- but it is the extent of it. I am nothing but a machine."),
    new dialog(Lussie, "That'ss a bit disappointing, actually."),
    new dialog(Bjorn, "Are you telling me you expected a... consciousness transfer?"),
    new dialog(Lussie, "I never sssaid anything of the sort. Ssssss."),
    new dialog(Bjorn, "Sure!"),
    new dialog(Zhuraid, "The knowledge did get passed from Zhuraid to me through neuronal cables, though."),
    new dialog(Bjorn, "There we go!"),
    new dialog(Lussie, "Exciting!"),
    new dialog(Bjorn, "Science-fiction IS true to some extent, after all."),
    new dialog(Zhuraid, "I guess it is sometimes."),
    new ChangeConv(1),
]),

new Conv([
    new dialog(Zhuraid, "Is that what you think?"),
    new dialog(Bjorn, "I... Yes?"),
    new dialog(Zhuraid, "I don't think you understand me well enough for me to help you."),
    new dialog(Bjorn, "Wait!"),
    new dialog(NarratorBjorn, "No one replied."),
    new dialog(Lussie, "Ssssss. I think you should go back to gathering info."),
    new ChangeConv(1),
]),

new Conv([
    new dialog(Zhuraid, "Have you now? Please shed some light for us then. What do you think I valued most in life?"),
    new ChoiceArray([A2S531, A2S532, A2S533]),
]),

new Conv([
    new dialog(Bjorn, "Family was important to you. In your diary, you talked a lot about your daughters and grand-children."),
    new dialog(Lussie, "You ssssaid that only children could dissssturb your want for peace."),
    new dialog(Zhuraid, "That is true. Family, and children, are important to me. They teach you compassion and empathy."),
    new dialog(Bjorn, "Important things to remember when you are designing a weapon."),
    new dialog(Zhuraid, "Absolutely. Do you know how many grand-children I had?"),
    new ChoiceArray([A2S541, A2S542, A2S543]),
]),

new Conv([
    new dialog(Zhuraid, "That's right. Nine grand-children. Who knows how many descendants I have now."),
    new dialog(NarratorBjorn, "I exchanged a glance with Lussie. No need to tell him-- or it-- that the entire system of Necralis had exploded long ago."),
    new dialog(Bjorn, "(Let's think... What about us could make him more willing to give us that weapon?)"),
    new ChoiceArray([A2S551, A2S552, A2S553]),
]),

new Conv([
    new dialog(Lussie, "The Necralissss sssystem sssseeemed lovely to live in."),
    new dialog(Zhuraid, "Seemed? It still is today. Isn't it?"),
    new dialog(Lussie, "... Ssssorry. Yesss, abssolutely."),
    new dialog(Bjorn, "... Let's talk about something else."),
    new ChoiceArray([A2S552, A2S553]),
]),

new Conv([
    new dialog(Bjorn, "Your chapel made a strong impression on us."),
    new dialog(Zhuraid, "Did it now? I am glad. It is quite striking."),
    new dialog(Bjorn, "In that, I mean that it is very nostalgic. We come from Terra."),
    new dialog(Zhuraid, "Terra ! You are Terrans! If I may ask, from which nations do you come from?"),
    new dialog(Lussie, "Terra is more or lessss united now, although the concept of cultures ssstill existsss... And, after all, we do have a war raging right now-- although it is more about the world versssus the Danish."),
    new dialog(Bjorn, "With that said, I am Swedish."),
    new dialog(Lussie, "I am Belgian."),
    new dialog(Bjorn, "Are you?"),
    new dialog(Lussie, "Yesss. You didn't know?"),
    new dialog(Bjorn, "It never came up in conversation I guess."),
    new dialog(Zhuraid, "Ah... Sweden. It is a country I really enjoy, especially when it comes to its literature."),
    new dialog(Bjorn, "You did quote something in Swedish in your diary."),
    new dialog(Zhuraid, "Yes. My source of inspiration for my invention. Surely, if those words rang a bell for you, by now you should now what is the nature of the weapon I guard so closely."),
    new dialog(Bjorn, "..."),
    new dialog(Zhuraid, "Now, since we are talking about Terra-- Have you ever been to Paraguay?"),
    new dialog(Bjorn, "I have to say no, but I happen to have some vague impression of it (... for some reason I ignore)."),
    new dialog(Zhuraid, "Good. Then, you will surely know what I am talking about. There is one thing I loved about the Paraguayan gastronomy..."),
    new dialog(Bjorn, "..."),
    new dialog(Zhuraid, "..."),
    new dialog(Bjorn, "... (Oh, he wants me to end his sentence)."),
    new ChoiceArray([A2S561, A2S562]),
]),

new Conv([
    new dialog(Bjorn, "In your diary, you talked a lot about war."),
    new dialog(Zhuraid, "Mh... Of all the things I wrote in my diary, it is the only one that you deemed interesting?"),
    new dialog(Bjorn, "No, it's not what we..."),
    new dialog(Zhuraid, "I don't wish to discuss war. Maybe your so-called enemies have other uses in mind for my creation."),
    new dialog(Bjorn, "... Sure."),
    new ChangeConv(1),
]),

new Conv([
    new dialog(Bjorn, "The mbeju, isn't it?"),
    new dialog(Zhuraid, "Ah! A man of taste. Yes. What a delicacy, really-- although I've always disliked teréré, which might be as popular if not more."),
    new dialog(Zhuraid, "In Paraguay, there was a sense of urgency, of a revolution bound to happen, slowly making its way through the people. I wonder what Paraguay is like now."),
    new dialog(Lussie, "It'sss powerful, sssir. Their population is full of sssscientists and law expertsss. I would ssssay, everyone knows where Paraguay is on the map right now. They are powerful allies for usss in the war."),
    new dialog(Zhuraid, "Ah... That is good to know. So they made it."),
    new dialog(Zhuraid, "I have to admit, I am very saddened by the news of this war. Now, tell me-- you seem like honest people. Time seems to be running out for my invention. If it's not you who fetches it-- if it's not your enemies-- in ten years, twenty years, fifty years, someone will eventually get their hands on it by force."),
    new dialog(Zhuraid, "I am in truth nothing but the empty shell of Zhuraid, a convoluted algorithm-- a glorified checklist of criterias. So far, I have to say that you seem like worthy candidates."),
    new dialog(Bjorn, "We are honored."),
    new dialog(Zhuraid, "If you were to obtain this weapon, what would it be used for?"),
    new ChoiceArray([A2S571, A2S572, A2S573]),
]),

new Conv([
    new dialog(Bjorn, "We want to obtain that weapon not to use it, but to protect it from the Danish, who would surely try to employ it against us."),
    new dialog(Lussie, "Sssss. Our goal is to put that weapon to safety so that it doesn't give an unfair advantage to our enemy."),
    new dialog(Zhuraid, "Good. This is my wish too: that this weapon may only be used in case of extreme emergency. It should remain untouched, hidden. out of reach."),
    new dialog(Bjorn, "Upon reception of the weapon, we would head directly back to our ship, to deliver the weapon to the closest and safest Starbase available, so that it can be protected properly."),
    new dialog(Zhuraid, "I understand. In a context like this, my protection might not suffice anymore."),
    new dialog(Zhuraid, "Very well. I think I have heard enough."),
    new dialog(NarratorBjorn, "Suddenly, the ominous noises stopped. It felt, strangely, as if a heavy weight had been lifted off my shoulders. I hadn't realized the toll they were taking on my mind."),
    new dialog(Zhuraid, "I will trust you with my weapon. I shall open the gates."),
    new dialog(NarratorBjorn, "Suddenly, the bright golden gate unlocked in a circular motion, individual panels sliding out of the way one after another. The room got colder as a frozen haze started to seep into it through the door."),
    new dialog(NarratorBjorn, "When the mist inside of the small storage room had completely disappeared, we were faced with a very small vial."),
    new dialog(NarratorBjorn, "The small vial contained a transparent liquid, vaguely blue. Lussie gestured towards it, but I grabbed the vial before she did, and studied it for a moment, dumbfounded."),
    new dialog(Zhuraid, "Do not be fooled by the appearance of the weapon-- It is of the most dangerous nature. May your lips never touch the liquid within."),
    new dialog(Bjorn, "..."),
    new dialog(Lussie, "We will take care of it. Thank you for your trusssst."),
    new dialog(Zhuraid, "It is I who thank you. I am glad to have accomplished my mission."),
    new dialog(Zhuraid, "I wish you a safe travel back to your ship."),
    new dialog(Bjorn, "Thank you, Zhuraid."),
    new dialog(Bjorn, "I think we should get back."),
    new dialog(Lussie, "Yesss. We have everything we need."),
    new ChoiceArray([A2S581, A2S582]),
]),
]);
// SCENE 5 END

//SCENE 4 : CHURCH
// SCENE 4 CHOICES
var A2S411 = new Choice(function(){changeConv (2)}, "Let's take a look at the altar.");
var A2S412 = new Choice(function(){changeConv (5)}, "Pray?");
var A2S413 = new Choice(function(){changeConv (9)}, "Let's talk to Lussie.");
var A2S414 = new Choice(function(){changeScene(A2S2, 1)}, "Let's go back to the corridor.");

var A2S421 = new Choice(function(){if(checkInventory("BookPASS")){
    changeConv(12);}
    else{
    addToInventory("BookPASS");
    changeConv(3);
    }}, "Look at the colourful book.");
var A2S422 = new Choice(function(){if(checkInventory("DiaryPASS")){
    changeConv(16);}
    else{
    addToInventory("DiaryPASS");
    changeConv(4);
    }}, "Look at the diary.");
var A2S423 = new Choice(function(){changeConv (1)}, "Go back.");

var A2S431 = new Choice(function(){addToInventory("Love"); changeConv (8)}, "Pray to find love.");
var A2S432 = new Choice(function(){changeConv (7)}, "Pray empty-minded.");
var A2S433 = new Choice(function(){changeConv (6)}, "Pray for gurka.");
var A2S434 = new Choice(function(){changeConv (1)}, "Let's stop.");

var A2S441 = new Choice(function(){changeConv (10)}, "What do you think of this place?");
var A2S442 = new Choice(function(){changeConv (11)}, "What should we do?");
var A2S443 = new Choice(function(){changeConv (1)}, "Sorry. I forgot.");
var A2S444 = new Choice(function(){changeConv (1)}, "That's enough. Let's keep going.");

var A2S451 = new Choice(function(){changeConv (13)}, "Los números.");
var A2S452 = new Choice(function(){changeConv (14)}, "La familia.");
var A2S453 = new Choice(function(){changeConv (15)}, "Los gustos.");
var A2S454 = new Choice(function(){changeConv (2)}, "I'm done with the book.");

var A2S461 = new Choice(function(){changeConv (17)}, "Read about his work.");
var A2S462 = new Choice(function(){changeConv (18)}, "Read about his personality.");
var A2S463 = new Choice(function(){changeConv (19)}, "Read about this place.");
var A2S464 = new Choice(function(){changeConv (2)}, "Let's go back to the altar.");
// SCENE 4 CHOICES END

var A2S4 = new Scene([
    new Conv([
        new Background(getBackgroundURL("Cryptchurch")),
        new dialog(Bjorn, "Oh... I wasn't expecting that."),
        new dialog(Lussie, "What..."),
        new dialog(NarratorBjorn, "We had just entered a room that was so well-lit, one could have sworn it was the middle of the day on Terra. We had not seen such bright, comforting light in a very long time. The room was very extravagantly decorated, and it really looked like the altar area of a Terran church. In the walls were engraved pillars adorned with golden details, around the altar were spread dozens of fresh roses."),
        new dialog(Lussie, "How can those flowersss be sssso fresh?"),
        new dialog(Bjorn, "Don't ask... I have no idea. They don't look holographic."),
        new dialog(NarratorBjorn, "The altar itself was pure catholic decadence, entirely made out of gold. A massive candelabra stood on it, its candles unlit. Actually, they didn't look like they had ever been lit."),
        new dialog(Lussie, "This room looksss... Untouched."),
        new dialog(Bjorn, "Virgin of all alien interaction."),
        new dialog(Lussie, "What a crazy place."),
    ]),

    new Conv([
        new Background(getBackgroundURL("Cryptchurch")),
        new dialog(NarratorBjorn, "The bright light shining in the room was almost blinding to someone used to dim artificial lights. But it was somewhat soothing."),
        new dialog(Lussie, "How beautiful. What should we do?"),
        new ChoiceArray([A2S411, A2S412, A2S413, A2S414])
    ]),

    new Conv([
        new dialog(NarratorBjorn, "Getting closer to the altar, the table was even more beautiful than what it seemed from afar. The detailing was truly out of this world. However, two things stood out to us..."),
        new dialog(Lussie, "Ssstrange. Those items don't belong in sssuch a sssterile room, do they?"),
        new dialog(Bjorn, "They don't. Let's take a look at them."),
        new ChoiceArray([A2S421, A2S422, A2S423]),
    ]),

    new Conv([
        new dialog(NarratorBjorn, "The book's cover was very colorful. It was decorated with what looked like a bunch of little carved flags and some unknown, delicious looking food things."),
        new dialog(Lussie, "You mean... Empanadasss?"),
        new dialog(Bjorn, "Oh, that's what they are."),
        new dialog(Lussie, "Yessss."),
        new dialog(Bjorn, "Es... pa... niol... para... los tontos?"),
        new dialog(Lussie, "Looksss like a language textbook."),
        new dialog(Bjorn, "Must have been exhausting to speak so many languages back then. I'm glad we just stuck to English."),
        new dialog(Lussie, "You don't ssspeak Ssswedish?"),
        new dialog(Bjorn, "I do. A little bit."),
        new dialog(Lussie, "Sssee. They've not totally disappeared. Languages are good for gossssssip."),
        new dialog(Bjorn, "Sure."),
        new ChangeConv(12)
    ]),

    new Conv([
        new dialog(NarratorBjorn, "Next to the colorful book laid a notebook with a leather cover engraved with intricate patterns. It looked... medieval. An adjective I don't remember ever using in my life."),
        new dialog(Lussie, "Thissss notebook is gorgeoussss."),
        new dialog(Bjorn, "It could be simpler. I don't get why it has to be so intricate."),
        new dialog(Lussie, "Terransss used to love very complicated designs."),
        new dialog(Bjorn, "Not so practical, even though pretty. I think I prefer moderner things."),
        new dialog(Lussie, "Let'sss take a look at the diary..."),
        new dialog(Bjorn, "Mh. A lot of the entries are not of interest to us."),
        new dialog(Lussie, "Ssssss. You don't want to learn ssssome gosssip about this man?"),
        new dialog(Bjorn, "Man is a strong word. Did they even have genders?"),
        new dialog(Lussie, "Sssssssss."),
        new dialog(Bjorn, "Anyway. I guess we'll take a look at what interests you, Lussie. Pick a page."),
        new ChangeConv(16),
    ]),

    new Conv([
        new dialog(Lussie, "What if we prayed?"),
        new dialog(Bjorn, "If we... what?"),
        new dialog(Lussie, "You know, what Terransss used to do back in the day.  Come on!"),
        new dialog(Bjorn, "I'm not sure I..."),
        new dialog(Lussie, "My friendsss won't believe me when I tell them about this trip!"),
        new dialog(Bjorn, "I'm sure they won't."),
        new dialog(NarratorBjorn, "I guess we don't have a choice, now..."),
        new ChoiceArray([A2S431, A2S432, A2S433])
    ]),

    new Conv([
        new dialog(NarratorBjorn, "As I kneeled down in front of the altar, I tried to channel something to pray about. Of course, one blatant issue came to mind: the rise in price of gurka aboard the 3MPA-Nada."),
        new dialog(NarratorBjorn, "Gurka was destroying my groceries budget, yet I couldn't stop buying it. It was one of the only things native of Sweden available on board! How can one live without gurka?"),
        new dialog(Bjorn, "If anyone is listening... Please give us gurka back."),
        new dialog(NarratorBjorn, "Unfortunately, this time, my prayer was unanswered."),
        new dialog(NarratorBjorn, "It left me with a deep hunger for gurka."),
        new ChoiceArray([A2S431, A2S432, A2S434])
    ]),

    new Conv([
        new dialog(Bjorn, "Whatever..."),
        new dialog(NarratorBjorn, "I kneeled down in front of the altar and tried to pray and channel something to think about, but this time, nothing came to mind. I decided to take up the opportunity to meditate."),
        new dialog(NarratorBjorn, "A few silent minutes passed."),
        new dialog(Bjorn, "... !"),
        new dialog(Bjorn, "Quill?"),
        new dialog(NarratorBjorn, "I don't know why, the word QUILL had come to mind."),
        new dialog(Bjorn, "Nevermind... It's probably not that important."),
        new ChoiceArray([A2S431, A2S433, A2S434])
    ]),

    new Conv([
        new dialog(NarratorBjorn, "As I kneeled down in front of the altar, I tried to channel thoughts about what I desired. Despite numerous encounters with different types of persons, I felt the lack of a true soul mate. I whispered so as not to be heard by Lussie."),
        new dialog(Bjorn, "If this altar is inhabited by any thing or anyone at all..."),
        new dialog(Bjorn, "Please give me someone to love."),
        new dialog(NarratorBjorn, "Suddenly, I felt shivers as images flashed in my mind."),
        new dialog(Bjorn, "What..."),
        new dialog(NarratorBjorn, "The images were of finches flying in a stormy sky."),
        new ChoiceArray([A2S432, A2S433, A2S434]),
    ]),

    new Conv([
        new dialog(Bjorn, "Lussie, can we talk?"),
        new dialog(Lussie, "I mean... We're right next to each other. You don't need to asssk."),
        new dialog(Bjorn, "I was just being polite."),
        new ChoiceArray([A2S441, A2S442, A2S443]),
    ]),

    new Conv([
        new dialog(Lussie, "I certainly like the light."), 
        new dialog(Bjorn, "You like light a bit more than darkness, huh."),
        new dialog(Lussie, "Darknessss makes me feel sssad."),
        new dialog(Bjorn, "I like obscure places."),
        new dialog(Lussie, "Do you now? Why?"),
        new dialog(Bjorn, "Less tourists."),
        new dialog(Lussie, "Less tourists? What?"),
        new dialog(Bjorn, "Because nobody goes there. They're too obscure."),
        new dialog(Lussie, "Sssss. I hate you."), 
        new dialog(Bjorn, "You should try lightening up a bit."),
        new dialog(Lussie, "Let'sss focuss on our tasssk."),
        new ChoiceArray([A2S442, A2S444]),
    ]),

    new Conv([
        new dialog(Lussie, "I wonder... We should explore everything we can."),
        new dialog(Bjorn, "The door at the very end of the corridor is intriguing, but it seems locked. Probably impossible to force our way in."),
        new dialog(Lussie, "And I do feel like we need more context to underssstand what is going on here."), 
        new dialog(Lussie, "Whatever it is that we will find, I feel like this guy was a sssscholar of sssome sssort. Probably a big talker."),
        new dialog(Bjorn, "Yes. It might be hard to retain all the information that we'll get."),
        new dialog(Lussie, "We should take notesss ssssomewhere of the ssstuff we find relevant."), 
        new dialog(Bjorn, "Good idea."),
        new dialog(Lussie, "I am under the impressssion that thisss place was meant to be found."),
        new dialog(Bjorn, "Yes. It is a bit too well-running and welcoming for it to be meant to be forgotten about."),
        new ChoiceArray([A2S441, A2S444]),
    ]),

    new Conv([
        new dialog(Lussie, "Now, shouldn't we take a look at that book?"),
        new dialog(Bjorn, "Let's look at the summary. I should take notes..."),
        new ChoiceArray([A2S451, A2S452, A2S453, A2S454]),
    ]),

    new Conv([
        new dialog(Narrator, "Desde 1 hasta 10: UNO, DOS, TRES, CUATRO, CINCO, SEIS, SIETE, OCHO, NUEVE, DIEZ."),
        new dialog(Narrator, "Desde 10 hasta 100: DIEZ, VEINTE, TREINTA, CUARENTA, CINCUENTA, SECENTA, SETENTA, OCHENTA, NOVENTA, CIEN."),
        new dialog(Bjorn, "Muy bien."),
        new ChoiceArray([A2S452, A2S453, A2S454]),  
    ]),

    new Conv([
        new dialog(Narrator, "LOS PADRES -- La madre (mama), El padre (papa). LOS NIÑOS -- Los PADRES tienen HIJOS -- La hija, el hijo."),
        new dialog(Narrator, "EJEMPLO: La MADRE Maria y el PADRE Mario tienen dos HIJOS, Paola y Pablo. Paola es la HERMANA de Pablo. Pablo es el HERMANO de Paola. Paola es la HIJA de Maria y Mario. Paolo es el HIJO de Maria y Mario."),
        new dialog(Narrator, "El HIJO Pablo tiene una HIJA, Vanesa. Vanesa es la HIJA de Pablo. Maria es la MADRE de Pablo y la ABUELA de Vanesa. Mario es el PADRE de Pablo y el ABUELO de Vanesa. Vanesa es la NIETA de Maria y Mario."),
        new ChoiceArray([A2S451, A2S453, A2S454]),  
    ]),

    new Conv([
        new dialog(Narrator, "EL CHOCOLATE -- + : ME GUSTA el chocolate. ++ : ME ENCANTA el chocolate."),
        new dialog(Narrator, "- : NO ME GUSTA el chocolate. -- : ODIO al (A + EL) chocolate."),
        new ChoiceArray([A2S451, A2S452, A2S454]),  
    ]),

    new Conv([
        new dialog(Lussie, "I think I want to read..."),
        new ChoiceArray([A2S461, A2S462, A2S463, A2S464]),
    ]),

    new Conv([
        new dialog(Narrator, "My name is Zhuraid Uv'air. I am a Necralian researcher. Although my aim was to make discoveries beneficial to society, I might have discovered something terrible instead."),
        new dialog(Narrator, "We have uncovered some years ago the beautiful planet of Earth."),
        new dialog(Lussie, "Earth?"),
        new dialog(Bjorn, "... Interesting. Earth is the former name of Terra."),
        new dialog(Lussie, "We had observers long before we reached the ssstars ourssselves..."),
        new dialog(Narrator, "This planet is far lusher with life than any planet in the system of Necralis, but it holds a dark truth: its inhabitants all wish to hold power over others. Earth is ravaged by war."),
        new dialog(Narrator, "What greatly shocked my compatriots intrigued me. How did they come to this? Even more so, I started to dig into Earthian literature. So did my peers."),
        new dialog(Narrator, "There, I found terrifying things. Earthian literature describes dictatorships and weapons, both brutal and sly. My mind started to wander: our peaceful system had never entertained any hostile thoughts before. What if this new trend of Earthian culture planted in our minds the seeds of greed?"),
        new dialog(Narrator, "Earthian culture is as beautiful as it is terrible. I decided to develop in secret a weapon that could be used against my own kind in case it decided to hide evil thoughts. Through transparency and trust, all can be achieved."),
        new dialog(Narrator, "This weapon I couldn't have imagined myself. Its idea came from a novel of a genre Earthians call dystopia, from a country called Sweden."),
        new dialog(Narrator, "In the story itself, this weapon used by the State to control its citizens, opens the eyes of its inventor to the terrible nature of his society. It is the hope I have for my peers in case of catastrophe."),
        new dialog(Narrator, "After years of careful chemical research and trials, I think I have succeeded. I produced one very small sample of the weapon, but it should be easily replicated by any kind of advanced technology. Because of its dangerous nature, it shall remain under lock in my tomb, even after my death."),
        new dialog(Narrator, "I shall tell my closest friends and family about this weapon. I shall tell them to spread the news to any one they deem trustworthy, or to any resistant cell in a potential malevolent society. For now, Necralis still thrives in peace and benevolence. But how to resist greed once we realize we can seize power for ourselves?"),
        new dialog(Narrator, "The code to the door holding the weapon is LEFT - LEFT - RIGHT - RIGHT - LEFT."),
        new dialog(Narrator, "Upon entering the room, you will have to speak with me. I cannot, and will not, give the weapon to someone that cannot be trusted."),
        new dialog(Bjorn, "I think this is the extent of what we can glean about that weapon."),
        new dialog(Lussie, "I don't know what to ssssay."),
        new dialog(Bjorn, "How can we talk to him if he's dead?"),
        new ChoiceArray([A2S462, A2S463, A2S464]),
    ]),

    new Conv([
        new dialog(Narrator, "My youngest daughter, Arya, brought me fruits today. She says working in my own tomb is too gloomy. I disagree. I have always enjoyed the quiet of graveyards. Besides, I am not afraid of death: I have already lived more than a hundred years, and I know I still have at least another century to pass."),
        new dialog(Narrator, "It is more than enough time. On other necralian planets, short-lived races lament the fleeting nature of life: my peers are blessed with long and full lives. How could we be scared of death? Most of us choose to die themselves when they decide they have done everything they wanted to do."),
        new dialog(Narrator, "Arya doesn't understand this. She is very sweet. I love my children and grand-children: the voices of children are the only interruption I can accept while working."),
        new dialog(Bjorn, "Let's read another page..."),
        new dialog(Narrator, "When I visited Terra, I brought with me much knowledge and many artifacts. I have visited many places there. It is a world lush with life, much more passionate than our system of Necralis. Injustice brings fire to the heart of Terrans, and that fire is inextinguishable."),
        new dialog(Narrator, "Terra being a planet that has no relationship to the others in its system, it still functions according to a system of nations and borders. The Terran country closest to my heart is the little country of Paraguay."),
        new dialog(Narrator, "Such a vibrant little country it was. Its vegetation is of a green I've never seen in my life, and its people are by far the kindest I have encountered, yet also the most passionate."), 
        new dialog(Bjorn, "Funny."),
        new dialog(Lussie, "What is?"),
        new dialog(Bjorn, "I've never been to Paraguay, yet this description sounds very familiar to me."),
        new dialog(Lussie, "Maybe you went in another life."),
        new dialog(Bjorn, "Sure. I don't believe in reincarnation."),
        new dialog(Bjorn, "(But the possibility does warm my heart, somehow.)"),
        new dialog(Lussie, "I don't think there are any other interesssting pagess."),
        new ChoiceArray([A2S461, A2S463, A2S464]),
    ]),

    new Conv([
        new dialog(Narrator, "Dear reader, welcome to my resting place."),
        new dialog(Bjorn, "......."),
        new dialog(Narrator, "You were probably not expecting me to address you like that. Well, you can ease your conscience of this burden it was maybe bearing-- I left this diary here on the altar for you to read."),
        new dialog(Narrator, "As you read those words, I have finally decided that I have had enough. To you, it might sound strange, or gloomy, but don't fret: my race lives for very long, if not forever. But after a while, especially when living alongside shorter lived races, you start feeling like you have had your fill."),
        new dialog(Narrator, "We have very peaceful deaths. We get plenty of time to prepare, to build, to say goodbye. Our graveyards are grandiose. When someone dies, nobody grieves them. For the grieving has been done when they were still alive."),
        new dialog(Narrator, "This place is not only my tomb, but it has also been my garden and my office for a while. I infused it with my love for Terra. I carried plants accross the galaxy and gave them here the love and light and air they deserve."),
        new dialog(Narrator, "Through this church I honor Terran beliefs-- although it is not representative of all of them, it was the beliefs of my friends whom I met on the planet. Maybe one day their civilization will develop, and their descendants will set foot in this church."),
        new dialog(Narrator, "They might feel confused, or honored, or both."),
        new dialog(Lussie, "He sssssaw it coming."),
        new dialog(Bjorn, "Well played."),
        new dialog(Narrator, "Yet, this place also holds a secret, as you surely know. I cannot control anymore how that secret will be used, but I do hope that this diary will be enough to convey my intentions. I don't want my name to become synonymous with conflict and pain."),
        new dialog(Narrator, "Don't use my secret except against an abusive power."),
        new dialog(Narrator, "But if you need to retrieve it, please take this in account."),
        new dialog(Bjorn, "It looks like extracts from a book were cut and stuck to that diary."),
        new dialog(Lussie, "That is quite impresssssive actually. I haven't read a paper book in... never."),
        new dialog(Bjorn, "Oh... Wait."),
        new dialog(Lussie, "What is it?"),
        new dialog(Bjorn, "That's Swedish."),
        new dialog(Narrator, "Alla är inte sanna nog för att höra sanningen, det är det sorgliga. Den kunde vara en bro mellan människa och människa - så länge den är frivillig, ja - så länge den ges som en gåva och tas emot som en gåva."),
        new dialog(Narrator, "Är det inte underligt att allting mister sitt värde så fort det upphör att vara en gåva - till och med sanningen?"),
        new dialog(Lussie, "Sssssss."),
        new dialog(Bjorn, "I feel like I should know where it comes from."),
        new dialog(Lussie, "That'sss all we can glean about thisss place."),
        new ChoiceArray([A2S461, A2S462, A2S464]),
    ]),

]);
// SCENE 4 END

//SCENE 3 : TOMB
// SCENE 3 CHOICES
var A2S311 = new Choice(function(){changeConv (2)}, "Let's talk to Lussie.");
var A2S312 = new Choice(function(){if(checkInventory("ScripturePASS")){
    changeConv(6);}
    else{
    addToInventory("ScripturePASS");
    changeConv(5);
    }
}, "Let's take a look at the stone wall.");
var A2S313 = new Choice(function(){changeScene(A2S2, 1)}, "Let's go back to the corridor.");

var A2S321 = new Choice(function(){changeConv (3)}, "What do you think of this place?");
var A2S322 = new Choice(function(){changeConv (4)}, "Anyone in your family you miss?");
var A2S323 = new Choice(function(){changeConv (1)}, "Nevermind.");
// SCENE 3 CHOICES END

var A2S3 = new Scene([
    new Conv([
        new Background(getBackgroundURL("Cryptcross")),
        new dialog(NarratorBjorn, "We moved through the dark passage. Before long, we emerged in a very singular room. It was of medium size and covered in exotic plants. They looked Terran, something you could find in the southern hemisphere of the planet. In front of a carved rock stood a bright red neon-lit cross. "),
new dialog(Bjorn, "That's strange, isn't it?"),
new dialog(Lussie, "What is?"),
new dialog(Bjorn, "... Nothing."),
new dialog(NarratorBjorn, "As far as I knew, only Terrans have crosses as religious imagery. What could it mean?"),
        new ChangeConv (1),
    ]),

    new Conv([
        new Background(getBackgroundURL("Cryptcross")),
        new dialog(NarratorBjorn, "The room was dark, except for the cross glowing in its center. It stood above slightly humid soil. It looked like something was written in the stone wall behind it."),
new dialog(Lussie, "It'sss pretty gloomy. I'd like it if we didn't sssstay too long. Why didn't you go to the bright room insssstead?"),
new dialog(Bjorn, "You do realize exploring every room is part of our mission, right?"),
        new ChoiceArray ([A2S311, A2S312, A2S313]),
    ]),

    new Conv([     
new dialog(Lussie, "You had ssssomething to assk me?"),
        new ChoiceArray ([A2S321, A2S322, A2S323]),
    ]),

new Conv([     
    new dialog(Lussie, "It remindsss me of a party I went to."),
new dialog(Bjorn, "A party? What?"),
new dialog(Lussie, "It was before I went to Ssssspace sschool, we had a big party."),
new dialog(Lussie, "It was in ssssome kind of fortressssss from ancient timess. On Terra. We could sseeeee the ssskyyy-- that is, until we lit up the neon lightsss."),
new dialog(Bjorn, "Mmh."),
new dialog(Lussie, "The neon lightsss looked jussst like the crosss."),
new dialog(Bjorn, "I see."),
new dialog(Lussie, "But it wass lesssss gloomy. Thiss place is very gloomy."),
new dialog(Bjorn, "I like the plants."),
new dialog(Lussie, "I don't know."),
new dialog(Lussie, "Besssides, I don't know if you took a look yet at the engravingss. But I don't even underssstand what they sssay. Completely uselesss."),
new dialog(Bjorn, "Not the biggest fan of this place then, I take it."),
new ChangeConv(2),
        ]),
        
    new Conv([     
        new dialog(Lussie, "That'sss a depresssing thing to asssk in front of a tomb."),
        new dialog(Bjorn, "Hmm... yes, sorry."),
        new dialog(Lussie, "I misssss my dog."),
        new dialog(Bjorn, "You have a dog?"),
        new dialog(Lussie, "Yesss. I have a dog on Terra."),
        new dialog(Bjorn, "What is your dog like?"),
        new dialog(Lussie, "It'ssss ssmall and fluffy. It'sss a good dog."),
        new dialog(Bjorn, "Why didn't you bring it on the ship?"),
        new dialog(Lussie, "My dog iss happier in a garden than on a ssspaceship, I would sssay."),
        new dialog(Bjorn, "Fair enough."),
        new dialog(NarratorBjorn, "For once, silence wasn't interrupted right away when it fell again between us. We could only hear the light flickering of the cross's neon lights. Although Lussie was obnoxious at times, I felt a little bit closer to her."),
new ChangeConv(2),
        ]),


    new Conv([
        new dialog(NarratorBjorn, "The cross's light was bright enough to illuminate the stone wall behind it. The wall looked eroded-- although the erosion was probably faked for decorative effect. A cross shaped carving at the center of it mirrored the neon installation facing it."),
        new dialog(NarratorBjorn, "On top of that carving were written a few words."),
        new dialog(Lussie, "Zhuraid Uv'air."),
        new dialog(Bjorn, "What?"),
        new dialog(Lussie, "Zhuraid Uv'air. I think it is the name of our guy."),
        new dialog(Bjorn, "Quite the name."),
        new dialog(Lussie, "Yesss."),
        new dialog(Bjorn, "What's that below the name?"),
        new dialog(Lussie, "I'm ssssorry, but i'm completely unable to pronounce that."),
        new dialog(Bjorn, "Oon ombray day cooltoora..."),
        new dialog(Lussie, "Let'sss read it in sssilence."),
        new dialog(Bjorn, "I think you're right."),
        new dialog(Narrator, "Zhuraid Uv'air (292 años) 'Un hombre de cultura, y de culturas. Padre de cinco hijas, abuelo de nueve nietos. Le gustaba Terra, y más que todo, le gustaba La Chispa. Odiaba al teréré, pero le encantaba el mbeju. Para todo gracias y aguyje mil veces.' "),
        new dialog(Lussie, "No idea what that meanss."),
        new dialog(Bjorn, "Wait. I know that language... Don't I?"),
        new dialog(Lussie, "I sure hope there's a guide sssomewhere."),
        new dialog(Bjorn, "We'll have to look for it."),
        new ChangeConv(1),
    ]),

    new Conv([
        new dialog(Narrator, "Zhuraid Uv'air (292 años) 'Un hombre de cultura, y de culturas. Padre de cinco hijas, abuelo de nueve nietos. Le gustaba Terra, y más que todo, le gustaba La Chispa. Odiaba al teréré, pero le encantaba el mbeju. Para todo gracias y aguyje mil veces.' "),
        new ChangeConv(1),
    ]),
]);
// SCENE 3 END

//SCENE 2 : CORRIDOR
// SCENE 2 CHOICES
var A2S211 = new Choice(function(){changeScene(A2S1, 1)}, "Let's go back to the entrance.");
var A2S212 = new Choice(function(){if(checkInventory("TombPASS")){
    changeScene(A2S3, 1);}
    else{
    addToInventory("TombPASS");
    changeScene(A2S3, 0);
    }
}, "Let's go to the dark room.");
var A2S213 = new Choice(function(){if(checkInventory("ChurchPASS")){
    changeScene(A2S4, 1);}
    else{
    addToInventory("ChurchPASS");
    changeScene(A2S4, 0);
    }
}, "Let's go to the bright room.");
var A2S214 = new Choice(function(){if(checkInventory("MetalDoorPASS")){
    changeConv(3);}
    else{
    addToInventory("MetalDoorPASS");
    changeConv(2);
    }
}, "Let's go towards that heavy metal door.");

var A2S221 = new Choice(function(){changeConv(4)}, "Turn left.");
var A2S222 = new Choice(function(){changeConv(4)}, "Turn right.");
var A2S223 = new Choice(function(){changeConv(1)}, "Go back.");
var A2S231 = new Choice(function(){changeConv(5)}, "Turn left.");
var A2S241 = new Choice(function(){changeConv(6)}, "Turn right.");
var A2S251 = new Choice(function(){changeConv(7)}, "Turn right.");
var A2S261 = new Choice(function(){changeConv(8)}, "Turn left.");

var A2S271 = new Choice(function(){if(checkInventory("AIPASS")){
    changeScene(A2S5, 1)}
    else{
    addToInventory("AIPASS");
    changeScene(A2S5, 0);
    }
}, "Go in.");
// SCENE 2 CHOICES END

var A2S2 = new Scene([
    new Conv([
        new Background(getBackgroundURL("Cryptcorridor")),
        new dialog(NarratorBjorn, "After some time walking in complete darkness, rays of pink light started to peek through. Following the light, we soon arrived in a very intensely lit corridor, bright pink neon lights covering the walls and ceiling. The place looked quite futuristic and was a bit agressive on the eye."),
        new dialog(Lussie, "Ouch... That'ssss quite the lightsss. I feel like I've jussst woken up in the middle of the afternoon."),
        new dialog(Bjorn, "We do agree, for once."),
        new ChangeConv (1),
    ]),

    new Conv([
        new Background(getBackgroundURL("Cryptcorridor")),
        new dialog(NarratorBjorn, "The complete symmetry of the room was quite confusing. However, that much was certain: there was a passage on the left that was as dark as the tunnel we came from, and another one on the right that seemed better lit. At the very end of the corridor stood a heavy metal door."),
new dialog(Lussie, "Now... Where should we go?"),
new ChoiceArray ([A2S211, A2S212, A2S213, A2S214]),
    ]),

    new Conv([
        new dialog(Bjorn, "That's a massive door."),
        new dialog(NarratorBjorn, "We stood in front of a big, metal door-- or maybe was it made from a material still unknown to Terra? In any case, it seemed impossible to crack it open, even with the best tools possible. Its handle was more like a wheel of sorts, and it seemed like it could be turned left and right."),
        new dialog(Lussie, "How are we ssssupposed to open it? There is no keyhole."),
        new dialog(Bjorn, "I think you'd have to turn the wheel left and right... Maybe you need the right combination?"),
        new dialog(Lussie, "Is thisss a code?"),
        new dialog(Bjorn, "Maybe."),
        new dialog(NarratorBjorn, "In any case, maybe it was worth giving a shot? Although, without the right combination, it could be a complete loss of time."),
new ChoiceArray ([A2S221, A2S222, A2S223]),
    ]),

    new Conv([
        new dialog(NarratorBjorn, "We walked back to the metal door. It was still closed shut."),
new dialog(Lussie, "Let'ssss try to open that door again."),
new ChoiceArray ([A2S221, A2S222, A2S223]),
    ]),

    new Conv([
        new dialog(Bjorn, "And now..."),
new ChoiceArray ([A2S231, A2S222, A2S223]),
    ]),

    new Conv([
        new dialog(Bjorn, "And now..."),
new ChoiceArray ([A2S221, A2S241, A2S223]),
    ]),

    new Conv([
        new dialog(Bjorn, "And now..."),
new ChoiceArray ([A2S221, A2S251, A2S223]),
    ]),

    new Conv([
        new dialog(Bjorn, "And now..."),
new ChoiceArray ([A2S261, A2S222, A2S223]),
    ]),

    new Conv([
        new dialog(Bjorn, "Ah! I heard a click!"),
new dialog(Lussie, "What? Really?"),
new dialog(Bjorn, "Yes! I think the door is open now."),
new ChoiceArray ([A2S271, A2S223]),
    ])


]);
// SCENE 2 END

//SCENE 1 : ENTRANCE
//SCENE 1 CHOICES
var A2S111 = new Choice(function(){changeConv(2)}, "I want to talk to you.");
var A2S112 = new Choice(function(){changeConv(9)}, "Let's contact the captain.");
var A2S113 = new Choice(function(){if(checkInventory("CorridorPASS")){
    changeScene(A2S2, 1)}
    else{
    addToInventory("CorridorPASS");
    changeScene(A2S2, 0);
    }
}, "Let's go forward.");

var A2S121 = new Choice(function(){changeConv(3)}, "What led you to work for the 3MP4-NADA?");
var A2S122 = new Choice(function(){changeConv(4)}, "What do you think about the new recruits?");
var A2S123 = new Choice(function(){changeConv(1)}, "Actually, nothing. Let's go.");

var A2S131 = new Choice(function(){changeConv(5)}, "She's kind of cute.");
var A2S132 = new Choice(function(){changeConv(6)}, "I'd need to talk to her more.");
var A2S133 = new Choice(function(){changeConv(7)}, "Don't think I'll like her too much.");

var A2S141 = new Choice(function(){if(checkInventory("serum")){
    changeConv(10);}
    else{
    changeConv(11);
    }
}, "We got the weapon. We'll head back to the ship.");
var A2S142 = new Choice(function(){changeConv(12)}, "I think the new anthropologist would like to see this.");
var A2S143 = new Choice(function(){changeConv(13)}, "I'll hang up.");
//SCENE 1 CHOICES END 

var A2S1 = new Scene([
    new Conv([
        new Background(getBackgroundURL("outsideview2")),
        new dialog(Narrator, "Captain’s Log, supplemental."),
        new dialog(Narrator, "I sent Chief of Security Björn and Sergeant Lussie on a joint mission to a floating crypt in the graveyard of Necralis. They should be able to retrieve a weapon that could well turn the tides for the ally nations of Terra and grant us victory over the Danish..."),
        new Background(getBackgroundURL("Cryptentrance")),
        new dialog(NarratorBjorn, "After a silent, uneventful trip, Lussie and I both reached the floating crypt. From the outside, it looked like an antique church in the style of 19th century Western Europe. It seemed like a very unefficient way to design a building, but, yes, it was beautiful."),
        new dialog(NarratorBjorn, "We entered the crypt to be welcomed by a dark, more contemporary, neon-lit corridor. Everything was silent. It was making me feel a bit uncomfortable, but I could appreciate the quiet. Living in a spaceship comes with a constant background humming, the existence of which you tend to forget until it is finally not there anymore."),
        new dialog(Lussie, "Ssssssso... Thisss is the crypt."),
        new dialog(NarratorBjornLussie, "I couldn't help but sigh. Silence ruined. Some people seem to dislike shared stillness."), 
        new dialog(Lussie, "Did you jusssst ssssigh, Björn?"),
        new dialog(Bjorn, "Yes. And yes, this is the crypt. Should we contact the Captain to tell him we've entered?"),
        new dialog(Lussie, "That'ss a good idea. Let'ss call him."),
        new dialog(Beret, "H-- Hi! Can you h-- me?"),
        new dialog(Lussie, "More or lessss. It'sss kind of difficult. But we've just entered the crypt! Sssso far it'sss a bit boring."),
        new dialog(Beret, "Roger tha-- can't hear-- ry well. Anyo-- here?"),
        new dialog(Bjorn, "There seems to be no one else here except us, Captain. I can detect no force field, however, advanced technology of some sort is active in this place. But from the readings, it is not harmful."),
        new dialog(Beret, "Good. Contact me when-- weapon. I'm afrai-- an't help-- comm-- hard."),
        new dialog(Lussie, "I literally can't tell what'ssss he's sssaying."),
        new dialog(Bjorn, "Understood. We'll report back when we have the weapon. If we run into any problems we will also report back to you."),
        new dialog(Lussie, "How did you underssstand him?"),
        new dialog(Bjorn, "It was not so hard Lusssssie-- uhm, Lussie."),
        new dialog(Beret, "Perfect. G-- luck!"),        
    ]),

    new Conv([
        new Background(getBackgroundURL("Cryptentrance")),
        new dialog(NarratorBjorn, "The entrance of the floating crypt was completely silent. If we focused, we could certainly have heard their own heartbeats."),
        new dialog(Lussie, "What should we do now?"),
        new ChoiceArray([A2S111, A2S112, A2S113]),
    ]),

    new Conv([
        new dialog(Lussie, "What do you want to know?"),
        new ChoiceArray([A2S121, A2S122, A2S123]),
    ]),

new Conv([
    new dialog(Lussie, "Well, I graduated on top of my classss when I ssstudied intergalactic relations."),
new dialog(Bjorn, "I see."),
new dialog(Lussie, "..."),
new dialog(Bjorn, "..."),
new dialog(Lussie, "... Sssso I applied directly for the 3MP4-NADA because it does have a very ssssolid reputation and..."),
new dialog(Lussie, ".......................... .......................... .......................... .......................... .......................... "),
new dialog(Lussie, ".......................... .......................... .......................... .......................... .......................... "),
new dialog(Lussie, ".......................... .......................... .......................... .......................... .......................... "),
new dialog(Lussie, ".......................... .......................... .......................... .......................... .......................... "),
new dialog(Lussie, "Then, Captain Beret contacted me, and--"),
new dialog(Bjorn, "Sorry for interrupting you but I think we should end this mono... this conversation. (I'm afraid the Danish will find us before you're over with your story and I really can't take it anymore.)"),
new dialog(Lussie, "Ssssssss... Fine."),
new ChangeConv (2),
]),

new Conv([
    new dialog(Lussie, "Have you talked to all of them yet?"),
new dialog(Bjorn, "No. I only met the new anthropologist. What was her name again?"),
new dialog(Lussie, "Thaléa."),
new dialog(Bjorn, "Right."),
new dialog(Lussie, "She keepsss interrupting people when they ssspeak."),
new dialog(Bjorn, "Yes, I noticed."),
new dialog(Lussie, "What do you think about her?"),
new ChoiceArray ([A2S131, A2S132, A2S133]),
]),

new Conv ([
    new dialog(Lussie, "Sssssss... I ssssee. You like her then?"),
new dialog(Bjorn, "I'm just saying she looks cute."),
new dialog(Lussie, "Interessssting. That will make good gosssssip."),
new dialog(Bjorn, "Please don't gossip about me. Or do, whatever. Anyway..."),
new ChangeConv (8),
]),

new Conv ([
    new dialog(Lussie, "Ssssometimes you can feel if you're going to get along with ssssomeone the minute you ssssee them for the firssst time."),
new dialog(Bjorn, "I still think it's better to wait some time before forming a definitive opinion."),
new dialog(Bjorn, "(Well. I did think she was cute, but.)"),
new dialog(Lussie, "Well, my insssstinct never failed me, at leasssst. Ssssee, we're a pretty good team, aren't we? I knew we would be."),
new dialog(Bjorn, "... Yes."),
new ChangeConv (8),
]),

new Conv ([
    new dialog(Narrator, "As Björn was trying to express the reasons why he didn't like Thaléa very much, he mysteriously couldn't find any. Why, she was, after all, so likeable."),
new dialog(Bjorn, "You know what, I think she's kind of cute."),
new ChangeConv (5),
]),

new Conv([
    new dialog(Lussie, "Have you met Rasssmuss?"),
    new dialog(Bjorn, "Rasmus? Who's Rasmus?"),
    new dialog(Lussie, "He's the new guy in charge of our shipmentssss."),
    new dialog(Bjorn, "Why did the former one get replaced?"),
    new dialog(Lussie, "He was ssssstealing gurka from the packagessss we were getting from Terra and the coloniesss."),
    new dialog(Bjorn, "What! You CANNOT be serious."),
    new dialog(Lussie, "What, what? Ssssss, Björn, I have never sssseen you sssso shocked. You look like you've ssssseeen a ghossst."),
    new dialog(Bjorn, "He's the reason why gurka prices have been raising so much lately?!"),
    new dialog(Lussie, "I didn't even notice. Were they? How-- how much gurka do you eat to notice sssssuch thingsss?"),
    new dialog(Bjorn, "That is not of your concern."),
    new dialog(Lussie, "Ssssss. Fine. Yesss, I asssssume thisss was the reassson why pricess were climbing. But Rasssmuss is here now, and he sssseems sssweeet as pie. Sssso cute."),
    new dialog(Bjorn, "... Cute? (What a strange way to spontaneously talk about a new colleague. How cute can he be?)"),
    new ChangeConv (2),
]),

new Conv([
    new dialog(Lussie, "Let'sss try thisss again."),
    new dialog(NarratorBjorn, "We could hear our receivers beep as they were trying to connect with the 3MP4-NADA's network. After a while, the holographic retransmission of our Captain's face appeared on the screen."),
    new dialog(Beret, "Good to see y-- do for you?"),
    new ChoiceArray([A2S141, A2S142, A2S143]),
]),

new Conv([
    new dialog(Beret, "Show it-- me."),
new dialog(NarratorBjorn, "I took the small vial out of my pocket and showed it to the Captain through the screen. He looked puzzled."),
new dialog(Beret, "What-- this? -- the weapon?"),
new dialog(Bjorn, "Yes. We don't know what it is, either: but it definitely is the weapon. It was well protected after all, albeit in a very unusual way."),
new dialog(Lussie, "We ssssearched everything."),
new dialog(Beret, "I see. Well-- back aboard. It--- easier to talk--"),
new dialog(Lussie, "Terrible. My earssss are bleeding."),
new dialog(Bjorn, "What ears? I don't see any ears."),
new dialog(Lussie, "......."),
new dialog(Bjorn, "Roger that, Captain Béret. Back to the ship!"),
new ChangeScene(A3S1, 0),
]),

new Conv ([
    new dialog(Beret, "Show it-- me."),
    new dialog(Bjorn, "What about a wee pun instead?"),
    new dialog(Lussie, "A... what?"),
    new dialog(Bjorn, "Get it?"),
    new dialog(Beret, "......."),
    new dialog(Bjorn, "Get it?"),
    new dialog(Lussie, "Honesssstly, no."),
    new dialog(Beret, "Don't sta-- him-- it---"),
    new dialog(Bjorn, "Weapon... Wee pun..."),
    new dialog(Beret, "Get that wee pun-- wee-- WEAPON and st-- with the puns. Over."),
    new dialog(Lussie, "Sssssss. Dear god."),
    new ChangeConv (9),
]),

new Conv([
    new dialog(Beret, "I'm sure she w-- but-- one shuttle."),
    new dialog(Bjorn, "What do you mean we only have one shuttle? Where are the others?"),
    new dialog(Beret, "Their syst-- failing."),
    new dialog(Bjorn, "Right."),
    new dialog(Bjorn, "What about sending Lussie back and have the anthropologist come instead?"),
    new dialog(Lussie, "What? Why? That makesss no sssensssse!"),
    new dialog(Beret, "What about sending Björn back and send the anthropologist instead?"),
    new dialog(Bjorn, "Nevermind."),
    new dialog(Lussie, "In your ssstupid face."),
    new ChangeConv (9),
]),

new Conv([
    new dialog(Beret, "Roger that. G-- luck!"),
    new dialog(NarratorBjorn, "And as the Captain hung up, the entrance fell into complete silence again. Until Lussie decided to speak up again..."),
    new ChangeConv (1),
]),
]);
//SCENE 1 END
//ACT 2 END

//ACT 1
//SCENE 1 : INTRODUCTION
//SCENE 1 CHOICES
var A1S1Q1 = new Choice(function(){changeConv(3)}, "What is all of this, exactly?");
var A1S1Q2 = new Choice(function(){changeConv(4)}, "Who made this?");
var A1S1Q3 = new Choice(function(){changeConv(5)}, "What do you know about the Necralis system?");
var A1S1NQ = new Choice(function(){changeConv(6)}, "No more questions.");
var Letsgo = new Choice(function(){changeScene(A2S1, 0)}, "Let's go!");
//SCENE 1 CHOICES END 

var A1S1 = new Scene([
    new Conv([
        new Background(getBackgroundURL("outsideview2")),
        new dialog(Narrator, "Captain’s Log, Stardate 42477.2."),
        new dialog(Narrator, "Today, it has been 4 Terran years since the Danish War began."),
        new dialog(Narrator, "As no end to this conflict is in sight, I had to welcome onboard new recruits to join our Starship’s effort to give strategic advantage to the other non-Danish nations of Terra, as some of our more experienced crew members left the 3MP4-NADA to face our enemies head-on. "),
        new dialog(Narrator, "Speaking of the devil…"),
        new dialog(Narrator, "The 3MP4-NADA has been diverted to the Necralis Star System. "),
        new dialog(Narrator, "It seems that the name of a particular place of that Star System has been at the center of intercepted Danish conversations lately…"),
        new dialog(Narrator, "For holding a powerful weapon that could give a decisive advantage to the ones finding it."),
        new dialog(Narrator, "Luckily, the 3MP4-NADA was drifting very close to the place in question."),
        new dialog(Narrator, "Our orders are to retrieve this dangerous weapon, study it, and protect it at all costs, until we can safely put it into the hands of the Terran War Council."),
    ]),

    new Conv([
        new Background(getBackgroundURL("maindeck")),
        new dialog(Coati, "Captain! We are approaching our destination."),
        new dialog(NarratorBeretCoati, "Lieutenant Coati is my esteemed right-hand and someone I absolutely trust. He has been serving the 3MP4-NADA for close to five years, and has managed to get us out of many hopeless situations."),
        new dialog(Beret, "Good. Reduce to half-impulse. Let’s get a closer look."),
        new dialog(Coati, "..."),
        new dialog(Coati, "I can’t believe my eyes…"),
        new dialog(Beret, "Chief of Security, do you detect any hostile presence?"),
        new dialog(Bjorn, "..."),
        new dialog(Bjorn, "No hostile presence whatsoever, sir. We are alone."),
        new dialog(NarratorBeretBjorn, "Chief of Security Björn is another crew member I absolutely trust. Although he started out as a simple technician, he gained my utmost respect for his loyalty, his cold tenacity, and his way of solving difficult issues in the middle of the most stressful situations."),
        new dialog(NarratorBeretBjorn, "Since I’ve promoted him Chief of Security, we haven’t even run into the slightest perilous encounter…"),
        new dialog(Bjorn, "But Sir, Captain… What even is all of this?... I’ve never seen anything like this."),
        new dialog(Coati, "..."),
        new dialog(Beret, "..."),
        new Background(getBackgroundURL("black")),
        new dialog (NarratorBeret, "As we all observed a dumbfounded silence, we stared out the window. The empty, dark void of space in front of us was filled to the brim with drifting artifacts of the past… Hundreds, thousands of them."),
        new dialog (NarratorBeret, "Thousands of floating coffins, graves, mausoleums, chapels-- in appearance quite close to what you would expect from 20th century Western Europe on Terra."),
        new dialog (NarratorBeret, "Gravity-less and made of shining processed stone-like materials far beyond our grasp of technology."),
        new Background(getBackgroundURL("maindeck")),
        new dialog (Beret, "I can’t say I have ever seen anything even close to this in my entire life. I’d stake my beret on it."),
        new dialog (Coati, "Is that a cathedral drifting at the back ?!"),
        new dialog (Beret, "..."),
        new dialog(MysteryThalea, "The Floating Graveyard of Necralis."),
        new dialog (Bjorn, "The Floating… Wait!"),
        new dialog (Bjorn, "Who are you? What are you doing here?!"),
        new dialog (Beret, "Björn, don’t fret… I called her here. Thank you for coming, Thaléa."),
        new dialog (Thalea, "The pleasure is mine, Captain Beret."),
        new dialog (NarratorBeretThalea, "This dramatic Finch is part of the new crew members I’ve had to welcome. She is to replace our former anthropologist who went to put her many years of experience of contact with alien cultures to the service of the Terran forces."),
        new dialog (NarratorBeretThalea, "Thaléa is fresh out of university… Which means that she has a vivid mind and a great depth of current anthropological knowledge, but also a very high opinion of herself and a tendency to talk over-"),
        new dialog (Thalea, "My name is Thaléa, and I am the new anthropologist expert of the 3MP4-NADA. Nice to meet you all."),
        new dialog (Bjorn, "Nice to meet you, Thaléa. I am Björn, the Chief of Security. "),
        new dialog (Coati, "We have already met before-- I am Lieutenant Coati, as you know."),
        new dialog (Beret, "Thank you Thaléa. Now, can you-"),
    ]),

    new Conv([
        new dialog(Thalea, "I will gladly answer any questions you might have about the Floating Graveyard of Necralis."),
        new ChoiceArray([A1S1Q1, A1S1Q2, A1S1Q3, A1S1NQ]),
    ]),

    new Conv([
        new dialog(Bjorn, "It is obviously a graveyard that floats."),
        new dialog(Beret, "Thank you Björn. But who is it for?"),
        new dialog(Thalea, "It is believed that this floating graveyard holds the artifacts --and… corpses-- of all the dozens of races that used to coexist in the Necralis system."),
        new dialog(Thalea, " It would probably be a bit preposterous to say that this was the only graveyard of the system, but… We certainly don’t have any traces of any other."),
        new dialog(Thalea, "It is very cosmopolitan in appearance. You can clearly see wildly different architectures, although the material used is strangely homogenous across all the constructions."),
        new dialog(Bjorn, "What is this material, actually?"),
        new dialog(Thalea, "From what I know, something we don’t have on Terra. Something we don’t know much about… even across our interplanetary relations. But I don’t know. I didn’t study chemistry or physics."),
        new dialog(Coati, "What I don’t understand is… why is it floating?"),
        new dialog(Thalea, "That’s a very good question. Why is this graveyard just drifting about? Several hypotheses exist-- maybe it was to honour the memory of the people who spent most of their life in space…"),
        new dialog(Thalea, "Maybe it all came to drift there after the explosion of a planet…"),
        new dialog(Thalea, "Maybe it was some sort of custom?"),
        new dialog(Thalea, "But in any case, nobody can answer our queries now."),
        new ChangeConv(2),
    ]),

    new Conv([
        new dialog(Thalea, "Unsure. We don’t really have traces of what the Necralis inhabitants were like. One thing is certain, though: trust was a prominent value in their culture, as a system."),
        new dialog(Beret, "What do you mean?"),
        new dialog(Thalea, "All the tombs, mausoleums, and other constructions you see in there-- they’re open to everyone. It’s actually a problem. Surely we lost to pillagers many artifacts of the utmost importance to understand what happened here."),
        new dialog(Thalea, "But we do know that Necralis has always been very peaceful. Maybe that’s why the only thing under lock in here is something that could be used as a weapon."),
        new dialog(Bjorn, "Why is this the first time I’m hearing about this system?"),
        new dialog(Thalea, "Necralis is very well-known in my field. But I guess that Terra feels uncomfortable teaching the History of a peaceful system without understanding how it achieved this kind of stability-- and what led to its destruction."),
        new ChangeConv(2),
    ]),

    new Conv([
        new dialog(Thalea, "It was a star system lush with life. We don’t know how many unhabited planets existed within it, but at least six, for sure-- from what we could get from the graveyard’s tombstones. All races and nations coexisted peacefully. That’s about everything."),
        new dialog(Coati, "If there were so many planets in the Necralis system, how come we didn’t pass any of them on our way here?"),
        new dialog(Bjorn, "..."),
        new dialog(Thalea, "They were destroyed. Probably exploded."),
        new dialog(Coati, "What ?! How is that possible? All of them?!"),
        new dialog(Thalea, "Yes. Nobody has no idea why. This colossal drifting graveyard is all we have left of the necralian culture."),
        new ChangeConv(2),
    ]),

    new Conv([
        new dialog(Beret, "Thaléa, thank you for shedding some light on this spectacular place and the secrets it holds."),
        new dialog(Thalea, "No problem, of course. Will that be everything?"),
        new dialog(Beret, "Yes. You can return to your laboratory."),
        new dialog(Thalea, "Thank you, Captain."),
        new dialog(NarratorBeretThalea, "As Thaléa exited the deck, I could have sworn that her eyes lingered a little bit longer on Björn..."),
        new dialog(NarratorBeretBjorn, "... Completely unnoticed."),
        new dialog(Bjorn, "Thank you for the additional information. But, as I understood it, I am to explore a building in this graveyard. Could you give me more information about that?"),
        new dialog(Beret, "Of course. As you know, the Danish seem to have detected the presence of a strategic weapon of considerable power in a mausoleum drifting in this graveyard. We aim to take advantage of our close location to the mark and take possession of it before they do."),
        new dialog(Coati, "I am actually going to accompany you."),
        new dialog(Beret, "Actually, Lieutenant, you will not."),
        new dialog(Coati, "What do you mean?"),
        new dialog(Beret, "I know I told you that you would, but I would like for you to stay with me and monitor the operation. After all, this is an unknown zone."),
        new dialog(Coati, "Ah... I see..."),
        new dialog(Bjorn, "If not Lieutenant Coati, who will be my acolyte?"),
        new dialog(Beret, "You will go with Lussie. She was supposed to come along with the Lieutenant anyway."),
        new dialog(Bjorn, "Uhm... I see."),
        new dialog(NarratorBeretBjorn, "I could see that Björn was not pleased. The sterner Björn becomes, the unhappier he is. And he was very stern. Lussie has been a crew member for some time, but they somehow never really got along."),
        new dialog(Beret, "It is decided then. We should arrive soon at our destination. You will explore a small... floating... crypt. I don't think there will be much protection around the artifact we are after."),
        new dialog(Bjorn, "Indeed, I can't find any kind of forcefield surrounding this crypt. Strange."),
        new dialog(Coati, "What a cute little crypt though."),
        new dialog(Bjorn, "Yes. It is very quaint."),
        new dialog(Lussie, "Ssssssso cute."),
        new dialog(NarratorBeretLussie, "Lussie is also an esteemed crew member of this ship. She can do a little bit of everything, although she socially clashes with several crew members, because of her tendency of being a wee bit talkative and sometimes judgemental. Who doesn't like a good gossip?"),
        new dialog(Beret, "Ah! Lussie, there you are. Well, I think you can both get prepared. To the crypt! I should still be able to communicate with you by radio. Good luck."),
        new dialog(NarratorBeret, "On those words, Björn and Lussie left the main deck, one looking significantly happier than the other. I went back to my station, ready to follow their adventure from afar."),
        new ChoiceArray ([Letsgo]),
    ]),

]);
//Scene 1 END

//#functions (2)
var currentdialog = 0;
var currentScene = A1S1;
var currentConv = 0;

async function Next() {
    var event = currentScene.conversation[currentConv].events[currentdialog];
    var conversation = currentScene.conversation[currentConv].events;

    if (currentdialog == conversation.length) {
        debugger;
        currentConv++;
        currentdialog = 0;
        showBackground(event)
        Next();
        Next();
    }

    currentdialog++;
    if (event instanceof ChoiceArray) {
        choiceBox.style.display = "block";
        nextBox.style.display = "none";

        for (var i = 0; i < event.choices.length; i++) {
            var currentChoice = event.choices[i];
            var currentButton = choicebuttons[i];
            currentButton.innerHTML = currentChoice.text;
            currentButton.onclick = currentChoice.action; 
            currentButton.style.display = "block";
        } 
    }

        if (event instanceof dialog) {
            choiceBox.style.display = "none";
            nextBox.style.display = "block";
            //buttons display
            b1.innerHTML = "";
            b2.innerHTML = "";
            b3.innerHTML = "";
            b4.innerHTML = "";
            b1.style.display = "none";
            b2.style.display = "none";
            b3.style.display = "none";
            b4.style.display = "none";
            //buttons display
            lbname.innerHTML = event.character.name;
            if (event.character.name == "") {
                Nameboxoff();
            }
            else {
                NameboxOn();
            }
        showSprite(event);
        var currentText = ""
        nextButton.disabled = true;
        for (var i = 0; i < event.text.length; i++) {
            var currentCharacter = event.text[i];
            event.character.voice.volume = volume / 10;
            event.character.voice.play();
            currentText = currentText + currentCharacter;
            lbtext.innerHTML = currentText;
            await new Promise(r => setTimeout(r, 30 - textSpeed.value));
        }
        nextButton.disabled = false;
    }

    if (event instanceof Background) {
        showBackground(event);
        Next();
    }

    if (event instanceof ChangeScene) {
        changeScene(event.scene);
    }

    if (event instanceof ChangeConv) {
        changeConv(event.conv)
    }
}

function addToInventory(text) {
    inventory.push(text);
}

function checkInventory(text) {
    return inventory.includes(text);
}

function showSprite(event) {
    img = event.character.sprite;
    imgSprite.src = img;
}

function getSpriteURL(path) {
    return (new URL("sprites/" + path + ".png", document.location)).href;
}

function getAudioURL(path) {
    return (new URL("sounds/" + path + ".wav", document.location)).href;
}

function getBackgroundURL(path) {
    return (new URL("backgrounds/" + path + ".jpg", document.location)).href;
}

function showBackground(background) {
    var img = background.img 
    imgBackground.src = img
}

function changeScene(scene, conv) {
    currentScene = scene;
    currentConv = conv;
    currentdialog = 0;
    Next();
}

function changeConv(conv) {
    currentConv = conv;
    currentdialog = 0;
    Next();
}
//#functions (2) END