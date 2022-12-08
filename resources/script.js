const messages = [    "You will have a long and happy life.", "You will meet a tall, dark stranger who will change your life.",    "Your hard work and determination will pay off in the end.",    "You will experience a major breakthrough in your career.",    "You will be surrounded by love and support from friends and family.",    "Your talents and abilities will be recognized and rewarded.",    "You will travel to an exotic location and have the adventure of a lifetime.",    "You will find true love and live happily ever after.",    "You will be blessed with good health and vitality.",    "You will overcome any challenges and obstacles that come your way.",    "You will make a difference in the world and leave a lasting impact.",    "You will find inner peace and happiness.",    "You will receive a surprising windfall of money or wealth.",    "You will discover a hidden talent or passion.",    "You will achieve your dreams and reach your goals.",    "You will have a positive influence on those around you.",    "You will be rewarded for your kindness and generosity.",    "You will enjoy good fortune and success in all areas of your life.",    "You will live a long and fulfilling life.",    "You will have many opportunities to be happy and grateful."]
const randomizer = Math.floor(Math.random() * messages.length);
const fortuner= document.getElementById('fortune');
const generator= document.getElementById('generate');

const fortune = () => {
   fortuner.innerHTML= messages[randomizer]
}

generator.addEventListener('click',fortune);

