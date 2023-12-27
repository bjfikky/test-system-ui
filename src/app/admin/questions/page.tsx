import { ApiService } from "@/services/ApiService";

export default async function Question() {
  const apiService = new ApiService();

  const questions = await apiService.fetchData('questions');

  return (
    <main className="min-h-screen items-center justify-between p-24">
      <h1 className="text-xl mb-6">Questions</h1>
      <ul>
        {questions.map((question: Question) => (
          <li className="mb-6" key={question.id}>
            <strong>{question.question}</strong>
            <ul className="p-1">
              {question.options.map((option: Option) => (
                <li key={option.id}>{option.text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}