export async function getCategories() {
  const response = await fetch('https://opentdb.com/api_category.php');
  const categories = await response.json();
  return categories;
}

export async function getQuestions(options) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=3&category=${options.id}&difficulty=${options.diff}&type=multiple`
  );
  const questions = await response.json();
  return questions;
}
