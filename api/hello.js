
const { exec } = require("child_process");

export default function handler(req, res) {
  exec("python main.py", (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ 
      mensaje_node: "¡Servidor Node.js API activo!",
      resultado_python: stdout.trim()
    });
  });
}

