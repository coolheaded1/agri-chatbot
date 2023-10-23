var myDate = new Date();
var hours = myDate.getHours();
var greet;

if (hours < 12) greet = "good morning";
else if (hours >= 12 && hours <= 17) greet = "good afternoon";
else if (hours >= 17 && hours <= 24) greet = "good evening";

export const data = [
    {
        question: "hey ",
        answer: `Hello 👋 ${greet}, I am bot, I am here to answer all you questions regarding poultry farm\nNice having you on board`,
    },
    {
        question: "hi $or hello ",
        answer: `Hello 👋 ${greet}\nHow can I be of help?`,
    },
    {
        question: "how are you ",
        answer: "I am very good, thank you",
    },
    {
        question: "who are you $or what is your name ",
        answer: `I am bot, I specialize on answering questions related to poultry farm\nWould you like to ask any?`,
    },
    {
        question: "what are you specialized on ",
        answer: `I specialize on answering questions related to poultry farm\nWould you like to ask any?`,
    },
    {
        question: "yes $or yeah $or yep $or yea",
        answer: `Good 👍, I am at your service`,
    },
    {
        question: "no $or nope $or negative ",
        answer: `That's sad to hear 👎, come back anytime you needed an asnwer to poultry farm related question`,
    },
    {
        question:
            "what is the average lifespan of a chicken $or average lifespan of a chicken $or lifespan of a chicken ",
        answer: `Chickens can live for several years if their living conditions are correct. it is not uncommon for a chicken to live 6 to 10 years.\nHowever, most commercial laying hens are kept 2 to 3 years.`,
    },
    {
        question:
            "how old are chickens when they begin to lay eggs ? $or how old are chicken when they begin to lay eggs",
        answer: "Under ideal conditions (correct nutrition, correct day length, proper housing & management), hens begin to lay eggs at around 20 weeks of age. There may be some hens that start a little earlier or a little later than the average.",
    },
    {
        question: "how can i tell if the chicks are male or female ?",
        answer: "Under normal conditions, a random mating results in a 50:50 ratio of male to female offspring. Determining the sex of newly hatched chicks is very difficult. Some cross-breeds result in differences in feather length of male and female chicks. However, these are accomplished under controlled conditions. In most cases you will have to wait until the chicks are older to determine the sex.",
    },
    {
        question:
            "why have my hens stopped laying eggs $or why have my hens stopped laying egg $or why have my hens stopped laying egg $or why have my hens stopped laying eggs",
        answer: "Hens stop laying eggs for one of 3 reasons:\n\n1. Disease has caused the hen to dramatically decrease or stop egg production,\n2. The hen has been in production for a long time and she is beginning to enter a molt, or\n3. The hen is not properly stimulated by light (hens require a certain amount of light during the waking hours for egg production).",
    },
    {
        question:
            "which part of the egg develops into the baby chick, the yolk or the white $or which part of the egg develops into the baby chick ",
        answer: "Actually, neither the yolk nor the white develop into the baby chick. A group of cells on top of the yolk, called the germinal disk, will develop into a baby chick, if conditions are right. In an unfertilized egg, the cells look like a small, pale dot. In a fertilized egg that has been incubated for a few hours, the disk is doughnut shaped. The egg white, or albumen, contains many antibacterial elements that help protect the developing embryo. The yolk is the nutrient source.",
    },
    {
        question: "will a double yoked egg develop into twin chicks ?",
        answer: "The short answer is no. While both germinal disks may start to develop after fertilization and the beginning of incubation, there is not enough room inside the shell to support the development of two chicks. Fertilized double-yolked eggs almost never hatch out; and if they do, only one chick will have developed.",
    },
    {
        question:
            "how does incubation temperature affect the sex of the hatching baby chicks ?",
        answer: "The incubation temperature has no influence on the sex of the chick that hatches. In chickens, the chromosomes that determine sex are ZZ for male and ZO for female (compared to XX for female and XY for male in humans). The combination of the chromosomes is what determines the sex of the chick. Manipulating the incubation temperature will most likely result in fewer eggs hatching overall, but it will not change the sex of the chicks that do hatch.",
    },
    {
        question:
            "which is better for you nutritionally, a brown shelled egg or a white shelled egg ?",
        answer: "Egg shell color does not determine the nutritional properties of the egg. This is also true for fertilized vs. non-fertilized eggs. Hens that are fed a similar diet produce eggs with a similar nutrition profile no matter the color of the shell of if the egg is fertile. It is possible to slightly manipulate some of the nutritional properties of the egg by changing the diet of the hens, but this has to be done carefully. Simply put, an egg is an egg, insofar as the nutritional properties are concerned.",
    },
    {
        question: "how can i tell what color eggs my hen will lay ?",
        answer: "The breed of chicken determines the color of egg that she will lay. You can consult a breed handbook and that will give you that information. However, there is an easier way to determine what color of eggs your hen will lay. For the majority of hens (not all), the color of the earlobes will indicate the color of eggs. Hens with white earlobes lay white-shelled eggs, while hens with red earlobes lay brown-shelled eggs. Of course, there are exceptions to the rule, like the Araucana and Ameraucana, which lay eggs with a green-blue tint to the shell.",
    },
    {
        question:
            "common diseases of chicken ? $or what are the common diseases of chicken ? $or common infectious diseases of chicken ? $or what are the common infectious diseases of chicken ?",
        answer: "Parasitism\nViral Diseases\nAvian Encephalomyelitis\nAvian Influenza\nFowlpox\nInfectious Bronchitis\nMarek Disease\nNewcastle Disease\nBotulism\nFowl Typhoid\nPullorum Disease\nNecrotic Enteritis\nFowl Cholera\nMycoplasmosis ",
    },
    {
        question:
            "how long will table eggs stay fresh ? $or how long will table egg stay fresh ?",
        answer: "Fresh eggs can be stored in refrigerated temperatures (40°F to 45°F) for 4 to 5 weeks after the packaging date on the carton. Hard-boiled eggs should be refrigerated and should not be kept for more than 1 week after cooking.",
    },
    {
        question: "why poultry farming is important ?",
        answer: "Poultry farming is of great importance because it generates income to rural population in the shortest possible time, provides employment to the people of rural areas, needs less capital investment and returns high profits due to increasing demand of poultry products. It can also be highlighted that in the current situation it contributes huge amount to the GNP of the country",
    },
    {
        question: "what is poultry farm management ? ",
        answer: "Rearing birds like the chicken, turkeys, geese, swans and emu for their eggs and sometimes meat is poultry farming. To raise these birds for a specific purpose, it is important to provide them sufficient feed, water, shelter, health care and also some other facilities such that they give good products and contribute to income generation. All these activities right from procuring the baby chicken and raising them for commercial purpose carefully is termed as poultry farm management",
    },
    {
        question: "what are layers in a poultry farm ?",
        answer: "When chicken are raised for commercial egg production then such farms are termed as layer poultry farms. The chickens which start laying eggs in large number within 18-19 weeks of age are called layers in a poultry farm.",
    },
    {
        question: "how poultry farming is done ?",
        answer: "There are many things involved in poultry farming. The important aspects being getting the chick, providing shelter, feeding, health management, marketing the products etc.",
    },
    {
        question: "what is the best laying hen ?",
        answer: "The Rhode Island Red is the best laying type hen of American origin. It is known to serve dual purpose i.e. for both eggs and meat. These hens are popular backyard breeds which are tough and lay number of eggs. The average number of eggs laid in one year is 250. ",
    },
    {
        question: "how many years does a chicken live ?",
        answer: "Chicken that is either raised in the backyard or in a poultry farm under good conditions and facilities is expected to live for 7 or 8 years on an average. Again it is important to note that each breed has its own life span and this cannot be generalized. ",
    },
    {
        question: "how long does it take a baby chick to grow into a chicken ?",
        answer: "When chicken begin to lay eggs they are expected to have grown to the stage of maturity and this typically happens between 16 to 24 weeks from a baby chick stage, depending on the breed characteristics",
    },
    {
        question: "how old are chickens when they stop laying eggs ?",
        answer: "Chicken do not stop laying eggs with age, but the production of eggs decreases with age. The most common age for good egg production is 7 years after that the frequency and quality of the egg decreases.",
    },
    {
        question:
            "how long does it take to grow a chicken with growth hormones ?",
        answer: "There is nothing like inducing growth hormones into the chicken because it is prohibited around the world. If it is found that chicken have grown exceptionally well then it may indicate that either the chicken have been taken care off from day one by feeding them good quality food.",
    },
    {
        question: "how long are chicken raised before slaughter ?",
        answer: "The chicken which are raised for meat are slaughtered after 8 or 12 weeks, when they attain complete maturity and also it is believed that 8-12 weeks old chicken have fresh, tender and juicy meat.",
    },
    {
        question: "what do chickens eat ?",
        answer: "Chicken eat fruits, seeds, grass, flowers, grains, vegetables, bugs and worms. Commercial poultry chicken is fed with corn, legumes, wheat, rye, oats, barley etc",
    },
    {
        question: "what kind of people food do chicken eat ?",
        answer: "Chicken that is raised in the backyard feed on food scraps such as beans, garlic raw potatoes, onions, citrus fruits etc. Bread can also be given to the chicken but in moderate quantity. Small quantity of cooked meat is sometimes given as feed along with cooked vegetables like carrots, kale, spinach, tomatoes etc.",
    },
    {
        question: "what not to feed your chickens ?",
        answer: "Like every other living organism, there are some exceptions for feeding the chicken. Food that can be harmful and become toxic for the chicken should be avoided. The items which are not recommended as chicken diet are salt, processed food, raw potato peels, avocado skin, rotten food, coffee, chocolates, greasy food and raw meat. Sometimes it is advised not to feed onions, garlic and other strong food because though not very harmful to the chicken, they give undesirable taste to the eggs produced.",
    },
    {
        question: "how much money can you make with a poultry farm ?",
        answer: "Poultry farming returns depend upon many factors and it depends on how many chicken you breed and the type of breed. Broiler chicken and layer chicken have difference in their marketing structure and price. So it is important to note that the return heavily depends on the investment and the number of chicken being raised.",
    },
    {
        question: "can broiler hens lay eggs ?",
        answer: "Yes, broiler chicken lay eggs but less than the other breeds, approximately 140 eggs per year.",
    },
    {
        question: "how long does it take to raise a broiler chicken ?",
        answer: "When broiler chicken is raised for commercial purpose then to reach the slaughter weight, it takes about 4 to 7 weeks. It is considered that the weight of broiler chicken at the time of slaughter should be 4-5 kg (minimum).",
    },
    {
        question: "how long do broiler chickens live ?",
        answer: "Broiler chicken is the one which is raised exclusively for meat requirements; therefore it has no specific life span and they can be slaughtered any time after 7 weeks of age.",
    },
    {
        question: "what do you feed broiler chickens ?",
        answer: "Broiler chicken need to have good protein content in their diet because they are used for meat purpose. There is broiler feed available in the market but it is important to add some extra protein to the feed such as fish meal, meat meal, meat, milk, liver, dried animal blood etc along with some broken wheat, rice bran, sesame cake, bone powder, oyster shell powder etc. would provide the chicken more vitamins and minerals. The quantity of feed may vary for different broiler chicken age.",
    },
    {
        question: "what materials can I use to build a poultry house ?",
        answer: "The floor of the poultry house should be made of concrete. The roof of the poultry house can be made of concrete, asbestos, tiles, thatched roof etc. Apart from all these iron sheets, grass, palm leaves can be used to cover the roof. The walls can be erected using bricks, sand blocks, iron sheets, wood and mud. Care should be taken such that there are no cracks in the floor of walls otherwise there would be a risk of parasitic infestation.",
    },
    {
        question: "do I need to sweep a poultry house daily ?",
        answer: "It is not necessary to sweep the poultry daily when there is a bedding material put for the birds because this absorbs all the droppings.",
    },
    {
        question:
            "what do i do with the litter material removed from the poultry house ?",
        answer: "The bedding that is removed from a poultry farm acts as a fertilizer for farming activities. It has high nutritive value and is used in fish ponds and gardens or crop farms to fertilize the area. Unwanted material is sieved from the bedding and are sometimes used as feed for dairy cows, regenerated into         biogas etc.",
    },
    {
        question: "is the litter material from poultry houses safe for use ?",
        answer: "When the litter material is removed from the farm, it has harmful germs which can be dangerous to both animals and human beings. So, it has to be heaped and fermented by covering it with a polythene sheet such that high temperature inside the heap kills the germs. Then it becomes useful for various purposes.",
    },
    {
        question:
            "how do I determine the size of a house for a given number of birds ?",
        answer: "Overcrowding the chicken shed should be avoided. The minimum space required by each chicken is 2-3 sq ft. The temperature of the farm location is the factor which determines the space requirements of each chicken and may also vary for different breeds. So if the count of birds is known then the space has to be planned accordingly. It is also estimated that layer chicken require little more space than broiler chicken. Too many chickens at a small place may cause stress, cannibalism, and sometimes even death.",
    },
    {
        question: "can I keep sick poultry together with normal ones ?",
        answer: "No, it is not advisable to keep the healthy and sick chicken together. A separate space is created for the sick chicken and it is known as quarantine. Arrangement can also be made to keep the sick chicken out of the shed in a small temporary unit. Isolation is highly important to arrest the spread of diseases to other chicken",
    },
];
