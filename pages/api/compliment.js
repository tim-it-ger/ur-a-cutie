export default async (req, res) => {
    
    const compliments = [
        "You are beautiful 💕",
        "You are a cutie 😘",
        "You are freakin amazing 😎",
        "You are a hottie 🍑",
        "You are gorgeous 😍",
        "Your smile is perfect 👌",
        "You deserve the world 🌎",
        "You light up my world 🔦",
        "You are flawless 🧐",
        "You are sexy 😏",
        "You are looking great today 😊",
        "You are my everything 🤩",
        "You are a beauty 🥺",
        "You are dramatic af 😜",
        "You are my queen 👸",
        "You are my favorite person 🍩",
        "You are appreciated 😍",
        "You have a great sense of humor 🤪",
        "You are like a unicorn, but real 🦄",
        "On a scale of 1 to 10, you are a 999999999999999999999999999999999999999999999999999",
        "You are an angel 😇",
        "You are an awesome girlfriend 👧🏻",
        "You are funny af 😂",
        "You are my kotku! 💖"
    ]

    const chosenCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    res.statusCode = 200
    res.json({ compliment: chosenCompliment })
  }
  
