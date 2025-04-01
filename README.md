# Odin Memory Card Game

## Description
This is my implementation of the Memory Card project from the React Course of the Odin Project's Full-Stack Javascript curriculum.

This project ended up being fairly simple, using two components, one helper function, and one fetch call.

I lifted as much state as possible from the cards to the main game component and passed an array of unique ids to the card components to generate the pokemon cards. After each click I shuffled the ID array using a Fisher-Yates shuffle to ensure an even distribution of shuffle outcomes.

