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
const NONE_PRICE = 0.00
  
function displayCost() {
  	// initialize variables
  let sizePrice = 0
  let mixPrice1 = 0
  let mixPrice2 = 0
  let mixPrice3 = 0
  let snkPrice = 0
	// get age and day of the week
  let select1 = document.getElementById('size');
	let size = select1.options[select1.selectedIndex].value;
  
  let select2 = document.getElementById('mixins1');
  let mixins1 = select2.options[select2.selectedIndex].value;
  
  let select3 = document.getElementById('mixins2');
  let mixins2 = select3.options[select3.selectedIndex].value;
  

  let select4 = document.getElementById('mixins3');
  let mixins3 = select4.options[select4.selectedIndex].value;
  
  
  let snacks = parseInt(document.getElementById('snacks').value);
  
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
	else { 
		sizePrice = EXT_LRG_PRICE
	}


  // mixin 1 price 
   if (mixins1 == "Strawberries") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Bananas") {
		mixPrice1 = MIX_PRICE
	}
  else if (mixins1 == "Blueberries") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Cherries") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Crushed smarties") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Cake chunks") {
		mixPrice1 = MIX_PRICE
	}
  else if (mixins1 == "Whipped cream") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Sprinkles") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Oreo crumble") {
		mixPrice1 = MIX_PRICE
	}
	else if (mixins1 == "Cookie dough") {
		mixPrice1 = MIX_PRICE
  }
	else {
		mixPrice1 = 0
  }

  // mixin 2 price 
   if (mixins2 == "Strawberries") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Bananas") {
		mixPrice2 = MIX_PRICE
	}
  else if (mixins2 == "Blueberries") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Cherries") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Crushed smarties") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Cake chunks") {
		mixPrice2 = MIX_PRICE
	}
  else if (mixins2 == "Whipped cream") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Sprinkles") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Oreo crumble") {
		mixPrice2 = MIX_PRICE
	}
	else if (mixins2 == "Cookie dough") {
		mixPrice2 = MIX_PRICE
  }
	else  {
		mixPrice2 = 0
  }

  // mixin 3 price 
   if (mixins3 == "Strawberries") {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Bananas") {
		mixPrice3 = MIX_PRICE
	}
  else if (mixins3 == "Blueberries") {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Cherries") {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Crushed smarties") {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Cake chunks") {
		mixPrice3 = MIX_PRICE
	}
  else if (mixins3 == "Whipped cream")   {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Sprinkles") {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Oreo crumble") {
		mixPrice3 = MIX_PRICE
	}
	else if (mixins3 == "Cookie dough") {
		mixPrice3 = MIX_PRICE
  }
	else  {
		mixPrice3 = 0
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
	let subtotal = sizePrice + mixPrice1 + mixPrice2 + mixPrice3 +  snkPrice; 
  let tax = subtotal * HST;
  let total = subtotal + tax;
	
  	// display the results
  	document.getElementById('display-results').innerHTML  = "Subtotal is $" + subtotal.toFixed(2) + ".<br>HST is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}