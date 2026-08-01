'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let totalPrice = days * RENT_PRICE;

  if (days >= LONG_TERM) {
    totalPrice -= LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalPrice -= SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
