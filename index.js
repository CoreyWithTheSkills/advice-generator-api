const AdviceMessage = document.getElementById('AdviceMessage');
const AdviceNumber = document.getElementById('adviceNumber');

const getData = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        
        if (response.ok) {
            const jsonResponse = await response.json();

            // Extract the slip's ID and advice message
            const adviceId = jsonResponse.slip.id;
            const adviceText = jsonResponse.slip.advice;

            // Update the elements with reversed order
            AdviceMessage.innerHTML = `"${adviceText}"`; // Show the advice message in <h1>
            AdviceNumber.innerHTML = `ADVICE #${adviceId}`; // Show the ID in <h3>

            // Dynamically adjust font size based on word count
            adjustFontSize(adviceText);
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
};

const adjustFontSize = (text) => {
    const words = text.split(' '); // Split the text by spaces to count words
    const wordCount = words.length;

    if (wordCount <= 10) {
        // Use the normal font size for less than 10 words
        AdviceMessage.style.fontSize = '1.4rem';
    } else if (wordCount <= 20) {
        // Reduce font size for 10-20 words
        AdviceMessage.style.fontSize = '1.2rem';
    } else {
        // Further reduce font size for more than 20 words
        AdviceMessage.style.fontSize = '1rem';
    }
};

getData();
