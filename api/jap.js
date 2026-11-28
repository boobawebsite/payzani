export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let bodyStr = '';
    if (typeof req.body === 'string') {
      bodyStr = req.body;
    } else if (req.body && typeof req.body === 'object') {
      bodyStr = new URLSearchParams(req.body).toString();
    }

    const upstream = await fetch('https://justanotherpanel.com/api/v2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyStr
    });

    const data = await upstream.text();
    res.setHeader('Content-Type', 'application/json');
    return res.status(upstream.status).send(data);
  } catch (err) {
    return res.status(502).json({ error: 'Upstream gateway unreachable: ' + err.message });
  }
}
