# react-reverse-word - simple example of a React component that reverses the words in a sentence while preserving the punctuation and spaces as requested.

To reverse the words in a sentence while keeping the punctuation and spaces intact, you can follow these steps:

- Identify the words and delimiters separately.
- Reverse each word.
- Reconstruct the sentence by placing the reversed words back in their original positions, keeping the delimiters unchanged.

**Explanation:**
Regular Expression Matching: The regular expression /[a-zA-Z]+|[.,\s]/g is used to split the sentence into an array where words and delimiters are separate elements.

[a-zA-Z]+ matches sequences of letters (words).
[.,\s] matches a single delimiter character (period, comma, or space).
| acts as an OR operator to match either a word or a delimiter.
Reversing the Words: The map function is used to iterate over each element. If the element is a word (/^[a-zA-Z]+$/), it is reversed using split(''), reverse(), and join('').

Reconstructing the Sentence: The join('') method is used to combine the array back into a single string, maintaining the original structure of the sentence with the words reversed.

This function handles various combinations of words and delimiters, keeping the sentence's structure intact.

**Step 1:** Setting Up Your React Environment
If you don't have a React project set up, you can create one using the following command:

`npx create-react-app reverse-words-app`
`cd reverse-words-app`
`npm start`

**Step 2:** Create the React Component
inside the `src` folder, you can replace the content of `App.js` 

**Step 3:** Styling (Optional)
add some basic styling to `App.css`

**Step 4:** Running the Application

`npm start`


**How It Works:**
- Input Text Area: You enter a sentence in the text area.
- Reverse Words Button: When you click the "Reverse Words" button, the words in the sentence are reversed, keeping the punctuation and spaces intact.
- Output Display: The reversed sentence is displayed below the button.
