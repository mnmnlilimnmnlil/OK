import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Joi from 'joi';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// 서버 상태 확인 엔드포인트
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// 환경변수 로딩
const apiKey = process.env.OPENAI_API_KEY;
const port = process.env.PORT || 8787;

if (!apiKey) {
  console.error('❌ OPENAI_API_KEY environment variable is required');
  console.log('Please create a .env file in the server directory with:');
  console.log('OPENAI_API_KEY=your_api_key_here');
  process.exit(1);
}

console.log('✅ API Key: Loaded');
console.log('✅ Port:', port);

const client = new OpenAI({ 
  apiKey: apiKey
});

// 스키마 검증
const ChatRequestSchema = Joi.object({
  messages: Joi.array()
    .items(
      Joi.object({
        role: Joi.string().valid('system', 'user', 'assistant').required(),
        content: Joi.string().min(1).required()
      })
    )
    .min(1)
    .required(),
  model: Joi.string().default('gpt-4o-mini'),
  temperature: Joi.number().min(0).max(2).default(0.7)
});

// 기존 API (하위 호환성)
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 새로운 정교한 API
app.post('/api/ok-e', async (req, res) => {
  const { error, value } = ChatRequestSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ 
      error: 'Invalid request', 
      details: error.details 
    });
  }
  
  const { messages, model, temperature } = value;

  try {
    const response = await client.chat.completions.create({
      model,
      messages,
      temperature
    });

    return res.json({
      id: response.id,
      message: response.choices?.[0]?.message ?? null,
      usage: response.usage ?? null
    });
  } catch (err) {
    const error = err;
    return res
      .status(error?.status ?? 500)
      .json({ 
        error: error?.message ?? 'Server error', 
        code: error?.code 
      });
  }
});

app.listen(port, () => {
  console.log(`[ok-e] server running on http://localhost:${port}`);
});