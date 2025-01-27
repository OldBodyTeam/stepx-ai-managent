module.exports = {
  apps: [
    {
      name: "stepx-ai-management",
      script: "pnpm",
      args: "start",
      env: {
        PORT: 3001,
      },
      interpreter: "",
      exec_mode: "fork",
    },
  ],
};
