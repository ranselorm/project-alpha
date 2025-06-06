import React, { useState } from "react";
import { Segmented } from "antd";

type TabKey = "first" | "second" | "longtext";

// 1) Change DataMap so that each key maps to React.ReactNode (any JSX)
interface DataMap {
  [key: string]: React.ReactNode;
}

// 2) Provide arbitrary JSX for each tab
const dataForTabs: Record<TabKey, React.ReactNode> = {
  first: (
    <div>
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
        This tab holds longer text describing colors. Use paragraphs, sections,
        or any structure you like:
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
          <strong>Blue:</strong> Represents tranquility and stability. Sed nisi.
          Nulla quis sem at nibh elementum imperdiet.
        </p>
      </section>
      <div
        style={{ border: "1px solid #ddd", padding: "8px", marginTop: "16px" }}
      >
        <strong>Pro Tip:</strong> You can embed additional components or styling
        here.
      </div>
    </div>
  ),
};

const TrainAgent: React.FC = () => {
  const [activeKey, setActiveKey] = useState<TabKey>("first");

  // 4) Segmented options must match the keys in dataForTabs
  const options: { label: string; value: TabKey }[] = [
    { label: "123 (Fruits)", value: "first" },
    { label: "456 (Animals)", value: "second" },
    { label: "longtext-longtext-longtext (Colors)", value: "longtext" },
  ];

  return (
    <div>
      <p>Train Agent</p>
      <main className="container mx-auto">
        <div style={{ width: 400 }}>
          <Segmented
            options={options}
            block
            value={activeKey}
            onChange={(val) => setActiveKey(val as TabKey)}
          />

          <div style={{ marginTop: 16 }}>{dataForTabs[activeKey]}</div>
        </div>
      </main>
    </div>
  );
};

export default TrainAgent;
