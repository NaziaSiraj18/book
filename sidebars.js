// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar for the Physical AI and Humanoid Robotics book
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        'chapter1-basics-of-physical-ai',
        'chapter2-introduction-to-humanoid-robotics',
        'chapter3-sensorimotor-learning-in-robots',
      ],
    },
  ],
};

export default sidebars;
