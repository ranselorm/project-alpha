import { users } from "@/data";

export const createGenealogyTree = (users: any[]) => {
  if (users.length === 0) return null;

  // Root user
  let tree = { ...users[0], children: [] };

  const queue = [tree]; // BFS approach to assign children
  let index = 1;

  while (queue.length > 0 && index < users.length) {
    const parent = queue.shift(); // Get the next parent in line

    for (let i = 0; i < 3; i++) {
      // Each user invites 3 others
      if (index < users.length) {
        let child = { ...users[index], children: [] };
        parent.children.push(child);
        queue.push(child); // Add child to queue for further processing
        index++;
      }
    }
  }

  return tree;
};

// Generate the genealogy tree
export const genealogyTree = createGenealogyTree(users);
