const facts = [
    "Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world.",
    "The first computer vision application was developed in the 1960s and involved teaching a computer to recognize handwritten text.",
    "Deep learning has significantly advanced the field of computer vision, enabling applications like facial recognition and autonomous driving.",
    "Computer vision is used in healthcare for tasks such as analyzing medical images to detect diseases.",
    "Augmented reality applications, like those used in mobile games, rely heavily on computer vision technology.",
    "The term 'computer vision' was first coined in 1966 by Seymour Papert.",
    "Computer vision technology is used in self-driving cars to help them navigate and understand their surroundings.",
    "Facial recognition technology, a subset of computer vision, is used in security systems and social media platforms.",
    "Computer vision can be used to monitor agricultural fields and assess crop health.",
    "In retail, computer vision is used for automated checkout systems and inventory management."
];

document.getElementById('generateFactBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFact').textContent = facts[randomIndex];
});
