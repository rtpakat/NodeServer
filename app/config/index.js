const app = {
  db: {
    host: "ds111103.mlab.com",
    port: 11103,
    name: "server",
    username: "admin",
    password: "rtpakat1234"
  },
  jwt: {
    APP_SECRET: "ILOVEYOU",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
