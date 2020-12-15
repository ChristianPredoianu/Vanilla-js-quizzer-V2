export async function getCategories() {
  const response = await fetch('https://opentdb.com/api_category.php');
  const categories = await response.json();
  return categories;
}

export async function getQuestions(category, diff) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${diff}&type=multiple`
  );
  const questions = await response.json();
  return questions;
}
