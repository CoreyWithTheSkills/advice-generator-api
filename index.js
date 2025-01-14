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

            return;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
};

getData();
