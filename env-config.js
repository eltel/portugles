const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://portfoliosblogs.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://portfoliosblogs.herokuapp.com",
  "process.env.CLIENT_ID": "vVvNb09t7jvheby81mzhkYmvOugCDvCX"
};
