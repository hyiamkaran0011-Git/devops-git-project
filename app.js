echo 'function greet(name) { return "Hello, " + name; }' >> app.js
echo 'console.log(greet("DevOps"));' >> app.js
git add .
git commit -m "feat: add greet function"
git push -u origin feature/add-greeting
