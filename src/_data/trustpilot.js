const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async () => {
  try {
    console.log("Pulling review count from Trust Pilot from Arnold Clark & Rental");

    const acRes = await axios.get('https://uk.trustpilot.com/review/www.arnoldclark.com')
    const rentalRes = await axios.get('https://uk.trustpilot.com/review/www.arnoldclarkrental.com')

    const _ac = cheerio.load(acRes.data)
    const _rental = cheerio.load(rentalRes.data)

    return {
      ac_count: _ac('.headline__review-count').text().trim(),
      rental_count: _rental('.headline__review-count').text().trim()
    };
  } catch (error) {
    console.log("Failed to pull review from Trust Pilot, defaulting to fallbacks");

    return {
      ac_count: '55,000',
      rental_count:'4,000'
    };
  }
}
