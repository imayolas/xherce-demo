interface Context {
  writeMessage: (text: string) => Promise<void>;
  sleep: (ms: number) => Promise<void>;
  updateWaitingMessage: (text: string) => Promise<void>;
}

interface Message {
  role: string;
  content: string;
}

interface Body {
  model: string;
  messages: Message[];
  stream: true;
}

export const xherceLangchain = async (
  { writeMessage, updateWaitingMessage }: Context,
  body: Body
) => {
  console.log("The body is: ", body);

  await updateWaitingMessage("Working on it...");
  // Implement Langchain logic here
  console.log("Step 1 in the chain...");

  await updateWaitingMessage("Doing the RAG thing...");
  // Implement Langchain logic here
  console.log("Step 2 in the chain...");

  const promptResult =
    "The number of sales in UK for 2023 were 12 million pounds.";

  // Return the result to Joia
  await writeMessage(promptResult);
};
