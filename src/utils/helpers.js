export function formatUser (user) {
  const { id, name, avatarURL, answers, questions } = user
  const answeredQuestions = answers ? Object.keys(answers).length : 0
  const createdQuestions = questions ? questions.length : 0

  return {
    name,
    id,
    avatar: avatarURL,
    answeredQuestions: answeredQuestions,
    createdQuestions: createdQuestions,
    totalQuestions: answeredQuestions + createdQuestions
  }
}