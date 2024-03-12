interface Context {
  write: (text: string) => Promise<void>;
  sleep: (ms: number) => Promise<void>;
  uiUpdate: (text: string) => Promise<void>;
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
  { write, sleep, uiUpdate }: Context,
  body: Body
) => {
  await uiUpdate("Working on it...");
  console.log("First step in the langchain: Parsing the body");
  // Implement Langchain logic here
  await sleep(500); // Simulate loading time

  console.log("Retrieving the data from the vector DB...");
  await uiUpdate("Doing the RAG thing...");
  // Implement Langchain logic here
  await sleep(2000); // Simulate loading time

  const promptResult =
    "The number of sales in UK for 2023 were 12 million pounds.";

  // Return the result to Joia
  await write(promptResult);
};

const;
