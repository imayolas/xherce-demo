export namespace CompletionChoice {
  export interface Logprobs {
    text_offset?: Array<number>;

    token_logprobs?: Array<number>;

    tokens?: Array<string>;

    top_logprobs?: Array<Record<string, number>>;
  }
}

export interface CompletionChoice {
  /**
   * The reason the model stopped generating tokens. This will be `stop` if the model
   * hit a natural stop point or a provided stop sequence, `length` if the maximum
   * number of tokens specified in the request was reached, or `content_filter` if
   * content was omitted due to a flag from our content filters.
   */
  finish_reason?: "stop" | "length" | "content_filter";

  index: number;

  logprobs: CompletionChoice.Logprobs | null;

  text: string;
}

export interface Completion {
  /**
   * A unique identifier for the completion.
   */
  id: string;

  /**
   * The list of completion choices the model generated for the input prompt.
   */
  choices: Array<CompletionChoice>;

  /**
   * The Unix timestamp (in seconds) of when the completion was created.
   */
  created: number;

  /**
   * The model used for completion.
   */
  model: string;

  /**
   * The object type, which is always "text_completion"
   */
  object: "text_completion";
}

export const getOpenaiResponseBody = (
  text: string,
  isLast?: boolean
): Completion => {
  return {
    id: "chatcmpl-91cDlNqTjbUCHBeeb936tujXZUm4B",
    object: "text_completion",
    created: new Date().getTime() / 1000,
    model: "hercegpt",
    choices: [
      {
        index: 0,
        text,
        logprobs: null,
        finish_reason: isLast ? "stop" : undefined,
      },
    ],
  };
};
