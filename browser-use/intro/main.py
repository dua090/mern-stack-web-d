import asyncio
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from browser_use import Agent  # Ensure this package is installed

# Load environment variables
load_dotenv()

# Initialize the model
llm = ChatOpenAI(
    model="gpt-4o",
    temperature=0.0,
)

# Define the task
task = "find details about Mehak kumar dua on linkedin and github and write it in a markdown format in a file named mehak_kumar_dua.md"

# Initialize the agent
agent = Agent(task=task, llm=llm)

async def main():
    await agent.run()

if __name__ == "__main__":  # ✅ Corrected name check
    asyncio.run(main())
