import React, { useState } from "react";

type TabKey = "Train" | "second" | "longtext";

const TrainAgent: React.FC = () => {
  const [activeKey, setActiveKey] = useState<TabKey>("Train");

  // Define the content for each tab
  const dataForTabs: Record<TabKey, React.ReactNode> = {
    Train: (
      <div className="bg-red-400 w-full">
        <h2>Fruits List</h2>
        <p>
          Here are some example fruits you might want to train your agent with:
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ padding: "8px", border: "1px solid #ccc" }}>Apple</div>
          <div style={{ padding: "8px", border: "1px solid #ccc" }}>Banana</div>
          <div style={{ padding: "8px", border: "1px solid #ccc" }}>Cherry</div>
        </div>
      </div>
    ),
    second: (
      <section>
        <h2>Animal Examples</h2>
        <div>
          <p>You can pass any JSX—here’s a simple list of animals:</p>
          <ul>
            <li>🐶 Dog</li>
            <li>🐱 Cat</li>
            <li>🐰 Rabbit</li>
          </ul>
        </div>
      </section>
    ),
    longtext: (
      <div>
        <h2>Colors Section</h2>
        <p>
          This tab holds longer text describing colors. Use paragraphs,
          sections, or any structure you like:
        </p>
        <section style={{ marginTop: "12px" }}>
          <p>
            <strong>Red:</strong> The color of energy and passion. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            <strong>Green:</strong> Symbolizes growth and harmony. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p>
            <strong>Blue:</strong> Represents tranquility and stability. Sed
            nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </section>
      </div>
    ),
  };

  return (
    <div className="">
      {/* <p>Train Agent</p> */}
      <div className="flex space-x-8 mb-4 border-b border-gray-300">
        {["Train", "second", "longtext"].map((key) => (
          <div
            key={key}
            className={`cursor-pointer py-2 ${
              activeKey === key
                ? "border-b-2 border-main font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveKey(key as TabKey)}
          >
            {key === "Train" && "Train Agent"}
            {key === "second" && "Tab 2"}
            {key === "longtext" && "Tab 3"}
          </div>
        ))}
      </div>

      {/* Content for the active tab */}
      <div>{dataForTabs[activeKey]}</div>
    </div>
  );
};

export default TrainAgent;
