# vCard with NextJs and Tailwind CSS

That's one page website is built to store all data that you punt into a business card.
For example, if you're a remote worker you can create and print you own business card with a simple QR code with the link of this vCard.

## Getting Started

After cloned or downloaded the Github repository, first, install dependencies:

```bash
npm install
```

When you've finished then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Now you can using your foavourite code editor to customize your vCard.

## Setup the Website Languages

Open .env.local file and change the variable named LANGUAGES. By default it setted as 'en'. If you want to change them you can set a new (like 'es' for example) you need to clone the directory `data/en/` with the `stringTraslations.js` file in a new directory (in the example `data/es/stringTraslations.js`).

## Customize Informations

You can customize all of your vCard informations in the string translations file (if english selected into `data/en/stringTranslations.js`).

You can set also all of your personal links into array that will loop trough all elements.

## Customize Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To customize that, you can open file `components/Fonts.js` and change baseFont and titleFont constants.

## Sidebar
