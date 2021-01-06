//Fetch categories from API
export async function getCategories() {
  const response = await fetch('https://opentdb.com/api_category.php');
  const categories = await response.json();
  return categories;
}

//Fetch quiz with user selected options
export async function getQuestions(options) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${options.id}&difficulty=${options.diff}&type=multiple&encode=base64`
  );
  const questions = await response.json();
  return questions;
}
