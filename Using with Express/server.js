const express = require('express');
const app = express();
const port = 3000;

app.get('/viewer', (req, res) => {
  res.sendFile(__dirname + '/viewer.html');
});

app.get('/designer', (req, res) => {
    res.sendFile(__dirname + '/designer.html');
  });

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/SampleDashboard.mrt');
});

app.get('/stimulsoft.reports.js', (req, res) => {
  res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.reports.js");
});

app.get('/stimulsoft.dashboards.js', (req, res) => {
  res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.dashboards.js");
});

app.get('/stimulsoft.viewer.js', (req, res) => {
  res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.viewer.js");
});

app.get('/stimulsoft.designer.js', (req, res) => {
    res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.designer.js");
  });

app.get('/stimulsoft.blockly.editor.js', (req, res) => {
  res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.blockly.editor.js");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Navigate to http://localhost:${port}/viewer show Viewer`);
  console.log(`Navigate to http://localhost:${port}/designer show Designer`);
  console.log(`CTRL + C to shutdown`);
});