//
// Created by: Madeleine Forgeron
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
 // constants
const HST = 0.13;
const MINI_PRICE = 4.83
const SML_PRICE = 5.98
const MED_PRICE = 6.76
const LRG_PRICE = 7.58
const EXT_LRG_PRICE = 8.99
const MIX_PRICE = 1.50
const SNK_PRICE = 5.00
  
function displayCost() {
  	// initialize variables
  let sizePrice = 0
  let mixPrice = 0
  let snkPrice = 0
	// get age and day of the week
	let size = select1.options[select1.selectedIndex].value;
  	let select1 = document.getElementById('size');
  let mixins1 = select2.options[select2.selectedIndex].value;
  	let select2 = document.getElementById('mixins1');
  let mixins2 = select3.options[select3.selectedIndex].value;
  	let select3 = document.getElementById('mixins2');
  let mixins3 = select4.options[select4.selectedIndex].value;
  	let select4 = document.getElementById('mixins3');
    let snacks = parseInt(document.getElementById('snacks').value)
      	//  Milkshake size price
  if (size == "Mini")  {
		sizePrice = MINI_PRICE 
	}
	else if (size == "Small") {
		sizePrice = SML_PRICE
	}
	else if (size == "Medium") {
		sizePrice = MED_PRICE
	}
  else  if (size == "Large")  {
		sizePrice = LRG_PRICE 
	}
	else (size == "Extra Large") {
		sizePrice = EXT_LRG_PRICE
	}

  // mixin 1 price 
   if (mixins == "Strawberries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Bananas") {
		mixPrice = MIX_PRICE
	}
  else if (mixins == "Blueberries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Cherries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Crushed smarties") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Cake chunks") {
		mixPrice = MIX_PRICE
	}
  else if (mixins == "Whipped cream") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Sprinkles") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Oreo crumble") {
		mixPrice = MIX_PRICE
	}
	else if (mixins == "Cookie dough") {
		mixPrice = MIX_PRICE
  }
	else {
		mixPrice = 0
	}

  // mixin 2 price 
   if (mixins2 == "Strawberries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Bananas") {
		mixPrice = MIX_PRICE
	}
  else if (mixins2 == "Blueberries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Cherries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Crushed smarties") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Cake chunks") {
		mixPrice = MIX_PRICE
	}
  else if (mixins2 == "Whipped cream") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Sprinkles") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Oreo crumble") {
		mixPrice = MIX_PRICE
	}
	else if (mixins2 == "Cookie dough") {
		mixPrice = MIX_PRICE
  }
	else  {
		mixPrice = 0
	}

  // mixin 3 price 
   if (mixins3 == "Strawberries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Bananas") {
		mixPrice = MIX_PRICE
	}
  else if (mixins3 == "Blueberries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Cherries") {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Crushed smarties") {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Cake chunks") {
		mixPrice = MIX_PRICE
	}
  else if (mixins3 == "Whipped cream")   {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Sprinkles") {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Oreo crumble") {
		mixPrice = MIX_PRICE
	}
	else if (mixins3 == "Cookie dough") {
		mixPrice = MIX_PRICE
  }
	else  {
		mixPrice = 0
	}
  

  // snack price 
   if (snacks == "Fries") {
		snkPrice = SNK_PRICE
	}
	else if (snacks == "Chips") {
		snkPrice = SNK_PRICE
	}
  else if (snacks == "Popcorn") {
		snkPrice = SNK_PRICE
	}
	else  {
		snkPrice = 0
	}


  
  // Totals
	let subtotal = sizePrice + mixPrice +  snkPrice 
  let tax = subtotal * HST
  let total = subtotal + tax
	
  	// display the results
  	document.getElementById('display-results').innerHTML  = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}

